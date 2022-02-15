import { IconButton } from "@chakra-ui/button";
import React from "react";
import { Spacing } from "../theme/Spacing";

type PFIconButtonProps = {
  icon: React.ReactElement;
  ariaLabel: string;
  onClick?: any;
};

export default function PFIconButton({
  icon,
  ariaLabel,
  onClick,
}: PFIconButtonProps) {
  return (
    <IconButton
      variant="ghost"
      color="darkColor"
      icon={icon}
      size="lg"
      onClick={onClick}
      ml={Spacing.x1p5}
      fontSize="28px"
      aria-label={ariaLabel}
    />
  );
}
