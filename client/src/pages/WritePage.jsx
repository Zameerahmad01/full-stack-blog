import { useAuth, useUser } from "@clerk/clerk-react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { toast } from "react-toastify";
import Upload from "../components/Upload";

const WritePage = () => {
  const { isLoaded, isSignedIn } = useUser();
  const [values, setValues] = useState("");
  const { getToken } = useAuth();
  const [cover, setCover] = useState();
  const [progress, setProgress] = useState(0);
  const [img, setImg] = useState();
  const [video, setVideo] = useState();

  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async (newPost) => {
      const token = await getToken();
      return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: (res) => {
      toast.success("Post created successfully");
      navigate(`/${res.data.slug}`);
    },
  });

  useEffect(() => {
    img &&
      setValues(
        (prev) => prev + `<P><img src="${img.url}" alt="${img.name}" /></P>`
      );
    video &&
      setValues(
        (prev) => prev + `<iframe className="ql-video" src="${video.url}" />`
      );
  }, [img, video]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (isLoaded && !isSignedIn) {
    return <div>Access Denied</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const newPost = {
      img: cover.filePath,
      title: formData.get("title"),
      category: formData.get("category"),
      description: formData.get("description"),
      content: values,
    };

    console.log(newPost);
    mutation.mutate(newPost);
  };
  return (
    <div className="h-[calc(100vh-80px)] flex flex-col gap-6">
      <h1 className="text-xl font-medium">Create new post</h1>
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col flex-1 gap-4"
      >
        <Upload type="image" setProgress={setProgress} setData={setCover}>
          <div className="bg-white px-4 py-2 w-max rounded-xl">
            Select Image
          </div>
        </Upload>

        <input
          type="text"
          placeholder="My Awesome Story"
          className=" bg-transparent text-4xl outline-none font-semibold"
          name="title"
        />
        <div className="flex gap-4 items-center">
          <label htmlFor="cat">
            <h1 className="text-lg font-light">Category</h1>
          </label>
          <select name="category" id="cat" className="p-2 rounded-xl">
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="databases">Databases</option>
            <option value="search-engine">Search Engine</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <textarea
          name="description"
          id=""
          placeholder="write a short description"
          className="p-4 rounded-xl"
        ></textarea>
        <div className="flex flex-1">
          <div className="flex flex-col gap-2 mr-2">
            <Upload type="image" setProgress={setProgress} setData={setImg}>
              <div className="bg-white px-4 py-2 w-max rounded-xl">
                🖼️ Image
              </div>
            </Upload>
            <Upload type="video" setProgress={setProgress} setData={setVideo}>
              <div className="bg-white px-4 py-2 w-max rounded-xl">
                🎥 Video
              </div>
            </Upload>
          </div>
          <ReactQuill
            theme="snow"
            className="flex-1 bg-white rounded-xl"
            value={values}
            onChange={setValues}
            readOnly={0 < progress && progress < 100}
          />
        </div>
        <button
          type="submit"
          disabled={mutation.isPending || (0 < progress && progress < 100)}
          className="text-white bg-blue-800 w-36 py-2 mt-8 rounded-xl disabled:bg-blue-400 disabled:cursor-not-allowed"
        >
          {mutation.isPending ? "Saving..." : "Save"}
        </button>
        {progress > 0 && progress < 100 && <span>uploading {progress}%</span>}
        {mutation.isError && <span>{mutation.error.message}</span>}
      </form>
    </div>
  );
};

export default WritePage;
