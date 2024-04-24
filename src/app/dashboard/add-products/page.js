"use client";
import { PrimaryBtn } from "@/components/common/buttons/Buttons";
import {
  Form,
  Input,
  InputWrapper,
  Label,
  TextArea,
} from "@/components/common/form/Form";

const AddProducts = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const product_name = form.title.value;
    const price = form.price.value;
    const image_url = form.image.value;
    const size = form.size.value;
    const description = form.description.value;

    const product = { product_name, price, image_url, size, description };
    console.log(product);

    // Send to backend
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert(`${product_name} added successfully!`);
          form.reset();
        }
        console.log(data);
      });
  };

  return (
    <>
      <div>
        <h3 className="text-3xl font-semibold mb-5">Add Product</h3>
        {/* Form */}
        <Form
          onSubmit={handleAddProduct}
          className="grid grid-cols-2 gap-y-6 gap-x-7"
        >
          <InputWrapper>
            <Label>Product Name</Label>
            <Input type="text" name="title" placeholder="Enter Product Name" />
          </InputWrapper>
          <InputWrapper>
            <Label>Product Price</Label>
            <Input type="text" name="price" placeholder="Enter Product Price" />
          </InputWrapper>
          <InputWrapper>
            <Label>Product Image URL</Label>
            <Input
              type="url"
              name="image"
              placeholder="Enter Product Image URL"
            />
          </InputWrapper>
          <InputWrapper>
            <Label>Size</Label>
            <Input type="text" name="size" placeholder="Enter Size" />
          </InputWrapper>
          <InputWrapper className="col-span-2">
            <Label>Product Description</Label>
            <TextArea
              placeholder="Enter Product Description..."
              name="description"
            />
          </InputWrapper>
          <div className="col-span-2 text-right">
            <PrimaryBtn type="submit">Add Product</PrimaryBtn>
          </div>
        </Form>
      </div>
    </>
  );
};

export default AddProducts;
