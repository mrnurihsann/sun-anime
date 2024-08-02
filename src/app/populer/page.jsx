"use client";

import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/utilities/HeaderMenu";
import Pagination from "@/components/utilities/Pagination";
import { useEffect, useState } from "react";

import { getAnimeResponse } from "@/libs/api-libs";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    const populerAnime = await getAnimeResponse("top/anime", `page=${page}`);
    setTopAnime(populerAnime);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div>
      <div>
        <HeaderMenu title={`PALING POPULER #${page}`} setPage={setPage} />
      </div>
      <div>
        <AnimeList api={topAnime} />
      </div>
      <div>
        <Pagination
          page={page}
          setPage={setPage}
          lastPage={topAnime.pagination?.last_visible_page}
        />
      </div>
    </div>
  );
};

export default Page;
