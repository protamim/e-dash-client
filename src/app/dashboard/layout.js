"use client";
import Sidebar from "@/components/dashboard/Sidebar";
import SiteLogo from "@/components/home/SiteLogo";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { MdDashboardCustomize } from "react-icons/md";

const DashboardLayout = ({ children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <div className="flex relative">

        {/* Navigation */}
        <div className="absolute top-0 w-full flex items-center justify-between px-4 bg-green-400 h-16 md:hidden">
          <SiteLogo />
          {/* Option Icon */}
          <button onClick={onOpen}>
            <MdDashboardCustomize className="text-2xl text-slate-700" />
          </button>
        </div>

        {/* sidebar */}
        <div className="hidden md:min-w-60 md:block">
          <Sidebar />
        </div>

        {/* main content */}
        <main className="w-full bg-indigo-50 px-4 pt-28 h-screen md:pt-6 md:w-[calc(100%-240px)]">
          {children}
        </main>
      </div>

      {/* Sidebar Drawer */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody bg="#e2e8f0">
            <Sidebar className="!h-auto"/>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DashboardLayout;
