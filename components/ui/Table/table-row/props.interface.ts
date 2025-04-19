import { ReactNode, ElementType, HTMLAttributes } from "react";

export interface TableRowProps extends HTMLAttributes<HTMLElement> {
  /**
   * Should be valid <tr> children such as TableCell.
   */
  children: ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Record<string, string>;
  /**
   * The component used for the root node.
   */
  component?: ElementType;
  /**
   * If true, the table row will shade on hover.
   */
  hover?: boolean;
  /**
   * If true, the table row will have the selected shading.
   */
  selected?: boolean;
}
