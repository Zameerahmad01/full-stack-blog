import Comment from "../models/comment.model.js";

const getComments = async (req, res) => {
  const postId = req.params.postId;
  const comments = await Comment.find({ post: postId })
    .populate("user", "userName img ")
    .sort({ createdAt: -1 });

  res.status(200).json(comments);
};

const createComment = async (req, res) => {
  const user = req.user;
  const postId = req.params.postId;
  const comment = await Comment.create({
    user: user._id,
    post: postId,
    ...req.body,
  });

  res.status(200).json(comment);
};

const deleteComment = async (req, res) => {
  const user = req.user;
  const comment = await Comment.findOneAndDelete({
    _id: req.params.id,
    user: user._id,
  });
  if (!comment) {
    return res
      .status(403)
      .json({ message: "You are not allowed to delete this comment" });
  }
  res.status(200).json(comment);
};
export { getComments, createComment, deleteComment };
