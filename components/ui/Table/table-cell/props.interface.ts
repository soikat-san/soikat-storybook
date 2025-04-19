import { ReactNode, ElementType, HTMLAttributes } from "react";

export interface TableCellProps extends HTMLAttributes<HTMLElement> {
  /**
   * Set the text-align on the table cell content.
   */
  align?: "center" | "inherit" | "justify" | "left" | "right";
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
   */
  component?: ElementType;
  /**
   * Sets the padding applied to the cell.
   */
  padding?: "checkbox" | "none" | "normal";
  /**
   * Set scope attribute.
   */
  scope?: string;
  /**
   * Specify the size of the cell.
   */
  size?: "medium" | "small" | string;
  /**
   * Set aria-sort direction.
   */
  sortDirection?: "asc" | "desc" | false;
  /**
   * Specify the cell type.
   */
  variant?: "body" | "footer" | "head" | string;
}
