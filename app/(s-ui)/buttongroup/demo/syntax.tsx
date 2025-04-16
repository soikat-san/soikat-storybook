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
<ButtonGroup variant="contained" aria-label="Basic button group">
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
</ButtonGroup>
  `.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "variant") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
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
  `.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "size") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
<ButtonGroup
    size="small"
    variant="contained"
    aria-label="Basic button group"
>
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
</ButtonGroup>
<ButtonGroup
    color="secondary"
    variant="contained"
    aria-label="Basic button group"
>
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
</ButtonGroup>
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
  `.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "vertical") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
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
  `.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "loading") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
<ButtonGroup variant="outlined" aria-label="Basic button group">
    <Button>Submit</Button>
    <Button>Fetch data</Button>
    <Button
        loading
        loadingPosition="start"
        loadingIndicator={<CircularProgress size={25} />}
    >
        Save
    </Button>
</ButtonGroup>
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
