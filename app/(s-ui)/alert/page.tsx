import styles from "./page.module.css";
import { montserratFont } from "@/app/font";
import Alert from "@/components/ui/Alert/component";
import Button from "@/components/ui/Button/component";
import Typography from "@/components/ui/Typography/component";
import { ImCheckmark2 } from "react-icons/im";
import DynamicSyntax from "./demo/syntax";

export default function SUIChip() {
  return (
    <div className={`${montserratFont.className} ${styles.alertContainer}`}>
      <Typography variant="h2" color="textPrimary" className={styles.title}>
        Alert
      </Typography>
      <Typography variant="h6" align="justify" className={styles.description}>
        Alerts display brief messages for the user without interrupting their
        use of the app.
      </Typography>

      <Typography variant="h4" className={styles.subTitle}>
        Severity
      </Typography>
      <Typography
        variant="body1"
        align="justify"
        className={styles.description}
      >
        The severity prop accepts four values representing different
        states—success (the default), info, warning, and error–with
        corresponding icon and color combinations for each:
      </Typography>
      <div className={styles.demoContainer}>
        <div className={styles.hasAlert}>
          <Alert severity="success">This is a success Alert.</Alert>
          <Alert severity="info">This is an info Alert.</Alert>
          <Alert severity="warning">This is a warning Alert.</Alert>
          <Alert severity="error">This is an error Alert.</Alert>
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"severity"} />
        </div>
      </div>

      <Typography variant="h4" className={styles.subTitle}>
        Variants
      </Typography>
      <Typography
        variant="body1"
        align="justify"
        className={styles.description}
      >
        The Alert component comes with two alternative style options—filled and
        outlined—which you can set using the variant prop.
      </Typography>

      <Typography variant="h6" className={styles.subSubTitle}>
        Filled
      </Typography>
      <div className={styles.demoContainer}>
        <div className={styles.hasAlert}>
          <Alert variant="filled" severity="success">
            This is a success Alert.
          </Alert>
          <Alert variant="filled" severity="info">
            This is an info Alert.
          </Alert>
          <Alert variant="filled" severity="warning">
            This is a warning Alert.
          </Alert>
          <Alert variant="filled" severity="error">
            This is an error Alert.
          </Alert>
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"filled"} />
        </div>
      </div>

      <Typography variant="h6" className={styles.subSubTitle}>
        Outlined
      </Typography>
      <div className={styles.demoContainer}>
        <div className={styles.hasAlert}>
          <Alert variant="outlined" severity="success">
            This is a success Alert.
          </Alert>
          <Alert variant="outlined" severity="info">
            This is an info Alert.
          </Alert>
          <Alert variant="outlined" severity="warning">
            This is a warning Alert.
          </Alert>
          <Alert variant="outlined" severity="error">
            This is an error Alert.
          </Alert>
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"outlined"} />
        </div>
      </div>

      <Typography variant="h4" className={styles.subTitle}>
        Color
      </Typography>
      <Typography
        variant="body1"
        align="justify"
        className={styles.description}
      >
        Use the color prop to override the default color for the specified
        severity—for instance, to apply warning colors to a success Alert:
      </Typography>
      <div className={styles.demoContainer}>
        <div className={styles.hasAlert}>
          <Alert severity="success" color="warning" variant="filled">
            This is a success Alert.
          </Alert>
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"color"} />
        </div>
      </div>

      <Typography variant="h4" className={styles.subTitle}>
        Actions
      </Typography>
      <Typography
        variant="body1"
        align="justify"
        className={styles.description}
      >
        Add an action to your Alert with the action prop. This lets you insert
        any element—an HTML tag, an SVG icon, or a React component such as a
        Material UI Button—after the Alert's message, justified to the right.
      </Typography>
      <div className={styles.demoContainer}>
        <div className={styles.hasAlert}>
          <Alert
            severity="success"
            action={
              <Button variant="outlined" color="inherit" size="small">
                UNDO
              </Button>
            }
          >
            This Alert uses a Button component for its action.
          </Alert>
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"actions"} />
        </div>
      </div>

      <Typography variant="h4" className={styles.subTitle}>
        Icons
      </Typography>
      <Typography
        variant="body1"
        align="justify"
        className={styles.description}
      >
        Use the icon prop to override an Alert's icon. As with the action prop,
        your icon can be an HTML element, an SVG icon, or a React component. Set
        this prop to false to remove the icon altogether.
      </Typography>
      <Typography
        variant="body1"
        align="justify"
        className={styles.description}
      >
        If you need to override all instances of an icon for a given severity,
        you can use the iconMapping prop instead.
      </Typography>
      <div className={styles.demoContainer}>
        <div className={styles.hasAlert}>
          <Alert icon={false} severity="success">
            This success Alert has no icon.
          </Alert>
          <Alert icon={<ImCheckmark2 fontSize="inherit" />} severity="success">
            This success Alert has a custom icon.
          </Alert>
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"icons"} />
        </div>
      </div>
    </div>
  );
}
