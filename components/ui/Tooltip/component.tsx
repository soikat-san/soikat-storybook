"use client";
import React, { useState, useId } from "react";
import { TooltipProps } from "./props.interface";
import "./styles.css";

const Tooltip: React.FC<TooltipProps> = ({
  children,
  title,
  arrow = false,
  placement = "bottom",
  ...rest
}) => {
  const [open, setOpen] = useState(false);
  const id = useId(); // accessibility id

  // Build class names for placement & arrow
  const tooltipClass = [
    "tooltip-box",
    `placement-${placement}`,
    arrow ? "with-arrow" : "",
    open ? "open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span
      className="tooltip-wrapper"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      aria-describedby={id}
      {...rest}
    >
      {children}
      {title && (
        <span id={id} role="tooltip" className={tooltipClass}>
          {title}
          {arrow && <span className="tooltip-arrow" />}
        </span>
      )}
    </span>
  );
};

export default Tooltip;
