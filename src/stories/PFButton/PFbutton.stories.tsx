import React from "react";
import PFButton from "../../foundation/PFButton/PFButton";

export default {
  title: "Foundation/PFButton",
  component: PFButton,
};

export const Default = () => {
  return (
    <PFButton
      stylesProps={{
        width: "208px",
        height: "47px",
        borderRadius: "10px",
        // fontSize: "20px",
      }}
      OnClick={() => {}}
    >
      Download Resume
    </PFButton>
  );
};

export const GhostButton = () => {
  return (
    <PFButton
      variant="ghost"
      stylesProps={{
        fontSize: "16px",
        fontWeight: "400",
      }}
    >
      View All
    </PFButton>
  );
};
