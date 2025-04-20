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

  if (type === "basic") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
<Tooltip title="Delete">
    <Delete className={styles.icon} />
</Tooltip>
  `.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "arrow") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
<Tooltip title="Delete" arrow>
    <Delete className={styles.icon} />
</Tooltip>
  `.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "placement") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
 <div className={styles.placement}>
    <div className={styles.placedTopBottom}>
        <Tooltip title="Add" placement="top-start">
            <Typography>TOP-START</Typography>
        </Tooltip>
        <Tooltip title="Add" placement="top">
            <Typography>TOP</Typography>
        </Tooltip>
        <Tooltip title="Add" placement="top-end">
            <Typography>TOP-END</Typography>
        </Tooltip>
    </div>
    <div className={styles.placedMid}>
        <div className={styles.onLeft}>
            <Tooltip title="Add" placement="left-start">
            <Typography>LEFT-START</Typography>
            </Tooltip>
            <Tooltip title="Add" placement="left">
            <Typography>LEFT</Typography>
            </Tooltip>
            <Tooltip title="Add" placement="left-end">
            <Typography>LEFT-END</Typography>
            </Tooltip>
        </div>
        <div className={styles.onRight}>
            <Tooltip title="Add" placement="right-start">
            <Typography>RIGHT-START</Typography>
            </Tooltip>
            <Tooltip title="Add" placement="right">
            <Typography>RIGHT</Typography>
            </Tooltip>
            <Tooltip title="Add" placement="right-end">
            <Typography>RIGHT-END</Typography>
            </Tooltip>
        </div>
    </div>
    <div className={styles.placedTopBottom}>
        <Tooltip title="Add" placement="bottom-start">
            <Typography>BOTTOM-START</Typography>
        </Tooltip>
        <Tooltip title="Add" placement="bottom">
            <Typography>BOTTOM</Typography>
        </Tooltip>
        <Tooltip title="Add" placement="bottom-end">
            <Typography>BOTTOM-END</Typography>
        </Tooltip>
    </div>
</div>
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
