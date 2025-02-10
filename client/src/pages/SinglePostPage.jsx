import { Link, useParams } from "react-router-dom";
import Image from "../components/Image";
import PostMenuAction from "../components/PostMenuAction";
import Search from "../components/Search";
import Comments from "../components/Comments";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { format } from "timeago.js";
import { Helmet } from "react-helmet";

const fetchPost = async (slug) => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/posts/${slug}`
  );
  return response.data;
};

const SinglePostPage = () => {
  const { slug } = useParams();

  const { data, error, isPending } = useQuery({
    queryKey: ["posts", slug],
    queryFn: () => fetchPost(slug),
  });

  // console.log(data);

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>something went wrong....</div>;
  }
  if (!data) {
    return <div>Post not found...</div>;
  }
  return (
    <section className="flex flex-col gap-8 mt-8 py-8">
      {/* details  */}
      <div className="flex gap-8">
        {/* content  */}
        <div className="flex flex-col gap-8 lg:w-3/5">
          <h1 className="font-semibold text-xl md:text-3xl xl:text-4xl">
            {" "}
            {data?.title}{" "}
          </h1>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-sm text-gray-400">Written By</span>
            <Link className="font-medium text-blue-800">
              {data?.user.userName}
            </Link>
            <span className="text-sm text-gray-400">on</span>
            <Link className="font-medium text-blue-800">{data.category}</Link>
            <span className="text-sm text-gray-400">
              {format(data?.createdAt)}
            </span>
          </div>
          <p className="text-gray-500 font-medium">{data?.description}</p>
        </div>

        {/* image  */}
        <div className="hidden lg:block lg:w-2/5">
          <Image
            src={data?.img}
            alt="post image"
            className="rounded-2xl h-full w-full object-center"
            width="600"
            height="400"
          />
        </div>
      </div>

      {/* content  */}
      <div className="flex flex-col md:flex-row gap-12 mt-8">
        {/* text  */}
        <div className="flex flex-col gap-6 text-justify lg:text-lg ">
          <div dangerouslySetInnerHTML={{ __html: data?.content }}></div>
          <Helmet>
            <title>{data?.title}</title>
            <meta name="description" content={data?.description} />
            <meta property="og:title" content={data?.title} />
            <meta property="og:description" content={data?.description} />
            <meta property="og:image" content={data?.img} />
            <meta property="og:url" content={window.location.href} />
          </Helmet>
          {/* <p>
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
          </p> */}
        </div>
        {/* detail  */}
        <div className="px-4 sticky top-8 h-max">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex gap-8 items-center">
              <img
                src={data?.user.img}
                alt="user image"
                className="w-12 h-12 rounded-full object-cover"
                width="48"
                height="48"
              />
              <h2 className="">{data?.user.userName}</h2>
            </div>
            <p className="text-sm">{data?.user.email}</p>
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
      <Comments postId={data?._id} />
    </section>
  );
};

export default SinglePostPage;
