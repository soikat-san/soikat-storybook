import styles from "./page.module.css";
import DynamicSyntax from "./demo/syntax";
import { montserratFont } from "@/app/font";
import ClickableChip from "./demo/clickable";
import ChipPlayground from "./demo/playground";
import Chip from "@/components/ui/Chip/component";
import Typography from "@/components/ui/Typography/component";

export default function SUIChip() {
  return (
    <div className={`${montserratFont.className} ${styles.chipContainer}`}>
      <Typography variant="h2" color="textPrimary" className={styles.title}>
        Chip
      </Typography>
      <Typography variant="h6" align="justify" className={styles.description}>
        Chips are compact elements that represent an input, attribute, or
        action. It allow users to enter information, make selections, filter
        content, or trigger actions.
      </Typography>

      <Typography variant="h4" className={styles.subTitle}>
        Basic Chip
      </Typography>
      <Typography
        variant="body1"
        align="justify"
        className={styles.description}
      >
        The Chip component supports outlined and filled styling.
      </Typography>

      {/* basic chip */}
      <div className={styles.demoContainer}>
        <div className={styles.hasChip}>
          <Chip label="Chip Filled" />
          <Chip label="Chip Outlined" variant="outlined" />
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"basic"} />
        </div>
      </div>

      <Typography variant="h4" className={styles.subTitle}>
        Chip actions
      </Typography>
      <Typography
        variant="body1"
        align="justify"
        className={styles.description}
      >
        You can use the following actions.
      </Typography>
      <ul className={styles.uList}>
        <li>
          <Typography variant="subtitle2" className={styles.description}>
            Chips with the onClick prop defined change appearance on focus,
            hover, and click.
          </Typography>
        </li>
        <li>
          <Typography variant="subtitle2" className={styles.description}>
            Chips with the onDelete prop defined will display a delete icon
            which changes appearance on hover.
          </Typography>
        </li>
      </ul>

      <Typography variant="h6" className={styles.subSubTitle}>
        Clickable
      </Typography>
      <div className={styles.demoContainer}>
        <div className={styles.hasChip}>
          <ClickableChip type={"click"} />
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"click"} />
        </div>
      </div>

      <Typography variant="h6" className={styles.subSubTitle}>
        Deletable
      </Typography>
      <div className={styles.demoContainer}>
        <div className={styles.hasChip}>
          <ClickableChip type={"delete"} />
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"delete"} />
        </div>
      </div>

      <Typography variant="h6" className={styles.subSubTitle}>
        Clickable and Deletable
      </Typography>
      <div className={styles.demoContainer}>
        <div className={styles.hasChip}>
          <ClickableChip type={"both"} />
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"clickkdelete"} />
        </div>
      </div>

      <Typography variant="h6" className={styles.subSubTitle}>
        Clickable link
      </Typography>
      <div className={styles.demoContainer}>
        <div className={styles.hasChip}>
          <ClickableChip type={"link"} />
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"link"} />
        </div>
      </div>

      <Typography variant="h6" className={styles.subSubTitle}>
        Custom delete icon
      </Typography>
      <div className={styles.demoContainer}>
        <div className={styles.hasChip}>
          <ClickableChip type={"delicon"} />
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"delicon"} />
        </div>
      </div>

      <Typography variant="h4" className={styles.subTitle}>
        Chip adornments
      </Typography>
      <Typography
        variant="body1"
        align="justify"
        className={styles.description}
      >
        You can add ornaments to the beginning of the component.
      </Typography>
      <Typography
        variant="body1"
        align="justify"
        className={styles.description}
      >
        Use the avatar prop to add an avatar or use the icon prop to add an
        icon.
      </Typography>

      <Typography variant="h6" className={styles.subSubTitle}>
        Avatar chip
      </Typography>
      <div className={styles.demoContainer}>
        <div className={styles.hasChip}>
          <ClickableChip type={"avatar"} />
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"avatar"} />
        </div>
      </div>

      <Typography variant="h6" className={styles.subSubTitle}>
        Icon chip
      </Typography>
      <div className={styles.demoContainer}>
        <div className={styles.hasChip}>
          <ClickableChip type={"icon"} />
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"icon"} />
        </div>
      </div>

      <Typography variant="h4" className={styles.subTitle}>
        Color chip
      </Typography>
      <Typography
        variant="body1"
        align="justify"
        className={styles.description}
      >
        You can use the color prop to define a color from your chips.
      </Typography>
      <div className={styles.demoContainer}>
        <div className={styles.hasChip}>
          <ClickableChip type={"color"} />
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"color"} />
        </div>
      </div>

      <Typography variant="h4" className={styles.subTitle}>
        Sizes chip
      </Typography>
      <Typography
        variant="body1"
        align="justify"
        className={styles.description}
      >
        You can use the size prop to define a small Chip.
      </Typography>
      <div className={styles.demoContainer}>
        <div className={styles.hasChip}>
          <ClickableChip type={"size"} />
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"size"} />
        </div>
      </div>

      <Typography variant="h4" className={styles.subTitle}>
        Chip playground
      </Typography>
      <ChipPlayground />
    </div>
  );
}
