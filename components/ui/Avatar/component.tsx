import React from "react";
import { AvatarProps, AvatarGroupProps } from "./props.interface";
import "./styles.css";

/** Avatar Component */
export const Avatar: React.FC<AvatarProps> = (props) => {
  const {
    alt,
    children,
    classes = {},
    component: Component = "div",
    sizes,
    slotProps = {},
    slots = {},
    src,
    srcSet,
    variant = "circular",
    ...other
  } = props;

  const ImgComponent = slots.img || "img";
  const rootClasses = `avatar-root ${
    classes.root ? classes.root : ""
  } avatar-${variant}`;

  return (
    <Component className={rootClasses} {...other}>
      {src ? (
        <ImgComponent
          className={`avatar-img ${classes.img ? classes.img : ""}`}
          alt={alt}
          src={src}
          srcSet={srcSet}
          sizes={sizes}
          {...(typeof slotProps.img === "function"
            ? slotProps.img()
            : slotProps.img)}
        />
      ) : (
        children
      )}
    </Component>
  );
};

/** AvatarGroup Component */
export const AvatarGroup: React.FC<AvatarGroupProps> = (props) => {
  const {
    children,
    classes = {},
    component: Component = "div",
    max = 5,
    renderSurplus,
    slotProps = {},
    slots = {},
    spacing = "medium",
    total,
    variant = "circular",
    ...other
  } = props;

  // Convert children to an array
  const childrenArray = React.Children.toArray(children);

  // Use total prop if provided, otherwise fallback to children count
  const actualTotal = total != null ? total : childrenArray.length;

  // Calculate the avatars to show and extra (surplus) count.
  let visibleAvatars: React.ReactNode[] = [];
  let extra = 0;
  if (childrenArray.length > max) {
    visibleAvatars = childrenArray.slice(0, max);
    extra = actualTotal - max;
  } else {
    visibleAvatars = childrenArray;
    extra = actualTotal - childrenArray.length;
  }

  // Determine spacing between avatars (using negative margin for overlap)
  let spacingValue: number;
  if (typeof spacing === "number") {
    spacingValue = spacing;
  } else {
    spacingValue = spacing === "small" ? -8 : -16;
  }

  const groupClasses = `avatar-group-root ${classes.root ? classes.root : ""}`;

  return (
    <Component className={groupClasses} {...other}>
      {visibleAvatars.map((child, index) => (
        <div
          key={index}
          className={`avatar-group-item ${
            classes.avatar ? classes.avatar : ""
          }`}
          style={{ marginLeft: index > 0 ? spacingValue : 0 }}
        >
          {React.isValidElement(child)
            ? React.cloneElement(child as React.ReactElement<any>, { variant })
            : child}
        </div>
      ))}
      {extra > 0 &&
        (renderSurplus
          ? renderSurplus(extra)
          : (() => {
              const SurplusComponent = slots.surplus || "div";
              const surplusProps =
                typeof slotProps.surplus === "function"
                  ? slotProps.surplus()
                  : slotProps.surplus || {};
              return (
                <SurplusComponent
                  className={`avatar-group-surplus ${
                    classes.surplus ? classes.surplus : ""
                  }`}
                  {...surplusProps}
                  style={{ marginLeft: spacingValue }}
                >
                  {`+${extra}`}
                </SurplusComponent>
              );
            })())}
    </Component>
  );
};
