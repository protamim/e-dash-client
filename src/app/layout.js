import { Overpass } from "next/font/google";
import "./globals.css";
import Chakra from "@/providers/Chakra";

const overpass = Overpass({ subsets: ["latin"] });

export const metadata = {
  title: "eCommerce Admin Dashboard",
  description: "An e-commerce admin using ReactJS and NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={overpass.className}>
        <Chakra>{children}</Chakra>
      </body>
    </html>
  );
}
