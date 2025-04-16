import "../styles.css";
import React from "react";
import { ImageListProps } from "./props.interface";

const ImageList: React.FC<ImageListProps> = ({
  children,
  classes = {},
  cols = 2,
  component: Component = "ul",
  gap = 4,
  rowHeight = "auto",
  variant = "standard",
  ...otherProps
}) => {
  // Define inline styles: using grid layout, create cols and gap.
  // If rowHeight is numeric, expose it as a CSS variable.
  const style: React.CSSProperties = {
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
    gap: `${gap}px`,
    ...(rowHeight !== "auto"
      ? {
          "--row-height":
            typeof rowHeight === "number" ? `${rowHeight}px` : rowHeight,
        }
      : {}),
  };

  return (
    <Component
      className={`custom-image-list variant-${variant} ${classes.root || ""}`}
      style={style}
      {...otherProps}
    >
      {children}
    </Component>
  );
};

export default ImageList;
