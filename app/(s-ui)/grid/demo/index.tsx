import Link from "next/link";
import DynamicSyntax from "./syntax";
import CustomSpacing from "./spacing";
import styles from "./styles.module.css";
import { GoDotFill } from "react-icons/go";
import { montserratFont } from "@/app/font";
import Grid from "@/components/ui/Grid/component";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import Typography from "@/components/ui/Typography/component";

export default function GridDemo() {
  return (
    <div className={`${montserratFont.className} ${styles.gridContainer}`}>
      <Typography variant="h1" color="textPrimary" className={styles.title}>
        Grid
      </Typography>
      <Typography align="justify" className={styles.description}>
        The responsive layout grid adapts to screen size and orientation,
        ensuring consistency across layouts.
      </Typography>
      <Typography align="justify" className={styles.description}>
        The Grid component works well for a layout with a known number of
        columns. The columns can be configured with multiple breakpoints to
        specify the column span of each child.
      </Typography>

      <Typography variant="h2" className={styles.subTitle}>
        How it works
      </Typography>
      <Grid container className={styles.bullets}>
        <Grid item xs={0.5}>
          <div className={styles.dot}>
            <GoDotFill />
          </div>
        </Grid>
        <Grid item xs={11.5}>
          <Typography className={styles.content}>
            It uses{" "}
            <Link
              href={"https://developer.mozilla.org/en-US/docs/Web/CSS/gap"}
              target="_blank"
            >
              the gap CSS property
            </Link>{" "}
            to add spacing between items.
          </Typography>
        </Grid>
        <Grid item xs={0.5}>
          <div className={styles.dot}>
            <GoDotFill />
          </div>
        </Grid>
        <Grid item xs={11.5}>
          <Typography className={styles.content}>
            Uses{" "}
            <Link href={"https://www.w3.org/TR/css-flexbox-1/"} target="_blank">
              CSS Flexbox
            </Link>{" "}
            (rather than CSS Grid) for high flexibility.
          </Typography>
        </Grid>
        <Grid item xs={0.5}>
          <div className={styles.dot}>
            <GoDotFill />
          </div>
        </Grid>
        <Grid item xs={11.5}>
          <Typography className={styles.content}>
            There are five default grid breakpoints: xs, sm, md, lg, and xl.
          </Typography>
        </Grid>
        <Grid item xs={0.5}>
          <div className={styles.dot}>
            <GoDotFill />
          </div>
        </Grid>
        <Grid item xs={11.5}>
          <Typography className={styles.content}>
            The grid is always a flex item. Use the container prop to add a flex
            container.
          </Typography>
        </Grid>
        <Grid item xs={0.5}>
          <div className={styles.dot}>
            <GoDotFill />
          </div>
        </Grid>
        <Grid item xs={11.5}>
          <Typography className={styles.content}>
            Item widths are set in percentages, so they're always fluid and
            sized relative to their parent element.
          </Typography>
        </Grid>
        <Grid item xs={0.5}>
          <div className={styles.dot}>
            <GoDotFill />
          </div>
        </Grid>
        <Grid item xs={11.5}>
          <Typography className={styles.content}>
            You can give integer values for each breakpoint, to indicate how
            many of the 12 available columns are occupied.
          </Typography>
        </Grid>
        <Grid item xs={0.5}>
          <div className={styles.dot}>
            <GoDotFill />
          </div>
        </Grid>
        <Grid item xs={11.5}>
          <Typography className={styles.content}>
            It does not automatically place children. It will try to fit the
            children one by one, and if there is not enough space, the rest of
            the children will start on the next line, and so on.
          </Typography>
        </Grid>
      </Grid>

      <Typography variant="h2" className={styles.subTitle}>
        Fluid grids
      </Typography>
      <Typography align="justify" className={styles.description}>
        Fluid grids use columns that scale and resize content. A fluid grid's
        layout can use breakpoints to determine if the layout needs to change
        dramatically.
      </Typography>
      <Typography align="justify" className={styles.description}>
        In order to create a grid layout, you need a container. Use the
        container prop to create a grid container that wraps the grid items (the
        Grid is always an item).
      </Typography>
      <Typography align="justify" className={styles.description}>
        Column widths are integer values between 1 and 12. For example, an item
        with xs={6} occupies half of the grid container's width for breakpoints
        xs and above.
      </Typography>

      {/* basic grid demo */}
      <div className={styles.demoContainer}>
        <div className={styles.displaygrid}>
          <Grid container>
            <Grid item xs={12}>
              <div className={styles.demoitems}>size 12</div>
            </Grid>
            <Grid item xs={6}>
              <div className={styles.demoitems}>size 6</div>
            </Grid>
            <Grid item xs={6}>
              <div className={styles.demoitems}>size 6</div>
            </Grid>
            <Grid item xs={4}>
              <div className={styles.demoitems}>size 4</div>
            </Grid>
            <Grid item xs={4}>
              <div className={styles.demoitems}>size 4</div>
            </Grid>
            <Grid item xs={4}>
              <div className={styles.demoitems}>size 4</div>
            </Grid>
          </Grid>
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"basic"} />
        </div>
      </div>

      <Typography variant="h2" className={styles.subTitle}>
        Spacing
      </Typography>
      <Typography align="justify" className={styles.description}>
        Use the spacing prop to control the space between children. The spacing
        value can be any positive number (including decimals).
      </Typography>
      <Typography align="justify" className={styles.description}>
        The following demo illustrates the use of the spacing prop:
      </Typography>

      {/* spacing demo */}
      <div className={styles.demoContainer}>
        <div className={styles.displaygrid}>
          <CustomSpacing />
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"spacing"} />
        </div>
      </div>

      <Typography variant="h2" className={styles.subTitle}>
        Responsive Values
      </Typography>
      <Typography align="justify" className={styles.description}>
        You can set prop values to change when a given breakpoint is active.
      </Typography>

      {/* responsive demo */}
      <div className={styles.demoContainer}>
        <div className={styles.displaygrid}>
          <Grid container>
            <Grid item xs={4}>
              <div className={styles.demoitems}>1</div>
            </Grid>
            <Grid item xs={4}>
              <div className={styles.demoitems}>2</div>
            </Grid>
            <Grid item xs={4}>
              <div className={styles.demoitems}>3</div>
            </Grid>
            <Grid item xs={4}>
              <div className={styles.demoitems}>4</div>
            </Grid>
            <Grid item xs={4}>
              <div className={styles.demoitems}>5</div>
            </Grid>
            <Grid item xs={4}>
              <div className={styles.demoitems}>6</div>
            </Grid>
          </Grid>
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"responsive"} />
        </div>
      </div>

      <Typography variant="h2" className={styles.subTitle}>
        Nested Grid
      </Typography>
      <Typography align="justify" className={styles.description}>
        The grid container that renders as a direct child inside another grid
        container is a nested grid that inherits its columns and spacing from
        the top level. It will also inherit the props of the top-level grid if
        it receives those props.
      </Typography>

      {/* nested demo */}
      <div className={styles.nesteddemo}>
        <IoCheckmarkCircleSharp />
        <div>
          <Typography>
            Note that a nested grid container should be a direct child of
            another grid container. If there are non-grid elements in between,
            the grid container will start as the new root container.
          </Typography>
          <DynamicSyntax type={"nested"} />
        </div>
      </div>
    </div>
  );
}
