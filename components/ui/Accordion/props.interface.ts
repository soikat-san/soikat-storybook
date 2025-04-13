import React from "react";

/** A helper to correctly infer the type of the underlying DOM node from an ElementType */
type ElementRef<E extends React.ElementType> =
  // If E is e.g. 'div', then ComponentPropsWithRef<E> is
  //   DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & { ref?: ForwardedRef<HTMLDivElement> }
  // So we extract the 'T' inside React.ClassAttributes<T> => T = HTMLDivElement
  React.ComponentPropsWithRef<E> extends React.ClassAttributes<infer T>
    ? T
    : never;

/** We can expose this for re-use if desired */
export type PolymorphicRef<E extends React.ElementType> = React.Ref<
  ElementRef<E>
>;

/**
 * Polymorphic component props helper.
 *
 * We do *not* wrap in React.PropsWithChildren because we rely on your
 * custom interfaces each including `children`.
 */
export type PolymorphicComponentProps<E extends React.ElementType, P> = P & {
  as?: E;
  ref?: PolymorphicRef<E>;
} & Omit<React.ComponentPropsWithoutRef<E>, keyof P | "as" | "ref">;

/** Accordion Props */
export interface AccordionComponentProps {
  children: React.ReactNode;
  classes?: {
    root?: string;
    expanded?: string;
    disabled?: string;
    gutters?: string;
    square?: string;
  };
  defaultExpanded?: boolean;
  disabled?: boolean;
  disableGutters?: boolean;
  expanded?: boolean;
  onChange?: (event: React.SyntheticEvent, expanded: boolean) => void;
  slotProps?: {
    heading?: any;
    root?: any;
    transition?: any;
  };
  slots?: {
    heading?: React.ElementType;
    root?: React.ElementType;
    transition?: React.ElementType;
  };
  square?: boolean;
}
export type AccordionProps<E extends React.ElementType = "div"> =
  PolymorphicComponentProps<E, AccordionComponentProps>;

/** Accordion Summary Props */
export interface AccordionSummaryComponentProps {
  children: React.ReactNode;
  classes?: {
    root?: string;
    content?: string;
    expandIcon?: string;
  };
  expandIcon?: React.ReactNode;
  focusVisibleClassName?: string;
  slotProps?: {
    content?: any;
    expandIconWrapper?: any;
    root?: any;
  };
  slots?: {
    content?: React.ElementType;
    expandIconWrapper?: React.ElementType;
    root?: React.ElementType;
  };
}
export type AccordionSummaryProps<E extends React.ElementType = "div"> =
  PolymorphicComponentProps<E, AccordionSummaryComponentProps>;

/** Accordion Details Props */
export interface AccordionDetailsComponentProps {
  children: React.ReactNode;
  classes?: {
    root?: string;
  };
}
export type AccordionDetailsProps<E extends React.ElementType = "div"> =
  PolymorphicComponentProps<E, AccordionDetailsComponentProps>;

/** Accordion Actions Props */
export interface AccordionActionsComponentProps {
  children: React.ReactNode;
  classes?: {
    root?: string;
    disableSpacing?: string;
  };
  disableSpacing?: boolean;
}
export type AccordionActionsProps<E extends React.ElementType = "div"> =
  PolymorphicComponentProps<E, AccordionActionsComponentProps>;
