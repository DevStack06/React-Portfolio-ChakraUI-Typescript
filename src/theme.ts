import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  colors: {
    primary: "#FF6464",
    secondary: "#00A8CC",
    darkColor: "#21243D",
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
    Heading: {
      variants: {
        "1": {
          fontSize: "44px",
          lineHeight: "60px",
        },
        "2": {
          fontSize: "34px",
          lineHeight: "50px",
        },
        "3": {
          fontSize: "30px",
          lineHeight: "44px",
        },
        "4": {
          fontSize: "26px",
          lineHeight: "38px",
        },
      },
    },
  },
});

export default customTheme;
