import "../styles.css";
import React from "react";
import { ImageListItemProps } from "./props.interface";

const ImageListItem: React.FC<ImageListItemProps> = ({
  children,
  classes = {},
  cols = 1,
  component: Component = "li",
  rows = 1,
  ...otherProps
}) => {
  // Using CSS Grid, we set gridColumnEnd & gridRowEnd to span the desired number of columns/rows.
  const style: React.CSSProperties = {
    gridColumnEnd: `span ${cols}`,
    gridRowEnd: `span ${rows}`,
  };

  return (
    <Component
      className={`custom-image-list-item ${classes.root || ""}`}
      style={style}
      {...otherProps}
    >
      {children}
    </Component>
  );
};

export default ImageListItem;
