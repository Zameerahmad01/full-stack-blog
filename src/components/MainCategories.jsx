import { Link } from "react-router-dom";

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
      <div className="bg-gray-100 rounded-xl flex items-center p-2 gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30"
          height="30"
          viewBox="0 0 50 50"
        >
          <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
        </svg>
        <input
          type="text"
          name=""
          id=""
          placeholder="Search posts..."
          className="bg-transparent focus:outline-none"
        />
      </div>
    </div>
  );
};

export default MainCategories;
