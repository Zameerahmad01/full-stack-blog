import { format } from "timeago.js";
import Image from "./Image";
import { useAuth, useUser } from "@clerk/clerk-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";

const Comment = ({ comment, postId }) => {
  const { user } = useUser();
  const { getToken } = useAuth();

  const queryClient = useQueryClient();

  const deleteComment = useMutation({
    mutationFn: async (commentId) => {
      const token = await getToken();
      return axios.delete(
        `${import.meta.env.VITE_API_URL}/comment/${commentId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: () => {
      toast.success("Comment has been deleted");
      queryClient.invalidateQueries(["comments", postId]);
    },

    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });

  const isAdmin = user?.publicMetadata.role === "admin" || false;

  return (
    <div className="w-full p-4 bg-gray-100 rounded-xl">
      <div className="flex gap-2 items-center justify-between">
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
        {user && (comment.user.userName === user?.username || isAdmin) && (
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => deleteComment.mutate(comment._id)}
          >
            <span className="text-sm text-red-600">
              {deleteComment.isPending ? "Deleting" : "Delete"}
            </span>
          </div>
        )}
      </div>
      <div className="mt-4">
        <p>{comment.description}</p>
      </div>
    </div>
  );
};

export default Comment;
