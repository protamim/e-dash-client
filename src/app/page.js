import HomeBanner from "@/components/home/banner";
import Features from "@/components/home/featurs";
import MainHeader from "@/components/shared/Header";

const HomePage = () => {
  return (
    <>
      <MainHeader />
      <main className="px-7 max-w-screen-xl mx-auto">
        <HomeBanner />
        <Features />
      </main>
    </>
  );
};

export default HomePage;
