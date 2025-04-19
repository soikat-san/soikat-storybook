"use client";
import "../styles.css";
import React from "react";
import { TablePaginationProps } from "./props.interface";

const TablePagination: React.FC<TablePaginationProps> = ({
  count,
  onPageChange,
  page,
  rowsPerPage,
  ActionsComponent,
  classes = {},
  component: Component = "div",
  disabled = false,
  getItemAriaLabel,
  labelDisplayedRows,
  labelRowsPerPage = "Rows per page:",
  onRowsPerPageChange,
  rowsPerPageOptions = [10, 25, 50, 100],
  showFirstButton = false,
  showLastButton = false,
  ...otherProps
}) => {
  // For brevity, this is a very simplified version.
  // In a real implementation you would include buttons with click handlers.
  const className = ["custom-table-pagination", classes.root || ""]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={className} {...otherProps}>
      <span>{labelRowsPerPage}</span>
      {/* Render current page info */}
      <span>{`Page ${page + 1} of ${Math.ceil(count / rowsPerPage)}`}</span>
      {/* Render basic navigation buttons */}
      <button
        disabled={disabled || page === 0}
        onClick={(e) => onPageChange(e, page - 1)}
      >
        Prev
      </button>
      <button
        disabled={disabled || page >= Math.ceil(count / rowsPerPage) - 1}
        onClick={(e) => onPageChange(e, page + 1)}
      >
        Next
      </button>
    </Component>
  );
};

export default TablePagination;
