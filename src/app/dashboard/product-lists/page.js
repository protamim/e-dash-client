"use client";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const ProductsList = async () => {
  const [products, setProducts] = useState([]);

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
      <h4 className="text-3xl font-semibold mb-6">Product Lists</h4>
      <div>
        <Table variant="simple" colorScheme="blackAlpha">
          <Thead>
            <Tr>
              <Th fontSize="1.1rem">Product Name</Th>
              <Th font Size="1.1rem">
                Price
              </Th>
              <Th fontSize="1.1rem">Quantity</Th>
            </Tr>
          </Thead>
          <Tbody>
            {products.map((item) => (
              <Tr key={item.id}>
                <Td>
                  <div className="flex items-center gap-x-2">
                    <Image
                      src={"https://i.postimg.cc/440vBRBf/t-shirt-6-pack.webp"}
                      width={80}
                      height={80}
                      className="w-11 h-auto"
                    />
                    <h4>{item.product_name}</h4>
                  </div>
                </Td>
                <Td>${item.product_price}</Td>
                <Td>{item.qty} pcs</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </div>
    </>
  );
};

export default ProductsList;
