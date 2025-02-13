import Image from "./Image";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuth, useUser } from "@clerk/clerk-react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const PostMenuAction = ({ post }) => {
  const { user } = useUser();
  const { getToken } = useAuth();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    data: savedPosts,
    isPending,
    error,
  } = useQuery({
    queryKey: ["savedPosts"],
    queryFn: async () => {
      const token = await getToken();
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/users/savedPosts`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return res.data;
    },
  });

  const savePost = useMutation({
    mutationFn: async (postId) => {
      const token = await getToken();
      return axios.patch(
        `${import.meta.env.VITE_API_URL}/users/savePost`,
        { postId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: (res) => {
      toast.success(res.data.message);
      queryClient.invalidateQueries(["savedPosts"]); // Invalidate the query to refetch the data
    },

    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });

  const deletePost = useMutation({
    mutationFn: async (postId) => {
      const token = await getToken();
      return axios.delete(`${import.meta.env.VITE_API_URL}/posts/${postId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: (res) => {
      toast.success("post has been deleted");
      navigate("/");
    },

    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });

  const admin = user?.roles.includes("admin");
  const isSaved = savedPosts?.some((savedPost) => savedPost === post._id);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="mt-4 text-sm font-medium">Actions</h1>
      {isPending ? (
        "loading"
      ) : error ? (
        "saved fetch failed"
      ) : (
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => {
            if (!user) {
              navigate("/login");
            }
            savePost.mutate(post._id);
          }}
        >
          {isSaved ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="60"
              height="60"
              viewBox="0 0 30 30"
              className="size-4"
            >
              <path d="M23,27l-8-7l-8,7V5c0-1.105,0.895-2,2-2h12c1.105,0,2,0.895,2,2V27z"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 24 24"
              className="size-4"
            >
              <path d="M 6.0097656 2 C 4.9143111 2 4.0097656 2.9025988 4.0097656 3.9980469 L 4 22 L 12 19 L 20 22 L 20 20.556641 L 20 4 C 20 2.9069372 19.093063 2 18 2 L 6.0097656 2 z M 6.0097656 4 L 18 4 L 18 19.113281 L 12 16.863281 L 6.0019531 19.113281 L 6.0097656 4 z"></path>
            </svg>
          )}
          <span className="text-sm">
            {savePost.isPending ? "in progress" : "Save this post"}
          </span>
        </div>
      )}
      {user && post.user.userName === user?.username && (
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => deletePost.mutate(post._id)}
        >
          {post.user.userName ? (
            <Image
              src="delete.svg"
              alt="delete"
              className="size-4"
              width="32"
              height="32"
            />
          ) : null}
          <span className="text-sm">
            {deletePost.isPending ? "in progress" : "Delete this post"}
          </span>
        </div>
      )}
    </div>
  );
};

export default PostMenuAction;
