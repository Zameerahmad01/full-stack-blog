import { Link } from "react-router-dom";
import PostMenuAction from "./PostMenuAction";
import Search from "./Search";

const SideMenu = () => {
  return (
    <div className="px-4 md:sticky top-8 h-max">
      <div className="flex flex-col">
        <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
        <Search />
      </div>
      <div>
        <h1 className="mt-4 mb-4 text-sm font-medium">Filter</h1>
        <label
          htmlFor="checkbox"
          className="flex items-center gap-2 cursor-pointer "
        >
          <input type="checkbox" name="" id="" />
          Newest
        </label>
        <label
          htmlFor="checkbox"
          className="flex items-center gap-2 cursor-pointer "
        >
          <input type="checkbox" name="" id="" />
          Most Popular
        </label>
        <label
          htmlFor="checkbox"
          className="flex items-center gap-2 cursor-pointer"
        >
          <input type="checkbox" name="" id="" />
          Trending
        </label>
        <label
          htmlFor="checkbox"
          className="flex items-center gap-2 cursor-pointer"
        >
          <input type="checkbox" name="" id="" />
          Oldest
        </label>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="mt-4 text-sm font-medium">Categorios</h1>
        <div className="flex flex-col gap-2 text-sm">
          <Link className="underline" to="/posts">
            All
          </Link>
          <Link className="underline" to="/posts?cat=web-design">
            Web design
          </Link>
          <Link className="underline" to="/posts?cat=development">
            Development
          </Link>
          <Link className="underline" to="/posts?cat=databases">
            Databases
          </Link>
          <Link className="underline" to="/posts?cat=search-engine">
            Search Engine
          </Link>
          <Link className="underline" to="/posts?cat=marketing">
            Marketing
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
