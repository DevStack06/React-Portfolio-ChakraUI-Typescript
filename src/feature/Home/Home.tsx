import { Box, VStack } from "@chakra-ui/react";
import React from "react";
import { Spacing } from "../../foundation/theme/Spacing";
import Post from "./Components/Post/Post";
import Introduction from "./Components/Introduction/Introduction";
import Work from "../../foundation/Work/Work";

export default function Home() {
  return (
    <VStack>
      <Introduction />
      <Box h={Spacing.x7} />
      <Post />
      <Work />
    </VStack>
  );
}
