"use client";

import { CaretCircleLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const Header = ({ title }) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="flex justify-between items-center mb-4">
      <button onClick={handleBack} className="text-color-primary">
        <CaretCircleLeft size={32} />
      </button>
      <h1 className="text-3xl text-color-primary font-bold">{title}</h1>
    </div>
  );
};

export default Header;
