"use client";

import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const user = await authUserSession();

  return (
    <div className="mt-8 text-color-primary flex flex-col justify-center items-center">
      <h3 className="text-2xl font-bold">Hello {user.name}</h3>
      <Image src={user.image} width={200} height={200} alt="..." />
      <div className="flex flex-wrap gap-4 py-8">
        <Link
          href="/users/dashboard/collection"
          className="bg-color-accent px-4 py-2 text-color-primary font-bold text-xl transition-all hover:text-color-accent hover:bg-color-primary"
        >
          My Collection
        </Link>
        <Link
          href="/users/dashboard/comment"
          className="bg-color-accent px-4 py-2 text-color-primary font-bold text-xl transition-all hover:text-color-accent hover:bg-color-primary"
        >
          My Comment
        </Link>
      </div>
    </div>
  );
};

export default Page;
