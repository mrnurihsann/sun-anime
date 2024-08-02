"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Dashboard/Header";
import prisma from "@/libs/prisma";
import { authUserSession } from "@/libs/auth-libs";

const Page = async () => {
  const user = await authUserSession();
  const Collection = await prisma.collection.findMany({
    where: { user_emal: user.email },
  });

  return (
    <section className="mt-4 w-full px-4">
      <Header title={"My Collection"} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Collection.map((collect, index) => {
          return (
            <Link
              key={index}
              href={`/anime/${collect.anime_mal_id}`}
              className="border-2 border-color-accent relative"
            >
              <Image
                src=""
                alt=""
                width={350}
                height={350}
                className="w-full"
              />
              <div className="absolute bottom-0 w-full bg-color-accent h-16 flex justify-center items-center">
                <h3 className="text-xl text-center">Judul Anime</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Page;
