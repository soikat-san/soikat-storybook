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
<Button variant="text">Text</Button>
<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>
  `.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "text") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
<Button>Text</Button>
<Button disabled>Contained</Button>
<Button href="#button-link">Outlined</Button>
  `.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "contd") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
<Button variant="contained">Contained</Button>
<Button variant="contained" disabled>Disabled</Button>
<Button variant="contained" href="#button-link">Link</Button>
  `.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "out") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
<Button variant="outlined">Primary</Button>
<Button variant="outlined" disabled>Disabled</Button>
<Button variant="outlined" href="#button-link">Link</Button>
  `.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "color") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
<Button color="secondary">Secondary</Button>
<Button variant="contained" color="success">Contained</Button>
<Button variant="outlined" color="error">Error</Button>
  `.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "size") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
<Button variant="contained" size="small">Small</Button>
<Button variant="contained" size="medium">Medium</Button>
<Button variant="contained" size="large">Large</Button>
  `.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "icon") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
<Button variant="outlined" startIcon={<TrashBin />}>Delete</Button>
<Button variant="contained" endIcon={<BookMark />}>Bookmark</Button>
  `.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "upload") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
.hiddeninput {
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

const UploadButton: React.FC = () => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.files);
  };

  return (
    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUpload />}
    >
      Upload Files
      <input
        multiple
        type="file"
        className={styles.hiddeninput}
        onChange={handleFileChange}
      />
    </Button>
  );
};
  `.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "loading") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
"use client";
import { Fragment, FC } from "react";
import { AiTwotoneWarning } from "react-icons/ai";
import { IoCloudUpload } from "react-icons/io5";
import Button from "@/components/ui/Button/component";
import CircularProgress from "@/components/ui/Progress/Circular/component";

const LoadingButton: FC = () => {
  const handleFileChange = () => {
    console.log("clicked");
  };

  return (
    <Fragment>
      <Button
        loading={true}
        color="warning"
        variant="outlined"
        onClick={handleFileChange}
        loadingIndicator={<CircularProgress size={22} color="warning" />}
      >
        Submit
      </Button>
      <Button
        loading={true}
        color="warning"
        variant="outlined"
        onClick={handleFileChange}
        loadingIndicator={"Loading..."}
      >
        Submit
      </Button>
      <Button
        loading={true}
        color="warning"
        variant="outlined"
        loadingPosition="start"
        onClick={handleFileChange}
        startIcon={<IoCloudUpload />}
        loadingIndicator={<CircularProgress size={22} color="warning" />}
      >
        &nbsp;&nbsp;Submit
      </Button>
      <Button
        loading={true}
        color="warning"
        variant="outlined"
        loadingPosition="end"
        onClick={handleFileChange}
        endIcon={<IoCloudUpload />}
        loadingIndicator={<CircularProgress size={22} color="warning" />}
      >
        Submit&nbsp;&nbsp;
      </Button>
      <Button
        loading={true}
        color="warning"
        variant="outlined"
        loadingPosition="end"
        onClick={handleFileChange}
        startIcon={<IoCloudUpload />}
        endIcon={<AiTwotoneWarning />}
        loadingIndicator={<CircularProgress size={22} color="warning" />}
      >
        Submit&nbsp;&nbsp;
      </Button>
    </Fragment>
  );
};

export default LoadingButton;
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
