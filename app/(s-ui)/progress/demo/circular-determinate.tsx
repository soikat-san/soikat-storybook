"use client";
import styles from "../page.module.css";
import React, { useState, useEffect } from "react";
import Typography from "@/components/ui/Typography/component";
import CircularProgress from "@/components/ui/Progress/Circular/component";

interface DeterminateProps {
  withLabel?: boolean;
}

const DeterminateCircularProgress: React.FC<DeterminateProps> = ({
  withLabel,
}) => {
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

  if (withLabel) {
    return (
      <div className={styles.labelContainer}>
        <CircularProgress variant="determinate" value={progress} />;
        <div className={styles.labelAlign}>
          <Typography variant="overline">{`${Math.round(
            progress
          )}%`}</Typography>
        </div>
      </div>
    );
  }

  return <CircularProgress variant="determinate" value={progress} />;
};

export default DeterminateCircularProgress;
