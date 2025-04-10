/** Base props for the Chip (without element-specific props) */
export interface ChipPropsBase {
  /** The Avatar element to display in the chip. */
  avatar?: React.ReactElement;
  /** Override or extend the styles applied to the component. */
  classes?: {
    root?: string;
    clickable?: string;
    disabled?: string;
    filled?: string;
    outlined?: string;
    label?: string;
    deleteIcon?: string;
    avatar?: string;
    icon?: string;
  };
  /** If true, the chip will appear clickable and will raise when pressed. */
  clickable?: boolean;
  /** The color of the chip. */
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
    | string;
  /** Override the default delete icon element. Shown only if onDelete is set. */
  deleteIcon?: React.ReactElement;
  /** If true, the chip is disabled. */
  disabled?: boolean;
  /** Icon element to display at the start. */
  icon?: React.ReactElement;
  /** The label content of the chip. */
  label?: React.ReactNode;
  /** Callback fired when the delete icon is clicked. */
  onDelete?: (event: React.MouseEvent<HTMLSpanElement>) => void;
  /** Additional onClick handler for the chip component. */
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  /** The size of the chip. */
  size?: "medium" | "small" | string;
  /** If true, allows the disabled chip to escape focus. */
  skipFocusWhenDisabled?: boolean;
  /** The variant to use. */
  variant?: "filled" | "outlined" | string;
}

/**
 * This generic type extends the base ChipProps with the props of the component
 * passed to the `component` prop.
 */
export type ChipProps<C extends React.ElementType = "div"> = ChipPropsBase & {
  component?: C;
} & Omit<React.ComponentPropsWithoutRef<C>, keyof ChipPropsBase | "color">;
