import { ReactNode, ElementType, HTMLAttributes } from "react";

export interface ButtonGroupProps extends HTMLAttributes<HTMLElement> {
  /**
   * The content of the component.
   */
  children?: ReactNode;

  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Record<string, string>;

  /**
   * The color of the component.
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
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component?: ElementType;

  /**
   * If true, the component is disabled.
   */
  disabled?: boolean;

  /**
   * If true, no elevation is used.
   */
  disableElevation?: boolean;

  /**
   * If true, the button keyboard focus ripple is disabled.
   */
  disableFocusRipple?: boolean;

  /**
   * If true, the button ripple effect is disabled.
   */
  disableRipple?: boolean;

  /**
   * If true, the buttons will take up the full width of its container.
   */
  fullWidth?: boolean;

  /**
   * The component orientation (layout flow direction).
   */
  orientation?: "horizontal" | "vertical";

  /**
   * The size of the component.
   */
  size?: "small" | "medium" | "large" | string;

  /**
   * The variant to use.
   */
  variant?: "contained" | "outlined" | "text" | string;
}
