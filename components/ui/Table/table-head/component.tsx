"use client";
import "../styles.css";
import React from "react";
import { TableHeadProps } from "./props.interface";

const TableHead: React.FC<TableHeadProps> = ({
  children,
  classes = {},
  component: Component = "thead",
  ...otherProps
}) => {
  const className = ["custom-table-head", classes.root || ""]
    .filter(Boolean)
    .join(" ");
  return (
    <Component className={className} {...otherProps}>
      {children}
    </Component>
  );
};

export default TableHead;
