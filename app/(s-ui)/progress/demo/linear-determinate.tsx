"use client";
import styles from "../page.module.css";
import React, { useState, useEffect, useRef } from "react";
import Typography from "@/components/ui/Typography/component";
import LinearProgress from "@/components/ui/Progress/Linear/component";

interface DeterminateProps {
  withLabel?: boolean;
  withBuffer?: boolean;
}

const DeterminateLinearProgress: React.FC<DeterminateProps> = ({
  withLabel,
  withBuffer,
}) => {
  const [buffer, setBuffer] = useState(10);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(() => {});

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

  if (withBuffer) {
    return (
      <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
    );
  }

  if (withLabel) {
    return (
      <div className={styles.linearContainer}>
        <LinearProgress variant="determinate" value={progress} />
        <Typography
          variant="overline"
          className={styles.linearLabel}
        >{`${Math.round(progress)}%`}</Typography>
      </div>
    );
  }

  return <LinearProgress variant="determinate" value={progress} />;
};

export default DeterminateLinearProgress;
