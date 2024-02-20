"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { install, stopInstalling } from "@/lib/feat/installSlice";
import { useTranslations } from "next-intl";
import { Button } from "@mui/material";
import { CustomButton, colors } from "../styles";
import { robotoMedium } from "@/app/ui/fonts";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
}

interface Props {
  link: string;
}

const AnimatedButton = styled<any>(motion(Button), {
  shouldForwardProp: (prop) => prop !== "$isInstalling",
})`
  border-radius: 20px;
  border: none;
  font-family: ${robotoMedium.style.fontFamily};
  font-weight: ${robotoMedium.style.fontWeight};
  text-transform: none;
  box-shadow: none;
  margin-bottom: 24px;
  background-color: ${(props) =>
    props.$isInstalling ? colors.background : colors.buttonBackground};
  color: ${(props) => (props.$isInstalling ? colors.disabledText : "white")};
  &:hover {
    background-color: ${(props) =>
      props.$isInstalling ? colors.background : colors.primary};
    box-shadow: none;
  }
  &:active {
    background-color: ${(props) =>
      props.$isInstalling ? colors.background : colors.primary};
  }
`;
const InstallButton: React.FC<Props> = ({ link }) => {
  let installPrompt: any;
  const [isPWAActive, setIsPWAActive] = useState(false);
  const isInstalling = useAppSelector((state) => state.install.isInstalling);
  const dispatch = useAppDispatch();
  const app = useTranslations("App");

  useEffect(() => {
    const isPWAActiveted = window.matchMedia(
      "(display-mode: minimal-ui)"
    ).matches;

    if (isPWAActiveted) {
      setIsPWAActive(true);
      window.location.href = link;
    }

    const handleBeforeInstallPrompt = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      console.log(e);
      installPrompt = e;
    };

    window.addEventListener(
      "beforeinstallprompt",
      handleBeforeInstallPrompt as EventListener
    );

    window.addEventListener("appinstalled", (event) => {
      dispatch(stopInstalling());
      setIsPWAActive(true);
    });

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt as EventListener
      );
    };
  }, [link, installPrompt]);

  const installPWA = async () => {
    dispatch(install());
    await installPrompt.prompt();
    const choiceResult = await installPrompt.userChoice;
    if (choiceResult.outcome === "accepted") {
      console.log("PWA installation was accepted");
    } else {
      alert("PWA installation rejected");
    }
    installPrompt = null;
  };

  const openLink = () => {
    window.location.href = link;
  };

  return isPWAActive ? (
    <CustomButton fullWidth onClick={openLink}>
      {app("open")}
    </CustomButton>
  ) : (
    <AnimatedButton
      fullWidth
      onClick={!isInstalling && installPWA}
      $isInstalling={isInstalling}
      disabled={isInstalling}
    >
      {isInstalling ? app("open") : app("install")}
    </AnimatedButton>
  );
};

export default InstallButton;
