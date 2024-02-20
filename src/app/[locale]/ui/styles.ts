"use client";

import { robotoRegular, robotoMedium, robotoBold } from "@/app/ui/fonts";

import styled from "@emotion/styled";
import { Divider as MuiDivider, Button } from "@mui/material";

export const MainContainer = styled.main`
  min-height: 100vh;
  background-color: white;
  // @media (max-width: 480px) {
  padding-top: 20px;
  // }
`;

export const AppDescriptionWrapper = styled.div`
  // @media (max-width: 480px) {
  margin-left: 24px;
  margin-right: 24px;
  overflow: visible;
  // }
`;

export const AppHeader = styled.header`
  display: flex;
  margin-bottom: 16px;
`;

export const LogoContainer = styled.div`
  position: relative;
  display: block;
  overflow: hidden;

  // @media (max-width: 480px) {
  width: 64px;
  height: 64px;
  border-radius: 8px;
  margin-right: 20px;
  // }
`;

export const AppHeaderInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AppNameContainer = styled.div`
  font-family: ${robotoMedium.style.fontFamily};
  font-weight: ${robotoMedium.style.fontWeight};
  line-height: 1.5rem;
  font-size: 1.3rem;
  color: rgb(32, 33, 36);
`;

export const AppDeveloperСompanyName = styled.div`
  font-family: ${robotoMedium.style.fontFamily};
  font-weight: ${robotoMedium.style.fontWeight};
  // @media (max-width: 480px) {
  line-height: 1.25rem;
  font-size: 0.875rem;
  color: rgb(11, 87, 207);
  // }
`;

export const AppStatisticsCard = styled.div`
  display: flex;
  align-items: center;
  // @media (max-width: 480px) {
  margin-bottom: 24px;
  // }
`;

export const AppStatisticsCardItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 44px;
`;

export const VerticalDivider = styled(MuiDivider)`
  margin-left: 0;
`;

export const AppStatisticsCardItemTitle = styled.div`
  // @media (max-width: 480px) {
  color: rgb(32, 33, 36);
  font-family: ${robotoBold.style.fontFamily};
  font-weight: ${robotoBold.style.fontWeight};
  line-height: 1.25rem;
  font-size: 0.875rem;
  letter-spacing: 0.0178571429em;
  display: flex;
  align-items: center;
  gap: 2px;
  height: 24px;
  // }
`;

export const AppStatisticsCardItemContent = styled.div`
  // @media (max-width: 480px) {
  color: rgb(95, 99, 104);
  font-family: ${robotoMedium.style.fontFamily};
  font-weight: ${robotoMedium.style.fontWeight};
  line-height: 1rem;
  font-size: 0.75rem;
  letter-spacing: 0.025em;
  // }
`;

export const AgeLogoContainer = styled.div`
  position: relative;
  display: block;
  overflow: hidden;

  // @media (max-width: 480px) {
  width: 16px;
  height: 16px;
  // }
`;

export const CustomButton = styled(Button)({
  // "@media (max-width: 480px)": {
  backgroundColor: "#0069d9",
  borderRadius: "20px",
  border: "none",
  color: "white",
  fontFamily: `${robotoMedium.style.fontFamily}`,
  fontWeight: `${robotoMedium.style.fontWeight}`,
  textTransform: "none",
  boxShadow: "none",
  "&:hover": {
    backgroundColor: "rgb(11, 87, 207)",
    boxShadow: "none",
  },
  "&:active": {
    backgroundColor: "rgb(11, 87, 207)",
  },
  marginBottom: "24px",
  // },
});

export const ScreenWrapperItem = styled.div`
  box-sizing: border-box;
  padding-right: 12px;
`;

export const ScreenContainer = styled.div`
  overflow: hidden;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 1px 3px 1px rgba(60, 64, 67, 0.15);
  border-radius: 8px;
  @media (max-width: 480px) {
    max-width: 480px;
    width: 100%;
  }
`;

export const SliderContainer = styled.div`
  // @media (max-width: 480px) {
  margin-bottom: 16px;
  // }
`;

export const AboutGameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // @media (max-width: 480px) {
  margin-bottom: 16px;
  // }
`;

export const ButtonTitle = styled.div`
  // @media (max-width: 480px) {
  text-align: left;
  font-family: ${robotoMedium.style.fontFamily};
  font-weight: ${robotoMedium.style.fontWeight};
  text-transform: none;
  line-height: 1.25rem;
  font-size: 1rem;
  color: rgb(32, 33, 36);
  // }
`;

export const ShortDescriptionWrapper = styled.div`
  color: rgb(32, 33, 36);
  font-family: ${robotoRegular.style.fontFamily};
  font-weight: ${robotoRegular.style.fontWeight};
  line-height: 1rem;
  font-size: 0.75rem;
  margin-bottom: 16px;
`;
