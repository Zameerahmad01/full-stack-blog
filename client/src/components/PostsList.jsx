import PostItem from "./PostItem";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`);
  return res.data;
};

const PostsList = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchPosts(),
  });

  if (isPending) {
    return <span> Loading...</span>;
  }

  if (error) {
    return "An error has occurred: " + error.message;
  }

  console.log(data);

  return (
    <div className="flex flex-col gap-8 mb-8 ">
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
    </div>
  );
};

export default PostsList;
