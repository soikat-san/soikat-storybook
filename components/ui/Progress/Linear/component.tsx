import React from "react";
import "./styles.css";
import { LinearProgressProps } from "./props.interface";

const LinearProgress: React.FC<LinearProgressProps> = (props) => {
  const {
    classes = {},
    color = "primary",
    value,
    valueBuffer,
    variant = "indeterminate",
    ...otherProps
  } = props;

  // Clamp values for determinate calculations.
  const clampedValue =
    value !== undefined ? Math.min(Math.max(value, 0), 100) : 0;
  const clampedBuffer =
    valueBuffer !== undefined ? Math.min(Math.max(valueBuffer, 0), 100) : 0;

  return (
    <div
      className={`linear-progress ${
        classes.root || ""
      } variant-${variant} color-${color}`}
      {...otherProps}
    >
      {variant === "determinate" && (
        <div
          className="linear-bar linear-bar-primary"
          style={{ width: `${clampedValue}%` }}
        />
      )}
      {variant === "buffer" && (
        <>
          {/* Render buffered bar */}
          <div
            className="linear-bar linear-bar-buffer"
            style={{ width: `${clampedBuffer}%` }}
          />
          {/* Render active progress bar (on top) */}
          <div
            className="linear-bar linear-bar-primary"
            style={{ width: `${clampedValue}%` }}
          />
          {/* Render dotted area for the remaining (if any) */}
          <div
            className="linear-bar linear-bar-dotted"
            style={{
              width: `${100 - clampedBuffer}%`,
              left: `${clampedBuffer}%`,
            }}
          />
        </>
      )}
      {(variant === "indeterminate" || variant === "query") && (
        <>
          <div className="linear-bar linear-indeterminate1" />
          <div className="linear-bar linear-indeterminate2" />
        </>
      )}
    </div>
  );
};

export default LinearProgress;
