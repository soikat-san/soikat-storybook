import { Lato } from "next/font/google";
import { Inter } from "next/font/google";
import { Rubik } from "next/font/google";
import { Oswald } from "next/font/google";
import { Nunito } from "next/font/google";
import { Roboto } from "next/font/google";
import { Ubuntu } from "next/font/google";
import { Ysabeau } from "next/font/google";
import { Poppins } from "next/font/google";
import { Raleway } from "next/font/google";
import { Michroma } from "next/font/google";
import { Noto_Sans } from "next/font/google";
import { Open_Sans } from "next/font/google";
import { Montserrat } from "next/font/google";
import { Merriweather } from "next/font/google";
import { Playfair_Display } from "next/font/google";

const notoSansFont = Noto_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const ralewayFont = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const nunitoFont = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const ubuntuFont = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const rubikFont = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplayFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const merriweatherFont = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

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

const robotoFont = Roboto({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const openSansFont = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const interFont = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const latoFont = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const oswaldFont = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export {
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
};
