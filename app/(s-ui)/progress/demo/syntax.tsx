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

  if (type === "circ-indt") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
<CircularProgress />
  `.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "circ-color") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
<CircularProgress color="secondary" />
<CircularProgress color="success" />
<CircularProgress color="inherit" />
  `.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "circ-size") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
<CircularProgress size={30} />
<CircularProgress size={40} />
<CircularProgress size={60} />
  `.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "circ-detd") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
const DeterminateCircularProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
        <CircularProgress variant="determinate" value={25} />
        <CircularProgress variant="determinate" value={50} />
        <CircularProgress variant="determinate" value={75} />
        <CircularProgress variant="determinate" value={100} />
        <CircularProgress variant="determinate" value={progress} />
    </div>
    );
};
  `.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "circ-label") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
const DeterminateCircularProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

    return (
      <div className={styles.labelContainer}>
        <CircularProgress variant="determinate" value={progress} />;
        <div className={styles.labelAlign}>
          <Typography variant="overline">{{progress}%"}</Typography>
        </div>
      </div
};
  `.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "linr-indt") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
<LinearProgress />
  `.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "linr-color") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
<LinearProgress color="secondary" />
<LinearProgress color="success" />
<LinearProgress color="inherit" />
  `.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "linr-detd") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
const DeterminateLinearProgress: React.FC = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
          setProgress((prevProgress) =>
            prevProgress >= 100 ? 10 : prevProgress + 10
          );
        }, 800);
    
        return () => {
          clearInterval(timer);
        };
    }, []);

  return <LinearProgress variant="determinate" value={progress} />;
};
  `.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "linr-bufr") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
const DeterminateLinearProgress: React.FC = () => {
    const [buffer, setBuffer] = useState(10);
    const [progress, setProgress] = useState(0);
    const progressRef = useRef(() => {});

    useEffect(() => {
        progressRef.current = () => {
          if (progress === 100) {
            setProgress(0);
            setBuffer(10);
          } else {
            setProgress(progress + 1);
            if (buffer < 100 && progress % 5 === 0) {
              const newBuffer = buffer + 1 + Math.random() * 10;
              setBuffer(newBuffer > 100 ? 100 : newBuffer);
            }
          }
        };
    });
    
    useEffect(() => {
        const timer = setInterval(() => {
          progressRef.current();
        }, 100);
    
        return () => {
          clearInterval(timer);
        };
    }, []);

  return <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />;
};
  `.trim()}
      </SyntaxHighlight>
    );
  } else if (type === "linr-label") {
    return (
      <SyntaxHighlight language="javascript" style={syntaxTheme}>
        {`
const DeterminateLinearProgress: React.FC = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
          setProgress((prevProgress) =>
            prevProgress >= 100 ? 10 : prevProgress + 10
          );
        }, 800);
    
        return () => {
          clearInterval(timer);
        };
    }, []);

  return (
      <div className={styles.linearContainer}>
        <LinearProgress variant="determinate" value={progress} />
        <Typography variant="overline" className={styles.linearLabel}>
            {progress %}
        </Typography>
      </div>
    );
};
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
