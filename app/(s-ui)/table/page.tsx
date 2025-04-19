import styles from "./page.module.css";
import { montserratFont } from "@/app/font";
import Typography from "@/components/ui/Typography/component";
import TableIntroduction from "./demo/intro";
import DynamicSyntax from "./demo/syntax";
import TableRenderer from "./demo/table";

export default function SUIChip() {
  return (
    <div className={`${montserratFont.className} ${styles.tableContainer}`}>
      <Typography variant="h2" color="textPrimary" className={styles.title}>
        Table
      </Typography>
      <Typography variant="h6" align="justify" className={styles.description}>
        Tables display sets of data. They can be fully customized.
      </Typography>

      <Typography variant="h4" className={styles.subTitle}>
        Introduction
      </Typography>
      <TableIntroduction />

      <Typography variant="h4" className={styles.subTitle}>
        Basic Table
      </Typography>
      <Typography
        variant="body1"
        align="justify"
        className={styles.description}
      >
        A simple example with no frills.
      </Typography>
      <div className={styles.demoContainer}>
        <div className={styles.hasTable}>
          <TableRenderer type={"basic"} />
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"basic"} />
        </div>
      </div>

      <Typography variant="h4" className={styles.subTitle}>
        Dense Table
      </Typography>
      <Typography
        variant="body1"
        align="justify"
        className={styles.description}
      >
        A simple example of a dense table with no frills.
      </Typography>
      <div className={styles.demoContainer}>
        <div className={styles.hasTable}>
          <TableRenderer type={"dense"} />
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"dense"} />
        </div>
      </div>
    </div>
  );
}
