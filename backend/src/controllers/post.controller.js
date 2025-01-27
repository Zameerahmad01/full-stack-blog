import Post from "../models/post.model.js";
import User from "../models/user.model.js";

const getPosts = async (req, res) => {
  const posts = await Post.find();
  res.status(200).json(posts);
};

const getPost = async (req, res) => {
  const postSlug = req.params.slug;

  const post = await Post.findOne({ slug: postSlug });
  res.status(200).json(post);
};

const createPost = async (req, res) => {
  const user = req.user;

  const post = await Post.create({ user: user._id, ...req.body });
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
  res.status(200).json("post has been deleted");
};

export { getPosts, getPost, createPost, deletePost };
