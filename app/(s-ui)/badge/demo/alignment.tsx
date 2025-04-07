"use client";
import { useState } from "react";
import DynamicSyntax from "./syntax";
import styles from "../page.module.css";
import { IoMailSharp } from "react-icons/io5";
import Badge from "@/components/ui/Badge/component";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import { BadgeAnchorOrigin } from "@/components/ui/Badge/props.interface";
import Typography from "@/components/ui/Typography/component";

export default function AlignmentDemo() {
  const [anchor, setAnchor] = useState<BadgeAnchorOrigin>({
    horizontal: "left",
    vertical: "bottom",
  });

  const handleAnchor = ({ type, val }: { type: string; val: string }): void => {
    if (type === "H" && val === "L") {
      setAnchor({ ...anchor, horizontal: "left" });
    } else if (type === "H" && val === "R") {
      setAnchor({ ...anchor, horizontal: "right" });
    } else if (type === "V" && val === "T") {
      setAnchor({ ...anchor, vertical: "top" });
    } else if (type === "V" && val === "B") {
      setAnchor({ ...anchor, vertical: "bottom" });
    }
  };

  return (
    <div className={styles.demoContainer}>
      <div className={styles.hasBadge}>
        <Badge
          variant="dot"
          color="primary"
          anchorOrigin={{
            vertical: anchor.vertical,
            horizontal: anchor.horizontal,
          }}
        >
          <IoMailSharp />
        </Badge>
        <Badge
          badgeContent={1}
          color="primary"
          anchorOrigin={{
            vertical: anchor.vertical,
            horizontal: anchor.horizontal,
          }}
        >
          <IoMailSharp />
        </Badge>
        <Badge
          badgeContent={15}
          color="primary"
          anchorOrigin={{
            vertical: anchor.vertical,
            horizontal: anchor.horizontal,
          }}
        >
          <IoMailSharp />
        </Badge>
        <Badge
          badgeContent={100}
          color="primary"
          anchorOrigin={{
            vertical: anchor.vertical,
            horizontal: anchor.horizontal,
          }}
        >
          <IoMailSharp />
        </Badge>
        <Badge
          badgeContent={1000}
          max={999}
          color="primary"
          anchorOrigin={{
            vertical: anchor.vertical,
            horizontal: anchor.horizontal,
          }}
        >
          <IoMailSharp />
        </Badge>
        {/* <Badge badgeContent={100} color="primary">
          <IoMailSharp />
        </Badge>
        <Badge badgeContent={1000} color="primary">
          <IoMailSharp />
        </Badge> */}
      </div>
      <div className={styles.alignment}>
        <div>
          <Typography variant="subtitle1">Horizontal</Typography>
          <Typography variant="subtitle2">
            {anchor.horizontal === "left" ? (
              <MdCheckBox />
            ) : (
              <MdCheckBoxOutlineBlank
                onClick={() => handleAnchor({ type: "H", val: "L" })}
              />
            )}
            Left
          </Typography>
          <Typography variant="subtitle2">
            {anchor.horizontal === "right" ? (
              <MdCheckBox />
            ) : (
              <MdCheckBoxOutlineBlank
                onClick={() => handleAnchor({ type: "H", val: "R" })}
              />
            )}
            Right
          </Typography>
        </div>
        <div>
          <Typography variant="subtitle1">Vertical</Typography>
          <Typography variant="subtitle2">
            {anchor.vertical === "top" ? (
              <MdCheckBox />
            ) : (
              <MdCheckBoxOutlineBlank
                onClick={() => handleAnchor({ type: "V", val: "T" })}
              />
            )}
            Top
          </Typography>
          <Typography variant="subtitle2">
            {anchor.vertical === "bottom" ? (
              <MdCheckBox />
            ) : (
              <MdCheckBoxOutlineBlank
                onClick={() => handleAnchor({ type: "V", val: "B" })}
              />
            )}
            Bottom
          </Typography>
        </div>
      </div>

      <div className={styles.code}>
        <DynamicSyntax type={"anchor"} anchorOrigin={anchor} />
      </div>
    </div>
  );
}
