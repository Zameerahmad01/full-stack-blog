import { useState } from "react";
import Image from "./Image";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="w-full h-16 md:20 flex items-center justify-between">
      {/* logo */}
      <div className="flex items-center gap-4 font-bold text-2xl">
        <div>
          <Image
            src="/logo.png"
            alt="logo"
            className="size-8"
            width="32"
            height="32"
          />
        </div>
        <span>Blog</span>
      </div>
      {/* mobile menu  */}
      <div className="md:hidden">
        <div
          className="text-xl"
          onClick={() => {
            setOpenMenu((prev) => !prev);
          }}
        >
          {openMenu ? "x" : "o"}
        </div>

        <div
          className={`absolute top-16 flex flex-col items-center justify-center w-full h-screen gap-8 xl:gap-12 font-medium text-lg transition-all duration-300 ease-in-out bg-[#e6e6ff] ${
            openMenu ? "right-0" : "-right-full"
          }`}
        >
          <a href="/">Home</a>
          <a href="/">Trending</a>
          <a href="/">Most Popular</a>
          <a href="/">About</a>
          <a href="/">
            <button className="px-6 py-2 bg-blue-800 text-white rounded-3xl ">
              Login{" "}
            </button>
          </a>
        </div>
      </div>
      {/* desktop menu  */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium ">
        <a href="/">Home</a>
        <a href="/">Trending</a>
        <a href="/">Most Popular</a>
        <a href="/">About</a>
        <a href="/">
          <button className="px-6 py-2 bg-blue-800 text-white rounded-3xl ">
            Login{" "}
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
