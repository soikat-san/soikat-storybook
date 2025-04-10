import React from "react";
import { ChipProps } from "./props.interface";
import "./styles.css";

const DefaultDeleteIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="chip-delete-icon-svg"
  >
    <circle cx="12" cy="12" r="10" fill="#ccc" />
    <line x1="15" y1="9" x2="9" y2="15" />
    <line x1="9" y1="9" x2="15" y2="15" />
  </svg>
);

/**
 * Generic, polymorphic Chip component. By default, it renders as a <div>
 * but when a different component is passed in via the component prop, its
 * additional props (e.g. href, target) are automatically supported.
 */
const Chip = <C extends React.ElementType = "div">(props: ChipProps<C>) => {
  // Destructure our Chip base props, and collect all extra props in ...other.
  const {
    avatar,
    classes = {},
    clickable = false,
    color = "default",
    component: Component = "div",
    deleteIcon,
    disabled = false,
    icon,
    label,
    onDelete,
    onClick,
    size = "medium",
    skipFocusWhenDisabled = false,
    variant = "filled",
    ...other
  } = props;

  const rootClassName = [
    "chip-root",
    clickable && "chip-clickable",
    disabled && "chip-disabled",
    variant === "outlined" ? "chip-outlined" : "chip-filled",
    `chip-${color}`,
    size === "small" ? "chip-small" : "chip-medium",
    classes.root || "",
  ]
    .filter(Boolean)
    .join(" ");

  const tabIndex =
    clickable && (!disabled || (disabled && !skipFocusWhenDisabled))
      ? 0
      : undefined;

  return (
    <Component
      className={rootClassName}
      tabIndex={tabIndex}
      onClick={onClick}
      {...other} // extra props (e.g. href, target) are passed to the underlying element
    >
      {avatar && (
        <span className={`chip-avatar ${classes.avatar || ""}`}>{avatar}</span>
      )}
      {icon && (
        <span className={`chip-icon ${classes.icon || ""}`}>{icon}</span>
      )}
      <span className={`chip-label ${classes.label || ""}`}>{label}</span>
      {onDelete && (
        <span
          className={`chip-delete-icon ${classes.deleteIcon || ""}`}
          onMouseDown={(event) => event.stopPropagation()}
          onClick={(event) => {
            event.stopPropagation();
            if (!disabled && onDelete) {
              onDelete(event);
            }
          }}
        >
          {deleteIcon || <DefaultDeleteIcon />}
        </span>
      )}
    </Component>
  );
};

export default Chip;
