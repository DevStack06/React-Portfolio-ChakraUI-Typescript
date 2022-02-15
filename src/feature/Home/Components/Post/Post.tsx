import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { PFButton, PFParagraph } from "../../../../foundation";
import { Spacing } from "../../../../foundation/theme/Spacing";
import { styles } from "../../Home.styles";
import PostItem from "./PostItem";

export default function Post() {
  console.log("spacing", Spacing.x3);
  return (
    <Box
      w="100%"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      pb="25px"
      bg="backgroundColor2"
      sx={styles.containerPadding}
    >
      <Flex flexDirection="column">
        <Flex justifyContent="space-between">
          <PFParagraph variant="2" text="Recent Youtube Series" />
          <PFButton
            variant="ghost"
            stylesProps={{
              marginTop: "15px",
            }}
          >
            {" "}
            View all
          </PFButton>
        </Flex>
        <Flex justifyContent="space-between" width="100%" flexWrap="wrap">
          <PostItem />
          <PostItem />
        </Flex>
      </Flex>
    </Box>
  );
}
