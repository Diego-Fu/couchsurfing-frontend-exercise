import React from "react";
import Link from "next/link";
import Image from "next/image";

async function getUser({ userId }: { userId: number }) {
  const API_URL_USER = `https://jsonplaceholder.typicode.com/users/${userId}`;

  const user = await fetch(API_URL_USER);

  if (!user.ok) return undefined;

  return user.json();
}

const Header: React.FC = async () => {
  const USER_ID = 7; // add actual logic to get user id with some proper auth
  const user = await getUser({ userId: USER_ID });

  const { name, username } = user;

  return (
    <header className="bg-gray-800">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <Link href="/">
          <div className="text-white text-2xl">Couchsurfing</div>
        </Link>

        <Link href={`/user/${USER_ID}`} className="flex items-center">
          <Image
            src={`https://avatars.githubusercontent.com/u/${USER_ID}?v=4`}
            alt={user.name}
            className="rounded-full mr-2"
            width={50}
            height={50}
          />
          <p className="text-white">{user.username}</p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
