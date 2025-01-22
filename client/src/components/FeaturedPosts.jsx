import { Link } from "react-router-dom";
import Image from "./Image";

const FeaturedPosts = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* 1st post  */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4 ">
        <Image
          src="featured1.jpeg"
          alt="featured1 post"
          className="rounded-3xl object-cover"
          width="895"
        />

        <div className="flex items-center gap-4">
          <h1 className=" lg:text-lg font-semibold">01.</h1>
          <Link className="text-blue-800 lg:text-lg font-semibold">
            Web-Design
          </Link>
          <span className="text-gray-500">2 days ago</span>
        </div>

        <Link className="text-xl lg:text-3xl font-semibold lg:font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Link>
      </div>

      {/* others posts  */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <div className="lg:h-1/3 flex  gap-4">
          <div className="w-1/3 h-full aspect-video">
            <Image
              src="featured2.jpeg"
              alt="featured post 2"
              className="w-full h-full object-cover rounded-xl lg:rounded-3xl"
              width="298"
            />
          </div>
          <div className="w-2/3">
            <div className="flex items-center gap-4">
              <h1 className=" font-semibold">02.</h1>
              <Link className="text-blue-800 font-medium text-sm lg:text-base">
                Web-Design
              </Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>

            <Link className="mt-4 text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>

        <div className="lg:h-1/3 flex  gap-4">
          <div className="w-1/3 h-full aspect-video">
            <Image
              src="featured3.jpeg"
              alt="featured post 2"
              className="w-full h-full object-cover rounded-xl lg:rounded-3xl"
              width="298"
            />
          </div>
          <div className="w-2/3">
            <div className="flex items-center gap-4">
              <h1 className=" font-semibold">03.</h1>
              <Link className="text-blue-800 font-medium text-sm lg:text-base">
                Web-Design
              </Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>

            <Link className="mt-4 text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>

        <div className="lg:h-1/3 flex  gap-4">
          <div className="w-1/3 h-full  aspect-video">
            <Image
              src="featured4.jpeg"
              alt="featured post 2"
              className="w-full h-full object-cover rounded-xl lg:rounded-3xl"
              width="298"
            />
          </div>
          <div className="w-2/3">
            <div className="flex items-center gap-4">
              <h1 className=" font-semibold">04.</h1>
              <Link className="text-blue-800 font-medium text-sm lg:text-base">
                Web-Design
              </Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>

            <Link className="mt-4 text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
