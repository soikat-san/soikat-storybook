// component.tsx
"use client";
import React from "react";
import { AlertProps, AlertTitleProps } from "./props.interface";
import "./styles.css";

/** Only these four strings are valid keys for our icon mappings */
const KNOWN_SEVERITIES = ["error", "info", "success", "warning"] as const;
type KnownSeverity = (typeof KNOWN_SEVERITIES)[number];

/** Default SVG icons for each severity */
const defaultIconMapping: Record<KnownSeverity, React.ReactNode> = {
  success: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 16.2l-3.5-3.5L4 14l5 5 12-12-1.5-1.5z" />
    </svg>
  ),
  info: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
    </svg>
  ),
  warning: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
    </svg>
  ),
  error: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" />
    </svg>
  ),
};

/** Title sub‑component */
export const AlertTitle: React.FC<AlertTitleProps> = ({
  children,
  classes = {},
  ...rest
}) => (
  <div className={`custom-alert-title ${classes.root || ""}`} {...rest}>
    {children}
  </div>
);

/** Main Alert component */
const Alert: React.FC<AlertProps> = ({
  action,
  children,
  classes = {},
  closeText = "Close",
  color,
  icon,
  iconMapping = {},
  onClose,
  role = "alert",
  severity = "success",
  variant = "standard",
  ...rest
}) => {
  // 1) Determine the “raw” severity (fallback to "info" if invalid)
  const rawSeverity: KnownSeverity = KNOWN_SEVERITIES.includes(
    severity as KnownSeverity
  )
    ? (severity as KnownSeverity)
    : "info";

  // 2) Override styling severity with `color` prop if it matches one of our known keys
  const styleSeverity: KnownSeverity =
    color && KNOWN_SEVERITIES.includes(color as KnownSeverity)
      ? (color as KnownSeverity)
      : rawSeverity;

  // 3) If `color` is custom (not one of our known severities), emit a custom class
  const customColorClass =
    color && !KNOWN_SEVERITIES.includes(color as KnownSeverity)
      ? `custom-alert-color-${color}`
      : "";

  // 4) Choose the icon (severity-based, not color-based)
  const showIcon =
    icon === false
      ? null
      : icon || iconMapping[rawSeverity] || defaultIconMapping[rawSeverity];

  // 5) Should we render a default close button?
  const showClose = !!onClose && !action;

  // 6) Build our class list:
  const rootClasses = [
    "custom-alert-root",
    `custom-alert-${variant}`, // e.g. “custom-alert-filled”
    `custom-alert-${styleSeverity}`, // severity or overridden via color
    customColorClass, // for truly custom colors
    classes.root, // user overrides
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div role={role} className={rootClasses} {...rest}>
      {showIcon && (
        <span className={`custom-alert-icon ${classes.icon || ""}`}>
          {showIcon}
        </span>
      )}

      <div className={`custom-alert-message ${classes.message || ""}`}>
        {children}
      </div>

      {action && (
        <div className={`custom-alert-action ${classes.action || ""}`}>
          {action}
        </div>
      )}

      {showClose && (
        <button
          className={`custom-alert-close-button ${classes.closeButton || ""}`}
          aria-label={closeText}
          onClick={onClose}
        >
          ×
        </button>
      )}
    </div>
  );
};

export default Alert;
