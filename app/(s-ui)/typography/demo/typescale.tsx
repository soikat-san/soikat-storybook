import "./styles.css";
import Types from "./types";
import Grid from "@/components/ui/Grid/component";
import Typography from "@/components/ui/Typography/component";

export default function TypeScale() {
  return (
    <div className={"typeContainer"}>
      <Grid container className="root-grid">
        <Grid item xs={9} className="title1">
          <Typography variant="h6">TYPESCALE</Typography>
        </Grid>
        <Grid item xs={3} className="title2">
          <Typography variant="h6">Choose Font</Typography>
        </Grid>
      </Grid>
      <Types />
    </div>
  );
}
