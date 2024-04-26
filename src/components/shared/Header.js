"use client";
import Link from "next/link";
import React, { useContext } from "react";
import SiteLogo from "../home/SiteLogo";
import { AuthContext } from "@/providers/AuthProvider";

const MainHeader = () => {
  const { user } = useContext(AuthContext);

  return (
    <header>
      <nav className="bg-green-500 px-4">
        <div className="flex items-center justify-between h-16">
          {/* LOGO */}
          <SiteLogo />
          {/* NAV LINKS */}
          <ul className="flex items-center gap-x-8">
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="/register">Register</Link>
            </li>
            {user && (
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default MainHeader;
