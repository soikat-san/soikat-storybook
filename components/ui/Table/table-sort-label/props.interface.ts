import { ReactNode, ElementType, HTMLAttributes } from "react";

export interface TableSortLabelProps extends HTMLAttributes<HTMLElement> {
  /**
   * If true, the label will have the active styling.
   */
  active?: boolean;
  /**
   * Label contents, the arrow will be appended automatically.
   */
  children?: ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Record<string, string>;
  /**
   * The current sort direction.
   */
  direction?: "asc" | "desc";
  /**
   * Hide sort icon when active is false.
   */
  hideSortIcon?: boolean;
  /**
   * Sort icon to use.
   */
  IconComponent?: ElementType;
  // Slots and slotProps can be defined as needed.
}
