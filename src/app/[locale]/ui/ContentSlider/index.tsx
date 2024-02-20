"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ScreenContainer, ScreenWrapperItem, SliderContainer } from "../styles";

export default function ContentSlider() {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <SliderContainer>
      <div className="slider-container">
        <Slider {...settings}>
          <ScreenWrapperItem>
            <ScreenContainer>
              <Image
                src="/images/firstScreen.png"
                width={1080}
                height={1920}
                alt="First screen"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                }}
              />
            </ScreenContainer>
          </ScreenWrapperItem>

          <ScreenWrapperItem>
            <ScreenContainer>
              <Image
                src="/images/secondScreen.png"
                width={1080}
                height={1920}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                }}
                alt="Second screen"
              />
            </ScreenContainer>
          </ScreenWrapperItem>

          <ScreenWrapperItem>
            <ScreenContainer>
              <Image
                src="/images/trirdScreen.png"
                width={1080}
                height={1920}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                }}
                alt="Third screen"
              />
            </ScreenContainer>
          </ScreenWrapperItem>

          <ScreenWrapperItem>
            <ScreenContainer>
              <Image
                src="/images/fourthScreen.png"
                width={1080}
                height={1920}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                }}
                alt="First screen"
              />
            </ScreenContainer>
          </ScreenWrapperItem>
        </Slider>
      </div>
    </SliderContainer>
  );
}
