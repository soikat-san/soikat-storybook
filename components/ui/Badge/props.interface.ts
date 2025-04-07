export interface BadgeAnchorOrigin {
  horizontal?: "left" | "right";
  vertical?: "bottom" | "top";
}

export interface BadgeClasses {
  root?: string;
  badge?: string;
}

export interface BadgeSlotProps {
  badge?:
    | React.HTMLAttributes<HTMLElement>
    | (() => React.HTMLAttributes<HTMLElement>);
  root?:
    | React.HTMLAttributes<HTMLElement>
    | (() => React.HTMLAttributes<HTMLElement>);
}

export interface BadgeSlots {
  badge?: React.ElementType;
  root?: React.ElementType;
}

export interface BadgeProps {
  /** The anchor of the badge. */
  anchorOrigin?: BadgeAnchorOrigin;
  /** The content rendered within the badge. */
  badgeContent?: React.ReactNode;
  /** The badge will be added relative to this node. */
  children?: React.ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: BadgeClasses;
  /** The color of the component. It supports both default and custom theme colors. */
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
    | string;
  /** The component used for the root node. */
  component?: React.ElementType;
  /** If true, the badge is invisible. */
  invisible?: boolean;
  /** Max count to show. */
  max?: number;
  /** Wrapped shape the badge should overlap. */
  overlap?: "circular" | "rectangular";
  /** Controls whether the badge is hidden when badgeContent is zero. */
  showZero?: boolean;
  /** The props used for each slot inside the Badge. */
  slotProps?: BadgeSlotProps;
  /** The components used for each slot inside the Badge. */
  slots?: BadgeSlots;
  /** The variant to use. */
  variant?: "dot" | "standard" | string;
}
