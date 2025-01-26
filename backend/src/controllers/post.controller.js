import Post from "../models/post.model.js";

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
  const post = await Post.create(req.body);
  res.status(200).json(post);
};

const deletePost = async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.status(200).json("post has been deleted");
};

export { getPosts, getPost, createPost, deletePost };
