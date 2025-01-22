import { useUser } from "@clerk/clerk-react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
const WritePage = () => {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (isLoaded && !isSignedIn) {
    return <div>Access Denied</div>;
  }
  return (
    <div className="h-[calc(100vh-80px)] flex flex-col gap-6">
      <h1 className="text-xl font-medium">Create new post</h1>
      <form action="" className="flex flex-col flex-1 gap-4">
        <button className="bg-white px-4 py-2 w-max rounded-xl">
          Select Image
        </button>
        <input
          type="text"
          placeholder="My Awesome Story"
          className=" bg-transparent text-4xl outline-none font-semibold"
        />
        <div className="flex gap-4 items-center">
          <label htmlFor="cat">
            <h1 className="text-lg font-light">Category</h1>
          </label>
          <select name="cat" id="cat" className="p-2 rounded-xl">
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="databases">Databases</option>
            <option value="search-engine">Search Engine</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <textarea
          name=""
          id=""
          placeholder="write a short description"
          className="p-4 rounded-xl"
        ></textarea>
        <ReactQuill theme="snow" className="flex-1 bg-white rounded-xl" />
        <button className="text-white bg-blue-800 w-36 py-2 mt-8 rounded-xl">
          Send
        </button>
      </form>
    </div>
  );
};

export default WritePage;
