"use client";
import Link from "next/link";
import SiteLogo from "../home/SiteLogo";
import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import Swal from "sweetalert2";

const MainHeader = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((res) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Logged Out",
          showConfirmButton: false,
          timer: 1000,
        });
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };

  const handleRouteClick = () => {
    if (!user) {
      Swal.fire("Please Log In first before continue browsing!");
    }
  };

  return (
    <header>
      <nav className="bg-green-500 px-4">
        <div className="flex items-center justify-between h-16">
          {/* LOGO */}
          <SiteLogo />
          {/* NAV LINKS */}
          <ul className="flex items-center gap-x-8">
            <li onClick={handleRouteClick}>
              <Link href="/">Home</Link>
            </li>
            {user && (
              <li onClick={handleRouteClick}>
                <Link href="/dashboard">Dashboard</Link>
              </li>
            )}
            {user ? (
              <li onClick={handleLogOut}>
                <button>Log Out</button>
              </li>
            ) : (
              <li onClick={handleRouteClick}>
                <Link href="/login">Login/Register</Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default MainHeader;
