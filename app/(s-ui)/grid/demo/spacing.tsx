"use client";
import Typography from "@/components/ui/Typography/component";
import styles from "./styles.module.css";
import Grid from "@/components/ui/Grid/component";
import { IoMdRadioButtonOn } from "react-icons/io";
import { useState, Fragment } from "react";

export default function CustomSpacing() {
  const [spacing, setSpacing] = useState(2);
  const spacingArray = [0.5, 1, 2, 3, 4, 8];

  return (
    <Fragment>
      <Grid container spacing={spacing} style={{ justifyContent: "center" }}>
        <Grid item xs={3}>
          <div className={styles.demoitems2} />
        </Grid>
        <Grid item xs={3}>
          <div className={styles.demoitems2} />
        </Grid>
        <Grid item xs={3}>
          <div className={styles.demoitems2} />
        </Grid>
      </Grid>
      <div className={styles.spacingVals}>
        <Typography variant="h6">spacing</Typography>
        <Grid container>
          {spacingArray.map((val, id) => (
            <Fragment key={id}>
              <Grid item xs={2}>
                <div>
                  {spacing === val ? (
                    <IoMdRadioButtonOn
                      onClick={() => setSpacing(val)}
                      className={styles.active}
                    />
                  ) : (
                    <IoMdRadioButtonOn onClick={() => setSpacing(val)} />
                  )}
                  <Typography variant="h4">{val}</Typography>
                </div>
              </Grid>
            </Fragment>
          ))}
        </Grid>
      </div>
    </Fragment>
  );
}
