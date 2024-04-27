import { useEffect, useState } from "react";
import ProductCard from "./productCard";
import axios from "axios";
const NewArrivals = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://e-dash-server.vercel.app/products")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="mb-16">
        <h2 className="text-3xl font-semibold">
          <span className="text-indigo-600"> New </span> Arrivals
        </h2>
        {/* Items */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 mt-5 items-center justify-start md:grid-cols-3 xl:grid-cols-4">
          {data?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default NewArrivals;
