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

  if (type === "standard") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
<ImageList cols={4} rowHeight={150}>
    {imageList.map((item) => (
        <ImageListItem key={item.img}>
            <img
                srcSet={"{item.img}?w=150&h=150&fit=crop&auto=format&dpr=2 2x"}
                src={"{item.img}?w=150&h=150&fit=crop&auto=format"}
                alt={item.title}
                loading="lazy"
            />
        </ImageListItem>
    ))}
</ImageList>
  `.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "quilted") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
      src: "{image}?w={size * cols}&h={size * rows}&fit=crop&auto=format",
      srcSet: "{image}?w={size * cols}&h={size * rows}&fit=crop&auto=format&dpr=2 2x",
    };
}

<ImageList
    cols={4}
    rowHeight={121}
    variant="quilted"
>
    {imageListQuilted.map((item) => (
        <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
        >
            <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
            />
        </ImageListItem>
    ))}
</ImageList>
  `.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "woven") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
<ImageList cols={4} variant="woven">
    {imageList.map((item) => (
        <ImageListItem key={item.img}>
            <img
                srcSet={"{item.img}?w=150&h=150&fit=crop&auto=format&dpr=2 2x"}
                src={"{item.img}?w=150&h=150&fit=crop&auto=format"}
                alt={item.title}
                loading="lazy"
            />
        </ImageListItem>
    ))}
</ImageList>
  `.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "titlebar") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
<ImageList cols={4} rowHeight={150}>
    {imageList.map((item) => (
        <ImageListItem key={item.img}>
            <img
                srcSet={"{item.img}?w=150&h=150&fit=crop&auto=format&dpr=2 2x"}
                src={"{item.img}?w=150&h=150&fit=crop&auto=format"}
                alt={item.title}
                loading="lazy"
            />
            <ImageListItemBar title={item.title} />
        </ImageListItem>
    ))}
</ImageList>
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
