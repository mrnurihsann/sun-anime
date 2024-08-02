"use client";

import Link from "next/link";
import { authUserSession } from "@/libs/auth-libs";

import { FaUserCircle } from "react-icons/fa";

const UserAction = async () => {
  const user = await authUserSession();
  const actionLabel = user ? "Logout" : "Login";
  const actionUrl = user ? "/api/auth/signout" : "/api/auth/signin";
  return (
    <div className="flex gap-2 justify-between">
      {user ? (
        <Link href="/users/dashboard" className="text-color-primary">
          Dashboard
        </Link>
      ) : null}

      <Link href={actionUrl} className="text-color-primary">
        <FaUserCircle size={24} />
      </Link>
    </div>
  );
};

export default UserAction;
