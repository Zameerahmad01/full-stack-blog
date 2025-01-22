import mongoose from "mongoose";

const ConnectDB = async () => {
  return await mongoose.connect(`${process.env.MONGO_URI}`);
};

export { ConnectDB };
