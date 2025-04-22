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

  if (type === "severity") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
<Alert severity="success">This is a success Alert.</Alert>
<Alert severity="info">This is an info Alert.</Alert>
<Alert severity="warning">This is a warning Alert.</Alert>
<Alert severity="error">This is an error Alert.</Alert>
  `.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "filled") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
<Alert variant="filled" severity="success">This is a success Alert.</Alert>
<Alert variant="filled" severity="info">This is an info Alert.</Alert>
<Alert variant="filled" severity="warning">This is a warning Alert.</Alert>
<Alert variant="filled" severity="error">This is an error Alert.</Alert>
  `.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "outlined") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
<Alert variant="outlined" severity="success">This is a success Alert.</Alert>
<Alert variant="outlined" severity="info">This is an info Alert.</Alert>
<Alert variant="outlined" severity="warning">This is a warning Alert.</Alert>
<Alert variant="outlined" severity="error">This is an error Alert.</Alert>
  `.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "color") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
<Alert severity="success" color="warning" variant="filled">
  This is a success Alert.
</Alert>
  `.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "actions") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
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
  `.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "icons") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
<Alert icon={false} severity="success">
  This success Alert has no icon.
</Alert>
<Alert icon={<ImCheckmark2 fontSize="inherit" />} severity="success">
  This success Alert has a custom icon.
</Alert>
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
