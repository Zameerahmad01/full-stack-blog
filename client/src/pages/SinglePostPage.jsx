import { Link } from "react-router-dom";
import Image from "../components/Image";
import PostMenuAction from "../components/PostMenuAction";
import Search from "../components/Search";
import Comments from "../components/Comments";

const SinglePostPage = () => {
  return (
    <section className="flex flex-col gap-8 mt-8">
      {/* details  */}
      <div className="flex gap-8">
        {/* content  */}
        <div className="flex flex-col gap-8 lg:w-3/5">
          <h1
            to="/test"
            className="font-semibold text-xl md:text-3xl xl:text-4xl"
          >
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
            reprehenderit molestiae odit doloribus.
          </h1>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-sm text-gray-400">Written By</span>
            <Link className="font-medium text-blue-800">John Doe</Link>
            <span className="text-sm text-gray-400">on</span>
            <Link className="font-medium text-blue-800">Web Design</Link>
            <span className="text-sm text-gray-400">2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A animi
            accusamus eius ad deserunt doloremque esse nesciunt nostrum. Ducimus
            fugiat, dolor excepturi ratione quos commodi nulla perferendis alias
            quia est.
          </p>
        </div>

        {/* image  */}
        <div className="hidden lg:block lg:w-2/5">
          <Image
            src="postImg.jpeg"
            alt="post image"
            className="rounded-2xl h-full w-full object-cover"
            width="600"
          />
        </div>
      </div>

      {/* content  */}
      <div className="flex flex-col md:flex-row gap-12 mt-8">
        {/* text  */}
        <div className="flex flex-col gap-6 text-justify lg:text-lg ">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
            odit cupiditate, recusandae neque adipisci porro nihil distinctio
            doloremque accusantium aut accusamus amet cumque sint, tempore atque
            consequuntur! Unde, dignissimos minus?Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Eveniet corrupti hic ex debitis quam
            accusamus, tenetur illum unde doloribus blanditiis nisi aliquid
            libero eum deleniti repellendus quis obcaecati maiores illo. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Ad velit animi
            soluta magnam, autem provident, sint nihil reiciendis mollitia
            sapiente hic officia blanditiis quam possimus excepturi quasi vel
            sequi tenetur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
            odit cupiditate, recusandae neque adipisci porro nihil distinctio
            doloremque accusantium aut accusamus amet cumque sint, tempore atque
            consequuntur! Unde, dignissimos minus?Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Eveniet corrupti hic ex debitis quam
            accusamus, tenetur illum unde doloribus blanditiis nisi aliquid
            libero eum deleniti repellendus quis obcaecati maiores illo. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Ad velit animi
            soluta magnam, autem provident, sint nihil reiciendis mollitia
            sapiente hic officia blanditiis quam possimus excepturi quasi vel
            sequi tenetur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
            odit cupiditate, recusandae neque adipisci porro nihil distinctio
            doloremque accusantium aut accusamus amet cumque sint, tempore atque
            consequuntur! Unde, dignissimos minus?Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Eveniet corrupti hic ex debitis quam
            accusamus, tenetur illum unde doloribus blanditiis nisi aliquid
            libero eum deleniti repellendus quis obcaecati maiores illo. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Ad velit animi
            soluta magnam, autem provident, sint nihil reiciendis mollitia
            sapiente hic officia blanditiis quam possimus excepturi quasi vel
            sequi tenetur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
            odit cupiditate, recusandae neque adipisci porro nihil distinctio
            doloremque accusantium aut accusamus amet cumque sint, tempore atque
            consequuntur! Unde, dignissimos minus?Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Eveniet corrupti hic ex debitis quam
            accusamus, tenetur illum unde doloribus blanditiis nisi aliquid
            libero eum deleniti repellendus quis obcaecati maiores illo. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Ad velit animi
            soluta magnam, autem provident, sint nihil reiciendis mollitia
            sapiente hic officia blanditiis quam possimus excepturi quasi vel
            sequi tenetur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
            odit cupiditate, recusandae neque adipisci porro nihil distinctio
            doloremque accusantium aut accusamus amet cumque sint, tempore atque
            consequuntur! Unde, dignissimos minus?Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Eveniet corrupti hic ex debitis quam
            accusamus, tenetur illum unde doloribus blanditiis nisi aliquid
            libero eum deleniti repellendus quis obcaecati maiores illo. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Ad velit animi
            soluta magnam, autem provident, sint nihil reiciendis mollitia
            sapiente hic officia blanditiis quam possimus excepturi quasi vel
            sequi tenetur.
          </p>
        </div>
        {/* detail  */}
        <div className="px-4 sticky top-8 h-max">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex gap-8 items-center">
              <Image
                src="userImg.jpeg"
                alt="user image"
                className="w-12 h-12 rounded-full object-cover"
                width="48"
                height="48"
              />
              <h2 className="">Jhon Doe</h2>
            </div>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur.</p>
            <div className="flex items-center gap-2">
              <Link>
                <Image
                  src="facebook.svg"
                  alt="facebook"
                  className="size-8"
                  width="32"
                  height="32"
                />
              </Link>
              <Link>
                <Image
                  src="instagram.svg"
                  alt="instagram"
                  className="size-8"
                  width="32"
                  height="32"
                />
              </Link>
            </div>
          </div>
          <PostMenuAction />
          <div className="flex flex-col gap-4">
            <h1 className="mt-4 text-sm font-medium">Categorios</h1>
            <div className="flex flex-col gap-2 text-sm">
              <Link className="underline">Web design</Link>
              <Link className="underline">Development</Link>
              <Link className="underline">Databases</Link>
              <Link className="underline">Search Engine</Link>
              <Link className="underline">Marketing</Link>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
            <Search />
          </div>
        </div>
      </div>
      <Comments />
    </section>
  );
};

export default SinglePostPage;
