import React from "react";
import { PaperProps } from "./props.interface";
import "./styles.css";

/**
 * A polymorphic Paper component similar to MUI's Paper.
 * By default, it renders as a <div>, but you can override this
 * via the component prop.
 */
const Paper = <C extends React.ElementType = "div">(props: PaperProps<C>) => {
  const {
    children,
    classes = {},
    component,
    elevation = 1,
    square = false,
    variant = "elevation",
    ...other
  } = props;

  // Build a list of CSS class names using generic names.
  const classNames = ["paper-root"];

  // Add rounded styling unless square is true.
  if (!square) {
    classNames.push("paper-rounded");
  }

  // Variant-based styling: outlined or elevation.
  if (variant === "outlined") {
    classNames.push("paper-outlined");
  } else {
    // Clamp elevation between 0 and 24.
    const elev = Math.max(0, Math.min(elevation, 24));
    classNames.push(`paper-elevation${elev}`);
  }

  // Merge any user-defined root classes.
  if (classes.root) {
    classNames.push(classes.root);
  }

  // Instead of using Component as the variable name, we rename it to RootComponent.
  const RootComponent = (component || "div") as React.ElementType;

  return (
    <RootComponent className={classNames.join(" ")} {...other}>
      {children}
    </RootComponent>
  );
};

export default Paper;
