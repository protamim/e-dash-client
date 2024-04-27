"use client";
import Link from "next/link";
import SiteLogo from "../home/SiteLogo";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import Image from "next/image";
import { RxCrossCircled } from "react-icons/rx";

const MainHeader = () => {
  const { user, logOut, reload, setReload } = useContext(AuthContext);
  const [cart, setCart] = useState([]);

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

  const handleDeleteCartProducts = (id) => {
    console.log(id);
    // delete cart products
    axios
      .delete(`https://e-dash-server.vercel.app/cart/${id}`)
      .then((res) => {
        // console.log(res);
        setReload(true);
      })
      .catch((err) => console.log(err));
  };

  // cart products
  useEffect(() => {
    axios
      .get(`https://e-dash-server.vercel.app/cart/${user?.email}`)
      .then((res) => {
        // console.log(res.data);
        setCart(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [reload]);

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
            {/* // cart */}
            {user && (
              <Popover>
                <PopoverTrigger>
                  <li className="relative cursor-pointer flex items-center">
                    Cart
                    <span className="bg-pink-500 text-white text-sm rounded-full min-h-5 min-w-5 absolute flex items-center justify-center leading-[1px] p-[5px] -top-[14px] -right-[10px]">
                      {/* cart products length */}
                      {cart?.length || 0}
                    </span>
                  </li>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>My Shopping Cart</PopoverHeader>
                  <PopoverBody>
                    {/* If have Cart empty */}
                    {cart?.length === 0 && (
                      <p>There are no more items in your cart</p>
                    )}

                    {/* show cart products */}
                    <div className="flex flex-col gap-y-4 my-6">
                      {cart.map((item) => (
                        <ul
                          key={item._id}
                          className="flex items-center justify-start gap-x-4"
                        >
                          <li className="w-[20%]">
                            <Image
                              src={item.image_url}
                              width={40}
                              height={40}
                              alt={item.product_name}
                            />
                          </li>
                          <li className="w-[70%]">
                            <h5>{item.product_name}</h5>
                            <p className="text-black text-sm">
                              <span className="text-gray-400 text-xs">
                                Price:
                              </span>{" "}
                              ${item.product_price}
                            </p>
                          </li>
                          <li className="w-[10%]">
                            <button
                              onClick={() => handleDeleteCartProducts(item._id)}
                              className="text-xl transition-all ease-in-out duration-300 hover:text-green-500"
                            >
                              <RxCrossCircled />
                            </button>
                          </li>
                        </ul>
                      ))}
                    </div>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            )}
            {/* Dashboard */}
            {user && (
              <li onClick={handleRouteClick}>
                <Link href="/dashboard">Dashboard</Link>
              </li>
            )}
            {/* Log Out / Login */}
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
