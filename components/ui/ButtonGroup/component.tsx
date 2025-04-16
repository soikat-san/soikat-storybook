"use client";
import "./styles.css";
import React, { createContext } from "react";
import { ButtonGroupProps } from "./props.interface";
import { ButtonProps } from "@/components/ui/Button/props.interface";

// Define a context type for shared group props.
export interface ButtonGroupContextProps {
  variant?: string;
  disabled?: boolean;
}

// Create the context with default values.
export const ButtonGroupContext = createContext<ButtonGroupContextProps>({});

const ButtonGroup: React.FC<ButtonGroupProps> = (props) => {
  const {
    children,
    classes = {},
    color = "primary",
    component: Component = "div",
    disabled = false,
    disableElevation = false,
    disableFocusRipple = false,
    disableRipple = false,
    fullWidth = false,
    orientation = "horizontal",
    size = "medium",
    variant = "outlined",
    ...otherProps
  } = props;

  // Combine class names.
  const classNames = [
    "custom-button-group",
    `orientation-${orientation}`,
    `color-${color}`,
    `size-${size}`,
    `variant-${variant}`,
    fullWidth ? "full-width" : "",
    disabled ? "disabled" : "",
    disableElevation ? "no-elevation" : "",
    disableFocusRipple ? "disable-focus-ripple" : "",
    disableRipple ? "disable-ripple" : "",
    classes.root || "",
  ]
    .filter(Boolean)
    .join(" ");

  // Clone each child to inject the group's size, color, and variant if not explicitly provided.
  const clonedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      const buttonChild = child as React.ReactElement<ButtonProps>;
      return React.cloneElement(buttonChild, {
        size: buttonChild.props.size || size,
        color: buttonChild.props.color || color,
        variant: buttonChild.props.variant || variant,
      });
    }
    return child;
  });

  // Provide the group variant (and disabled state if desired) to child buttons.
  return (
    <ButtonGroupContext.Provider value={{ variant, disabled }}>
      <Component className={classNames} {...otherProps}>
        {clonedChildren}
      </Component>
    </ButtonGroupContext.Provider>
  );
};

export default ButtonGroup;
