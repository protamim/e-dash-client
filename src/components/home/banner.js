"use client";
import { banner1, banner2, banner3 } from "@/assets/banner";
import { Button } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
// Slick required css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} !text-2xl before:!text-green-500`}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} !text-2xl before:!text-green-500`}
      onClick={onClick}
    />
  );
}

const HomeBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <div className="pt-16 pb-24">
        <Slider {...settings}>
          {/* Slide */}
          {SLIDER_DATA.map((item) => (
            <div key={item.id}>
              <div className="flex flex-col items-start gap-y-8 md:flex-row md:gap-x-5 md:items-center">
                <div className="order-2 md:order-1 md:w-1/2 lg:w-[45%]">
                  <div className="space-y-1">
                    <h5 className="text-2xl font-light sm:text-3xl">
                      {item.subtitle}
                    </h5>
                    <h2 className="text-3xl font-medium sm:text-4xl">
                      {item.bold}
                    </h2>
                    <h1 className="text-pink-300 text-5xl font-bold text-wrap sm:text-7xl" style={{color: item.color}}>
                      {item.heading}
                    </h1>
                    <p className="text-lg font-medium text-slate-400">
                      {item.text}
                    </p>
                  </div>
                  <Button mt={"1.5rem"}>Shop Now</Button>
                </div>
                <div className="order-1 md:order-2 md:w-1/2 lg:w-[55%]">
                  <Image
                    width={676}
                    height={406}
                    src={item.image}
                    alt="banner"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default HomeBanner;

const SLIDER_DATA = [
  {
    id: 1,
    subtitle: "Upcoming Offer",
    bold: "Big Deals From",
    heading: "Manufacturer",
    text: "Clothing, Shoes, Bags, Wallets...",
    image: banner1,
    color: '#f34a6b'
  },
  {
    id: 2,
    subtitle: "Trade-in offer",
    bold: "Supper value deals",
    heading: "On all products",
    text: " Save more with coupons & up to 70% off",
    image: banner2,
    color: '#445add'
  },
  {
    id: 3,
    subtitle: "Hot promotions",
    bold: "Fashion Trending",
    heading: "Great Collection",
    text: "Save more with coupons & up to 20% off",
    image: banner3,
    color: '#17bef1'
  },
];
