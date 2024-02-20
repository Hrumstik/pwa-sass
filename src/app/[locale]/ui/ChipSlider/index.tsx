"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Chip } from "@mui/material";
import { useTranslations } from "next-intl";
import { ScreenWrapperItem, SliderContainer } from "../styles";

const chipLabels = [
  "topInCasino",
  "casino",
  "slots",
  "online",
  "offline",
  "stylised",
];

export default function ChipSlider() {
  const app = useTranslations("App");

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    variableWidth: true,
  };

  return (
    <SliderContainer>
      <div className="slider-container">
        <Slider {...settings}>
          {chipLabels.map((labelKey) => (
            <ScreenWrapperItem key={labelKey}>
              <Chip
                label={app(labelKey)}
                variant="outlined"
                sx={{
                  borderRadius: "8px",
                  border: "1px solid rgb(32, 33, 36)",
                }}
              />
            </ScreenWrapperItem>
          ))}
        </Slider>
      </div>
    </SliderContainer>
  );
}
