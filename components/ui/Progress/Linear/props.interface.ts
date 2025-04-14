import { HTMLAttributes } from "react";

export interface LinearProgressProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Record<string, string>;

  /**
   * The color of the component.
   */
  color?: "inherit" | "primary" | "secondary" | string;

  /**
   * The value of the progress indicator (0 to 100) for determinate and buffer variants.
   */
  value?: number;

  /**
   * The value for the buffer variant (0 to 100).
   */
  valueBuffer?: number;

  /**
   * The variant to use.
   */
  variant?: "buffer" | "determinate" | "indeterminate" | "query";
}
