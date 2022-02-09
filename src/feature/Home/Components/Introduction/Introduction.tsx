import { Box, Flex, VStack } from "@chakra-ui/react";
import React from "react";
import {
  PFHeading,
  PFParagraph,
  PFButton,
  PFAvatar,
} from "../../../../foundation";

import { styles } from "../../Home.styles";

export default function Introduction() {
  return (
    <Flex
      justifyContent="space-between"
      width="100%"
      wrap="wrap"
      sx={styles.containerPadding}
    >
      <VStack style={styles.firstRowContainer}>
        <PFHeading
          text="Hi, I am Balram Rathore, Software Developer"
          variant="1"
        />
        <Box h="10px" />
        <PFParagraph
          text="I am a software developer having an experience in flutter, react, react native along with some backend knowledge like ExpressJs, Django, Nodejs, Flask"
          variant="1"
        />
        <Box h="10px" />
        <PFButton variant="solid"> Download Resume</PFButton>
      </VStack>
      {/* <Box w="106px" /> */}
      <PFAvatar src="/profile_photo.jpeg" />
    </Flex>
  );
}
