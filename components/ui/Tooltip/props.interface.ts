import { ReactNode, HTMLAttributes } from "react";

/**
 * Remove the native HTML `title` so we can redefine it
 * as a ReactNode.
 */
export interface TooltipProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, "title"> {
  /** Tooltip content (required). */
  title: ReactNode;

  /** Adds a little arrow under / next to the tooltip. */
  arrow?: boolean;

  /** Position of the tooltip relative to its child. */
  placement?:
    | "top"
    | "top-start"
    | "top-end"
    | "bottom"
    | "bottom-start"
    | "bottom-end"
    | "left"
    | "left-start"
    | "left-end"
    | "right"
    | "right-start"
    | "right-end";

  /** Exactly one child node that triggers the tooltip. */
  children: ReactNode;
}
