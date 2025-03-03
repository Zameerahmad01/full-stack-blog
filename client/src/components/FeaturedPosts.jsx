import { Link } from "react-router-dom";
import Image from "./Image";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { format } from "timeago.js";

const fetchPost = async () => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/posts?featured=true&sort=newest&limit=4`
  );
  return response.data;
};
const FeaturedPosts = () => {
  const { data, error, isPending } = useQuery({
    queryKey: ["featuredPost"],
    queryFn: () => fetchPost(),
  });

  console.log(data);
  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>something went wrong....</div>;
  }

  const posts = data?.posts;
  if (!posts || !posts.length) {
    return;
  }

  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* 1st post  */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4 ">
        {posts[0].img && (
          <Image
            src={posts[0].img}
            alt="featured1 post"
            className="rounded-3xl object-cover"
            width="895"
            height="600"
          />
        )}

        <div className="flex items-center gap-4">
          <h1 className=" lg:text-lg font-semibold">01.</h1>
          <Link className="text-blue-800 lg:text-lg font-semibold">
            {posts[0].category}
          </Link>
          <span className="text-gray-500">{format(posts[0].createdAt)}</span>
        </div>

        <Link className="text-xl lg:text-3xl font-semibold lg:font-semibold">
          {posts[0].title}
        </Link>
      </div>

      {/* others posts  */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {posts.slice(1).map((post, index) => (
          <div key={index} className="lg:h-1/3 flex gap-4">
            <div className="w-1/3 h-full aspect-video">
              <Image
                src={post.img}
                alt={`featured post ${index + 2}`}
                className="w-full h-full object-cover rounded-xl lg:rounded-3xl"
                width="298"
              />
            </div>
            <div className="w-2/3">
              <div className="flex items-center gap-4">
                <h1 className="font-semibold">{index + 2}.</h1>
                <Link className="text-blue-800 font-medium text-sm lg:text-base">
                  {post.category}
                </Link>
                <span className="text-gray-500 text-sm">
                  {format(post.createdAt)}
                </span>
              </div>

              <Link className="mt-4 text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-semibold">
                {post.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;
