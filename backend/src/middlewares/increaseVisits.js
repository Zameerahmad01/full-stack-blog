import Post from "../models/post.model.js";

const increaseVisits = async (req, res, next) => {
  const slug = req.params.slug;

  await Post.findOneAndUpdate({ slug }, { $inc: { visits: 1 } });

  next();
};

export default increaseVisits;
