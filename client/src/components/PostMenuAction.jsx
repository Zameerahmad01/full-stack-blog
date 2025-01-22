import Image from "./Image";

const PostMenuAction = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="mt-4 text-sm font-medium">Actions</h1>
      <div className="flex items-center gap-2 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          className="size-4"
        >
          <path d="M 6.0097656 2 C 4.9143111 2 4.0097656 2.9025988 4.0097656 3.9980469 L 4 22 L 12 19 L 20 22 L 20 20.556641 L 20 4 C 20 2.9069372 19.093063 2 18 2 L 6.0097656 2 z M 6.0097656 4 L 18 4 L 18 19.113281 L 12 16.863281 L 6.0019531 19.113281 L 6.0097656 4 z"></path>
        </svg>
        <span className="text-sm">Save this post</span>
      </div>
      <div className="flex items-center gap-2 cursor-pointer">
        <Image
          src="delete.svg"
          alt="delete"
          className="size-4"
          width="32"
          height="32"
        />
        <span className="text-sm">Delete this post</span>
      </div>
    </div>
  );
};

export default PostMenuAction;
