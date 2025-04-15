"use client";
import { FC, ChangeEvent } from "react";
import styles from "../page.module.css";
import { IoCloudUpload } from "react-icons/io5";
import Button from "@/components/ui/Button/component";

const UploadButton: FC = () => {
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.files);
  };

  return (
    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<IoCloudUpload />}
    >
      Upload Files
      <input
        multiple
        type="file"
        className={styles.hiddeninput}
        onChange={handleFileChange}
      />
    </Button>
  );
};

export default UploadButton;
