import styles from "./page.module.css";
import DynamicSyntax from "./demo/syntax";
import { montserratFont } from "@/app/font";
import Paper from "@/components/ui/Paper/component";
import Typography from "@/components/ui/Typography/component";
import Grid from "@/components/ui/Grid/component";

export default function SUIPaper() {
  return (
    <div className={`${montserratFont.className} ${styles.paperContainer}`}>
      <Typography variant="h2" color="textPrimary" className={styles.title}>
        Paper
      </Typography>
      <Typography variant="h6" align="justify" className={styles.description}>
        The Paper component is a container for displaying content on an elevated
        surface.
      </Typography>

      {/* basic paper */}
      <div className={styles.demoContainer}>
        <div className={styles.hasPaper}>
          <Paper classes={{ root: styles.paperbasic }} elevation={0} />
          <Paper classes={{ root: styles.paperbasic }} />
          <Paper classes={{ root: styles.paperbasic }} elevation={3} />
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"basic"} />
        </div>
      </div>

      <Typography variant="h6" className={styles.subSubTitle}>
        Variants
      </Typography>
      <div className={styles.demoContainer}>
        <div className={styles.hasPaper}>
          <Paper variant="elevation" classes={{ root: styles.paperbasic }}>
            <Typography variant="caption">default</Typography>
          </Paper>
          <Paper variant="outlined" classes={{ root: styles.paperbasic }}>
            <Typography variant="caption">outlined</Typography>
          </Paper>
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"variants"} />
        </div>
      </div>

      <Typography variant="h6" className={styles.subSubTitle}>
        Corners
      </Typography>
      <div className={styles.demoContainer}>
        <div className={styles.hasPaper}>
          <Paper classes={{ root: styles.paperbasic }}>
            <Typography variant="caption">rounded</Typography>
          </Paper>
          <Paper square classes={{ root: styles.paperbasic }}>
            <Typography variant="caption">square</Typography>
          </Paper>
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"corner"} />
        </div>
      </div>

      <Typography variant="h6" className={styles.subSubTitle}>
        Elevation
      </Typography>
      <Typography
        variant="body1"
        align="justify"
        className={styles.description}
      >
        Use the elevation prop to establish hierarchy through the use of
        shadows. The Paper component's default elevation level is 1. The prop
        accepts values from 0 to 24. The higher the number, the further away the
        Paper appears to be from its background.
      </Typography>
      <div className={styles.demoContainer}>
        <div className={styles.hasPaper}>
          <Grid container className={styles.elevatedgrid}>
            {Array(24)
              .fill(0)
              .map((_, idx) => (
                <Grid item xs={2} key={idx}>
                  <Paper
                    elevation={idx + 1}
                    classes={{ root: styles.paperbasic }}
                  >
                    <Typography variant="caption">{`elev ${
                      idx + 1
                    }`}</Typography>
                  </Paper>
                </Grid>
              ))}
          </Grid>
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"elev"} />
        </div>
      </div>
    </div>
  );
}
