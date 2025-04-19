import { ReactNode, ElementType, HTMLAttributes } from "react";

export interface TablePaginationProps extends HTMLAttributes<HTMLElement> {
  /**
   * The total number of rows.
   */
  count: number;
  /**
   * Callback fired when the page is changed.
   */
  onPageChange: (event: React.MouseEvent | null, page: number) => void;
  /**
   * The zero-based index of the current page.
   */
  page: number;
  /**
   * The number of rows per page.
   */
  rowsPerPage: number;
  /**
   * The component used for displaying the actions.
   */
  ActionsComponent?: ElementType;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Record<string, string>;
  /**
   * The component used for the root node.
   */
  component?: ElementType;
  /**
   * If true, the pagination is disabled.
   */
  disabled?: boolean;
  /**
   * Accepts a function which returns a user-friendly name for the current page.
   */
  getItemAriaLabel?: (type: string) => string;
  /**
   * Customize the displayed rows label.
   */
  labelDisplayedRows?: (paginationInfo: {
    from: number;
    to: number;
    count: number;
    page: number;
  }) => string;
  /**
   * Customize the rows per page label.
   */
  labelRowsPerPage?: ReactNode;
  /**
   * Callback fired when the number of rows per page is changed.
   */
  onRowsPerPageChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * The options of the rows per page select field.
   */
  rowsPerPageOptions?: Array<number | { label: string; value: number }>;
  /**
   * Show the first-page button.
   */
  showFirstButton?: boolean;
  /**
   * Show the last-page button.
   */
  showLastButton?: boolean;
  // Slots and slotProps can be further defined as needed.
}
