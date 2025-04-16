import "../styles.css";
import React from "react";
import { ImageListItemBarProps } from "./props.interface";

const ImageListItemBar: React.FC<ImageListItemBarProps> = ({
  actionIcon,
  actionPosition = "right",
  classes = {},
  position = "bottom",
  subtitle,
  title,
  component: Component = "div",
  ...otherProps
}) => {
  return (
    <Component
      className={`custom-image-list-item-bar position-${position} ${
        classes.root || ""
      }`}
      {...otherProps}
    >
      <div className="image-list-item-bar-content">
        {actionPosition === "left" && actionIcon && (
          <span className="action-icon">{actionIcon}</span>
        )}
        <div className="text-content">
          {title && <span className="title">{title}</span>}
          {subtitle && <span className="subtitle">{subtitle}</span>}
        </div>
        {actionPosition === "right" && actionIcon && (
          <span className="action-icon">{actionIcon}</span>
        )}
      </div>
    </Component>
  );
};

export default ImageListItemBar;
