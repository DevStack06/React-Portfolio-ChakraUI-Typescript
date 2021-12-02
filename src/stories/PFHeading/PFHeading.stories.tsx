import React from "react";
import PFHeading from "../../foundation/PFHeading/PFHeading";

export default {
  title: "Foundation/PFHeading",
  component: PFHeading,
};

export const Default = () => {
  return <PFHeading variant="1" text="variant 1" />;
};
export const Heading2 = () => {
  return <PFHeading variant="2" text="variant 2" />;
};

export const Heading3 = () => {
  return <PFHeading variant="3" text="variant 3" />;
};

export const Heading4 = () => {
  return <PFHeading variant="4" text="variant 4" />;
};
