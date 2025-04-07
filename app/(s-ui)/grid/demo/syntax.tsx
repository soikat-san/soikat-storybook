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
      <SyntaxHighlight language={"javascript"} style={syntaxTheme}>
        {`
<Grid container>
    <Grid item xs={12}>size 12</Grid>

    <Grid item xs={6}>size 6</Grid>
    <Grid item xs={6}>size 6</Grid>

    <Grid item xs={4}>size 4</Grid>
    <Grid item xs={4}>size 4</Grid>
    <Grid item xs={4}>size 4</Grid>
</Grid>`.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "responsive") {
    return (
      <SyntaxHighlight language={"javascript"} style={syntaxTheme}>
        {`
<Grid container>
    {Array.from(Array(6)).map((_, index) => (
        <Grid key={index} xs={12} md={6} lg={4}>
            {index + 1}
        </Grid>
    ))}
</Grid>`.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "nested") {
    return (
      <SyntaxHighlight language={"javascript"} style={syntaxTheme}>
        {`<Grid container>
    <Grid container> // A nested grid container that inherits columns and spacing from above.
        <div>
            <Grid container> // A new root grid container with its own variables scope.`.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "spacing") {
    return (
      <SyntaxHighlight language={"javascript"} style={syntaxTheme}>
        {`<Grid container spacing={4}>`.trim()}
      </SyntaxHighlight>
    );
  }

  return null;
};

export default function DynamicSyntax({ type }: { type: string }) {
  return (
    <HydrationWrapper>
      <CodeSnippets type={type} />
    </HydrationWrapper>
  );
}
