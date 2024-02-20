"use client";
import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Image from "next/image";
import {
  LogoContainer,
  LogoInProgressContainer,
  LogoInProgressWrapper,
} from "../styles";
import { useAppSelector } from "@/lib/hooks";

function AppLogo() {
  const isInstalling = useAppSelector((state) => state.install.isInstalling);

  return (
    <>
      {isInstalling ? (
        <LogoInProgressWrapper>
          <LogoInProgressContainer>
            <Image
              src="/icon.png"
              alt="App logo"
              layout="fill"
              objectFit="cover"
            />
          </LogoInProgressContainer>

          <CircularProgress
            disableShrink
            size={56}
            thickness={1}
            sx={{
              position: "absolute",
              color: "primary.main",
            }}
          />
        </LogoInProgressWrapper>
      ) : (
        <LogoContainer>
          <Image
            src="/icon.png"
            alt="App logo"
            fill={true}
            priority
            sizes="(max-width: 480) 100vw"
          />
        </LogoContainer>
      )}
    </>
  );
}

export default AppLogo;
