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
  anchorOrigin?: BadgeAnchorOrigin;
}

const CodeSnippets: FC<CodeSnippetsProps> = ({ type, anchorOrigin }) => {
  const { theme } = useTheme();
  const syntaxTheme = theme === "light" ? oneDark : darcula;

  if (type === "basic") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
  <Badge badgeContent={4} color="primary">
    <MailIcon color="action" />
</Badge>`.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "color") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
  <Badge badgeContent={4} color="secondary">
  <MailIcon color="action" />
</Badge>
<Badge badgeContent={4} color="success">
  <MailIcon color="action" />
</Badge>`.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "custom") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
// With CSS Modules
const customizedBadge = {
  badge: styles.isCustomized,
};

.isCustomized {
  top: 20px;
  left: 10px;
}

// Without CSS Modules
const customizedBadge = {
  badge: 'is-customized',
};

.is-customized {
  top: 20px;
  left: 10px;
}

<Badge badgeContent={4} color="primary" classes={customizedBadge}>
    <ShoppingCartIcon />
</Badge>`.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "invisible") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
export default function InvisibleDemo() {
  const [count, setCount] = useState(1);
  return (
    <div>
        <Badge badgeContent={count} color="primary">
          <MailIcon />
        </Badge>
        <Badge variant={"dot"} color="primary" invisible={count === 0}>
          <MailIcon />
        </Badge>
        <div>
          <LuMinus onClick={() => setCount(Math.max(count - 1, 0))} />
          <GoPlus onClick={() => setCount(count + 1)} />
        </div>
    </div>
  );
}`.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "showzero") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
<Badge badgeContent={0} color="primary">
    <MailIcon />
</Badge>
<Badge badgeContent={0} color="primary" showZero>
    <MailIcon />
</Badge>`.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "maxval") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
  <Badge badgeContent={99} color="primary">
    <MailIcon />
</Badge>
<Badge badgeContent={100} color="primary">
    <MailIcon />
</Badge>
<Badge badgeContent={1000} max={999} color="primary">
    <MailIcon />
</Badge>`.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "anchor") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
        
<Badge
  anchorOrigin={{
    vertical: '${anchorOrigin?.vertical}',
    horizontal: '${anchorOrigin?.horizontal}',
  }}
>
`.trim()}
      </SyntaxHighlight>
    );
  }

  return null;
};

export default function DynamicSyntax({
  type,
  anchorOrigin,
}: CodeSnippetsProps) {
  return (
    <HydrationWrapper>
      <CodeSnippets type={type} anchorOrigin={anchorOrigin} />
    </HydrationWrapper>
  );
}
