import { Link } from "react-router-dom";
import Image from "./Image";
import { format } from "timeago.js";

const PostItem = ({ post }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 mb-8">
      <div className="md:hidden lg:block lg:w-1/3">
        <Image
          src={post.img}
          className="rounded-2xl w-full h-80 object-center"
          width="735"
        />
      </div>

      {/* content  */}
      <div className="flex flex-col gap-4 lg:w-2/3">
        <Link
          to={`/${post.slug}`}
          className="font-semibold text-2xl md:text-3xl"
        >
          {" "}
          {post.title}{" "}
        </Link>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-sm text-gray-400">Written By</span>
          <Link
            to={`/posts?author=${post.user.userName}`}
            className="font-medium text-blue-800"
          >
            {post.user.userName}
          </Link>
          <span className="text-sm text-gray-400">on</span>
          <Link
            to={`/posts?cat=${post.category}`}
            className="font-medium text-blue-800"
          >
            {post.category}
          </Link>
          <span className="text-sm text-gray-400">
            {format(post.createdAt)}
          </span>
        </div>
        <p
          className="text-gray-600 text-lg
         font-medium"
        >
          {post.description}
        </p>
        <Link to={`/${post.slug}`} className="text-blue-800 underline text-sm">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostItem;
