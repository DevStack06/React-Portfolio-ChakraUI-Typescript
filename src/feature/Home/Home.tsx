import { Box, VStack } from "@chakra-ui/react";
import React from "react";
import { Spacing } from "../../foundation/theme/Spacing";
import Post from "./Components/Post/Post";
import Introduction from "./Components/Introduction/Introduction";

export default function Home() {
  return (
    <VStack>
      <Introduction />
      <Box h={Spacing.x5} />
      <Post />
    </VStack>
  );
}
