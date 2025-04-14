import { HTMLAttributes } from "react";

export interface CircularProgressProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Record<string, string>;

  /**
   * The color of the component. Supports default and custom theme colors.
   */
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
    | string;

  /**
   * If true, the shrink animation is disabled (for indeterminate variant).
   */
  disableShrink?: boolean;

  /**
   * The size of the component. When a number is provided, 'px' is assumed.
   */
  size?: number | string;

  /**
   * The thickness of the circle.
   */
  thickness?: number;

  /**
   * The value for determinate variant (0 to 100).
   */
  value?: number;

  /**
   * The variant to use.
   */
  variant?: "determinate" | "indeterminate";
}
