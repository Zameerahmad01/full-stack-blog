import { useState } from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="w-full h-16 md:20 flex items-center justify-between ">
      {/* logo */}
      <Link to="/" className="flex items-center gap-4 font-bold text-2xl">
        <Image
          src="/logo.png"
          alt="logo"
          className="size-8"
          width="32"
          height="32"
        />

        <span>Blog</span>
      </Link>
      {/* mobile menu  */}
      <div className="md:hidden">
        <div
          className="text-xl"
          onClick={() => {
            setOpenMenu((prev) => !prev);
          }}
        >
          {openMenu ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="60"
              height="60"
              viewBox="0 0 24 24"
              className="size-8 cursor-pointer"
            >
              <path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="60"
              height="60"
              viewBox="0 0 30 30"
              className="size-8 cursor-pointer"
            >
              <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
            </svg>
          )}
        </div>

        <div
          className={`absolute  top-16 flex flex-col items-center justify-center w-full h-[calc(100vh-64px)] gap-8 xl:gap-12 font-semibold text-lg transition-all duration-300 ease-in-out bg-[#e6e6ff] ${
            openMenu ? "right-0" : "-right-full"
          }`}
        >
          <Link to="/">Home</Link>
          <Link to="/">Trending</Link>
          <Link to="/">Most Popular</Link>
          <Link to="/">About</Link>
          <SignedOut>
            <Link to="/Login">
              <button className="px-6 py-2 bg-blue-800 text-white rounded-3xl ">
                Login{" "}
              </button>
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
      {/* desktop menu  */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-semibold ">
        <Link to="/">Home</Link>
        <Link to="/">Trending</Link>
        <Link to="/">Most Popular</Link>
        <Link to="/">About</Link>

        <SignedOut>
          <Link to="/Login">
            <button className="px-6 py-2 bg-blue-800 text-white rounded-3xl ">
              Login{" "}
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
