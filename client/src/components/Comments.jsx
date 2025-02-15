import axios from "axios";
import Comment from "./Comment";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuth, useUser } from "@clerk/clerk-react";
import { toast } from "react-toastify";

const fetchComments = async (postId) => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/comment/${postId}`
  );
  return response.data;
};

const Comments = ({ postId }) => {
  const { getToken } = useAuth();
  const { user } = useUser();

  const { data, error, isPending } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => fetchComments(postId),
  });

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async ({ postId, newComment }) => {
      const token = await getToken();
      return axios.post(
        `${import.meta.env.VITE_API_URL}/comment/${postId}`,
        newComment,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["comments", postId]);
    },
    onError: () => {
      toast.error("Something went wrong...");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      description: formData.get("description"),
    };
    mutation.mutate({ postId, newComment: data });
  };

  // console.log(data);

  return (
    <div className="mt-8 flex flex-col gap-8 w-3/5">
      <h1 className="underline text-gray-500 font-medium text-xl">Comments</h1>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-between gap-8 w-full"
      >
        <textarea
          placeholder="Write a comment..."
          className="w-full p-4 rounded-xl"
          name="description"
        ></textarea>
        <button
          type="submit"
          className="px-6 py-4 bg-blue-800 font-medium text-white rounded-xl"
        >
          Send
        </button>
      </form>
      <div className="flex flex-col gap-4">
        {isPending ? (
          "loading..."
        ) : error ? (
          "Something went wrong..."
        ) : (
          <>
            {mutation.isPending && (
              <Comment
                comment={{
                  description: mutation.variables.newComment.description,
                  createdAt: "sending...",
                  user: {
                    img: user?.imageUrl,
                    userName: user?.username,
                  },
                }}
              />
            )}

            {data?.map((comment) => (
              <Comment key={comment._id} comment={comment} postId={postId} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Comments;
