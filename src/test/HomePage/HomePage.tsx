import { VStack } from "@chakra-ui/react";
import React from "react";
import NavBar from "../../foundation/NavBar/NavBar";
import HomePageBody from "./components/HomePageBody";

export default function HomePage() {
  return (
    <VStack w="100%">
      <NavBar />
      <HomePageBody />
    </VStack>
  );
}
