import { Flex } from "@chakra-ui/react";
import React from "react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import PFButton from "../PFButton/PFButton";
import { Spacing } from "../theme/Spacing";

export default function NavBar() {
  return (
    <Flex w="100%" p="20px" mb={Spacing.x12} justifyContent="flex-end">
      <PFButton variant="navBar">Works</PFButton>
      <PFButton variant="navBar">Youtube</PFButton>
      <PFButton variant="navBar">Contact</PFButton>

      <ColorModeSwitcher justifySelf="flex-end" />
    </Flex>
  );
}
