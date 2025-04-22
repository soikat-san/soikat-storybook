import { ReactNode, HTMLAttributes } from "react";

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  /** Action node rendered after the message (e.g. a button). */
  action?: ReactNode;
  /** Main content of the alert. */
  children?: ReactNode;
  /** Override or extend CSS classes. */
  classes?: {
    root?: string;
    icon?: string;
    message?: string;
    action?: string;
    closeButton?: string;
  };
  /** Accessible label for the close button. */
  closeText?: string;
  /** Custom CSS color name (e.g. from your theme). */
  color?: string;
  /** Override the icon; set to `false` to hide icon entirely. */
  icon?: ReactNode | false;
  /** Map severity → custom icon. */
  iconMapping?: {
    error?: ReactNode;
    info?: ReactNode;
    success?: ReactNode;
    warning?: ReactNode;
  };
  /** Called when the alert should close (only renders default close button if no `action`). */
  onClose?: (event: React.SyntheticEvent) => void;
  /** ARIA role, defaults to "alert". */
  role?: string;
  /** One of 'error' | 'info' | 'success' | 'warning' | custom. */
  severity?: "error" | "info" | "success" | "warning" | string;
  /** One of 'standard' | 'outlined' | 'filled'. */
  variant?: "standard" | "outlined" | "filled" | string;
}

export interface AlertTitleProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  classes?: {
    root?: string;
  };
}
