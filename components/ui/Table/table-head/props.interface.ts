import { ReactNode, ElementType, HTMLAttributes } from "react";

export interface TableHeadProps extends HTMLAttributes<HTMLElement> {
  /**
   * The content of the component, normally TableRow.
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
}
