"use client";
import { ChakraProvider } from "@chakra-ui/react";
import AuthProvider from "./AuthProvider";

const Providers = ({ children }) => {
  return (
    <ChakraProvider>
      <AuthProvider>{children}</AuthProvider>
    </ChakraProvider>
  );
};

export default Providers;
