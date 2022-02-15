import { Flex } from "@chakra-ui/react";
import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { PFParagraph } from "..";
import PFIconButton from "../PFIconButton/PFIconButton";
import { Spacing } from "../theme/Spacing";

export default function Footer() {
  return (
    <Flex
      flexDirection="column"
      pt={Spacing.x5}
      pb={Spacing.x7}
      alignItems="center"
    >
      <Flex justifyContent="center" pb={Spacing.xp25}>
        <PFIconButton
          icon={<FaFacebookSquare />}
          ariaLabel="facebook button"
          onClick={() => {}}
        />
        <PFIconButton icon={<FaInstagram />} ariaLabel="insta button" />
        <PFIconButton icon={<FaTwitter />} ariaLabel="insta button" />
        <PFIconButton icon={<FaLinkedin />} ariaLabel="insta button" />
      </Flex>
      <PFParagraph variant="5" text="Copyright ©2022 All rights reserved " />
    </Flex>
  );
}
