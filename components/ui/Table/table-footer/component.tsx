"use client";
import "../styles.css";
import React from "react";
import { TableFooterProps } from "./props.interface";

const TableFooter: React.FC<TableFooterProps> = ({
  children,
  classes = {},
  component: Component = "tfoot",
  ...otherProps
}) => {
  const className = ["custom-table-footer", classes.root || ""]
    .filter(Boolean)
    .join(" ");
  return (
    <Component className={className} {...otherProps}>
      {children}
    </Component>
  );
};

export default TableFooter;
