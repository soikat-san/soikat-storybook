import { ReactNode, ElementType, HTMLAttributes } from "react";

export interface ImageListProps extends HTMLAttributes<HTMLElement> {
  /**
   * The content of the component, normally ImageListItems.
   */
  children: ReactNode;

  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Record<string, string>;

  /**
   * Number of columns.
   */
  cols?: number;

  /**
   * The component used for the root node.
   */
  component?: ElementType;

  /**
   * The gap between items in pixels.
   */
  gap?: number;

  /**
   * The height of one row (in pixels) or 'auto'.
   */
  rowHeight?: "auto" | number;

  /**
   * The variant to use.
   */
  variant?: "masonry" | "quilted" | "standard" | "woven" | string;
}
