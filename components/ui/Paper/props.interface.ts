/** Classes that can be overridden or extended */
export interface PaperClasses {
  root?: string;
  elevation?: string;
  outlined?: string;
  rounded?: string;
}

/** Base props for Paper */
export interface PaperPropsBase {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: PaperClasses;
  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: React.ElementType;
  /**
   * Shadow depth (from 0 to 24), corresponding to the elevation.
   */
  elevation?: number;
  /**
   * If true, disables rounded corners.
   */
  square?: boolean;
  /**
   * The variant to use: "elevation" (default) or "outlined".
   */
  variant?: "elevation" | "outlined" | string;
}

/**
 * Polymorphic Paper props that add support for additional props
 * based on the component provided via the component prop.
 */
export type PaperProps<C extends React.ElementType = "div"> = PaperPropsBase & {
  component?: C;
} & Omit<React.ComponentPropsWithoutRef<C>, keyof PaperPropsBase>;
