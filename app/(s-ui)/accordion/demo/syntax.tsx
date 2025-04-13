"use client";
import {
  oneDark,
  darcula,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { FC } from "react";
import { useTheme } from "next-themes";
import HydrationWrapper from "@/app/hydration-wrapper";
import { Prism as SyntaxHighlight } from "react-syntax-highlighter";

interface CodeSnippetsProps {
  type: string;
}

const CodeSnippets: FC<CodeSnippetsProps> = ({ type }) => {
  const { theme } = useTheme();
  const syntaxTheme = theme === "light" ? oneDark : darcula;

  if (type === "acc-intro") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
.accExpanded {
    background-color: #c026d3;
}
  
.expandIcon {
    color: #ff0000;
    font-size: 25px;
}

.summaryContent {
    background-color: yellow;
    border: 2px solid blue;
}

.summaryRoot {
    border: 2px solid green !important;
}
  
.disabledRoot {
    background-color: #44403c !important;
}

<Accordion
    classes={{
        root: styles.accRoot,
        expanded: styles.accExpanded,
    }}
>
    <AccordionSummary
        id="panel1-header"
        expandIcon={<ExpandMore />}
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
    </AccordionDetails>
</Accordion>

<Accordion disabled>
    <AccordionSummary
        id="panel2-header"
        expandIcon={<ExpandMore />}
        aria-controls="panel2-content"
        classes={{
        root: styles.disabledRoot,
        expandIcon: styles.expandIcon,
        }}
    >
        <Typography component="span">Accordion Disabled</Typography>
    </AccordionSummary>
</Accordion>
`.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "acc-icon") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
<Accordion
    classes={{
        expanded: styles.basicExpanded,
    }}
>
    <AccordionSummary
        id="panel1-header"
        expandIcon={<ChevronDown />}
        aria-controls="panel1-content"
        classes={{
        expandIcon: styles.basicIcon,
        }}
    >
        <Typography component="span">Accordion 1</Typography>
    </AccordionSummary>
    <AccordionDetails>
        <Typography>{text}</Typography>
    </AccordionDetails>
</Accordion>
<Accordion
    classes={{
        expanded: styles.basicExpanded,
    }}
>
    <AccordionSummary
        id="panel1-header"
        expandIcon={<ArrowDown />}
        aria-controls="panel1-content"
        classes={{
        expandIcon: styles.basicIcon,
        }}
    >
        <Typography component="span">Accordion 2</Typography>
    </AccordionSummary>
    <AccordionDetails>
        <Typography>{text}</Typography>
    </AccordionDetails>
</Accordion>
`.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "acc-custom") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
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
          <Typography>{text}</Typography>
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
          <Typography>{text}</Typography>
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
          <Typography>{text}</Typography>
        </AccordionDetails>
      </Accordion>
    </Fragment>
  );
}
`.trim()}
      </SyntaxHighlight>
    );
  }
};

export default function DynamicSyntax({ type }: CodeSnippetsProps) {
  return (
    <HydrationWrapper>
      <CodeSnippets type={type} />
    </HydrationWrapper>
  );
}
