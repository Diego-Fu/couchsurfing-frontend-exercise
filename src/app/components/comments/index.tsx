type PostPageParams = {
  params: {
    postId: string;
  };
};

async function getPost({ postId }: { postId: string }) {
  const API_URL_POST_COMMENTS = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;

  const comments = await fetch(API_URL_POST_COMMENTS);

  if (!comments.ok) return undefined;

  return comments.json();
}

export const SkeletonComments = () => {
  return (
    <div className="mt-4 animate-pulse">
      <h3 className="text-lg font-semibold mb-2">Comments:</h3>
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="h-4 bg-gray-300 mb-2"></div>
        <div className="h-4 bg-gray-300 mb-2"></div>
      </div>
    </div>
  );
};

const CommentsBox = async ({ params }: PostPageParams) => {
  const comments = await getPost({ postId: params.postId });

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Comments:</h3>
      {comments.map((comment: any) => (
        <div key={comment.id} className="mb-4">
          <p className="text-gray-600 font-medium">{comment.name}</p>
          <p className="text-gray-500">{comment.body}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentsBox;
