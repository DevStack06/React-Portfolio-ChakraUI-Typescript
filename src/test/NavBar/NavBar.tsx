import { Box, Button, Flex, Heading, Spacer } from "@chakra-ui/react";
import React from "react";

export default function NavBar() {
  return (
    <Flex w="100%" p="20px">
      <Box p="2">
        <Heading size="md">Chakra</Heading>
      </Box>
      <Spacer />
      <Box>
        <Button colorScheme="teal" mr="4">
          Charchter
        </Button>
        <Button colorScheme="teal">Episode</Button>
      </Box>
    </Flex>
  );
}
