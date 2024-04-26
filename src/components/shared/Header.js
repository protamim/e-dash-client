"use client";
import Link from "next/link";
import SiteLogo from "../home/SiteLogo";
import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider";

const MainHeader = () => {
  const { user } = useContext(AuthContext);

  console.log(user);

  return (
    <header>
      <nav className="bg-green-500 px-4">
        <div className="flex items-center justify-between h-16">
          {/* LOGO */}
          <SiteLogo />
          {/* NAV LINKS */}
          <ul className="flex items-center gap-x-8">
            <li>
              <Link href="/">Home</Link>
            </li>
            {user && (
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>
            )}
            {user ? (
              <li>
                <button>Log Out</button>
              </li>
            ) : (
              <li>
                <Link href="/register">Login/Register</Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default MainHeader;
