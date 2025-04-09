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

  if (type === "imgavs") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
<Avatar alt="Remy Sharp" src="img-url-1" />
<Avatar alt="Lisa Lee" src="img-url-2" />
<Avatar alt="Dana Smith" src="img-url-3" />
  `.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "ltravs") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`

.coloravatar1 {
    background-color: yellowgreen !important;
}

.coloravatar2 {
    background-color: orangered !important;
}

.coloravatar3 {
    background-color: violet !important;
}

<Avatar classes={{ root: styles.coloravatar1 }}>A</Avatar>
<Avatar classes={{ root: styles.coloravatar2 }}>N</Avatar>
<Avatar classes={{ root: styles.coloravatar3 }}>Q</Avatar>
  `.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "sizeavs") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
.sizeavatar1 {
  width: 24px !important;
  height: 24px !important;
}

.sizeavatar2 {
  width: 56px !important;
  height: 56px !important;
}

<Avatar alt="Remy Sharp" classes={{ root: styles.sizeavatar1 }} src="img-url-1" />
<Avatar alt="Remy Sharp" src="img-url-1" />
<Avatar alt="Remy Sharp" classes={{ root: styles.sizeavatar2 }} src="img-url-1" />
  `.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "iconavs") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
<Avatar classes={{ root: styles.coloravatar1 }}><MailIcon /></Avatar>
<Avatar classes={{ root: styles.coloravatar2 }}><CartIcon /></Avatar>
<Avatar classes={{ root: styles.coloravatar3 }}><EmojiIcon /></Avatar>
  `.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "varavs") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
<Avatar classes={{ root: styles.coloravatar1 }} variant="rounded">F</Avatar>
<Avatar classes={{ root: styles.coloravatar2 }} variant="square"><CartIcon /></Avatar>
  `.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "grpavs") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
<AvatarGroup>
    <Avatar classes={{ root: styles.coloravatar1 }}>G</Avatar>
    <Avatar classes={{ root: styles.coloravatar1 }}>R</Avatar>
    <Avatar classes={{ root: styles.coloravatar1 }}>O</Avatar>
    <Avatar classes={{ root: styles.coloravatar1 }}>U</Avatar>
    <Avatar classes={{ root: styles.coloravatar1 }}>P</Avatar>
</AvatarGroup>
  `.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "totalavs") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
<AvatarGroup total={25} spacing={"small"}>
    <Avatar classes={{ root: styles.coloravatar1 }}>G</Avatar>
    <Avatar classes={{ root: styles.coloravatar1 }}>R</Avatar>
    <Avatar classes={{ root: styles.coloravatar1 }}>O</Avatar>
    <Avatar classes={{ root: styles.coloravatar1 }}>U</Avatar>
    <Avatar classes={{ root: styles.coloravatar1 }}>P</Avatar>
</AvatarGroup>
  `.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "surplus") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
function formatSurplus(surplus: number): string {
    if (surplus < 1000) {
      return "+{surplus}";
    } else {
      // Floor the surplus divided by 100 to get one decimal place without rounding up
      // e.g. for 4995, 4995/100 = 49.95, floor → 49, then 49/10 = 4.9    
      const floored = Math.floor(surplus / 100) / 10; 
      let str = floored.toFixed(1);
      if (str.endsWith(".0")) {
        str = str.slice(0, -2);
      }
      return "+{str}k";
    }
}

<AvatarGroup
    total={2000}
    spacing={"small"}
    renderSurplus={(surplus) => (
        <div className={styles.customSurplus}>
            {formatSurplus(surplus)}
        </div>
    )}
>
    <Avatar classes={{ root: styles.coloravatar2 }}>G</Avatar>
    <Avatar classes={{ root: styles.coloravatar2 }}>R</Avatar>
    <Avatar classes={{ root: styles.coloravatar2 }}>O</Avatar>
    <Avatar classes={{ root: styles.coloravatar2 }}>U</Avatar>
    <Avatar classes={{ root: styles.coloravatar2 }}>P</Avatar>
</AvatarGroup>
  `.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "withbadge") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
 <Badge
    color="info"
    overlap="circular"
    badgeContent={"DR"}
    classes={{ root: styles.badgeAvatar }}
    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
>
    <Avatar alt="Delilah Rose" src="image-url" />
</Badge>
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
