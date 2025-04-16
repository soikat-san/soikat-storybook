import styles from "./page.module.css";
import DynamicSyntax from "./demo/syntax";
import { montserratFont } from "@/app/font";
import Grid from "@/components/ui/Grid/component";
import Button from "@/components/ui/Button/component";
import Typography from "@/components/ui/Typography/component";
import ButtonGroup from "@/components/ui/ButtonGroup/component";
import CircularProgress from "@/components/ui/Progress/Circular/component";

export default function SUIButtonGroup() {
  return (
    <div className={`${montserratFont.className} ${styles.btnGrpContainer}`}>
      <Typography variant="h2" color="textPrimary" className={styles.title}>
        Button Group
      </Typography>
      <Typography variant="h6" align="justify" className={styles.description}>
        The ButtonGroup component can be used to group related buttons.
      </Typography>

      <Typography variant="h4" className={styles.subTitle}>
        Basic Button Group
      </Typography>
      <div className={styles.demoContainer}>
        <div className={styles.hasBtnGrp}>
          <ButtonGroup variant="contained" aria-label="Basic button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"basic"} />
        </div>
      </div>

      <Typography variant="h4" className={styles.subTitle}>
        Basic Variants
      </Typography>
      <Typography variant="h6" align="justify" className={styles.description}>
        All the standard button variants are supported.
      </Typography>
      <div className={styles.demoContainer}>
        <div className={styles.hasBtnGrp}>
          <ButtonGroup variant="outlined" aria-label="Basic button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
          <ButtonGroup variant="text" aria-label="Basic button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"variant"} />
        </div>
      </div>

      <Typography variant="h4" className={styles.subTitle}>
        Size and colors
      </Typography>
      <Typography variant="h6" align="justify" className={styles.description}>
        The size and color props can be used to control the appearance of the
        button group.
      </Typography>
      <div className={styles.demoContainer}>
        <div className={styles.hasBtnGrp}>
          <Grid container>
            <Grid item xs={12}>
              <ButtonGroup
                size="small"
                variant="contained"
                aria-label="Basic button group"
              >
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
              </ButtonGroup>
            </Grid>
            <Grid item xs={12}>
              <ButtonGroup
                color="secondary"
                variant="contained"
                aria-label="Basic button group"
              >
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
              </ButtonGroup>
            </Grid>
            <Grid item xs={12}>
              <ButtonGroup
                size="large"
                color="info"
                variant="contained"
                aria-label="Basic button group"
              >
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
              </ButtonGroup>
            </Grid>
          </Grid>
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"size"} />
        </div>
      </div>

      <Typography variant="h4" className={styles.subTitle}>
        Vertical group
      </Typography>
      <Typography variant="h6" align="justify" className={styles.description}>
        The button group can be displayed vertically using the orientation prop.
      </Typography>
      <div className={styles.demoContainer}>
        <div className={styles.hasBtnGrp}>
          <ButtonGroup
            variant="outlined"
            orientation="vertical"
            aria-label="Basic button group"
          >
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
          <ButtonGroup
            variant="contained"
            orientation="vertical"
            aria-label="Basic button group"
          >
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
          <ButtonGroup
            variant="text"
            orientation="vertical"
            aria-label="Basic button group"
          >
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"vertical"} />
        </div>
      </div>
      <Typography variant="h4" className={styles.subTitle}>
        Loading
      </Typography>
      <Typography variant="h6" align="justify" className={styles.description}>
        Use the loading prop from Button to set buttons in a loading state and
        disable interactions.
      </Typography>
      <div className={styles.demoContainer}>
        <div className={styles.hasBtnGrp}>
          <ButtonGroup variant="outlined" aria-label="Basic button group">
            <Button>Submit</Button>
            <Button>Fetch data</Button>
            <Button
              loading
              loadingPosition="start"
              loadingIndicator={<CircularProgress size={22} />}
            >
              Save
            </Button>
          </ButtonGroup>
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"loading"} />
        </div>
      </div>

      {/* TODO - need Popper util */}
      <Typography variant="h4" className={styles.subTitle}>
        Split button
      </Typography>
      <Typography variant="h6" align="justify" className={styles.description}>
        ButtonGroup can also be used to create a split button. The dropdown can
        change the button action (as in this example) or be used to immediately
        trigger a related action.
      </Typography>
    </div>
  );
}
