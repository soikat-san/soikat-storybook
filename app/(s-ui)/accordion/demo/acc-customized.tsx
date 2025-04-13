"use client";
import styles from "../page.module.css";
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@/components/ui/Accordion/component";
import { MdExpandMore } from "react-icons/md";
import Typography from "@/components/ui/Typography/component";

export default function AccordionCustomized() {
  const [expanded, setExpanded] = useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <Fragment>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        classes={{
          expanded: styles.customExpanded,
        }}
      >
        <AccordionSummary
          id="panel1d-header"
          expandIcon={<MdExpandMore />}
          aria-controls="panel1d-content"
          classes={{
            expandIcon: styles.expandIconCustom,
          }}
        >
          <Typography component="span">Collapsible Group Item #1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        classes={{
          expanded: styles.customExpanded,
        }}
      >
        <AccordionSummary
          id="panel2d-header"
          expandIcon={<MdExpandMore />}
          aria-controls="panel2d-content"
          classes={{
            expandIcon: styles.expandIconCustom,
          }}
        >
          <Typography component="span">Collapsible Group Item #2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        classes={{
          expanded: styles.customExpanded,
        }}
      >
        <AccordionSummary
          id="panel3d-header"
          expandIcon={<MdExpandMore />}
          aria-controls="panel3d-content"
          classes={{
            expandIcon: styles.expandIconCustom,
          }}
        >
          <Typography component="span">Collapsible Group Item #3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Fragment>
  );
}
