"use client";

import { FileSearch } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen max-w-xl mx-auto flex items-center justify-center">
      <div className="flex justify-center items-center flex-col">
        <FileSearch size={64} className="text-color-accent gap-2" />
        <h3 className="text-color-accent text-6xl font-bold">Not Found</h3>
        <button
          onClick={() => router.back()}
          className="text-color-primary hover:text-color-accent transition-all underline"
        >
          Back To Home
        </button>
      </div>
    </div>
  );
};

export default Page;
