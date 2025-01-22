import { Link } from "react-router-dom";
import Search from "./Search";

const MainCategories = () => {
  const links = [
    { to: "/posts", text: "All Posts" },
    { to: "/posts?cat=web-design", text: "Web Design" },
    { to: "/posts?cat=development", text: "Development" },
    { to: "/posts?cat=databases", text: "Databases" },
    { to: "/posts?cat=search-engine", text: "Search Engine" },
    { to: "/posts?cat=marketing", text: "Marketing" },
  ];

  return (
    <div className="mt-8 hidden md:flex items-center justify-center rounded-3xl lg:rounded-3xl gap-4 px-6 py-4 bg-white font-medium shadow-lg">
      {/* categories  */}
      <div className="flex-1 flex items-center justify-between flex-wrap gap-2">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.to}
            className={`px-4 py-2 rounded-full ${
              link.to === "/posts"
                ? "bg-blue-800 text-white"
                : "hover:bg-blue-50 text-gray-800"
            }`}
          >
            {link.text}
          </Link>
        ))}
      </div>

      <span className="text-xl font-medium">|</span>
      {/* search */}
      <Search />
    </div>
  );
};

export default MainCategories;
