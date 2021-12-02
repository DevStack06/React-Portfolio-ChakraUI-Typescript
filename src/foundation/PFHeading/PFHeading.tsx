import { Heading } from "@chakra-ui/react";
import React from "react";

type PFHeadingProps = {
  variant: string;
  text: string;
};

export default function PFHeading({ variant, text }: PFHeadingProps) {
  return (
    <Heading color="darkColor" variant={variant}>
      {text}
    </Heading>
  );
}
