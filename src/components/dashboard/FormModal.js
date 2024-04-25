"use client";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { PrimaryBtn } from "../common/buttons/Buttons";
import axios from "axios";

const FormModal = ({ onOpen, isOpen, onClose, selectedProduct }) => {
  const {
    _id,
    product_name,
    description,
    image_url,
    product_price,
    qty,
    size,
  } = selectedProduct;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const product_name = form.product_name.value || null;
    const product_price = form.product_price.value || null;
    const image_url = form.image_url.value || null;
    const description = form.description.value || null;
    const qty = form.qty.value || null;
    const size = form.size.value || null;

    const currentItem = {
      product_name,
      product_price,
      image_url,
      size,
      qty,
      description,
    };

    // Product Update request
    axios
      .put(`https://e-dash-server.vercel.app/products/${_id}`, {
        ...currentItem,
      })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          alert(`${product_name} updated successfully!`);
          form.reset();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg="blackAlpha.200" />
        <ModalContent>
          <ModalHeader>Update the product</ModalHeader>
          <ModalCloseButton />
          {/* Editable Form */}
          <form onSubmit={handleSubmit}>
            <ModalBody pb={6} className="flex flex-col gap-y-4">
              {/* Product Name */}
              <FormControl>
                <FormLabel>Product Name</FormLabel>
                <Input
                  type="text"
                  defaultValue={product_name}
                  name="product_name"
                />
              </FormControl>

              {/* Product Price */}
              <FormControl>
                <FormLabel>Product Price</FormLabel>
                <Input
                  type="text"
                  defaultValue={product_price}
                  name="product_price"
                />
              </FormControl>

              {/* Product Image URL */}
              <FormControl>
                <FormLabel>Image URL</FormLabel>
                <Input type="url" defaultValue={image_url} name="image_url" />
              </FormControl>

              {/* Quantity */}
              <FormControl>
                <FormLabel>Quantity</FormLabel>
                <Input type="text" defaultValue={qty} name="qty" />
              </FormControl>

              {/* Size */}
              <FormControl>
                <FormLabel>Size</FormLabel>
                <Input type="text" defaultValue={size} name="size" />
              </FormControl>

              {/* Description */}
              <FormControl>
                <FormLabel>Description</FormLabel>
                <Textarea
                  minH="8.125rem"
                  defaultValue={description}
                  name="description"
                />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <PrimaryBtn type="submit" className="mr-4">
                Update
              </PrimaryBtn>
              <PrimaryBtn onClick={onClose}>Cancel</PrimaryBtn>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FormModal;
