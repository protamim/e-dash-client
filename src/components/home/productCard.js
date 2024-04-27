import { AuthContext } from "@/providers/AuthProvider";
import { Card, CardBody, CardFooter, Tooltip } from "@chakra-ui/react";
import axios from "axios";
import Image from "next/image";
import { useContext, useState } from "react";
import { MdShoppingBag } from "react-icons/md";
import Swal from "sweetalert2";

const ProductCard = ({ product }) => {
  const {
    product_name,
    product_price,
    image_url,
    size,
    qty,
    description,
  } = product;
  const { user, setReload } = useContext(AuthContext);

  const handleAddToCart = () => {
    const userEmail = user?.email;
    // add to the cart
    axios
      .post(`https://e-dash-server.vercel.app/cart`, {
        userEmail,
        product_name,
        product_price,
        image_url,
        size,
        qty,
        description,
      })
      .then((res) => {
        // console.log(res?.data);
        if (res?.data?.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Added the product to your cart",
            showConfirmButton: false,
            timer: 1000,
          });
          // reload after added
          setReload(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Card maxW="300px" h="100%">
        <CardBody>
          <div>
            <Image
              src={image_url}
              width={300}
              height={450}
              alt="product card"
              className="max-h-full"
            />
          </div>
        </CardBody>
        <CardFooter flexDirection="column">
          <h3 className="text-lg font-medium mb-3">{product_name}</h3>
          <div className="flex justify-between items-center">
            <h5 className="text-green-600 text-2xl font-semibold">
              ${product_price}
            </h5>
            {/* cart */}
            <Tooltip
              hasArrow
              label="Add to cart"
              placement="left"
              bg="green.600"
            >
              <button
                onClick={handleAddToCart}
                className="bg-green-100 p-3 rounded-full transition-all ease-in-out duration-300 hover:-translate-y-1"
              >
                <MdShoppingBag className="text-green-700 text-2xl" />
              </button>
            </Tooltip>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default ProductCard;
