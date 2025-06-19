import Post from "../models/post.model.js";
import User from "../models/user.model.js";
import ImageKit from "imagekit";

const getPosts = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 2;

  const query = {};

  const cat = req.query.cat;
  const author = req.query.author;
  const searchQuery = req.query.search;
  const sortQuery = req.query.sort;
  const featured = req.query.featured;

  if (cat) {
    query.category = cat;
  }

  if (author) {
    const user = await User.findOne({ userName: author }).select("_id");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    query.user = user._id;
  }

  if (searchQuery) {
    query.title = { $regex: searchQuery, $options: "i" };
  }

  let sortObj = { createdAt: -1 };
  if (sortQuery) {
    switch (sortQuery) {
      case "newest":
        sortObj = { createdAt: -1 };
        break;
      case "oldest":
        sortObj = { createdAt: 1 };
        break;
      case "mostPopular":
        sortObj = { visits: -1 };
        break;
      case "trending":
        sortObj = { visits: -1 };
        query.createdAt = {
          $gte: new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000),
        };
        break;

      default:
        break;
    }
  }

  if (featured) {
    query.isFeatured = true;
  }

  const posts = await Post.find(query)
    .populate("user", "userName")
    .sort(sortObj)
    .limit(limit)
    .skip((page - 1) * limit);

  const totalPosts = await Post.countDocuments();
  const hasMore = totalPosts > page * limit;
  res.status(200).json({ posts, hasMore });
};

const getPost = async (req, res) => {
  const postSlug = req.params.slug;

  const post = await Post.findOne({ slug: postSlug }).populate(
    "user",
    "email userName img"
  );
  res.status(200).json(post);
};

const createPost = async (req, res) => {
  const user = req.user;

  let slug = req.body.title.toLowerCase().replace(/ /g, "-");

  let existingPost = await Post.findOne({ slug });

  let counter = 2;

  while (existingPost) {
    slug = `${slug}-${counter}`;
    existingPost = await Post.findOne({ slug });
    counter++;
  }

  const post = await Post.create({ user: user._id, slug, ...req.body });
  res.status(200).json(post);
};

const deletePost = async (req, res) => {
  const user = req.user;
  const role = req.auth.sessionClaims.metadata.role || "user";

  if (role === "admin") {
    await Post.findOneAndDelete({ _id: req.params.id });
    return res.status(200).json({ message: "post has been deleted" });
  }

  const deletedPost = await Post.findOneAndDelete({
    _id: req.params.id,
    user: user._id,
  });

  if (!deletedPost) {
    return res
      .status(403)
      .json({ message: "Your not allowed to delete this post" });
  }
  res.status(200).json({ message: "post has been deleted" });
};

const featurePost = async (req, res) => {
  const user = req.user;
  const postId = req.body.postId;
  const role = req.auth.sessionClaims.metadata.role || "user";

  if (role !== "admin") {
    return res.status(400).json({ message: "You cannot feature posts!" });
  }

  const post = await Post.findById(postId);
  if (!post) {
    return res.status(404).json({ message: "Post not found!" });
  }

  const isFeatured = post.isFeatured;

  const updatedPost = await Post.findByIdAndUpdate(
    postId,
    { isFeatured: !isFeatured },
    { new: true }
  );
  res.status(200).json({ updatedPost, message: "post has been deleted" });
};

const imagekit = new ImageKit({
  urlEndpoint: "https://ik.imagekit.io/zameer",
  publicKey: "public_Rigjsxh1mcA8RDiXAVHavSvb2pY=",
  privateKey: "private_NtscjWhzATKeYXc1mAvkEoX8B3A=",
});

const uploadAuth = (req, res) => {
  const result = imagekit.getAuthenticationParameters();
  res.send(result);
};

export { getPosts, getPost, createPost, deletePost, uploadAuth, featurePost };
