import React from "react";
import "./styles.css";
import { DividerProps } from "./props.interface";

const Divider: React.FC<DividerProps> = (props) => {
  const {
    absolute = false,
    children,
    classes = {},
    component: Component = "hr",
    flexItem = false,
    orientation = "horizontal",
    textAlign = "center",
    variant = "fullWidth",
    ...otherProps
  } = props;

  // Build a set of class names based on the props:
  const classNames = [
    "custom-divider",
    `orientation-${orientation}`,
    `variant-${variant}`,
    absolute ? "absolute" : "",
    flexItem ? "flex-item" : "",
    children ? "with-children" : "",
    classes.root || "",
  ]
    .filter(Boolean)
    .join(" ");

  // If there are children, create a helper class for text alignment.
  const childClassName = children ? `divider-text-${textAlign}` : "";

  return (
    <Component className={classNames} {...otherProps}>
      {children && <span className={childClassName}>{children}</span>}
    </Component>
  );
};

export default Divider;
