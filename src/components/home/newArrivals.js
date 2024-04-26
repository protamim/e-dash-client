import GetProducts from "@/utils/GetProducts";
import ProductCard from "./productCard";

const NewArrivals = async () => {
  const data = await GetProducts();
  return (
    <>
      <div className="mb-16">
        <h2 className="text-3xl font-semibold">
          <span className="text-indigo-600"> New </span> Arrivals
        </h2>
        {/* Items */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 mt-5 items-center justify-start md:grid-cols-3 xl:grid-cols-4">
          {data.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default NewArrivals;
