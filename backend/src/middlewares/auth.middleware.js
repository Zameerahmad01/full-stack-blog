import User from "../models/user.model.js";
export const verifyAuth = async (req, res, next) => {
  try {
    const clerkUserId = req.auth?.userId;

    if (!clerkUserId) {
      return res
        .status(401)
        .json({ message: "Unauthorized - Missing authentication" });
    }

    const user = await User.findOne({ clerkId: clerkUserId });
    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found - Please complete registration" });
    }

    req.user = user;
    next();
  } catch (error) {
    next(error); // Pass errors to Express error handler
  }
};
