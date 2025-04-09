import styles from "./page.module.css";
import DynamicSyntax from "./demo/syntax";
import { montserratFont } from "@/app/font";
import { IoMailSharp } from "react-icons/io5";
import Badge from "@/components/ui/Badge/component";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { BsFillEmojiNeutralFill } from "react-icons/bs";
import Typography from "@/components/ui/Typography/component";
import { Avatar, AvatarGroup } from "@/components/ui/Avatar/component";

export default function SUIAvatar() {
  /**
   * Format the surplus number.
   * If surplus is less than 1000, display the full number.
   * Otherwise, floor the value to one decimal and add a "k" suffix.
   */
  function formatSurplus(surplus: number): string {
    if (surplus < 1000) {
      return `+${surplus}`;
    } else {
      // Floor the surplus divided by 100 to get one decimal place without rounding up
      const floored = Math.floor(surplus / 100) / 10; // e.g. for 4995, 4995/100 = 49.95, floor → 49, then 49/10 = 4.9
      let str = floored.toFixed(1);
      if (str.endsWith(".0")) {
        str = str.slice(0, -2);
      }
      return `+${str}k`;
    }
  }

  return (
    <div className={`${montserratFont.className} ${styles.avatarContainer}`}>
      <Typography variant="h2" color="textPrimary" className={styles.title}>
        Avatar
      </Typography>
      <Typography variant="h6" align="justify" className={styles.description}>
        Avatars are found with their uses in everything from tables to dialog
        menus.
      </Typography>

      <Typography variant="h4" className={styles.subTitle}>
        Image Avatars
      </Typography>
      <Typography
        variant="body1"
        align="justify"
        className={styles.description}
      >
        Image avatars can be created by passing standard img props src or srcSet
        to the component.
      </Typography>

      {/* image avatars */}
      <div className={styles.demoContainer}>
        <div className={styles.hasAvatar}>
          <Avatar
            alt="Remy Sharp"
            src="https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
          />
          <Avatar
            alt="Remy Sharp"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfTTEVGn-nyiPcq3Cn53jjTWookLKRfjmdU4HTVmWgPEsXfPKQMZatYxxvq_JGo4WqxGw&usqp=CAU"
          />
          <Avatar
            alt="Remy Sharp"
            src="https://newsnetwork.mayoclinic.org/n7-mcnn/7bcc9724adf7b803/uploads/2021/07/a-young-Black-woman-sitting-outside-holding-a-cup-of-coffee-looking-serious-and-thoughtful-16x9-1.jpg"
          />
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"imgavs"} />
        </div>
      </div>

      <Typography variant="h4" className={styles.subTitle}>
        Letter Avatars
      </Typography>
      <Typography
        variant="body1"
        align="justify"
        className={styles.description}
      >
        Avatars containing simple characters can be created by passing a string
        as children.
      </Typography>

      {/* letter avatars */}
      <div className={styles.demoContainer}>
        <div className={styles.hasAvatar}>
          <Avatar classes={{ root: styles.coloravatar1 }}>A</Avatar>
          <Avatar classes={{ root: styles.coloravatar2 }}>N</Avatar>
          <Avatar classes={{ root: styles.coloravatar3 }}>Q</Avatar>
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"ltravs"} />
        </div>
      </div>

      <Typography variant="h4" className={styles.subTitle}>
        Sizes
      </Typography>
      <Typography
        variant="body1"
        align="justify"
        className={styles.description}
      >
        You can change the size of the avatar with the height and width CSS
        properties.
      </Typography>

      {/* size avatars */}
      <div className={styles.demoContainer}>
        <div className={styles.hasAvatar}>
          <Avatar
            classes={{ root: styles.sizeavatar1 }}
            src="https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
          />
          <Avatar src="https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg" />
          <Avatar
            classes={{ root: styles.sizeavatar2 }}
            src="https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
          />
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"sizeavs"} />
        </div>
      </div>

      <Typography variant="h4" className={styles.subTitle}>
        Icon Avatars
      </Typography>
      <Typography
        variant="body1"
        align="justify"
        className={styles.description}
      >
        Icon avatars are created by passing an icon as children.
      </Typography>

      {/* icon avatars */}
      <div className={styles.demoContainer}>
        <div className={styles.hasAvatar}>
          <Avatar classes={{ root: styles.coloravatar1 }}>
            <IoMailSharp />
          </Avatar>
          <Avatar classes={{ root: styles.coloravatar2 }}>
            <RiShoppingCart2Fill />
          </Avatar>
          <Avatar classes={{ root: styles.coloravatar3 }}>
            <BsFillEmojiNeutralFill />
          </Avatar>
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"iconavs"} />
        </div>
      </div>

      <Typography variant="h4" className={styles.subTitle}>
        Variants
      </Typography>
      <Typography
        variant="body1"
        align="justify"
        className={styles.description}
      >
        If you need square or rounded avatars, use the variant prop.
      </Typography>

      {/* variant avatars */}
      <div className={styles.demoContainer}>
        <div className={styles.hasAvatar}>
          <Avatar classes={{ root: styles.coloravatar1 }} variant="rounded">
            F
          </Avatar>
          <Avatar classes={{ root: styles.coloravatar2 }} variant="square">
            <RiShoppingCart2Fill />
          </Avatar>
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"varavs"} />
        </div>
      </div>

      <Typography variant="h4" className={styles.subTitle}>
        Grouped
      </Typography>
      <Typography
        variant="body1"
        align="justify"
        className={styles.description}
      >
        AvatarGroup renders its children as a stack. Use the max prop to limit
        the number of avatars.
      </Typography>

      {/* group avatars */}
      <div className={styles.demoContainer}>
        <div className={styles.hasAvatar}>
          <AvatarGroup>
            <Avatar classes={{ root: styles.coloravatar1 }}>G</Avatar>
            <Avatar classes={{ root: styles.coloravatar1 }}>R</Avatar>
            <Avatar classes={{ root: styles.coloravatar1 }}>O</Avatar>
            <Avatar classes={{ root: styles.coloravatar1 }}>U</Avatar>
            <Avatar classes={{ root: styles.coloravatar1 }}>P</Avatar>
          </AvatarGroup>
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"grpavs"} />
        </div>
      </div>

      <Typography variant="h4" className={styles.subTitle}>
        Total Avatars
      </Typography>
      <Typography
        variant="body1"
        align="justify"
        className={styles.description}
      >
        If you need to control the total number of avatars not shown, you can
        use the total prop.
      </Typography>

      {/* total avatars */}
      <div className={styles.demoContainer}>
        <div className={styles.hasAvatar}>
          <AvatarGroup total={25} spacing={"small"}>
            <Avatar classes={{ root: styles.coloravatar1 }}>G</Avatar>
            <Avatar classes={{ root: styles.coloravatar1 }}>R</Avatar>
            <Avatar classes={{ root: styles.coloravatar1 }}>O</Avatar>
            <Avatar classes={{ root: styles.coloravatar1 }}>U</Avatar>
            <Avatar classes={{ root: styles.coloravatar1 }}>P</Avatar>
          </AvatarGroup>
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"totalavs"} />
        </div>
      </div>

      <Typography variant="h4" className={styles.subTitle}>
        Custom surplus
      </Typography>
      <Typography
        variant="body1"
        align="justify"
        className={styles.description}
      >
        Set the renderSurplus prop as a callback to customize the surplus
        avatar. The callback will receive the surplus number as an argument
        based on the children and the max prop, and should return a
        React.ReactNode. The renderSurplus prop is useful when you need to
        render the surplus based on the data sent from the server.
      </Typography>

      {/* total avatars */}
      <div className={styles.demoContainer}>
        <div className={styles.hasAvatar}>
          <AvatarGroup
            total={2000}
            spacing={"small"}
            renderSurplus={(surplus) => (
              <div className={styles.customSurplus}>
                {formatSurplus(surplus)}
              </div>
            )}
          >
            <Avatar classes={{ root: styles.coloravatar2 }}>G</Avatar>
            <Avatar classes={{ root: styles.coloravatar2 }}>R</Avatar>
            <Avatar classes={{ root: styles.coloravatar2 }}>O</Avatar>
            <Avatar classes={{ root: styles.coloravatar2 }}>U</Avatar>
            <Avatar classes={{ root: styles.coloravatar2 }}>P</Avatar>
          </AvatarGroup>
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"surplus"} />
        </div>
      </div>

      <Typography variant="h4" className={styles.subTitle}>
        With badge
      </Typography>

      {/* badge avatars */}
      <div className={styles.demoContainer}>
        <div className={styles.hasAvatar}>
          <Badge
            color="info"
            overlap="circular"
            badgeContent={"DR"}
            classes={{ root: styles.badgeAvatar }}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          >
            <Avatar
              alt="Delilah Rose"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKeCfkDmUO1hkuO_5dtfurudWiDYMCq4edwA&s"
            />
          </Badge>
        </div>
        <div className={styles.code}>
          <DynamicSyntax type={"withbadge"} />
        </div>
      </div>
    </div>
  );
}
