"use client";

import Link from "next/link";
import { useState } from "react";
import InputSearch from "./InputSearch";
import UserAction from "./UserAction";

const Navbar = () => {
  return (
    <header className="bg-color-accent shadow-md">
      <div className="flex md:flex-row flex-col justify-between md:items-center px-4 py-4 gap-2">
        <Link href="/" className="font-bold text-2xl text-color-primary">
          SUN ANIME
        </Link>

        <InputSearch className="md:order-3" />
        <UserAction />
      </div>
    </header>
  );
};

export default Navbar;
