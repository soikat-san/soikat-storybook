"use client";
import {
  oneDark,
  darcula,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { FC } from "react";
import { useTheme } from "next-themes";
import HydrationWrapper from "@/app/hydration-wrapper";
import { Prism as SyntaxHighlight } from "react-syntax-highlighter";
import { BadgeAnchorOrigin } from "@/components/ui/Badge/props.interface";

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
.paperbasic {
  width: 100px;
  height: 100px;
}

<Paper classes={{ root: styles.paperbasic }} elevation={0} />
<Paper classes={{ root: styles.paperbasic }} />
<Paper classes={{ root: styles.paperbasic }} elevation={3} />
          `.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "variants") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
<Paper variant="elevation" classes={{ root: styles.paperbasic }}>
    <Typography variant="caption">default</Typography>
</Paper>
<Paper variant="outlined" classes={{ root: styles.paperbasic }}>
    <Typography variant="caption">outlined</Typography>
</Paper>
          `.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "corner") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
<Paper classes={{ root: styles.paperbasic }}>
    <Typography variant="caption">rounded</Typography>
</Paper>
<Paper square classes={{ root: styles.paperbasic }}>
    <Typography variant="caption">square</Typography>
</Paper>
          `.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "elev") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
<Grid container>
    {Array(24).fill(0).map((_, idx) => (
        <Grid item xs={2} key={idx}>
            <Paper elevation={idx + 1} classes={{ root: styles.paperbasic }}>
                <Typography variant="caption">{elev {idx + 1}}</Typography>
            </Paper>
        </Grid>
    ))}
</Grid>
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
