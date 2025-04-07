"use client";
import DynamicSyntax from "./syntax";
import styles from "../page.module.css";
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";
import { Fragment, useState } from "react";
import { IoMailSharp } from "react-icons/io5";
import Badge from "@/components/ui/Badge/component";
import Typography from "@/components/ui/Typography/component";

export default function InvisibleDemo() {
  const [count, setCount] = useState(1);
  return (
    <Fragment>
      <div className={styles.demoContainer}>
        <div className={styles.hasBadge}>
          <Badge badgeContent={count} color="primary">
            <IoMailSharp />
          </Badge>
          <Badge variant={"dot"} color="primary" invisible={count === 0}>
            <IoMailSharp />
          </Badge>
          <div className={styles.plusminus}>
            <LuMinus
              className={styles.minus}
              onClick={() => setCount(Math.max(count - 1, 0))}
            />
            <GoPlus onClick={() => setCount(count + 1)} />
          </div>
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"invisible"} />
        </div>
      </div>
      <Typography
        variant="body1"
        align="justify"
        style={{ marginTop: "20px" }}
        className={styles.description}
      >
        The badge hides automatically when badgeContent is zero. You can
        override this with the showZero prop.
      </Typography>
      <div className={styles.demoContainer}>
        <div className={styles.hasBadge}>
          <Badge badgeContent={0} color="primary">
            <IoMailSharp />
          </Badge>
          <Badge badgeContent={0} color="primary" showZero>
            <IoMailSharp />
          </Badge>
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"showzero"} />
        </div>
      </div>
    </Fragment>
  );
}
