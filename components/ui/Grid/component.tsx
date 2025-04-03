import "./styles.css";
import React, { useMemo } from "react";
import { GridProps } from "./props.interface";

interface EnhancedGridProps extends GridProps {
  className?: string;
  style?: React.CSSProperties;
}

// [TODO: fix spacing implementation]
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

  // Convert spacing into pixels (using 8px as a base unit)
  const gap = typeof spacing === "number" ? spacing * 8 : 0;

  // Calculate width so that it accounts for gaps in the row.
  // For a given span, number of items per row = 12 / span.
  // Total gap in a row = (items per row - 1) * gap.
  // Then each item's width = ((100% - total gap) * (span / 12))
  const calcWidth = (span: number | undefined) => {
    if (!span) return "100%";
    const itemsPerRow = 12 / span;
    return `calc((100% - ${itemsPerRow - 1} * ${gap}px) * (${span} / 12))`;
  };

  const styles: React.CSSProperties = useMemo(
    () => ({
      ...(container && {
        display: "flex",
        flexDirection: direction,
        flexWrap: wrap,
        gap: `${gap}px`,
        "--grid-spacing": `${gap}px`,
      }),
      ...(item && {
        "--grid-columns-xs": calcWidth(xs),
        "--grid-columns-sm": calcWidth(sm ?? xs),
        "--grid-columns-md": calcWidth(md ?? sm ?? xs),
        "--grid-columns-lg": calcWidth(lg ?? md ?? sm ?? xs),
        "--grid-columns-xl": calcWidth(xl ?? lg ?? md ?? sm ?? xs),
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
      gap,
    ]
  );

  return (
    <div className={classes} style={styles}>
      {children}
    </div>
  );
};

export default Grid;
