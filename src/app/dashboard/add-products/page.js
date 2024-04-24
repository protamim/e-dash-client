"use client";
import { PrimaryBtn } from "@/components/common/buttons/Buttons";
import axios from "axios";
import { useForm } from "react-hook-form";

const AddProducts = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { product_name } = data;

    // Send to backend
    try {
      const response = await axios.post(
        "https://e-dash-server.vercel.app/products",
        { ...data }
      );
      if (response.data.insertedId) {
        alert(`${product_name} added successfully!`);
        reset();
      }
    } catch (error) {
      console.error(`Data inserting error: ${error}`);
    }
  };

  return (
    <>
      <div>
        <h3 className="text-3xl font-semibold mb-5">Add Product</h3>
        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-5 rounded-md grid grid-cols-2 gap-x-8 gap-y-6"
        >
          {/* Product Name */}
          <div className="flex flex-col gap-y-2">
            <label htmlFor="name">Product Name</label>
            <input
              type="text"
              className={`${
                errors.product_name && "border border-red-500"
              } border border-indigo-300 h-10 pl-3 outline-none rounded-lg`}
              placeholder="Enter Product Name"
              {...register("product_name", { required: true })}
            />
            {errors.product_name && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          {/* Product Price */}
          <div className="flex flex-col gap-y-2">
            <label htmlFor="price">Product Price</label>
            <input
              type="text"
              className={`${
                errors.product_price && "border border-red-500"
              } border border-indigo-300 h-10 pl-3 outline-none rounded-lg`}
              placeholder="Enter Product Price"
              {...register("product_price", { required: true })}
            />
            {errors.product_price && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          {/* Product Image URL */}
          <div className="flex flex-col gap-y-2">
            <label htmlFor="imageURL">Product Image URL</label>
            <input
              type="url"
              className={`${
                errors.image_url && "border border-red-500"
              } border border-indigo-300 h-10 pl-3 outline-none rounded-lg`}
              placeholder="Enter Product Image URL"
              {...register("image_url", { required: true })}
            />
            {errors.image_url && (
              <span className="text-red-500">
                Please ensures you entered a valid URL
              </span>
            )}
          </div>

          {/* Product Size */}
          <div className="flex flex-col gap-y-2">
            <label htmlFor="size">Size</label>
            <input
              type="text"
              className={`${
                errors.size && "border border-red-500"
              } border border-indigo-300 h-10 pl-3 outline-none rounded-lg`}
              placeholder="Enter Available Size"
              {...register("size", { required: true })}
            />
            {errors.size && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          {/* Quantity */}
          <div className="flex flex-col gap-y-2">
            <label htmlFor="qty">Quantity</label>
            <input
              type="text"
              className={`${
                errors.product_qty && "border border-red-500"
              } border border-indigo-300 h-10 pl-3 outline-none rounded-lg`}
              placeholder="Enter Available Quantity"
              {...register("qty", { required: true })}
            />
            {errors.qty && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          {/* Product Description */}
          <div className="flex flex-col gap-y-2">
            <label htmlFor="description">Description</label>
            <textarea
              className={`${
                errors.description && "border border-red-500"
              } border border-indigo-300 min-h-40 pl-3 pt-3 outline-none rounded-lg`}
              placeholder="Enter Description here..."
              {...register("description", { required: true })}
            />
            {errors.description && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          {/* Submit Button */}
          <div className="col-span-2 text-right">
            <PrimaryBtn type="submit">Add Product</PrimaryBtn>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProducts;
