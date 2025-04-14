import React from "react";
import "./styles.css";
import { CircularProgressProps } from "./props.interface";

const CircularProgress: React.FC<CircularProgressProps> = (props) => {
  const {
    classes = {},
    color = "primary",
    disableShrink = false,
    size = 40,
    thickness = 3.6,
    value = 0,
    variant = "indeterminate",
    ...otherProps
  } = props;

  // If size is a number, assume 'px', otherwise use the string directly.
  const sizeStr = typeof size === "number" ? `${size}px` : size;
  // For simplicity, we use parseFloat to compute the numeric size.
  const numericSize = parseFloat(sizeStr);
  const radius = (numericSize - thickness) / 2;
  const circumference = 2 * Math.PI * radius;
  // Clamp and compute stroke-dashoffset for determinate progress.
  const clampedValue = Math.min(Math.max(value, 0), 100);
  const dashOffset =
    variant === "determinate"
      ? ((100 - clampedValue) / 100) * circumference
      : undefined;

  return (
    <div
      className={`circular-progress ${
        classes.root || ""
      } variant-${variant} color-${color}`}
      style={{ width: sizeStr, height: sizeStr }}
      {...otherProps}
    >
      <svg
        className="circular-svg"
        viewBox={`0 0 ${numericSize} ${numericSize}`}
      >
        {/* Background circle */}
        <circle
          className="circular-background"
          cx={numericSize / 2}
          cy={numericSize / 2}
          r={radius}
          fill="none"
          strokeWidth={thickness}
        />
        {/* Progress indicator */}
        <circle
          className={`circular-indicator ${
            disableShrink ? "disable-shrink" : ""
          }`}
          cx={numericSize / 2}
          cy={numericSize / 2}
          r={radius}
          fill="none"
          strokeWidth={thickness}
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          style={
            variant === "determinate"
              ? { transition: "stroke-dashoffset 0.35s" }
              : {}
          }
        />
      </svg>
    </div>
  );
};

export default CircularProgress;
