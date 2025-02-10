import { format } from "timeago.js";
import Image from "./Image";

const Comment = ({ comment }) => {
  return (
    <div className="w-full p-4 bg-gray-100 rounded-xl">
      <div className="flex gap-2 items-center">
        <img
          src={comment.user.img}
          alt="user"
          className="size-12 rounded-full object-cover"
          width="48"
        />
        <span className="font-medium">{comment.user.userName}</span>
        <span className="text-sm text-gray-500 ">
          {comment.createdAt === "sending..."
            ? "sending"
            : format(comment.createdAt)}
        </span>
      </div>
      <div className="mt-4">
        <p>{comment.description}</p>
      </div>
    </div>
  );
};

export default Comment;
