import { ReactNode, ElementType, HTMLAttributes } from "react";

export interface DividerProps extends HTMLAttributes<HTMLElement> {
  /**
   * Absolutely position the element.
   */
  absolute?: boolean;
  /**
   * The content of the component.
   */
  children?: ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Record<string, string>;
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component?: ElementType;
  /**
   * If true, a vertical divider will have the correct height when used in a flex container.
   */
  flexItem?: boolean;
  /**
   * The component orientation.
   */
  orientation?: "horizontal" | "vertical";
  /**
   * The text alignment (for dividers that display content).
   */
  textAlign?: "center" | "left" | "right";
  /**
   * The variant to use.
   */
  variant?: "fullWidth" | "inset" | "middle" | string;
}
