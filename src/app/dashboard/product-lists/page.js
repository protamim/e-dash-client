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
  TableContainer,
} from "@chakra-ui/react";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import Swal from "sweetalert2";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProduct, setSelectedProduct] = useState("init");

  // updates selected product
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

  // Delete the selected product
  const handleDeleteProduct = (id) => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://e-dash-server.vercel.app/products/${id}`, id)
          .then((res) => {
            console.log(res.data);
            if (res.data.deletedCount === 1) {
              Swal.fire({
                title: "Deleted!",
                text: `Product has been deleted.`,
                icon: "success",
              });
            }
          })
          .catch((err) => console.log(err));
      }
    });
  };

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
        <TableContainer overflowX="auto" maxW="100%">
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
                <Tr key={item._id}>
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
                    <div className="flex items-center gap-x-7">
                      {/* update action */}
                      <button
                        onClick={() => handleUpdateProduct(item._id)}
                        className="text-2xl font-semibold transition-all ease-in-out duration-300 hover:text-green-500"
                      >
                        <span>{<FaEdit />}</span>
                      </button>
                      {/* Delete action */}
                      <button
                        onClick={() => handleDeleteProduct(item._id)}
                        className="text-2xl font-semibold transition-all ease-in-out duration-300 hover:text-green-500"
                      >
                        {<RiDeleteBinLine />}
                      </button>
                    </div>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default ProductsList;
