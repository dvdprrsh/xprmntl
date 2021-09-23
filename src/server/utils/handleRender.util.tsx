import { CacheProvider } from "@emotion/react";
import createEmotionServer from "@emotion/server/create-instance";
import { CssBaseline, ThemeProvider } from "@mui/material";
import App from "client/App";
import theme from "client/theme";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import createEmotionCache from "./createEmotionCache.util";

const handleRender = (location: string): { html: string; css: string } => {
  const cache = createEmotionCache();
  const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(cache);

  const markup = renderToString(
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <StaticRouter location={location}>
          <App />
        </StaticRouter>
      </ThemeProvider>
    </CacheProvider>,
  );

  const emotionChunks = extractCriticalToChunks(markup);
  const emotionCss = constructStyleTagsFromChunks(emotionChunks);

  return {
    html: markup,
    css: emotionCss,
  };
};

export default handleRender;
