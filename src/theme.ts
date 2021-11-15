import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  colors: {
    primary: "#FF6464",
    secondary: "#00A8CC",
    darkCOlor: "#21243D",
    lightColor: "#8695A4",
    whiteColor: " #FFFFFF",
  },
  components: {
    Button: {
      variants: {
        solid: {
          backgroundColor: "primary",
          color: "whiteColor",
        },
        ghost: {
          color: "secondary",
        },
      },
    },
  },
});

export default customTheme;
