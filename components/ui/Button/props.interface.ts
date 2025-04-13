import { ReactNode, ElementType, HTMLAttributes } from "react";

export interface ButtonProps extends HTMLAttributes<HTMLElement> {
  /**
   * The content of the component.
   */
  children?: ReactNode;

  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Record<string, string>;

  /**
   * The color of the component. It supports both default and custom theme colors.
   */
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
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
   * Element placed after the children.
   */
  endIcon?: ReactNode;

  /**
   * If true, the button will take up the full width of its container.
   */
  fullWidth?: boolean;

  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href?: string;

  /**
   * If true, the loading indicator is visible and the button is disabled.
   */
  loading?: boolean | null;

  /**
   * Element placed before the children if the button is in loading state.
   */
  loadingIndicator?: ReactNode;

  /**
   * The loading indicator can be positioned on the start, end, or the center of the button.
   */
  loadingPosition?: "center" | "end" | "start";

  /**
   * The size of the component.
   */
  size?: "small" | "medium" | "large" | string;

  /**
   * Element placed before the children.
   */
  startIcon?: ReactNode;

  /**
   * The variant to use.
   */
  variant?: "contained" | "outlined" | "text" | string;
}
