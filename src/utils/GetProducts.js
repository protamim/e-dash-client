import axios from "axios";
const GetProducts = async () => {
  // fetching data by axios
  try {
    const res = await axios.get("https://e-dash-server.vercel.app/products");
    return res.data;
  } catch (err) {
    return console.log(err);
  }
};

export default GetProducts;
