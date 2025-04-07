import styles from "./page.module.css";
import DynamicSyntax from "./demo/syntax";
import { montserratFont } from "@/app/font";
import { IoMailSharp } from "react-icons/io5";
import InvisibleDemo from "./demo/invisible";
import Badge from "@/components/ui/Badge/component";
import { RiShoppingCart2Fill } from "react-icons/ri";
import Typography from "@/components/ui/Typography/component";
import AlignmentDemo from "./demo/alignment";

const customizedBadge = {
  badge: styles.isCustomized,
};

export default function SUIBadge() {
  return (
    <div className={`${montserratFont.className} ${styles.badgeContainer}`}>
      <Typography variant="h2" color="textPrimary" className={styles.title}>
        Badge
      </Typography>
      <Typography variant="h6" align="justify" className={styles.description}>
        Badge generates a small badge to the top-right of its child(ren).
      </Typography>

      <Typography variant="h4" className={styles.subTitle}>
        Basic Badge
      </Typography>
      <Typography
        variant="body1"
        align="justify"
        className={styles.description}
      >
        Examples of badges containing text, using primary and secondary colors.
        The badge is applied to its children.
      </Typography>

      {/* basic badge */}
      <div className={styles.demoContainer}>
        <div className={styles.hasBadge}>
          <Badge badgeContent={4} color="primary">
            <IoMailSharp />
          </Badge>
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"basic"} />
        </div>
      </div>

      <Typography variant="h4" className={styles.subTitle}>
        Color
      </Typography>
      <Typography
        variant="body1"
        align="justify"
        className={styles.description}
      >
        Use color prop to apply theme palette to component.
      </Typography>

      {/* color badge */}
      <div className={styles.demoContainer}>
        <div className={styles.hasBadge}>
          <Badge badgeContent={4} color="secondary">
            <IoMailSharp />
          </Badge>
          <Badge badgeContent={4} color="success">
            <IoMailSharp />
          </Badge>
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"color"} />
        </div>
      </div>

      <Typography variant="h4" className={styles.subTitle}>
        Customization
      </Typography>
      <Typography
        variant="body1"
        align="justify"
        className={styles.description}
      >
        Here is an example of customizing the component.
      </Typography>

      {/* customized badge */}
      <div className={styles.demoContainer}>
        <div className={styles.hasBadge}>
          <Badge badgeContent={4} color="primary" classes={customizedBadge}>
            <RiShoppingCart2Fill />
          </Badge>
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"custom"} />
        </div>
      </div>

      <Typography variant="h4" className={styles.subTitle}>
        Badge Visibility
      </Typography>
      <Typography
        variant="body1"
        align="justify"
        className={styles.description}
      >
        The visibility of badges can be controlled using the invisible prop.
      </Typography>

      {/* invisible badge */}
      <InvisibleDemo />

      <Typography variant="h4" className={styles.subTitle}>
        Maximum value
      </Typography>
      <Typography
        variant="body1"
        align="justify"
        className={styles.description}
      >
        You can use the max prop to cap the value of the badge content.
      </Typography>

      {/* max badge */}
      <div className={styles.demoContainer}>
        <div className={styles.hasBadge}>
          <Badge badgeContent={99} color="primary">
            <IoMailSharp />
          </Badge>
          <Badge badgeContent={100} color="primary">
            <IoMailSharp />
          </Badge>
          <Badge badgeContent={1000} max={999} color="primary">
            <IoMailSharp />
          </Badge>
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"maxval"} />
        </div>
      </div>

      <Typography variant="h4" className={styles.subTitle}>
        Badge Alignment
      </Typography>
      <Typography
        variant="body1"
        align="justify"
        className={styles.description}
      >
        You can use the anchorOrigin prop to move the badge to any corner of the
        wrapped element.
      </Typography>

      {/* alignment badge */}
      <AlignmentDemo />
    </div>
  );
}
