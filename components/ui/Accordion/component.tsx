"use client";

import React, { createContext, useContext, useState } from "react";
import {
  AccordionProps,
  AccordionSummaryProps,
  AccordionDetailsProps,
  AccordionActionsProps,
} from "./props.interface";
import "./styles.css";

/** Accordion Context for internal state sharing */
interface AccordionContextProps {
  expanded: boolean;
  disabled: boolean;
  toggle: (event: React.SyntheticEvent) => void;
}

const AccordionContext = createContext<AccordionContextProps>({
  expanded: false,
  disabled: false,
  toggle: () => {},
});

/** Base implementations for each component */

/**
 * Because we're polymorphic, we use the helper type `ElementRef<E>`
 * so that if `E` is "div" => the ref is `HTMLDivElement`
 */
type ElementRef<E extends React.ElementType> =
  React.ComponentPropsWithRef<E> extends React.ClassAttributes<infer T>
    ? T
    : never;

// Accordion base
function AccordionBase<E extends React.ElementType = "div">(
  props: AccordionProps<E>,
  ref: React.ForwardedRef<ElementRef<E>>
) {
  const {
    children,
    defaultExpanded = false,
    disabled = false,
    disableGutters = false,
    expanded: expandedProp,
    onChange,
    classes,
    square = false,
    as,
    ...other
  } = props;
  const Component = as || "div";

  const [expanded, setExpanded] = useState(defaultExpanded);
  const isControlled = expandedProp !== undefined;
  const expandedValue = isControlled ? expandedProp : expanded;

  const toggle = (event: React.SyntheticEvent) => {
    if (disabled) return;
    const newExpanded = !expandedValue;
    if (!isControlled) {
      setExpanded(newExpanded);
    }
    if (onChange) onChange(event, newExpanded);
  };

  return (
    <Component
      ref={ref}
      className={`accordion ${classes?.root ?? ""} ${
        expandedValue ? classes?.expanded ?? "" : ""
      } ${disabled ? classes?.disabled ?? "" : ""} ${
        disableGutters ? "disable-gutters" : ""
      } ${square ? "square" : ""}`}
      {...other}
    >
      <AccordionContext.Provider
        value={{ expanded: expandedValue, disabled, toggle }}
      >
        {children}
      </AccordionContext.Provider>
    </Component>
  );
}

// AccordionSummary base
function AccordionSummaryBase<E extends React.ElementType = "div">(
  props: AccordionSummaryProps<E>,
  ref: React.ForwardedRef<ElementRef<E>>
) {
  const {
    children,
    classes,
    expandIcon,
    focusVisibleClassName,
    slotProps,
    slots,
    as,
    ...other
  } = props;
  const Component = as || "div";
  const { expanded, toggle, disabled } = useContext(AccordionContext);

  const handleClick = (event: React.SyntheticEvent) => {
    if (disabled) return;
    toggle(event);
  };

  return (
    <Component
      ref={ref}
      className={`accordion-summary ${classes?.root ?? ""} ${
        focusVisibleClassName ?? ""
      }`}
      onClick={handleClick}
      {...other}
    >
      <div className={`accordion-summary-content ${classes?.content ?? ""}`}>
        {children}
      </div>
      {expandIcon && (
        <div
          className={`accordion-summary-expand-icon ${
            classes?.expandIcon ?? ""
          }`}
        >
          {expandIcon}
        </div>
      )}
    </Component>
  );
}

// AccordionDetails base
function AccordionDetailsBase<E extends React.ElementType = "div">(
  props: AccordionDetailsProps<E>,
  ref: React.ForwardedRef<ElementRef<E>>
) {
  const { children, classes, as, ...other } = props;
  const Component = as || "div";
  const { expanded } = useContext(AccordionContext);

  return (
    <Component
      ref={ref}
      className={`accordion-details ${classes?.root ?? ""} ${
        expanded ? "expanded" : "collapsed"
      }`}
      {...other}
    >
      {children}
    </Component>
  );
}

// AccordionActions base
function AccordionActionsBase<E extends React.ElementType = "div">(
  props: AccordionActionsProps<E>,
  ref: React.ForwardedRef<ElementRef<E>>
) {
  const { children, classes, disableSpacing = false, as, ...other } = props;
  const Component = as || "div";

  return (
    <Component
      ref={ref}
      className={`accordion-actions ${classes?.root ?? ""} ${
        disableSpacing ? "disable-spacing" : ""
      }`}
      {...other}
    >
      {children}
    </Component>
  );
}

/**
 * Type aliases for polymorphic forwardRef components.
 * e.g., allows: <Accordion as="section" ... /> or <Accordion<'section'> ... />
 */
type AccordionComponent = <E extends React.ElementType = "div">(
  props: AccordionProps<E> & { ref?: React.Ref<ElementRef<E>> }
) => React.ReactElement | null;

type AccordionSummaryComponent = <E extends React.ElementType = "div">(
  props: AccordionSummaryProps<E> & { ref?: React.Ref<ElementRef<E>> }
) => React.ReactElement | null;

type AccordionDetailsComponent = <E extends React.ElementType = "div">(
  props: AccordionDetailsProps<E> & { ref?: React.Ref<ElementRef<E>> }
) => React.ReactElement | null;

type AccordionActionsComponent = <E extends React.ElementType = "div">(
  props: AccordionActionsProps<E> & { ref?: React.Ref<ElementRef<E>> }
) => React.ReactElement | null;

/** Export the four components with typed forwardRef */
export const Accordion = React.forwardRef(AccordionBase) as AccordionComponent;
export const AccordionSummary = React.forwardRef(
  AccordionSummaryBase
) as AccordionSummaryComponent;
export const AccordionDetails = React.forwardRef(
  AccordionDetailsBase
) as AccordionDetailsComponent;
export const AccordionActions = React.forwardRef(
  AccordionActionsBase
) as AccordionActionsComponent;
