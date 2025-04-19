"use client";
import "../styles.css";
import React from "react";
import { TableProps } from "./props.interface";

const Table: React.FC<TableProps> = ({
  children,
  classes = {},
  component: Component = "table",
  padding = "normal",
  size = "medium",
  stickyHeader = false,
  ...otherProps
}) => {
  const className = [
    "custom-table",
    stickyHeader ? "sticky-header" : "",
    `padding-${padding}`,
    `size-${size}`,
    classes.root || "",
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <Component className={className} {...otherProps}>
      {children}
    </Component>
  );
};

export default Table;
