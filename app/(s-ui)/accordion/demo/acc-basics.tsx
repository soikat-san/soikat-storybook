import { Fragment } from "react";
import styles from "../page.module.css";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@/components/ui/Accordion/component";
import { MdExpandMore } from "react-icons/md";
import { IoMdArrowRoundDown } from "react-icons/io";
import Typography from "@/components/ui/Typography/component";

interface AccDemoProps {
  intro?: boolean;
  multiIcon?: boolean;
  defaultExpanded?: boolean;
}

export default function AccordionBasics({
  intro = false,
  multiIcon,
  defaultExpanded,
}: AccDemoProps) {
  return (
    <Fragment>
      {intro ? (
        <Fragment>
          <Accordion
            classes={{
              root: styles.accRoot,
              expanded: styles.accExpanded,
            }}
          >
            <AccordionSummary
              id="panel1-header"
              expandIcon={<MdExpandMore />}
              aria-controls="panel1-content"
              classes={{
                root: styles.summaryRoot,
                content: styles.summaryContent,
                expandIcon: styles.expandIcon,
              }}
            >
              <Typography component="span">Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>

          <Accordion disabled>
            <AccordionSummary
              id="panel2-header"
              expandIcon={<MdExpandMore />}
              aria-controls="panel2-content"
              classes={{
                root: styles.disabledRoot,
                expandIcon: styles.expandIcon,
              }}
            >
              <Typography component="span">Accordion Disabled</Typography>
            </AccordionSummary>
          </Accordion>
        </Fragment>
      ) : (
        <Fragment>
          <Accordion
            defaultExpanded={defaultExpanded}
            classes={{
              expanded: styles.basicExpanded,
            }}
          >
            <AccordionSummary
              id="panel1-header"
              expandIcon={<MdExpandMore />}
              aria-controls="panel1-content"
              classes={{
                expandIcon: styles.basicIcon,
              }}
            >
              <Typography component="span">Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body2"
                align="justify"
                className={styles.accText}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            classes={{
              expanded: styles.basicExpanded,
            }}
          >
            <AccordionSummary
              id="panel1-header"
              expandIcon={multiIcon ? <IoMdArrowRoundDown /> : <MdExpandMore />}
              aria-controls="panel1-content"
              classes={{
                expandIcon: styles.basicIcon,
              }}
            >
              <Typography component="span">Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body2"
                align="justify"
                className={styles.accText}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Fragment>
      )}
    </Fragment>
  );
}
