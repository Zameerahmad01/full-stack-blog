import Post from "../models/post.model.js";
import User from "../models/user.model.js";
import ImageKit from "imagekit";

const getPosts = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 2;

  const posts = await Post.find()
    .populate("user", "userName")
    .sort({ createdAt: -1 })
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

const imagekit = new ImageKit({
  urlEndpoint: "https://ik.imagekit.io/zameer",
  publicKey: "public_Rigjsxh1mcA8RDiXAVHavSvb2pY=",
  privateKey: "private_NtscjWhzATKeYXc1mAvkEoX8B3A=",
});

const uploadAuth = (req, res) => {
  const result = imagekit.getAuthenticationParameters();
  res.send(result);
};
export { getPosts, getPost, createPost, deletePost, uploadAuth };
