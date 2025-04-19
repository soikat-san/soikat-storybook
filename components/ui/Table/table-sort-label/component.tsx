"use client";
import "../styles.css";
import React from "react";
import { TableSortLabelProps } from "./props.interface";

const TableSortLabel: React.FC<TableSortLabelProps> = ({
  active = false,
  children,
  classes = {},
  direction = "asc",
  hideSortIcon = false,
  IconComponent,
  ...otherProps
}) => {
  const className = [
    "custom-table-sort-label",
    active ? "active" : "",
    classes.root || "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={className} {...otherProps}>
      {children}
      {(!hideSortIcon || active) &&
        (IconComponent ? (
          <IconComponent />
        ) : (
          <span className="default-sort-icon">
            {direction === "asc" ? "↑" : "↓"}
          </span>
        ))}
    </span>
  );
};

export default TableSortLabel;
