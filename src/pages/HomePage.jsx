import { Link } from "react-router-dom";
import MainCategories from "../components/MainCategories";
import FeaturedPosts from "../components/FeaturedPosts";
import PostsList from "../components/PostsList";

const HomePage = () => {
  return (
    <section className="mt-4 flex flex-col gap-4">
      {/* bread crums */}
      <div className="flex gap-4 items-center font-semibold">
        <Link to="/">Home</Link>
        <span>-</span>
        <span className="text-blue-800">Blog and Articles</span>
      </div>

      {/* introduction */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col ">
          <h1 className=" text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h1>
          <p className=" mt-8 text-md md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
            inventore.
          </p>
        </div>
        <Link to="/write" className="hidden md:block relative">
          <svg
            viewBox="0 0 200 200"
            width={200}
            height={200}
            className="text-lg font-medium tracking-widest animate-spin [animation-duration:10s]"
          >
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%">
                Write your story.
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                Share your idea.
              </textPath>
            </text>
          </svg>
          <button className="bg-blue-800 rounded-full absolute inset-0 flex items-center justify-center w-20 h-20 m-auto">
            <svg
              width="50px"
              height="50px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-arrow-up-right"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </button>
        </Link>
      </div>

      {/* main categories  */}
      <MainCategories />

      {/* featured posts  */}
      <FeaturedPosts />

      {/* recent posts  */}
      <div className="">
        <h1 className="my-8 text-gray-600 text-2xl font-semibold">
          Recent Posts
        </h1>
        <PostsList />
      </div>
    </section>
  );
};

export default HomePage;
