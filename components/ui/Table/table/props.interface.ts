import { ReactNode, ElementType, HTMLAttributes } from "react";

export interface TableProps extends HTMLAttributes<HTMLElement> {
  /**
   * The content of the table, normally TableHead and TableBody.
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
   * Allows TableCells to inherit padding of the Table.
   */
  padding?: "checkbox" | "none" | "normal";

  /**
   * Allows TableCells to inherit size of the Table.
   */
  size?: "medium" | "small" | string;

  /**
   * Set the header sticky.
   */
  stickyHeader?: boolean;
}
