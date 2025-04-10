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
<Chip label="Chip Filled" />
<Chip label="Chip Outlined" variant="outlined" />
  `.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "click") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
<Chip label="Chip Filled" clickable onClick={handleClick} />
<Chip label="Chip Outlined" variant="outlined" clickable onClick={handleClick} />
    `.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "delete") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
<Chip label="Chip Filled" onDelete={handleDelete} />
<Chip label="Chip Outlined" variant="outlined" onDelete={handleDelete} />
    `.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "clickkdelete") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
<Chip label="Chip Filled" clickable onClick={handleClick} onDelete={handleDelete} />
<Chip label="Chip Outlined" variant="outlined" clickable onClick={handleClick} onDelete={handleDelete} />
    `.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "link") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
<Chip
    clickable
    component="a"
    target="_blank"
    label="Clickable link"
    onClick={handleClick}
    href="https://www.youtube.com/"
/>
    `.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "delicon") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
<Chip
    clickable
    onDelete={handleDelete}
    label="Custom delete icon"
    deleteIcon={<TrashIcon />}
/>
    `.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "avatar") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
<Chip
    label="With Avatar"
    avatar={<Avatar classes={{ root: avatarStyles.sizeavatar1 }}>M</Avatar>}
/>
<Chip
    label="With Avatar"
    variant="outlined"
    avatar={<Avatar classes={{ root: avatarStyles.sizeavatar1 }} alt="Delilah Rose" src="img-url" />}
/>
    `.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "icon") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
<Chip label="With Icon" icon={<CubeIcon />} />
<Chip label="With Icon" variant="outlined" icon={<CubeIcon />} />
    `.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "color") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
<Chip label="Primary" color="primary" />
<Chip label="Success" color="success" />
    `.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "size") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
<Chip label="Small" size="small" />
<Chip label="Small" variant="outlined" size="small" />
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
