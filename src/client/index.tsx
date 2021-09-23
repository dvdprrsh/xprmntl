import { CacheProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import createEmotionCache from "../server/utils/createEmotionCache.util";
import App from "./App";
import theme from "./theme";

const cache = createEmotionCache();

const Main: React.FC = () => {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </CacheProvider>
  );
};

hydrate(<Main />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
