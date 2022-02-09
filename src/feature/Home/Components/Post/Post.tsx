import { Box, Flex, VStack } from "@chakra-ui/react";
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
      <VStack>
        <Flex justifyContent="space-between" width="100%">
          <PFParagraph variant="2" text="Recent posts" />
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
        <Flex justifyContent="space-between" width="100%">
          <PostItem />
          <PostItem />
        </Flex>
      </VStack>
    </Box>
  );
}
