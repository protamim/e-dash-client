import Link from "next/link";
import React from "react";
import SiteLogo from "../home/SiteLogo";

const Sidebar = ({className}) => {
  return (
    <>
      <div  className={`${className || ""} h-full bg-slate-200 flex flex-col gap-y-3 px-2 pt-6`}>
        <div className="mb-5">
          <SiteLogo />
        </div>
        <Link href="/dashboard">
          Dashboard
        </Link>
        <Link href="/dashboard/add-products">
          Add Products
        </Link>
        <Link href="/dashboard/product-lists">Product Lists</Link>
      </div>
    </>
  );
};

export default Sidebar;
