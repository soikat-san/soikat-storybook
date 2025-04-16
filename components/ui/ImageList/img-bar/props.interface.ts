import { ReactNode, ElementType, HTMLAttributes } from "react";

export interface ImageListItemBarProps
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  /**
   * An IconButton element to be used as secondary action target (primary action target is the item itself).
   */
  actionIcon?: ReactNode;

  /**
   * Position of secondary action IconButton.
   */
  actionPosition?: "left" | "right";

  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Record<string, string>;

  /**
   * Position of the title bar.
   */
  position?: "below" | "bottom" | "top";

  /**
   * Subtitle to be displayed (support text).
   */
  subtitle?: ReactNode;

  /**
   * Title to be displayed.
   */
  title?: ReactNode;

  /**
   * The component used for the root node.
   */
  component?: ElementType;
}
