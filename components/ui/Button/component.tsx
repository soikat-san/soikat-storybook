import React from "react";
import { ButtonProps } from "./props.interface";
import "./styles.css";

const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    classes = {},
    color = "primary",
    component: Component = "button",
    disabled = false,
    disableElevation = false,
    endIcon,
    fullWidth = false,
    href,
    loading = null,
    loadingIndicator,
    loadingPosition = "center",
    size = "medium",
    startIcon,
    variant = "text",
    ...otherProps
  } = props;

  // Combine class names according to props
  const classNames = [
    "custom-button",
    `variant-${variant}`,
    `color-${color}`,
    `size-${size}`,
    fullWidth ? "full-width" : "",
    disabled ? "disabled" : "",
    disableElevation ? "no-elevation" : "",
    classes.root || "", // Allow override from props
  ]
    .filter(Boolean)
    .join(" ");

  const isDisabled = disabled || Boolean(loading);

  // Determine what to render as button content (icons / loading)
  let content;
  if (loading) {
    // We show loading indicator or children in different positions
    if (loadingPosition === "start") {
      content = (
        <>
          {loadingIndicator}
          {children}
        </>
      );
    } else if (loadingPosition === "end") {
      content = (
        <>
          {children}
          {loadingIndicator}
        </>
      );
    } else {
      // center
      content = loadingIndicator ?? children;
    }
  } else {
    // Not loading: show icons + children
    content = (
      <>
        {startIcon && <span className="icon-start">{startIcon}</span>}
        {children}
        {endIcon && <span className="icon-end">{endIcon}</span>}
      </>
    );
  }

  // If `href` is provided, render an anchor element
  if (href) {
    return (
      <a
        className={classNames}
        href={href}
        aria-disabled={isDisabled}
        {...otherProps}
      >
        {content}
      </a>
    );
  }

  // Otherwise, render a regular (or custom) component
  return (
    <Component className={classNames} disabled={isDisabled} {...otherProps}>
      {content}
    </Component>
  );
};

export default Button;
