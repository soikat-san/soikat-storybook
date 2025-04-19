"use client";
import "../styles.css";
import React from "react";
import { TableContainerProps } from "./props.interface";

const TableContainer: React.FC<TableContainerProps> = ({
  children,
  classes = {},
  component: Component = "div",
  ...otherProps
}) => {
  const className = ["custom-table-container", classes.root || ""]
    .filter(Boolean)
    .join(" ");
  return (
    <Component className={className} {...otherProps}>
      {children}
    </Component>
  );
};

export default TableContainer;
