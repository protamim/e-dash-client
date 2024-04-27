"use client";
import HomeBanner from "@/components/home/banner";
import Features from "@/components/home/featurs";
import NewArrivals from "@/components/home/newArrivals";
import MainHeader from "@/components/shared/Header";
import { AuthContext } from "@/providers/AuthProvider";
import { CircularProgress } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useContext } from "react";
const HomePage = () => {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  if (loading) {
    return <CircularProgress isIndeterminate color="green.300" className="!h-screen !flex !items-start !justify-center !w-full" />;
  }

  if (!user) {
    return router.push("/login");
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
