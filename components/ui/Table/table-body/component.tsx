"use client";
import "../styles.css";
import React from "react";
import { TableBodyProps } from "./props.interface";

const TableBody: React.FC<TableBodyProps> = ({
  children,
  classes = {},
  component: Component = "tbody",
  ...otherProps
}) => {
  const className = ["custom-table-body", classes.root || ""]
    .filter(Boolean)
    .join(" ");
  return (
    <Component className={className} {...otherProps}>
      {children}
    </Component>
  );
};

export default TableBody;
