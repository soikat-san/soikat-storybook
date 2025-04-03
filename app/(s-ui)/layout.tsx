import Grid from "@/components/ui/Grid/component";
import { DynamicFooter } from "@/components/footer";

export default function SUILayout({ children }: { children: React.ReactNode }) {
  return (
    <Grid container>
      <Grid item xs={2} />
      <Grid item xs={8}>
        {children}
        <DynamicFooter />
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
}
