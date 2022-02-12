import { Box, Divider, Flex, Tag, Image } from "@chakra-ui/react";
import React from "react";
import { PFHeading, PFParagraph } from "..";
import { Spacing } from "../theme/Spacing";

export default function WorkItem() {
  return (
    <Flex
      flexDirection="column"
      sx={{
        paddingBottom: Spacing.x3,
      }}
    >
      <Flex
        sx={{
          alignItems: "stretch",
        }}
      >
        <Box
          maxW="md"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          mr={Spacing.x3}
          mb={Spacing.x2}
          mt={Spacing.x1}
        >
          <Image src="https://picsum.photos/240" />
        </Box>
        <Flex flexDirection="column">
          <PFHeading variant="3" text="Designing Dashboards" />
          <Flex
            sx={{
              paddingTop: Spacing.x1,
              alignItems: "flex-center",
              paddingBottom: Spacing.x2,
            }}
          >
            <Tag
              color="whiteColor"
              bg="tagColor"
              borderRadius="14px"
              mr={Spacing.x4}
            >
              2020
            </Tag>
            <PFParagraph variant="4" text="Dashboard" />
          </Flex>
          <PFParagraph
            variant="7"
            text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          />
        </Flex>
      </Flex>
      <Divider size="2xl" />
    </Flex>
  );
}
