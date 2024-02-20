"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { install, stopInstalling } from "@/lib/feat/installSlice";
import { useTranslations } from "next-intl";
import { Button } from "@mui/material";
import { colors } from "../styles";
import { robotoMedium } from "@/app/ui/fonts";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
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

export default function InstallButton() {
  const [installPrompt, setInstallPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const isInstalling = useAppSelector((state) => state.install.isInstalling);
  const dispatch = useAppDispatch();
  const app = useTranslations("App");

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      console.log(e);
      setInstallPrompt(e);
    };

    window.addEventListener(
      "beforeinstallprompt",
      handleBeforeInstallPrompt as EventListener
    );

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt as EventListener
      );
    };
  });

  const installPWA = async () => {
    console.log(installPrompt);
    if (installPrompt) {
      dispatch(install());
      await installPrompt.prompt();
      const choiceResult = await installPrompt.userChoice;
      if (choiceResult.outcome === "accepted") {
        console.log("okey");
        dispatch(stopInstalling());
      } else {
        alert("PWA installation rejected");
      }
      setInstallPrompt(null);
    }
  };

  return (
    <AnimatedButton
      fullWidth
      onClick={!isInstalling && installPWA}
      $isInstalling={isInstalling}
      disabled={isInstalling}
    >
      {isInstalling ? app("open") : app("install")}
    </AnimatedButton>
  );
}
