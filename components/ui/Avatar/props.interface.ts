/** Avatar component interfaces */
export interface AvatarSlotProps {
  /** Props for the img element slot */
  img?:
    | React.HTMLAttributes<HTMLImageElement>
    | (() => React.HTMLAttributes<HTMLImageElement>);
}

export interface AvatarSlots {
  /** Component for the img element */
  img?: React.ElementType;
}

export interface AvatarProps {
  /** Used in combination with src or srcSet to provide an alt attribute for the rendered img element. */
  alt?: string;
  /** Used to render icon or text elements inside the Avatar if src is not set. */
  children?: React.ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: {
    root?: string;
    img?: string;
  };
  /** The component used for the root node. Either a string to use a HTML element or a component. */
  component?: React.ElementType;
  /** The sizes attribute for the img element. */
  sizes?: string;
  /** The props used for each slot inside. */
  slotProps?: AvatarSlotProps;
  /** The components used for each slot inside. */
  slots?: AvatarSlots;
  /** The src attribute for the img element. */
  src?: string;
  /** The srcSet attribute for the img element. Use this attribute for responsive image display. */
  srcSet?: string;
  /** The shape of the avatar. */
  variant?: "circular" | "rounded" | "square" | string;
}

/** AvatarGroup component interfaces */
export interface AvatarGroupSlotProps {
  /** Props for additional avatar items if needed. */
  additionalAvatar?: React.HTMLAttributes<HTMLElement>;
  /** Props for the surplus slot element */
  surplus?:
    | React.HTMLAttributes<HTMLElement>
    | (() => React.HTMLAttributes<HTMLElement>);
}

export interface AvatarGroupSlots {
  /** Component for the surplus element */
  surplus?: React.ElementType;
}

export interface AvatarGroupProps {
  /** The avatars to stack. */
  children?: React.ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: {
    root?: string;
    avatar?: string;
    surplus?: string;
  };
  /** The component used for the root node. Either a string to use a HTML element or a component. */
  component?: React.ElementType;
  /** Max avatars to show before "+x". */
  max?: number;
  /**
   * Custom renderer of extra avatars.
   * Signature: function(surplus: number) => React.ReactNode
   */
  renderSurplus?: (surplus: number) => React.ReactNode;
  /** The props used for each slot inside. */
  slotProps?: AvatarGroupSlotProps;
  /** The components used for each slot inside. */
  slots?: AvatarGroupSlots;
  /** Spacing between avatars. */
  spacing?: "medium" | "small" | number;
  /** Total number of avatars (used for calculating the number of extra avatars). */
  total?: number;
  /** The variant to use for each avatar. */
  variant?: "circular" | "rounded" | "square" | string;
}
