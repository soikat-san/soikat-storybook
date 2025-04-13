import styles from "./page.module.css";
import DynamicSyntax from "./demo/syntax";
import { GoDotFill } from "react-icons/go";
import { montserratFont } from "@/app/font";
import AccordionBasics from "./demo/acc-basics";
import Grid from "@/components/ui/Grid/component";
import AccordionCustomized from "./demo/acc-customized";
import Typography from "@/components/ui/Typography/component";

export default function SUIAccordion() {
  return (
    <div className={`${montserratFont.className} ${styles.accordionContainer}`}>
      <Typography variant="h2" color="textPrimary" className={styles.title}>
        Accordion
      </Typography>
      <Typography variant="h6" align="justify" className={styles.description}>
        The Accordion component lets users show and hide sections of related
        content on a page.
      </Typography>

      <Typography variant="h4" className={styles.subTitle}>
        Introduction
      </Typography>
      <Typography
        variant="subtitle1"
        align="justify"
        className={styles.description}
      >
        The Accordion component includes several complementary utility
        components to handle various use cases:
      </Typography>
      <Grid container className={styles.bullets}>
        <Grid item xs={0.5}>
          <div className={styles.dot}>
            <GoDotFill />
          </div>
        </Grid>
        <Grid item xs={11.5}>
          <Typography variant="body1" className={styles.content}>
            Accordion: the wrapper for grouping related components.
          </Typography>
        </Grid>
        <Grid item xs={0.5}>
          <div className={styles.dot}>
            <GoDotFill />
          </div>
        </Grid>
        <Grid item xs={11.5}>
          <Typography variant="body1" className={styles.content}>
            Accordion Details: the wrapper for the Accordion content.
          </Typography>
        </Grid>
        <Grid item xs={0.5}>
          <div className={styles.dot}>
            <GoDotFill />
          </div>
        </Grid>
        <Grid item xs={11.5}>
          <Typography variant="body1" className={styles.content}>
            Accordion Actions: an optional wrapper that groups a set of buttons.
          </Typography>
        </Grid>
        <Grid item xs={0.5}>
          <div className={styles.dot}>
            <GoDotFill />
          </div>
        </Grid>
        <Grid item xs={11.5}>
          <Typography variant="body1" className={styles.content}>
            Accordion Summary: the wrapper for the Accordion header, which
            expands or collapses the content when clicked.
          </Typography>
        </Grid>
      </Grid>

      <div className={styles.demoContainer}>
        <div className={styles.hasAccordions}>
          <AccordionBasics intro={true} />
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"acc-intro"} />
        </div>
      </div>

      <Typography variant="h6" className={styles.subSubTitle}>
        Expand Icon
      </Typography>
      <Typography
        variant="body1"
        align="justify"
        className={styles.description}
      >
        Use the expandIcon prop on the Accordion Summary component to change the
        expand indicator icon. The component handles the turning upside-down
        transition automatically.
      </Typography>
      <div className={styles.demoContainer}>
        <div className={styles.hasAccordions}>
          <AccordionBasics multiIcon={true} />
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"acc-icon"} />
        </div>
      </div>

      <Typography variant="h6" className={styles.subSubTitle}>
        Expanded by default
      </Typography>
      <Typography
        variant="body1"
        align="justify"
        className={styles.description}
      >
        Use the defaultExpanded prop on the Accordion component to have it
        opened by default.
      </Typography>
      <div className={styles.demoContainer}>
        <div className={styles.hasAccordions}>
          <AccordionBasics defaultExpanded={true} />
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"acc-icon"} />
        </div>
      </div>

      <Typography variant="h4" className={styles.subTitle}>
        Customization
      </Typography>
      <Typography
        variant="h6"
        style={{ paddingTop: 0 }}
        className={styles.subSubTitle}
      >
        Only one expanded at a time
      </Typography>
      <Typography
        variant="body1"
        align="justify"
        className={styles.description}
      >
        Use the expanded prop with React's useState hook to allow only one
        Accordion item to be expanded at a time. The demo below also shows a bit
        of visual customization.
      </Typography>
      <div className={styles.demoContainer}>
        <div className={styles.hasAccordions}>
          <AccordionCustomized />
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"acc-custom"} />
        </div>
      </div>
    </div>
  );
}
