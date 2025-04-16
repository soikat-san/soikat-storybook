import styles from "./page.module.css";
import DynamicSyntax from "./demo/syntax";
import { montserratFont } from "@/app/font";
import { imageListQuilted, imageListStandard } from "./demo/image-list";
import Typography from "@/components/ui/Typography/component";
import ImageList from "@/components/ui/ImageList/img-list/component";
import ImageListItem from "@/components/ui/ImageList/img-item/component";
import ImageListItemBar from "@/components/ui/ImageList/img-bar/component";

export default function SUIChip() {
  function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

  return (
    <div className={`${montserratFont.className} ${styles.imgContainer}`}>
      <Typography variant="h2" color="textPrimary" className={styles.title}>
        Image List
      </Typography>
      <Typography variant="h6" align="justify" className={styles.description}>
        The Image List displays a collection of images in an organized grid.
      </Typography>

      <Typography variant="h4" className={styles.subTitle}>
        Standard image list
      </Typography>
      <Typography
        variant="body1"
        align="justify"
        className={styles.description}
      >
        Standard image lists are best for items of equal importance. They have a
        uniform container size, ratio, and spacing.
      </Typography>
      <div className={styles.demoContainer}>
        <div className={styles.hasImg}>
          <ImageList cols={4} rowHeight={150}>
            {imageListStandard.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=150&h=150&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=150&h=150&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"standard"} />
        </div>
      </div>

      <Typography variant="h4" className={styles.subTitle}>
        Quilted image list
      </Typography>
      <Typography
        variant="body1"
        align="justify"
        className={styles.description}
      >
        Quilted image lists emphasize certain items over others in a collection.
        They create hierarchy using varied container sizes and ratios.
      </Typography>
      <div className={styles.demoContainer}>
        <div className={styles.hasImg}>
          <ImageList variant="quilted" cols={4} rowHeight={121}>
            {imageListQuilted.map((item) => (
              <ImageListItem
                key={item.img}
                cols={item.cols || 1}
                rows={item.rows || 1}
              >
                <img
                  {...srcset(item.img, 121, item.rows, item.cols)}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"quilted"} />
        </div>
      </div>

      <Typography variant="h4" className={styles.subTitle}>
        Woven image list
      </Typography>
      <Typography
        variant="body1"
        align="justify"
        className={styles.description}
      >
        Woven image lists use alternating container ratios to create a rhythmic
        layout. A woven image list is best for browsing peer content.
      </Typography>
      <div className={styles.demoContainer}>
        <div className={styles.hasImg}>
          <ImageList cols={3} variant="woven">
            {imageListStandard.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=150&h=150&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=150&h=150&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"woven"} />
        </div>
      </div>

      <Typography variant="h4" className={styles.subTitle}>
        Image list with title bars
      </Typography>
      <Typography
        variant="body1"
        align="justify"
        className={styles.description}
      >
        This example demonstrates the use of the ImageListItemBar to add an
        overlay to each item. The overlay can accommodate a title, subtitle and
        secondary action - in this example an IconButton.
      </Typography>
      <div className={styles.demoContainer}>
        <div className={styles.hasImg}>
          <ImageList cols={4} rowHeight={150}>
            {imageListStandard.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=150&h=150&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=150&h=150&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar title={item.title} />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"titlebar"} />
        </div>
      </div>
    </div>
  );
}
