"use client";
import { useState } from "react";
import styles from "../page.module.css";
import { GiNinjaHead } from "react-icons/gi";
import { TbTrashXFilled } from "react-icons/tb";
import Chip from "@/components/ui/Chip/component";
import Grid from "@/components/ui/Grid/component";
import { IoCheckboxSharp } from "react-icons/io5";
import { RiCheckboxBlankLine } from "react-icons/ri";
import avatarStyles from "../../avatar/page.module.css";
import { Avatar } from "@/components/ui/Avatar/component";
import Typography from "@/components/ui/Typography/component";

export default function ChipPlayground() {
  const [icon, setIcon] = useState("none");
  const [size, setSize] = useState("medium");
  const [avatar, setAvatar] = useState("none");
  const [color, setColor] = useState("default");
  const [onDelete, setDelete] = useState("none");
  const [variant, setVariant] = useState("filled");

  const handleDelete = () => {
    alert("You clicked the delete icon.");
  };

  const renderAvatar = (): React.ReactElement | undefined => {
    if (avatar === "letter") {
      return <Avatar classes={{ root: avatarStyles.sizeavatar1 }}>M</Avatar>;
    }
    if (avatar === "img") {
      return (
        <Avatar
          classes={{ root: avatarStyles.sizeavatar1 }}
          alt="Delilah Rose"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKeCfkDmUO1hkuO_5dtfurudWiDYMCq4edwA&s"
        />
      );
    }
    return undefined;
  };

  const renderIcon = (): React.ReactElement | undefined => {
    if (icon === "icon") {
      return <GiNinjaHead />;
    }
    return undefined;
  };

  return (
    <div className={styles.demoContainer}>
      <div className={styles.chipCentered}>
        {onDelete === "none" ? (
          <Chip
            label="Chip component"
            size={size}
            color={color}
            variant={variant}
            icon={renderIcon()}
            avatar={renderAvatar()}
          />
        ) : onDelete === "default" ? (
          <Chip
            label="Chip component"
            size={size}
            color={color}
            variant={variant}
            icon={renderIcon()}
            avatar={renderAvatar()}
            onDelete={handleDelete}
          />
        ) : (
          <Chip
            label="Chip component"
            size={size}
            color={color}
            variant={variant}
            icon={renderIcon()}
            avatar={renderAvatar()}
            onDelete={handleDelete}
            deleteIcon={<TbTrashXFilled />}
          />
        )}
      </div>
      <div className={styles.gridoptions}>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="body1" className={styles.gridtext}>
              variant
            </Typography>
            <RenderOptions
              type="variant"
              onSelect={setVariant}
              selected={variant}
            />

            <Typography variant="body1" className={styles.gridtext}>
              size
            </Typography>
            <RenderOptions type="size" onSelect={setSize} selected={size} />

            <Typography variant="body1" className={styles.gridtext}>
              avatar
            </Typography>
            <RenderOptions
              type={"avatar"}
              onSelect={setAvatar}
              selected={avatar}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1" className={styles.gridtext}>
              color
            </Typography>
            <RenderOptions
              type={"color"}
              onSelect={setColor}
              selected={color}
            />

            <Typography variant="body1" className={styles.gridtext}>
              icon
            </Typography>
            <RenderOptions type={"icon"} onSelect={setIcon} selected={icon} />

            <Typography variant="body1" className={styles.gridtext}>
              onDelete
            </Typography>
            <RenderOptions
              type={"ondelete"}
              onSelect={setDelete}
              selected={onDelete}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

interface Option {
  type: string;
  items: string[];
}

interface RenderOptionsProps {
  type: string;
  onSelect?: (value: string) => void;
  selected?: string;
}

const RenderOptions = ({ type, onSelect, selected }: RenderOptionsProps) => {
  return (
    <div className={styles.optionvalues}>
      {options
        .filter((option) => option.type === type)
        .map((option: Option) => (
          <Grid container key={option.type}>
            {option.items.map((item) => (
              <Grid item xs={3} key={item}>
                <div onClick={onSelect ? () => onSelect(item) : undefined}>
                  {selected === item ? (
                    <IoCheckboxSharp />
                  ) : (
                    <RiCheckboxBlankLine />
                  )}
                  <Typography variant="caption">{item}</Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        ))}
    </div>
  );
};

const options: Option[] = [
  {
    type: "variant",
    items: ["filled", "outlined"],
  },
  {
    type: "size",
    items: ["medium", "small"],
  },
  {
    type: "avatar",
    items: ["none", "letter", "img"],
  },
  {
    type: "color",
    items: [
      "default",
      "primary",
      "secondary",
      "error",
      "info",
      "success",
      "warning",
    ],
  },
  {
    type: "icon",
    items: ["none", "icon"],
  },
  {
    type: "ondelete",
    items: ["none", "default", "custom"],
  },
];
