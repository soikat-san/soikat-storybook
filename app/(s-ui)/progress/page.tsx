import styles from "./page.module.css";
import DynamicSyntax from "./demo/syntax";
import { montserratFont } from "@/app/font";
import Typography from "@/components/ui/Typography/component";
import CircularProgress from "@/components/ui/Progress/Circular/component";
import DeterminateCircularProgress from "./demo/circular-determinate";
import LinearProgress from "@/components/ui/Progress/Linear/component";
import DeterminateLinearProgress from "./demo/linear-determinate";

export default function SUIProgress() {
  return (
    <div className={`${montserratFont.className} ${styles.progressContainer}`}>
      <Typography variant="h2" color="textPrimary" className={styles.title}>
        Progress
      </Typography>
      <Typography variant="h6" align="justify" className={styles.description}>
        Progress indicators commonly known as spinners, express an unspecified
        wait time or display the length of a process.
      </Typography>

      <Typography
        variant="body1"
        align="justify"
        style={{ marginTop: 30 }}
        className={styles.description}
      >
        Progress indicators inform users about the status of ongoing processes,
        such as loading an app, submitting a form, or saving updates.
      </Typography>
      <ul className={styles.uList}>
        <li>
          <Typography variant="subtitle2" className={styles.description}>
            <strong>Determinate</strong> indicators display how long an
            operation will take.
          </Typography>
        </li>
        <li>
          <Typography variant="subtitle2" className={styles.description}>
            <strong>Indeterminate</strong> indicators visualize an unspecified
            wait time.
          </Typography>
        </li>
      </ul>
      <Typography
        variant="body1"
        align="justify"
        className={styles.description}
      >
        The animations of the components rely on CSS as much as possible to work
        even before the JavaScript is loaded.
      </Typography>

      <Typography variant="h4" className={styles.subTitle}>
        Circular
      </Typography>
      <Typography variant="h6" className={styles.subSubTitle}>
        Indeterminate
      </Typography>
      <div className={styles.demoContainer}>
        <div className={styles.hasProgress}>
          <CircularProgress />
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"circ-indt"} />
        </div>
      </div>

      <Typography variant="h6" className={styles.subSubTitle}>
        Color
      </Typography>
      <div className={styles.demoContainer}>
        <div className={styles.hasProgress}>
          <CircularProgress color="secondary" />
          <CircularProgress color="success" />
          <CircularProgress color="inherit" />
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"circ-color"} />
        </div>
      </div>

      <Typography variant="h6" className={styles.subSubTitle}>
        Size
      </Typography>
      <div className={styles.demoContainer}>
        <div className={styles.hasProgress}>
          <CircularProgress size={30} />
          <CircularProgress size={40} />
          <CircularProgress size={60} />
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"circ-size"} />
        </div>
      </div>

      <Typography variant="h6" className={styles.subSubTitle}>
        Determinate
      </Typography>
      <div className={styles.demoContainer}>
        <div className={styles.hasProgress}>
          <CircularProgress variant="determinate" value={25} />
          <CircularProgress variant="determinate" value={50} />
          <CircularProgress variant="determinate" value={75} />
          <CircularProgress variant="determinate" value={100} />
          <DeterminateCircularProgress />
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"circ-detd"} />
        </div>
      </div>

      <Typography variant="h6" className={styles.subSubTitle}>
        With Label
      </Typography>
      <div className={styles.demoContainer}>
        <div className={styles.hasProgress}>
          <DeterminateCircularProgress withLabel={true} />
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"circ-label"} />
        </div>
      </div>

      <Typography variant="h4" className={styles.subTitle}>
        Linear
      </Typography>
      <Typography variant="h6" className={styles.subSubTitle}>
        Indeterminate
      </Typography>
      <div className={styles.demoContainer}>
        <div className={styles.hasLinear}>
          <LinearProgress />
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"linr-indt"} />
        </div>
      </div>

      <Typography variant="h6" className={styles.subSubTitle}>
        Color
      </Typography>
      <div className={styles.demoContainer}>
        <div className={styles.hasLinear}>
          <LinearProgress color="secondary" />
          <LinearProgress color="success" />
          <LinearProgress color="inherit" />
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"linr-color"} />
        </div>
      </div>

      <Typography variant="h6" className={styles.subSubTitle}>
        Determinate
      </Typography>
      <div className={styles.demoContainer}>
        <div className={styles.hasProgress}>
          <DeterminateLinearProgress />
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"linr-detd"} />
        </div>
      </div>

      <Typography variant="h6" className={styles.subSubTitle}>
        With Buffer
      </Typography>
      <div className={styles.demoContainer}>
        <div className={styles.hasProgress}>
          <DeterminateLinearProgress withBuffer={true} />
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"linr-bufr"} />
        </div>
      </div>

      <Typography variant="h6" className={styles.subSubTitle}>
        With Label
      </Typography>
      <div className={styles.demoContainer}>
        <div className={styles.hasProgress}>
          <DeterminateLinearProgress withLabel={true} />
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"linr-label"} />
        </div>
      </div>
    </div>
  );
}
