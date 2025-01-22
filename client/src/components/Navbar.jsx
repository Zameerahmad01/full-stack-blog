import { useState } from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

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
          {openMenu ? "x" : "o"}
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
