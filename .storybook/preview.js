import { ChakraProvider } from "@chakra-ui/react";
import {addDecorator} from "@storybook/react"
import customTheme from "../src/theme"

addDecorator(story=>(
  <ChakraProvider theme={customTheme}>{story()}</ChakraProvider>
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewMode: "docs"
}