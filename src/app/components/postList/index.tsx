import Post, { PostSkeleton } from "../post";

interface PostData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function getData() {
  const API_URL_POSTS = "https://jsonplaceholder.typicode.com/posts";

  const res = await fetch(API_URL_POSTS);

  if (!res.ok) return undefined;

  return res.json();
}

export const SkeletonPost: React.FC = () => {
  return (
    <>
      {[...Array(50)].map((_, index) => (
        <PostSkeleton key={index} />
      ))}
    </>
  );
};

const PostList: React.FC = async () => {
  const posts = await getData();

  return (
    <>
      {posts.map((post: PostData) => (
        <Post
          key={post.id}
          id={post.id}
          userId={post.userId}
          title={post.title}
          body={post.body}
        />
      ))}
    </>
  );
};

export default PostList;
