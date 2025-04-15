"use client";
import { Fragment, FC } from "react";
import { AiTwotoneWarning } from "react-icons/ai";
import { IoCloudUpload } from "react-icons/io5";
import Button from "@/components/ui/Button/component";
import CircularProgress from "@/components/ui/Progress/Circular/component";

const LoadingButton: FC = () => {
  const handleFileChange = () => {
    console.log("clicked");
  };

  return (
    <Fragment>
      <Button
        loading={true}
        color="warning"
        variant="outlined"
        onClick={handleFileChange}
        loadingIndicator={<CircularProgress size={22} color="warning" />}
      >
        Submit
      </Button>
      <Button
        loading={true}
        color="warning"
        variant="outlined"
        onClick={handleFileChange}
        loadingIndicator={"Loading..."}
      >
        Submit
      </Button>
      <Button
        loading={true}
        color="warning"
        variant="outlined"
        loadingPosition="start"
        onClick={handleFileChange}
        startIcon={<IoCloudUpload />}
        loadingIndicator={<CircularProgress size={22} color="warning" />}
      >
        &nbsp;&nbsp;Submit
      </Button>
      <Button
        loading={true}
        color="warning"
        variant="outlined"
        loadingPosition="end"
        onClick={handleFileChange}
        endIcon={<IoCloudUpload />}
        loadingIndicator={<CircularProgress size={22} color="warning" />}
      >
        Submit&nbsp;&nbsp;
      </Button>
      <Button
        loading={true}
        color="warning"
        variant="outlined"
        loadingPosition="end"
        onClick={handleFileChange}
        startIcon={<IoCloudUpload />}
        endIcon={<AiTwotoneWarning />}
        loadingIndicator={<CircularProgress size={22} color="warning" />}
      >
        Submit&nbsp;&nbsp;
      </Button>
    </Fragment>
  );
};

export default LoadingButton;
