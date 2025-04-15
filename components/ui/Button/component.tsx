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

  // Combine class names according to props.
  const classNames = [
    "custom-button",
    `variant-${variant}`,
    `color-${color}`,
    `size-${size}`,
    fullWidth ? "full-width" : "",
    disabled ? "disabled" : "",
    disableElevation ? "no-elevation" : "",
    classes.root || "", // Allow override from props.
  ]
    .filter(Boolean)
    .join(" ");

  const isDisabled = disabled || Boolean(loading);

  let content;

  // When loading and the indicator is centered, override the content entirely.
  if (loading && loadingPosition === "center") {
    content = loadingIndicator ?? children;
  }
  // When loading and position is either "start" or "end"
  else if (
    loading &&
    (loadingPosition === "start" || loadingPosition === "end")
  ) {
    const renderStartIcon =
      loading && loadingPosition === "start" ? loadingIndicator : startIcon;
    const renderEndIcon =
      loading && loadingPosition === "end" ? loadingIndicator : endIcon;
    content = (
      <>
        {renderStartIcon && (
          <span className="icon-start">{renderStartIcon}</span>
        )}
        {children}
        {renderEndIcon && <span className="icon-end">{renderEndIcon}</span>}
      </>
    );
  }
  // Default rendering when not loading.
  else {
    content = (
      <>
        {startIcon && <span className="icon-start">{startIcon}</span>}
        {children}
        {endIcon && <span className="icon-end">{endIcon}</span>}
      </>
    );
  }

  // Render an anchor element if href is provided.
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

  return (
    <Component className={classNames} disabled={isDisabled} {...otherProps}>
      {content}
    </Component>
  );
};

export default Button;
