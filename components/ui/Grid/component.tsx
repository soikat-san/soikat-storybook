import "./styles.css";
import React, { useMemo } from "react";
import { GridProps } from "./props.interface";

interface EnhancedGridProps extends GridProps {
  className?: string;
  style?: React.CSSProperties;
}

const Grid: React.FC<EnhancedGridProps> = ({
  children,
  container = false,
  item = false,
  spacing = 0,
  direction = "row",
  wrap = "wrap",
  xs,
  sm,
  md,
  lg,
  xl,
  className = "",
  style: externalStyles = {},
}) => {
  const classes = useMemo(() => {
    const classList = [className];
    if (container) classList.push("grid-container");
    if (item) classList.push("grid-item");
    return classList.join(" ").trim();
  }, [container, item, className]);

  const styles: React.CSSProperties = useMemo(
    () => ({
      ...(container && {
        display: "flex",
        flexDirection: direction,
        flexWrap: wrap,
        "--grid-spacing":
          typeof spacing === "number" ? `${spacing * 8}px` : spacing,
      }),
      ...(item && {
        "--grid-columns-xs": xs ? (100 * xs) / 12 + "%" : "100%",
        "--grid-columns-sm": sm
          ? (100 * sm) / 12 + "%"
          : xs
          ? (100 * xs) / 12 + "%"
          : "100%",
        "--grid-columns-md": md
          ? (100 * md) / 12 + "%"
          : sm
          ? (100 * sm) / 12 + "%"
          : xs
          ? (100 * xs) / 12 + "%"
          : "100%",
        "--grid-columns-lg": lg
          ? (100 * lg) / 12 + "%"
          : md
          ? (100 * md) / 12 + "%"
          : sm
          ? (100 * sm) / 12 + "%"
          : xs
          ? (100 * xs) / 12 + "%"
          : "100%",
        "--grid-columns-xl": xl
          ? (100 * xl) / 12 + "%"
          : lg
          ? (100 * lg) / 12 + "%"
          : md
          ? (100 * md) / 12 + "%"
          : sm
          ? (100 * sm) / 12 + "%"
          : xs
          ? (100 * xs) / 12 + "%"
          : "100%",
      }),
      ...externalStyles,
    }),
    [
      container,
      item,
      spacing,
      direction,
      wrap,
      xs,
      sm,
      md,
      lg,
      xl,
      externalStyles,
    ]
  );

  return (
    <div className={classes} style={styles}>
      {children}
    </div>
  );
};

export default Grid;
