import { Card, CardBody, CardFooter, Tooltip } from "@chakra-ui/react";
import Image from "next/image";
import { MdShoppingBag } from "react-icons/md";

const ProductCard = ({ product }) => {
  const { product_name, product_price, image_url } = product;
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
            <Tooltip hasArrow label="Add to cart" placement="left" bg="green.600">
              <button className="bg-green-100 p-3 rounded-full transition-all ease-in-out duration-300 hover:-translate-y-1">
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
