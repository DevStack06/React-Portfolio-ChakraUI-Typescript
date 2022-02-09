import { Avatar } from "@chakra-ui/react";
import React from "react";

export default function PFAvatar({ src }: { src: string }) {
  return (
    <Avatar
      sx={{
        height: "280px",
        width: "280px",
      }}
      name="Balram Rathore"
      src={src}
    />
  );
}
