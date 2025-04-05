"use client";
import "./styles.css";
import Fonts from "./font";
import { useState } from "react";
import { montserratFont } from "@/app/font";
import Grid from "@/components/ui/Grid/component";
import { NextFont } from "next/dist/compiled/@next/font";
import Typography from "@/components/ui/Typography/component";
import { TypographyVariant } from "@/components/ui/Typography/props.interface";

interface VariantData {
  label: string;
  style?: React.CSSProperties;
}

export interface FontData {
  name: string;
  fontClass: NextFont;
}

export default function Types() {
  const [isActive, setIsActive] = useState("");
  const [activeFont, setActiveFont] = useState<FontData>({
    name: "Montserrat",
    fontClass: montserratFont,
  });

  const toggleActive = (val: string) => {
    setIsActive(val);
  };

  const variantInfoMap: Record<TypographyVariant, VariantData> = {
    h1: { label: "Heading h1", style: { paddingLeft: "0" } },
    h2: { label: "Heading h2", style: { paddingLeft: "5px" } },
    h3: { label: "Heading h3", style: { paddingLeft: "7px" } },
    h4: { label: "Heading h4", style: { paddingLeft: "9px" } },
    h5: { label: "Heading h5", style: { paddingLeft: "11px" } },
    h6: { label: "Heading h6", style: { paddingLeft: "11px" } },

    subtitle1: { label: "Subtitle 1", style: { paddingLeft: "12px" } },
    subtitle2: { label: "Subtitle 2", style: { paddingLeft: "12px" } },

    body1: { label: "Body 1", style: { paddingLeft: "12px" } },
    body2: { label: "Body 2", style: { paddingLeft: "12px" } },

    button: { label: "BUTTON", style: { paddingLeft: "12px" } },
    caption: { label: "Caption", style: { paddingLeft: "12px" } },
    overline: { label: "OVERLINE", style: { paddingLeft: "12px" } },
  };

  const renderVariant = (variant: TypographyVariant): VariantData => {
    return variantInfoMap[variant];
  };
  return (
    <Grid container>
      <Grid item xs={9} className="typedemo">
        {renderTypes.map((type, index) => (
          <div
            key={index}
            onClick={() => toggleActive(type.variant)}
            className={`${activeFont.fontClass.className} ${
              isActive === type.variant ? "type-active" : "types"
            }`}
          >
            <Typography
              variant={type.variant}
              style={renderVariant(type.variant).style}
            >
              {renderVariant(type.variant).label}
            </Typography>
            {isActive === type.variant ? (
              <div className="directives">
                <section>
                  <Typography variant="caption" className="rule">
                    Font
                  </Typography>
                  <Typography variant="caption" className="vals">
                    {activeFont.name}
                  </Typography>
                </section>
                <section>
                  <Typography variant="caption" className="rule">
                    Weight
                  </Typography>
                  <Typography variant="caption" className="vals">
                    {type.wt === 0
                      ? "Light"
                      : type.wt === 1
                      ? "Normal"
                      : type.wt === 2 && "Medium"}
                  </Typography>
                </section>
                <section>
                  <Typography variant="caption" className="rule">
                    Size
                  </Typography>
                  <Typography
                    variant="caption"
                    className="vals"
                  >{`${type.size}px`}</Typography>
                </section>
                <section>
                  <Typography variant="caption" className="rule">
                    Letter spacing
                  </Typography>
                  <Typography
                    variant="caption"
                    className="vals"
                  >{`${type.ls}px`}</Typography>
                </section>
              </div>
            ) : null}
          </div>
        ))}
      </Grid>
      <Grid item xs={3}>
        <Fonts setActiveFont={setActiveFont} />
      </Grid>
    </Grid>
  );
}

const renderTypes = [
  {
    variant: "h1",
    size: 98,
    wt: 0,
    ls: -1.5,
  },
  {
    variant: "h2",
    size: 61,
    wt: 0,
    ls: -0.5,
  },
  {
    variant: "h3",
    size: 49,
    wt: 1,
    ls: 0,
  },
  {
    variant: "h4",
    size: 35,
    wt: 1,
    ls: 2.5,
  },
  {
    variant: "h5",
    size: 24,
    wt: 1,
    ls: 0,
  },
  {
    variant: "h6",
    size: 20,
    wt: 2,
    ls: 0.15,
  },
  {
    variant: "subtitle1",
    size: 16,
    wt: 1,
    ls: 0.15,
  },
  {
    variant: "subtitle2",
    size: 14,
    wt: 2,
    ls: 0.1,
  },
  {
    variant: "body1",
    size: 16,
    wt: 1,
    ls: 0.5,
  },
  {
    variant: "body2",
    size: 14,
    wt: 1,
    ls: 0.25,
  },
  {
    variant: "button",
    size: 14,
    wt: 2,
    ls: 1.25,
  },
  {
    variant: "caption",
    size: 12,
    wt: 1,
    ls: 0.4,
  },
  {
    variant: "overline",
    size: 10,
    wt: 1,
    ls: 1.5,
  },
];
