import User from "../models/user.model.js";

const savedPosts = async (req, res) => {
  const user = req.user;
  const loggedInUser = await User.findById(user._id).populate("savedPosts");

  res.json(loggedInUser.savedPosts);
};

const savePost = async (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  if (!req.body.postId) {
    return res.status(400).json({ message: "Post ID is required" });
  }
  const user = req.user;
  const { postId } = req.body;

  const existingUser = await User.findById(user._id);
  if (existingUser.savedPosts.includes(postId)) {
    const updatedUser = await User.findByIdAndUpdate(
      user._id,
      { $pull: { savedPosts: postId } },
      { new: true }
    );
    return res.status(200).json({ updatedUser, message: "Post unsaved" });
  }
  const updatedUser = await User.findByIdAndUpdate(
    user._id,
    { $push: { savedPosts: postId } },
    { new: true }
  );

  return res.json({ updatedUser, message: "Post saved" });
};

export { savedPosts, savePost };
