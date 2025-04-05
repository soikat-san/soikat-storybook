"use client";
import "./styles.css";
import { useState } from "react";
import { FontData } from "./types";
import Typography from "@/components/ui/Typography/component";

// fonts
import {
  latoFont,
  interFont,
  rubikFont,
  oswaldFont,
  nunitoFont,
  robotoFont,
  ubuntuFont,
  ysebeauFont,
  poppinsFont,
  ralewayFont,
  michromaFont,
  notoSansFont,
  openSansFont,
  montserratFont,
  merriweatherFont,
  playfairDisplayFont,
} from "@/app/font";

interface FontProps {
  setActiveFont: React.Dispatch<React.SetStateAction<FontData>>;
}

export default function Fonts({ setActiveFont }: FontProps) {
  const [isActive, setIsActive] = useState(4);

  const toggleActive = (val: number, font: FontData): void => {
    setIsActive(val);
    setActiveFont(font);
  };

  return (
    <div className="fontdemo">
      {renderFonts.map((font, idx) => (
        <Typography
          key={idx}
          variant="h5"
          onClick={() => toggleActive(idx, font)}
          className={isActive === idx ? "activefont" : "font"}
        >
          {font.name}
        </Typography>
      ))}
    </div>
  );
}

const renderFonts = [
  { name: "Inter", fontClass: interFont },
  { name: "Lato", fontClass: latoFont },
  { name: "Merriweather", fontClass: merriweatherFont },
  { name: "Michroma", fontClass: michromaFont },
  { name: "Montserrat", fontClass: montserratFont },
  { name: "Noto Sans", fontClass: notoSansFont },
  { name: "Nunito", fontClass: nunitoFont },
  { name: "Open Sans", fontClass: openSansFont },
  { name: "Oswald", fontClass: oswaldFont },
  { name: "Playfair Display", fontClass: playfairDisplayFont },
  { name: "Poppins", fontClass: poppinsFont },
  { name: "Raleway", fontClass: ralewayFont },
  { name: "Roboto", fontClass: robotoFont },
  { name: "Rubik", fontClass: rubikFont },
  { name: "Ubuntu", fontClass: ubuntuFont },
  { name: "Ysabeau", fontClass: ysebeauFont },
];
