import React from "react";
import Routes from "./Routes";
import { ChakraProvider } from "@chakra-ui/react";

export default function App() {
  return (
    <ChakraProvider>
      <Routes />
    </ChakraProvider>
  );
}
