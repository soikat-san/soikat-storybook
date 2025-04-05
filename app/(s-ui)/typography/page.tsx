import Link from "next/link";
import styles from "./page.module.css";
import { montserratFont } from "@/app/font";
import Typography from "@/components/ui/Typography/component";
import TypeScale from "./demo/typescale";
import TypoSyntax from "./demo/syntax";

export default function SUITypography() {
  return (
    <div className={`${styles.typoContainer} ${montserratFont.className}`}>
      <Typography variant="h2" color="textPrimary" className={styles.title}>
        Typography
      </Typography>
      <Typography variant="h6" align="justify" className={styles.description}>
        Use typography to present your design and content as clearly and
        efficiently as possible.
      </Typography>
      <Typography variant="h4" className={styles.subTitle}>
        Usage
      </Typography>
      <Typography
        variant="body1"
        align="justify"
        className={styles.description}
      >
        The Typography component follows the{" "}
        <Link
          target="_blank"
          href={
            "https://m2.material.io/design/typography/the-type-system.html#type-scale"
          }
        >
          Material Design typographic scale
        </Link>{" "}
        that provides a limited set of type sizes that work well together for a
        consistent layout.
      </Typography>
      <TypeScale />
      <TypoSyntax />
    </div>
  );
}
