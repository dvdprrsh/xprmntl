import { Easing } from "@mui/material";
import { LiteralUnion } from "type-fest";

declare module "@mui/material/styles" {
  interface AnimationOptions {
    duration?: number | string;
    easing?: LiteralUnion<"ease" | "ease-in" | "ease-out" | "ease-in-out", string>;
    delay?: number | string;
    iterationCount?: number | string;
    direction?: LiteralUnion<"normal" | "reverse" | "alternate" | "alternate-reverse", string>;
    fillMode?: LiteralUnion<"none" | "forwards" | "backwards" | "both", string>;
    playState?: LiteralUnion<"running" | "paused", string>;
  }

  interface CustomThemeOptions {
    animations: {
      easing: Easing;
      fadeIn(options?: AnimationOptions): string;
    };
  }

  interface Theme extends Required<CustomThemeOptions> {}

  interface ThemeOptions extends Required<CustomThemeOptions> {}
}
