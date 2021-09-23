import { AnimationOptions, createTheme, easing, ThemeOptions } from "@mui/material";
import { keyframes } from "@mui/styled-engine";

const animations = {
  fadeIn: keyframes`
    from {
      opacity: 0;
    }
  `,
};

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
  animations: {
    easing,
    fadeIn: createAnimationGenerator(animations.fadeIn.name),
  },
};

export default createTheme(theme);
