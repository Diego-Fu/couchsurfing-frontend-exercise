import Image from "next/image";
import { redirect } from "next/navigation";
import Link from "next/link";

type PostPageParams = {
  params: {
    postId: string;
  };
};

async function getPost({ postId }: { postId: string }) {
  const API_URL_POST = `https://jsonplaceholder.typicode.com/posts/${postId}`;

  const res = await fetch(API_URL_POST);

  if (!res.ok) return undefined;

  return await res.json();
}

export const SkeletonPost = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 animate-pulse">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-gray-300 mr-2"></div>
      </div>
      <div className="h-4 bg-gray-300 mb-2"></div>
      <div className="h-4 bg-gray-300 mb-2"></div>
      <div className="h-4 bg-gray-300 mb-2"></div>
      <div className="h-4 bg-gray-300 mb-2"></div>
      <div className="h-4 bg-gray-300 mb-2"></div>
      <div className="h-4 bg-gray-300 mb-2"></div>
    </div>
  );
};

const PostDetail = async ({ params }: PostPageParams) => {
  const post = await getPost({ postId: params.postId });

  if (!post) redirect("/");

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center mb-4">
        <Link href={`/user/${post.userId}`}>
          <Image
            src={`https://avatars.githubusercontent.com/u/${post.userId}?v=4`}
            alt="Avatar"
            className="w-10 h-10 rounded-full mr-2"
            width={40}
            height={40}
          />
        </Link>
      </div>
      <h2 className="text-xl font-semibold mt-2 text-black">{post.title}</h2>
      <p className="text-gray-500 mt-2">{post.body}</p>
    </div>
  );
};

export default PostDetail;
