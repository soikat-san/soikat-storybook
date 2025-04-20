import styles from "./page.module.css";
import DynamicSyntax from "./demo/syntax";
import { MdDelete } from "react-icons/md";
import { montserratFont } from "@/app/font";
import Tooltip from "@/components/ui/Tooltip/component";
import Typography from "@/components/ui/Typography/component";

export default function SUITooltip() {
  return (
    <div className={`${montserratFont.className} ${styles.ttipContainer}`}>
      <Typography variant="h2" color="textPrimary" className={styles.title}>
        Tooltip
      </Typography>
      <Typography variant="h6" align="justify" className={styles.description}>
        Tooltips display informative text when users hover over, focus on, or
        tap an element.
      </Typography>

      <Typography variant="h4" className={styles.subTitle}>
        Basic tooltip
      </Typography>
      <div className={styles.demoContainer}>
        <div className={styles.hastTip}>
          <Tooltip title="Delete">
            <MdDelete className={styles.icon} />
          </Tooltip>
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"basic"} />
        </div>
      </div>

      <Typography variant="h4" className={styles.subTitle}>
        Positioned tooltips
      </Typography>
      <Typography
        variant="body1"
        align="justify"
        className={styles.description}
      >
        The Tooltip has 12 placement choices. They don't have directional
        arrows; instead, they rely on motion emanating from the source to convey
        direction.
      </Typography>
      <div className={styles.demoContainer}>
        <div className={styles.placement}>
          <div className={styles.placedTopBottom}>
            <Tooltip title="Add" placement="top-start">
              <Typography>TOP-START</Typography>
            </Tooltip>
            <Tooltip title="Add" placement="top">
              <Typography>TOP</Typography>
            </Tooltip>
            <Tooltip title="Add" placement="top-end">
              <Typography>TOP-END</Typography>
            </Tooltip>
          </div>
          <div className={styles.placedMid}>
            <div className={styles.onLeft}>
              <Tooltip title="Add" placement="left-start">
                <Typography>LEFT-START</Typography>
              </Tooltip>
              <Tooltip title="Add" placement="left">
                <Typography>LEFT</Typography>
              </Tooltip>
              <Tooltip title="Add" placement="left-end">
                <Typography>LEFT-END</Typography>
              </Tooltip>
            </div>
            <div className={styles.onRight}>
              <Tooltip title="Add" placement="right-start">
                <Typography>RIGHT-START</Typography>
              </Tooltip>
              <Tooltip title="Add" placement="right">
                <Typography>RIGHT</Typography>
              </Tooltip>
              <Tooltip title="Add" placement="right-end">
                <Typography>RIGHT-END</Typography>
              </Tooltip>
            </div>
          </div>
          <div className={styles.placedTopBottom}>
            <Tooltip title="Add" placement="bottom-start">
              <Typography>BOTTOM-START</Typography>
            </Tooltip>
            <Tooltip title="Add" placement="bottom">
              <Typography>BOTTOM</Typography>
            </Tooltip>
            <Tooltip title="Add" placement="bottom-end">
              <Typography>BOTTOM-END</Typography>
            </Tooltip>
          </div>
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"placement"} />
        </div>
      </div>

      <Typography variant="h4" className={styles.subTitle}>
        Arrow tooltip
      </Typography>
      <div className={styles.demoContainer}>
        <div className={styles.hastTip}>
          <Tooltip title="Delete" arrow>
            <MdDelete className={styles.icon} />
          </Tooltip>
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"arrow"} />
        </div>
      </div>
    </div>
  );
}
