import { Link } from "react-router-dom";
import Image from "./Image";

const PostItem = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="md:hidden lg:block lg:w-1/3">
        <Image
          src="postImg.jpeg"
          className="rounded-2xl w-full object-cover"
          width="735"
        />
      </div>

      {/* content  */}
      <div className="flex flex-col gap-4 lg:w-2/3">
        <Link to="/test" className="font-semibold text-2xl md:text-4xl">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
          reprehenderit molestiae odit doloribus.
        </Link>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-sm text-gray-400">Written By</span>
          <Link className="font-medium text-blue-800">John Doe</Link>
          <span className="text-sm text-gray-400">on</span>
          <Link className="font-medium text-blue-800">Web Design</Link>
          <span className="text-sm text-gray-400">2 days ago</span>
        </div>
        <p className="text-gray-600 text-sm font-medium">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A animi
          accusamus eius ad deserunt doloremque esse nesciunt nostrum. Ducimus
          fugiat, dolor excepturi ratione quos commodi nulla perferendis alias
          quia est.
        </p>
        <Link to="/test" className="text-blue-800 underline text-sm">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostItem;
