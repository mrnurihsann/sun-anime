"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    const keyWord = searchRef.current.value;
    if (!keyWord || keyWord.trim() == "") return;
    event.preventDefault();

    router.push(`/search/${keyWord}`);
  };

  return (
    <form className="relative" onSubmit={handleSearch}>
      <input
        placeholder="search"
        className="w-full p-2 rounded"
        ref={searchRef}
      />
      <button className="absolute top-2 end-2" onClick={handleSearch}>
        <MagnifyingGlass size={24} />
      </button>
    </form>
  );
};

export default InputSearch;
