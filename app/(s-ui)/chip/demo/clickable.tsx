"use client";
import { Fragment } from "react";
import { BiCubeAlt } from "react-icons/bi";
import { FcFullTrash } from "react-icons/fc";
import Chip from "@/components/ui/Chip/component";
import { Avatar } from "@/components/ui/Avatar/component";
import avatarStyles from "../../avatar/page.module.css";

export default function ClickableChip({ type }: { type: string }) {
  const handleClick = () => {
    alert("You clicked the Chip.");
  };

  const handleDelete = () => {
    alert("You clicked the delete icon.");
  };

  const handleLink = () => {
    alert("This will open the link in a new tab.");
  };

  if (type === "click") {
    return (
      <Fragment>
        <Chip label="Chip Filled" clickable onClick={handleClick} />
        <Chip
          label="Chip Outlined"
          variant="outlined"
          clickable
          onClick={handleClick}
        />
      </Fragment>
    );
  } else if (type === "delete") {
    return (
      <Fragment>
        <Chip label="Chip Filled" onDelete={handleDelete} />
        <Chip
          label="Chip Outlined"
          variant="outlined"
          onDelete={handleDelete}
        />
      </Fragment>
    );
  } else if (type === "both") {
    return (
      <Fragment>
        <Chip
          label="Chip Filled"
          clickable
          onClick={handleClick}
          onDelete={handleDelete}
        />
        <Chip
          label="Chip Outlined"
          variant="outlined"
          clickable
          onClick={handleClick}
          onDelete={handleDelete}
        />
      </Fragment>
    );
  } else if (type === "link") {
    return (
      <Fragment>
        <Chip
          clickable
          component="a"
          target="_blank"
          label="Clickable link"
          onClick={handleLink}
          href="https://www.youtube.com/"
        />
      </Fragment>
    );
  } else if (type === "delicon") {
    return (
      <Fragment>
        <Chip
          clickable
          onDelete={handleDelete}
          label="Custom delete icon"
          deleteIcon={<FcFullTrash />}
        />
      </Fragment>
    );
  } else if (type === "avatar") {
    return (
      <Fragment>
        <Chip
          label="With Avatar"
          avatar={
            <Avatar classes={{ root: avatarStyles.sizeavatar1 }}>M</Avatar>
          }
        />
        <Chip
          label="With Avatar"
          variant="outlined"
          avatar={
            <Avatar
              classes={{ root: avatarStyles.sizeavatar1 }}
              alt="Delilah Rose"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKeCfkDmUO1hkuO_5dtfurudWiDYMCq4edwA&s"
            />
          }
        />
      </Fragment>
    );
  } else if (type === "icon") {
    return (
      <Fragment>
        <Chip label="With Icon" icon={<BiCubeAlt />} />
        <Chip label="With Icon" variant="outlined" icon={<BiCubeAlt />} />
      </Fragment>
    );
  } else if (type === "color") {
    return (
      <Fragment>
        <Chip label="Primary" color="primary" />
        <Chip label="Success" color="success" />
      </Fragment>
    );
  } else if (type === "size") {
    return (
      <Fragment>
        <Chip label="Small" size="small" />
        <Chip label="Small" variant="outlined" size="small" />
      </Fragment>
    );
  }
}
