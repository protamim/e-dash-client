"use client";
import HomeBanner from "@/components/home/banner";
import Features from "@/components/home/featurs";
import NewArrivals from "@/components/home/newArrivals";
import MainHeader from "@/components/shared/Header";
import { AuthContext } from "@/providers/AuthProvider";
import { useRouter } from "next/navigation";
import { useContext } from "react";
const HomePage = () => {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  if (!user) {
    router.push("/login");
  }
  return (
    <>
      <MainHeader />
      <main className="px-7 max-w-screen-xl mx-auto">
        <HomeBanner />
        <Features />
        <NewArrivals />
      </main>
    </>
  );
};

export default HomePage;
