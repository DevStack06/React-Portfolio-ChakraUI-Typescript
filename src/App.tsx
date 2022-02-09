import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import { Provider } from "react-redux";
import customTheme from "./theme";
import Home from "./feature/Home/Home";
import { store } from "./store/store";

export const App = () => (
  <ChakraProvider theme={customTheme}>
    <Provider store={store}>
      <Home />
    </Provider>
  </ChakraProvider>
);
