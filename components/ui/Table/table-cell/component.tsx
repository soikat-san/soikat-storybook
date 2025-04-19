"use client";
import "../styles.css";
import React from "react";
import { TableCellProps } from "./props.interface";

const TableCell: React.FC<TableCellProps> = ({
  children,
  classes = {},
  align = "left",
  component: Component = "td",
  padding,
  scope,
  size = "medium",
  sortDirection,
  variant = "body",
  ...otherProps
}) => {
  const className = [
    "custom-table-cell",
    `align-${align}`,
    `size-${size}`,
    `variant-${variant}`,
    classes.root || "",
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <Component className={className} scope={scope} {...otherProps}>
      {children}
    </Component>
  );
};

export default TableCell;
