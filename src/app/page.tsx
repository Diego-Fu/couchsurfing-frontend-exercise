import { Suspense } from "react";
import PostList, { SkeletonPost } from "./components/postList";

const Home: React.FC = async () => {
  return (
    <div className="post-list">
      <Suspense fallback={<SkeletonPost />}>
        <PostList />
      </Suspense>
    </div>
  );
};

export default Home;
