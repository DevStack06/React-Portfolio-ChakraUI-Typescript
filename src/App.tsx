import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import { Provider } from "react-redux";
import customTheme from "./theme";
import Home from "./feature/Home/Home";
import { store } from "./store/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes/routes";
import LayoutPage from "./feature/Layout/LayoutPage";

export const App = () => (
  <ChakraProvider theme={customTheme}>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <LayoutPage>
                <Home />{" "}
              </LayoutPage>
            }
          />
          <Route path={routes.home} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </ChakraProvider>
);
