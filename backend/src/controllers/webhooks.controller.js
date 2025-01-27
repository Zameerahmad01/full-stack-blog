import { Webhook } from "svix";
import User from "../models/user.model.js";

const clerkWebhook = async (req, res) => {
  const webhook_secret = process.env.CLERK_WEBHOOK_SECRET;

  if (!webhook_secret) {
    throw new Error("Clerk webhook secret is not defined");
  }

  const payload = req.body;
  const headers = req.headers;

  const wh = new Webhook(webhook_secret);
  let evt;
  try {
    evt = wh.verify(payload, headers);
  } catch (err) {
    res.status(400).json({
      message: "webhook verification failed",
    });
  }

  //   console.log(evt.data);
  if (evt.type === "user.created") {
    const user = await User.create({
      clerkId: evt.data.id,
      userName: evt.data.username || evt.data.email_addresses[0].email_address,
      email: evt.data.email_addresses[0].email_address,
      img: evt.data.profile_img_url,
    });
  } else if (evt.type === "user.updated") {
    const user = await User.findOneAndUpdate(
      { clerkId: evt.data.id },
      {
        userName:
          evt.data.username || evt.data.email_addresses[0].email_address,
        email: evt.data.email_addresses[0].email_address,
        img: evt.data.profile_image_url,
      },
      { new: true }
    );
  } else if (evt.type === "user.deleted") {
    await User.findOneAndDelete({ clerkId: evt.data.id });
  }

  return res.status(200).json({
    message: "webhook received",
  });
};

export { clerkWebhook };
