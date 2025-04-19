"use client";
import "../styles.css";
import React from "react";
import { TableRowProps } from "./props.interface";

const TableRow: React.FC<TableRowProps> = ({
  children,
  classes = {},
  component: Component = "tr",
  hover = false,
  selected = false,
  ...otherProps
}) => {
  const className = [
    "custom-table-row",
    hover ? "hover" : "",
    selected ? "selected" : "",
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

export default TableRow;
