import { ReactNode, ElementType, HTMLAttributes } from "react";

export interface ImageListItemProps extends HTMLAttributes<HTMLElement> {
  /**
   * The content of the component, normally an <img>.
   */
  children: ReactNode;

  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Record<string, string>;

  /**
   * Width of the item in number of grid columns.
   */
  cols?: number;

  /**
   * The component used for the root node.
   */
  component?: ElementType;

  /**
   * Height of the item in number of grid rows.
   */
  rows?: number;
}
