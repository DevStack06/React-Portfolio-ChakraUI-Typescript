import { IconButton } from "@chakra-ui/button";
import React from "react";

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
      sx={{
        width: "30px",
        height: "30px",
      }}
      aria-label={ariaLabel}
    />
  );
}
