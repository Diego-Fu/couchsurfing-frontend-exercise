"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

interface PostData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const PostSkeleton: React.FC = () => {
  return (
    <div className="bg-gray-200 rounded-lg shadow-md p-4 w-full">
      <div className="animate-pulse flex items-center mb-4">
        <div className="w-10 h-10 bg-gray-300 rounded-full mr-2"></div>
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded w-2/3"></div>
        </div>
      </div>
      <div className="h-6 bg-gray-300 rounded w-3/4"></div>
      <div className="h-6 bg-gray-300 rounded w-2/3"></div>
      <div className="h-6 bg-gray-300 rounded w-1/2"></div>
      <div className="h-6 bg-gray-300 rounded w-3/4"></div>
    </div>
  );
};

const Post: React.FC<PostData> = ({ userId, id, title, body }) => {
  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(`/post/${id}`);
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md p-4"
      onClick={() => handleClick(id)}
      style={{ cursor: "pointer" }}
    >
      <div className="flex items-center mb-4">
        <Image
          src={`https://avatars.githubusercontent.com/u/${userId}?v=4`}
          alt="Avatar"
          className="w-10 h-10 rounded-full mr-2"
          width={40}
          height={40}
        />
      </div>
      <h2 className="text-xl font-semibold mt-2 text-black">{title}</h2>
      <p className="text-gray-500 mt-2">{body}</p>
    </div>
  );
};

export default Post;
