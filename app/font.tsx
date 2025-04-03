import { Ysabeau } from "next/font/google";
import { Michroma } from "next/font/google";
import { Montserrat } from "next/font/google";

const ysebeauFont = Ysabeau({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const montserratFont = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const michromaFont = Michroma({
  subsets: ["latin"],
  weight: ["400"],
});

export { ysebeauFont, michromaFont, montserratFont };
