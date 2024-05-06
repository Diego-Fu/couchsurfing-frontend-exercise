import { redirect } from "next/navigation";
import Image from "next/image";

interface UserProfileProps {
  userId: string;
}
async function getUser({ userId }: UserProfileProps) {
  const API_URL_USER = `https://jsonplaceholder.typicode.com/users/${userId}`;

  const user = await fetch(API_URL_USER);

  if (!user.ok) return undefined;

  return user.json();
}

const UserProfile = async ({ userId }: UserProfileProps) => {
  if (userId === undefined) redirect("/");

  const user = await getUser({ userId });

  if (!user) redirect("/");

  return (
    <div className="user-profile bg-gray-200 p-4 rounded-lg text-center">
      <div className="flex items-center justify-center">
        <div className="w-16 h-16 mr-4">
          <Image
            src={`https://avatars.githubusercontent.com/u/${userId}?v=4`}
            alt={user.name}
            className="rounded-full"
            width={50}
            height={50}
          />
        </div>
        <div>
          <h2 className="text-xl text-black font-bold">{user.name}</h2>
          <p className="text-black">@{user.username}</p>
        </div>
      </div>
      <p className="mt-4 text-black">{user.company.catchPhrase}</p>
    </div>
  );
};
export default UserProfile;
