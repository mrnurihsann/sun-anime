import { getAnimeResponse } from "@/libs/api-libs";
import VideoPlayer from "@/components/utilities/VideoPlayer";
import Image from "next/image";
import CollectionButton from "@/components/AnimeList/CollectionButton";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  const user = await authUserSession();
  const collection = await prisma.collection.findFirst({
    where: {
      user_email: user?.email,
      anime_mal_id: id,
    },
  });

  return (
    <>
      <div className="pt-4 px-4">
        <h1 className="text-color-primary text-3xl">
          {anime.data.title} - {anime.data.year}
        </h1>
        {!collection && user && (
          <CollectionButton anime_mal_id={id} user_email={user?.email} />
        )}
      </div>
      <div className="pt-4 px-4 flex gap-2 text-color-primary overflow-x-auto">
        {[
          { label: "PERINGKAT", value: anime.data.rank },
          { label: "SCORE", value: anime.data.score },
          { label: "RATING", value: anime.data.rating },
          { label: "DURATION", value: anime.data.duration },
          { label: "EPISODE", value: anime.data.episodes },
          { label: "POPULARITY", value: anime.data.popularity },
          { label: "MEMBERS", value: anime.data.members },
          { label: "FAVORITE", value: anime.data.favorites },
        ].map((item, index) => (
          <div
            key={index}
            className="w-36 flex flex-col justify-center items-center rounded border p-2 transition-all hover:border-color-accent hover:shadow-lg hover:shadow-color-primary/50"
          >
            <h3>{item.label}</h3>
            <p>{item.value}</p>
          </div>
        ))}
      </div>

      <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-color-primary">
        <Image
          src={anime.data.images.webp.image_url}
          alt={anime.data.images.jpg.image_url}
          width={350}
          height={350}
          className="w-full rounded object-cover"
        />
        <p className="text-justify text-2xl">{anime.data.synopsis}</p>
      </div>
      <div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </>
  );
};

export default Page;
