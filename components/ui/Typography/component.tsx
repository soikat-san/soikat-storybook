// Typography.tsx
import React from "react";
import "./styles.css";
import { TypographyProps } from "./props.interface";

const Typography: React.FC<TypographyProps> = ({
  align = "inherit",
  children,
  className = "",
  color = "textPrimary",
  component,
  gutterBottom = false,
  noWrap = false,
  variant = "body1",
  ...rest
}) => {
  const Component = component || "p";

  const knownColors = [
    "primary",
    "secondary",
    "success",
    "error",
    "info",
    "warning",
    "textPrimary",
    "textSecondary",
    "textDisabled",
  ];
  const colorClass = knownColors.includes(color)
    ? `typography-color-${color}`
    : "";

  const classes = [
    className,
    colorClass,
    `typography-align-${align}`,
    noWrap && "typography-noWrap",
    `typography-variant-${variant}`,
    gutterBottom && "typography-gutterBottom",
  ]
    .filter(Boolean)
    .join(" ");

  // Fallback inline style if a custom color value is provided
  const inlineStyle: React.CSSProperties = {};
  if (!colorClass && color) {
    inlineStyle.color = color;
  }

  return (
    <Component className={classes} style={inlineStyle} {...rest}>
      {children}
    </Component>
  );
};

export default Typography;
