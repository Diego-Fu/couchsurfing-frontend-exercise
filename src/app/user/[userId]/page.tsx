import UserProfile from "@/app/components/user";

type UserPageParams = {
  params: {
    userId: string;
  };
};

const User = async ({ params }: UserPageParams) => {
  return <UserProfile userId={params.userId} />;
};

export default User;
