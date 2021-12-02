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
    Text: {
      variants: {
        "1": {
          fontSize: "16px",
          lineHeight: "23px",
          color: "darkColor",
        },
        "2": {
          fontSize: "22px",
          lineHeight: "60px",
          color: "darkColor",
        },
        "3": {
          fontSize: "18px",
          lineHeight: "26px",
          color: "darkColor",
        },
        "4": {
          fontSize: "20px",
          lineHeight: "29.3px",
          color: "lightColor",
        },
        "5": {
          fontSize: "14px",
          lineHeight: "20.5px",
          color: "darkColor",
        },
        "6": {
          fontSize: "20px",
          lineHeight: "29.38px",
          color: "darkColor",
        },
      },
    },
  },
});

export default customTheme;
