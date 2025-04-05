export type TypographyAlign =
  | "center"
  | "inherit"
  | "justify"
  | "left"
  | "right";

export type TypographyColor =
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "info"
  | "warning"
  | "textPrimary"
  | "textSecondary"
  | "textDisabled"
  | string;

export type TypographyVariant =
  | "body1"
  | "body2"
  | "button"
  | "caption"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "inherit"
  | "overline"
  | "subtitle1"
  | "subtitle2"
  | string;

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  /** Sets the text-align on the component */
  align?: TypographyAlign;
  /** The content of the component */
  children?: React.ReactNode;
  /** Override or extend the styles applied to the component */
  className?: string;
  /** The color of the component */
  color?: TypographyColor;
  /** The component used for the root node */
  component?: React.ElementType;
  /** If true, the text will have a bottom margin */
  gutterBottom?: boolean;
  /** If true, the text will not wrap and will truncate with an ellipsis */
  noWrap?: boolean;
  /** Applies the theme typography styles */
  variant?: TypographyVariant;
  /** External typography styles */
  style?: React.CSSProperties;
}
