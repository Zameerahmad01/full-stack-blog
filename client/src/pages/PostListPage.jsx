import PostList from "../components/PostsList";
import SideMenu from "../components/SideMenu";
import { useState } from "react";

const PostListPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <h1 className="text-xl mb-8 font-medium">Development Blog</h1>
      <button
        className="md:hidden bg-blue-800 px-4 py-2 mb-4 rounded-xl text-white font-medium"
        onClick={() => setOpen(!open)}
      >
        {open ? "close" : "filter or search"}
      </button>
      <div className="flex gap-8 flex-col-reverse md:flex-row">
        <div>
          <PostList />
        </div>
        <div className={`${open ? "block" : "hidden"} md:block`}>
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default PostListPage;
