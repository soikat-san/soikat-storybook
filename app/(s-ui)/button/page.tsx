import styles from "./page.module.css";
import DynamicSyntax from "./demo/syntax";
import { montserratFont } from "@/app/font";
import Typography from "@/components/ui/Typography/component";
import Button from "@/components/ui/Button/component";
import Link from "next/link";
import { IoTrashBin, IoCloudUpload } from "react-icons/io5";
import { GiEvilBook } from "react-icons/gi";
import UploadButton from "./demo/upload-btn";

export default function SUIButton() {
  return (
    <div className={`${montserratFont.className} ${styles.btnContainer}`}>
      <Typography variant="h2" color="textPrimary" className={styles.title}>
        Button
      </Typography>
      <Typography variant="h6" align="justify" className={styles.description}>
        Buttons allow users to take actions, and make choices, with a single
        tap.
      </Typography>

      <Typography variant="h4" className={styles.subTitle}>
        Basic button
      </Typography>
      <Typography
        variant="body1"
        align="justify"
        className={styles.description}
      >
        The Button comes with three variants: text (default), contained, and
        outlined.
      </Typography>
      <div className={styles.demoContainer}>
        <div className={styles.hasBtn}>
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"basic"} />
        </div>
      </div>

      <Typography variant="h6" className={styles.subSubTitle}>
        Text button
      </Typography>
      <Typography
        variant="body1"
        align="justify"
        className={styles.description}
      >
        <Link
          target="_blank"
          href={"https://m2.material.io/components/buttons#text-button"}
        >
          Text buttons
        </Link>{" "}
        are typically used for less-pronounced actions, including those located:
        in dialogs, in cards. In cards, text buttons help maintain an emphasis
        on card content.
      </Typography>
      <div className={styles.demoContainer}>
        <div className={styles.hasBtn}>
          <Button>Primary</Button>
          <Button disabled>Disabled</Button>
          <Button href="#button-link">Link</Button>
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"text"} />
        </div>
      </div>

      <Typography variant="h6" className={styles.subSubTitle}>
        Contained button
      </Typography>
      <Typography
        variant="body1"
        align="justify"
        className={styles.description}
      >
        <Link
          target="_blank"
          href={"https://m2.material.io/components/buttons#contained-button"}
        >
          Contained buttons
        </Link>{" "}
        are typically used for less-pronounced actions, including those located:
        in dialogs, in cards. In cards, text buttons help maintain an emphasis
        on card content.
      </Typography>
      <div className={styles.demoContainer}>
        <div className={styles.hasBtn}>
          <Button variant="contained">Contained</Button>
          <Button variant="contained" disabled>
            Disabled
          </Button>
          <Button variant="contained" href="#button-link">
            Link
          </Button>
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"contd"} />
        </div>
      </div>

      <Typography variant="h6" className={styles.subSubTitle}>
        Outlined button
      </Typography>
      <Typography
        variant="body1"
        align="justify"
        className={styles.description}
      >
        <Link
          target="_blank"
          href={"https://m2.material.io/components/buttons#outlined-button"}
        >
          Outlined buttons
        </Link>{" "}
        are medium-emphasis buttons. They contain actions that are important but
        aren't the primary action in an app.
      </Typography>
      <div className={styles.demoContainer}>
        <div className={styles.hasBtn}>
          <Button variant="outlined">Primary</Button>
          <Button variant="outlined" disabled>
            Disabled
          </Button>
          <Button variant="outlined" href="#button-link">
            Link
          </Button>
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"out"} />
        </div>
      </div>

      <Typography variant="h4" className={styles.subTitle}>
        Color
      </Typography>
      <div className={styles.demoContainer}>
        <div className={styles.hasBtn}>
          <Button color="secondary">Secondary</Button>
          <Button variant="contained" color="success">
            Contained
          </Button>
          <Button variant="outlined" color="error">
            Error
          </Button>
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"color"} />
        </div>
      </div>

      <Typography variant="h4" className={styles.subTitle}>
        Size
      </Typography>
      <div className={styles.demoContainer}>
        <div className={styles.hasBtn}>
          <Button variant="contained" size="small">
            Small
          </Button>
          <Button variant="contained" size="medium">
            Medium
          </Button>
          <Button variant="contained" size="large">
            Large
          </Button>
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"size"} />
        </div>
      </div>

      <Typography variant="h4" className={styles.subTitle}>
        Buttons with icons and label
      </Typography>
      <Typography
        variant="body1"
        align="justify"
        className={styles.description}
      >
        Sometimes you might want to have icons for certain buttons to enhance
        the UX of the application as we recognize logos more easily than plain
        text. For example, if you have a delete button you can label it with a
        dustbin icon.
      </Typography>
      <div className={styles.demoContainer}>
        <div className={styles.hasBtn}>
          <Button variant="outlined" startIcon={<IoTrashBin />}>
            Delete
          </Button>
          <Button variant="contained" endIcon={<GiEvilBook />}>
            Bookmark
          </Button>
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"icon"} />
        </div>
      </div>

      <Typography variant="h4" className={styles.subTitle}>
        File upload
      </Typography>
      <Typography
        variant="body1"
        align="justify"
        className={styles.description}
      >
        To create a file upload button, turn the button into a label using
        component="label" and then create a visually-hidden input with type
        file.
      </Typography>
      <div className={styles.demoContainer}>
        <div className={styles.hasBtn}>
          <UploadButton />
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"upload"} />
        </div>
      </div>

      <Typography variant="h4" className={styles.subTitle}>
        Loading ... [TODO]
      </Typography>
    </div>
  );
}
