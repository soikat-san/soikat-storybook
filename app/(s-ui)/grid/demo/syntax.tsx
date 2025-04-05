"use client";
import {
  oneDark,
  darcula,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { Prism as SyntaxHighlight } from "react-syntax-highlighter";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DynamicSyntax({ type }: { type: string }) {
  const { theme } = useTheme();
  const syntaxTheme = theme === "light" ? oneDark : darcula;

  const [mounted, setMounted] = useState(false);

  // Fix hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid rendering during SSR

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
}
