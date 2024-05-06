import { Suspense } from "react";

import PostDetail, { SkeletonPost } from "@/app/components/postDetail";
import CommentsBox, { SkeletonComments } from "@/app/components/comments";

type PostPageParams = {
  params: {
    postId: string;
  };
};

const PostPage = async ({ params }: PostPageParams) => {
  return (
    <div className="post-wrapper">
      <Suspense fallback={<SkeletonPost />}>
        <PostDetail params={{postId: params.postId}} />
      </Suspense>

      <Suspense fallback={<SkeletonComments />}>
        <CommentsBox params={{postId: params.postId}}  />
      </Suspense>
    </div>
  );
};

export default PostPage;
