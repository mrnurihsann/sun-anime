import Image from "next/image";
import Link from "next/link";

const Recommended = ({ api }) => {
  return (
    <div className="grid md:grid-cols-6 sm:grid-cols-4 grid-cols-3 gap-4 px-4">
      {api.data?.map((anime, index) => (
        <Link
          href={`/anime/${anime.mal_id}`}
          className="group cursor-pointer text-color-primary hover:text-color-accent transition-all"
          key={index}
        >
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src={anime.images.webp.image_url}
              alt={anime.title}
              width={250}
              height={250}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
          </div>
          <h3 className="font-bold md:text-lg text-sm p-2 transition-colors duration-300 ease-in-out group-hover:text-color-accent">
            {anime.title}
          </h3>
        </Link>
      ))}
    </div>
  );
};

export default Recommended;
