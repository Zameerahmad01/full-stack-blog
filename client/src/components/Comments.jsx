import Comment from "./Comment";

const Comments = () => {
  return (
    <div className="mt-8 flex flex-col gap-8 w-3/5">
      <h1 className="underline text-gray-500 font-medium text-xl">Comments</h1>
      <div className="flex items-center justify-between gap-8 w-full">
        <textarea
          placeholder="Write a comment..."
          className="w-full p-4 rounded-xl"
        ></textarea>
        <button className="px-6 py-4 bg-blue-800 font-medium text-white rounded-xl">
          Send
        </button>
      </div>
      <div className="flex flex-col gap-4">
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </div>
  );
};

export default Comments;
