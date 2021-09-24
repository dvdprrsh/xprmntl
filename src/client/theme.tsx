import { AnimationOptions, createTheme, easing, ThemeOptions } from "@mui/material";
import { keyframes } from "@mui/styled-engine";

const animations = {
  fadeIn: keyframes`
    from {
      opacity: 0;
    }
  `,
};

const DEFAULT_FONT_FAMILY = ["Gemunu Libre", "sans-serif"].join();

const H1__H4_FONT_FAMILY = ["Stick No Bills", "sans-serif"].join();

const createAnimationGenerator =
  (animation: string, defaults: Partial<AnimationOptions> = {}) =>
  ({
    duration = "1s",
    easing = "",
    delay = "",
    iterationCount = "",
    direction = "",
    fillMode = "",
    playState = "",
  }: AnimationOptions = defaults): string => {
    const durationString = typeof duration === "number" ? `${duration}ms` : duration;
    const delayString = typeof delay === "number" ? `${delay}ms` : delay;
    return `${durationString} ${easing} ${delayString} ${iterationCount} ${direction} ${fillMode} ${playState} ${animation}`;
  };

const theme: ThemeOptions = {
  palette: {
    primary: {
      light: "#6effff",
      main: "#00e8fc",
      dark: "#00b5c9",
      contrastText: "#001d3d",
    },
    secondary: {
      light: "#6bffc4",
      main: "#00fc93",
      dark: "#00c764",
    },
  },
  animations: {
    easing,
    fadeIn: createAnimationGenerator(animations.fadeIn.name),
  },
  typography: {
    fontFamily: DEFAULT_FONT_FAMILY,
    fullWidth: {
      fontFamily: H1__H4_FONT_FAMILY,
      fontSize: "calc(100vw / 4)",
    },
    h1: {
      fontFamily: H1__H4_FONT_FAMILY,
    },
    h2: {
      fontFamily: H1__H4_FONT_FAMILY,
    },
    h3: {
      fontFamily: H1__H4_FONT_FAMILY,
    },
    h4: {
      fontFamily: H1__H4_FONT_FAMILY,
    },
  },
};

export default createTheme(theme);
