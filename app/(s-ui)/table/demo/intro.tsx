import styles from "../page.module.css";
import { GoDotFill } from "react-icons/go";
import Grid from "@/components/ui/Grid/component";
import Typography from "@/components/ui/Typography/component";

export default function TableIntroduction() {
  return (
    <Grid container>
      <Grid item xs={0.5}>
        <div className={styles.dot}>
          <GoDotFill />
        </div>
      </Grid>
      <Grid item xs={11.5}>
        <Typography variant="body1" className={styles.content}>
          <span>{`<TableContainer />`}</span> : A wrapper that provides
          horizontally scrolling behavior for the <span>{`<Table />`}</span>{" "}
          component.
        </Typography>
      </Grid>
      <Grid item xs={0.5}>
        <div className={styles.dot}>
          <GoDotFill />
        </div>
      </Grid>
      <Grid item xs={11.5}>
        <Typography variant="body1" className={styles.content}>
          <span>{`<Table />`}</span> : The main component for the table element.
          Renders as a <span>{`<table />`}</span> by default.
        </Typography>
      </Grid>
      <Grid item xs={0.5}>
        <div className={styles.dot}>
          <GoDotFill />
        </div>
      </Grid>
      <Grid item xs={11.5}>
        <Typography variant="body1" className={styles.content}>
          <span>{`<TableHead />`}</span> : The container for the header row(s)
          of <span>{`<Table />`}</span>. Renders a <span>{`<thead />`}</span> by
          default.
        </Typography>
      </Grid>
      <Grid item xs={0.5}>
        <div className={styles.dot}>
          <GoDotFill />
        </div>
      </Grid>
      <Grid item xs={11.5}>
        <Typography variant="body1" className={styles.content}>
          <span>{`<TableBody />`}</span> : The container for the body rows of{" "}
          <span>{`<Table />`}</span>. Renders a <span>{`<tbody />`}</span> by
          default.
        </Typography>
      </Grid>
      <Grid item xs={0.5}>
        <div className={styles.dot}>
          <GoDotFill />
        </div>
      </Grid>
      <Grid item xs={11.5}>
        <Typography variant="body1" className={styles.content}>
          <span>{`<TableRow />`}</span> : A row in a table. Can be used in
          <span>{`<TableHead />`}</span>, <span>{`<TableBody />`}</span>.
          Renders a <span>{`<tr />`}</span> by default.
        </Typography>
      </Grid>
      <Grid item xs={0.5}>
        <div className={styles.dot}>
          <GoDotFill />
        </div>
      </Grid>
      <Grid item xs={11.5}>
        <Typography variant="body1" className={styles.content}>
          <span>{`<TableCell />`}</span> : A cell in a table. Can be used in
          <span>{`<TableRow />`}</span>. Renders as a <span>{`<th>`}</span> in{" "}
          <span>{`<TableHead />`}</span> and <span>{`<td>`}</span> in{" "}
          <span>{`<TableBody />`}</span> by default.
        </Typography>
      </Grid>
      <Grid item xs={0.5}>
        <div className={styles.dot}>
          <GoDotFill />
        </div>
      </Grid>
      <Grid item xs={11.5}>
        <Typography variant="body1" className={styles.content}>
          <span>{`<TableFooter />`}</span> : An optional container for the
          footer row(s) of the table. Renders as a <span>{`<tfoot />`}</span> by
          default.
        </Typography>
      </Grid>
      <Grid item xs={0.5}>
        <div className={styles.dot}>
          <GoDotFill />
        </div>
      </Grid>
      <Grid item xs={11.5}>
        <Typography variant="body1" className={styles.content}>
          <span>{`<TablePagination />`}</span> : A component that provides
          controls for paginating table data.
        </Typography>
      </Grid>
      <Grid item xs={0.5}>
        <div className={styles.dot}>
          <GoDotFill />
        </div>
      </Grid>
      <Grid item xs={11.5}>
        <Typography variant="body1" className={styles.content}>
          <span>{`<TableSortLabel />`}</span> : A component used to display
          sorting controls for column headers, allowing users to sort data in
          ascending or descending order.
        </Typography>
      </Grid>
    </Grid>
  );
}
