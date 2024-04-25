"use client";
import FormModal from "@/components/dashboard/FormModal";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProduct, setSelectedProduct] = useState("init");

  const handleUpdateProduct = (id) => {
    // Fetching selected product
    axios
      .get(`https://e-dash-server.vercel.app/products/${id}`)
      .then((res) => {
        setSelectedProduct(res.data);
      })
      .catch((err) => console.log(err));

    // Open the form modal
    onOpen();
  };

  useEffect(() => {
    // Fetching data by axios in the client only
    axios
      .get("https://e-dash-server.vercel.app/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {/* Modal */}
      <FormModal
        onClose={onClose}
        onOpen={onOpen}
        isOpen={isOpen}
        selectedProduct={selectedProduct}
      />
      <h4 className="text-3xl font-semibold mb-6">Product Lists</h4>
      <div>
        <Table variant="simple" colorScheme="blackAlpha">
          <Thead>
            <Tr>
              <Th fontSize="1.1rem">Product Name</Th>
              <Th fontSize="1.1rem">Price</Th>
              <Th fontSize="1.1rem">Quantity</Th>
              <Th fontSize="1.1rem">Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {products.map((item) => (
              <Tr key={item.id}>
                <Td>
                  <div className="flex items-center gap-x-2">
                    <Image
                      src={item.image_url}
                      width={80}
                      height={80}
                      alt={item.product_name}
                      className="w-11 h-auto"
                    />
                    <h4>{item.product_name}</h4>
                  </div>
                </Td>
                {/* price */}
                <Td>
                  <p>${item.product_price}</p>
                </Td>
                {/* qty */}
                <Td>
                  <span>{item.qty} pcs</span>
                </Td>
                {/* action */}
                <Td textAlign="center">
                  <div className="flex items-center gap-x-4">
                    <button
                      onClick={() => handleUpdateProduct(item._id)}
                      className="text-2xl font-semibold transition-all ease-in-out duration-300 hover:text-green-500"
                    >
                      <span>{<FaEdit />}</span>
                    </button>
                    <span className="text-2xl font-semibold">
                      {<RiDeleteBinLine />}
                    </span>
                  </div>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </div>
    </>
  );
};

export default ProductsList;
