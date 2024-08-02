import Link from "next/link";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from "@/libs/api-libs";
import Recommended from "@/components/AnimeList/Recomend";
const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  let recommendedAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );

  recommendedAnime = reproduce(recommendedAnime, 12);

  return (
    <div>
      {/* Populer */}
      <section>
        <Header title={"Populer"} linkHref={"/populer"} linkTitle={"See All"} />
        <AnimeList api={topAnime} />
      </section>

      {/* Rekomendasi */}
      <section>
        <Header title={"Rekomendasi"} />
        <Recommended api={recommendedAnime} />
      </section>
    </div>
  );
};

export default Page;
