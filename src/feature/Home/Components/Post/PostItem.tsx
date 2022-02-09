import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { PFHeading, PFParagraph } from "../../../../foundation";
import { Spacing } from "../../../../foundation/theme/Spacing";

export default function PostItem() {
  return (
    <Box
      width="32vw"
      borderWidth="1px"
      borderRadius="lg"
      bg="whiteColor"
      padding={Spacing.x3}
      // mr={Spacing.x2p5}
    >
      <Flex direction="column">
        <PFHeading variant="4" text="Making a design system from scratch" />
        <Flex
          pt={Spacing.x2}
          pb={Spacing.x1p5}
          sx={{
            columnGap: "10px",
          }}
        >
          <PFParagraph variant="3" text="12 Feb 2020" />
          <PFParagraph variant="3" text="|" />
          <PFParagraph variant="3" text="Design, Pattern" />
        </Flex>
        <PFParagraph
          text="I am a software developer having an experience in flutter, react, react native along with some backend knowledge like ExpressJs, Django, Nodejs, Flask"
          variant="1"
        />
      </Flex>
    </Box>
  );
}
