import Image from "./Image";

const Comment = () => {
  return (
    <div className="w-full p-4 bg-gray-100 rounded-xl">
      <div className="flex gap-2 items-center">
        <Image
          src="userImg.jpeg"
          alt="user"
          className="size-12 rounded-full object-cover"
          width="48"
        />
        <span className="font-medium">John doe</span>
        <span className="text-sm text-gray-500 ">2 days ago</span>
      </div>
      <div className="mt-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae animi,
          quibusdam repellat ipsum ex aliquid aliquam quos eveniet, autem
          laborum quidem commodi itaque rem natus deserunt magnam in rerum
          explicabo?
        </p>
      </div>
    </div>
  );
};

export default Comment;
