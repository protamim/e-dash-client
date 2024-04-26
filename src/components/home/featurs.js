import {
  feature1,
  feature2,
  feature3,
  feature4,
  feature5,
  feature6,
} from "@/assets/features";
import Image from "next/image";

const Features = () => {
  return (
    <>
      <div className="flex items-center justify-center gap-x-6 gap-y-6 flex-wrap mb-16">
        {FEATURES_DATA.map((item) => (
          <div
            key={item.id}
            className="bg-slate-50 max-w-max px-3 py-5 border border-green-200 rounded-lg flex flex-col gap-y-5 items-center transition-all ease-in-out duration-300 hover:-translate-y-2"
          >
            <Image src={item.image} width={152} height={105} alt="features" />
            <h4
              className="bg-pink-100 text-green-700 px-2 py-1 rounded-md font-semibold text-lg"
              style={{ background: item.bg }}
            >
              {item.title}
            </h4>
          </div>
        ))}
      </div>
    </>
  );
};

export default Features;

const FEATURES_DATA = [
  {
    id: 1,
    title: "Free Shipping",
    image: feature1,
    bg: "#fddde4",
  },
  {
    id: 2,
    title: "Online Order",
    image: feature2,
    bg: "#baf4e1",
  },
  {
    id: 3,
    title: "Save Money",
    image: feature3,
    bg: "#f2efc5",
  },
  {
    id: 4,
    title: "Promotions",
    image: feature4,
    bg: "#fdeadb",
  },
  {
    id: 5,
    title: "Happy Sell",
    image: feature5,
    bg: "#e5e5e5",
  },
  {
    id: 6,
    title: "24/7 Support",
    image: feature6,
    bg: "#dbf7ba",
  },
];
