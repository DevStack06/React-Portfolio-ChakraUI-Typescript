import { Flex } from "@chakra-ui/react";
import React from "react";
import PFParagraph from "../PFParagraph/PFParagraph";
import WorkItem from "./WorkItem";

export default function Work() {
  return (
    <Flex
      sx={{
        paddingRight: "25vw",
        paddingLeft: "15vw",
      }}
      flexDirection="column"
    >
      <PFParagraph variant="2" text="Features Works" />
      <WorkItem />
      <WorkItem />
      <WorkItem />
      <WorkItem />
      <WorkItem />
    </Flex>
  );
}
