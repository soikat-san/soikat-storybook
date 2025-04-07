"use client";
import {
  oneDark,
  darcula,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import "./styles.css";
import { useTheme } from "next-themes";
import HydrationWrapper from "@/app/hydration-wrapper";
import { Prism as SyntaxHighlight } from "react-syntax-highlighter";

export default function TypoSyntax() {
  const { theme } = useTheme();
  const syntaxTheme = theme === "light" ? oneDark : darcula;

  return (
    <HydrationWrapper>
      <SyntaxHighlight language={"javascript"} style={syntaxTheme}>
        {`
<Typography variant={'h1'}>Heading h1</Typography>
<Typography variant={'h2'}>Heading h2</Typography>
<Typography variant={'h3'}>Heading h3</Typography>
<Typography variant={'h4'}>Heading h4</Typography>
<Typography variant={'h5'}>Heading h5</Typography>
<Typography variant={'h6'}>Heading h6</Typography>
<Typography variant={'subtitle1'}>Subtitle 1</Typography>
<Typography variant={'subtitle2'}>Subtitle 2</Typography>
<Typography variant={'body1'}>Body 1</Typography>
<Typography variant={'body2'}>Body 2</Typography>
<Typography variant={'button'}>BUTTON</Typography>
<Typography variant={'caption'}>Caption</Typography>
<Typography variant={'overline'}>Overline</Typography>
      `.trim()}
      </SyntaxHighlight>
    </HydrationWrapper>
  );
}
