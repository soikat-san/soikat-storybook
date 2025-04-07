import React from "react";
import { BadgeProps } from "./props.interface";
import "./styles.css";

const Badge: React.FC<BadgeProps> = (props) => {
  const {
    anchorOrigin = { vertical: "top", horizontal: "right" },
    badgeContent,
    children,
    classes = {},
    color = "default",
    component: Component = "div",
    invisible = false,
    max = 99,
    overlap = "rectangular",
    showZero = false,
    slotProps = {},
    slots = {},
    variant = "standard",
    ...other
  } = props;

  // Determine badge visibility:
  // - If invisible prop is true.
  // - If badgeContent is null/undefined.
  // - If badgeContent is zero and showZero is false (unless variant is 'dot').
  const isBadgeVisible =
    !invisible &&
    (variant === "dot" || badgeContent != null) &&
    (variant === "dot" || badgeContent !== 0 || showZero);

  // Format badge content if it's a number and exceeds max
  let formattedBadgeContent = badgeContent;
  if (typeof badgeContent === "number" && badgeContent > max) {
    formattedBadgeContent = `${max}+`;
  }

  // If variant is 'dot', no content is shown
  const content = variant === "dot" ? null : formattedBadgeContent;

  // Root container classes
  const rootClasses = `badge-root ${classes.root ? classes.root : ""} ${
    overlap === "circular"
      ? "badge-overlap-circular"
      : "badge-overlap-rectangular"
  }`;

  // Construct anchor class from anchorOrigin prop (e.g. "badge-anchor-top-right")
  const anchorClass = `badge-anchor-${anchorOrigin.vertical}-${anchorOrigin.horizontal}`;

  // Badge element classes
  const badgeClasses = `badge-badge ${classes.badge ? classes.badge : ""} ${
    color ? `badge-${color}` : ""
  } ${anchorClass} ${variant === "dot" ? "badge-dot" : ""}`;

  // Get additional props from slotProps if provided
  const rootSlotProps =
    typeof slotProps.root === "function"
      ? slotProps.root()
      : slotProps.root || {};
  const badgeSlotProps =
    typeof slotProps.badge === "function"
      ? slotProps.badge()
      : slotProps.badge || {};

  // Use slot components if provided, otherwise fallback to defaults
  const RootComponent = slots.root || Component;
  const BadgeComponent = slots.badge || "span";

  return (
    <RootComponent className={rootClasses} {...rootSlotProps} {...other}>
      {children}
      {isBadgeVisible && (
        <BadgeComponent className={badgeClasses} {...badgeSlotProps}>
          {content}
        </BadgeComponent>
      )}
    </RootComponent>
  );
};

export default Badge;
