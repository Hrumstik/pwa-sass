"use client";

import { robotoRegular, robotoMedium, robotoBold } from "@/app/ui/fonts";

import styled from "@emotion/styled";
import { Divider as MuiDivider, Button } from "@mui/material";

export const colors = {
  mainText: "rgb(32, 33, 36)",
  primary: "rgb(11, 87, 207)",
  secondaryText: "rgb(95, 99, 104)",
  background: "#e3e3e3",
  buttonBackground: "#0069d9",
  disabledText: "rgba(0, 0, 0, 0.26)",
};

export const MainContainer = styled.main`
  min-height: 100vh;
  background-color: white;
  // @media (max-width: 480px) {
  padding-top: 20px;
  // }
`;

export const AppDescriptionSection = styled.section`
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

export const LogoInProgressWrapper = styled.div`
  // @media (max-width: 480px) {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  margin-right: 20px;
  // }
`;

export const LogoInProgressContainer = styled.div`
  // @media (max-width: 480px) {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
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
  color: ${colors.mainText};
`;

export const AppDeveloperСompanyName = styled.div`
  font-family: ${robotoMedium.style.fontFamily};
  font-weight: ${robotoMedium.style.fontWeight};
  // @media (max-width: 480px) {
  line-height: 1.25rem;
  font-size: 0.875rem;
  color: ${colors.primary};
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
  color: ${colors.mainText};
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
  color: ${colors.secondaryText};
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
  backgroundColor: colors.buttonBackground,
  borderRadius: "20px",
  border: "none",
  color: "white",
  fontFamily: `${robotoMedium.style.fontFamily}`,
  fontWeight: `${robotoMedium.style.fontWeight}`,
  textTransform: "none",
  boxShadow: "none",
  "&:hover": {
    backgroundColor: colors.primary,
    boxShadow: "none",
  },
  "&:active": {
    backgroundColor: colors.primary,
  },
  marginBottom: "24px",
  // },
});

export const DisabledOpenButton = styled(Button)({
  // "@media (max-width: 480px)": {
  backgroundColor: colors.background,
  borderRadius: "20px",
  border: "none",
  color: colors.disabledText,
  fontFamily: `${robotoMedium.style.fontFamily}`,
  fontWeight: `${robotoMedium.style.fontWeight}`,
  textTransform: "none",
  boxShadow: "none",
  // },
});

export const CancelButton = styled(Button)({
  // "@media (max-width: 480px)": {
  backgroundColor: "white",
  borderRadius: "20px",
  border: `1px solid ${colors.mainText}`,
  color: colors.primary,
  fontFamily: `${robotoMedium.style.fontFamily}`,
  fontWeight: `${robotoMedium.style.fontWeight}`,
  textTransform: "none",
  boxShadow: "none",
  "&:hover": {
    backgroundColor: colors.background,
    boxShadow: "none",
  },
  "&:active": {
    backgroundColor: colors.background,
  },
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
  color: ${colors.mainText};
  // }
`;

export const ShortDescriptionWrapper = styled.div`
  color: ${colors.mainText};
  font-family: ${robotoRegular.style.fontFamily};
  font-weight: ${robotoRegular.style.fontWeight};
  line-height: 1rem;
  font-size: 0.75rem;
  margin-bottom: 16px;
`;

export const AppRatesAndSection = styled.section`
  // @media (max-width: 480px) {
  margin-left: 24px;
  margin-right: 24px;
  overflow: visible;
  // }
`;

export const AppRatesAndReviewsContainer = styled.div`
  // @media (max-width: 480px) {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    "rating-big rating-right"
    "rating-stars rating-right"
    "rating-count rating-right";
  grid-column-gap: 2em;
  margin-bottom: 32px;
  // }
`;

export const AppRateContainer = styled.div`
  grid-area: rating-big;
  font-size: 3em;
  color: ${colors.mainText};
`;

export const AppStarsContainer = styled.div`
  grid-area: rating-stars;
  display: flex;
  margin-bottom: 8px;
`;

export const AppRatesCountContainer = styled.div`
  grid-area: rating-count;
  font-family: ${robotoRegular.style.fontFamily};
  font-weight: ${robotoRegular.style.fontWeight};
  font-size: 0.8em;
`;

export const AppRatingContainer = styled.div`
  grid-area: rating-right;
  display: flex;
  flex-direction: column;
  gap: 0.25em;
`;

export const RatingContainer = styled.div`
  display: flex;
  gap: 0.75em;
  justify-content: center;
  align-items: center;
`;

export const StarsCount = styled.div`
  font-family: ${robotoRegular.style.fontFamily};
  font-weight: ${robotoRegular.style.fontWeight};
  font-size: 0.8em;
  width: 0.5em;
`;

export const RatingChart = styled.div<any>`
  height: 0.5em;
  width: 100%;
  background: ${colors.background};
  border-radius: 0.5em;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    height: 0.5em;
    min-width: 0.5em;
    background: ${colors.primary};
    border-radius: 0.5em;
    width: ${(props) => props.rating || 0}%;
  }
`;

export const ReviewsSection = styled.section`
  margin-left: 24px;
  margin-right: 24px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 1.5em;
`;

export const ReviewWrapper = styled.div`
  display: block;
`;

export const ReviewContainer = styled.div`
  // @media (max-width: 480px) {
  display: flex;
  flex-direction: column;
  gap: 0.8em;
  width: 100%;
  // }
`;

export const ReviewHeader = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
`;

export const ReviewAuthorContainer = styled.div`
  font-family: ${robotoRegular.style.fontFamily};
  font-weight: ${robotoRegular.style.fontWeight};
  color: ${colors.mainText}
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

export const ReviewDataContainer = styled.div`
  display: flex;
  gap: 0.5em;
  align-items: center;
`;

export const ReviewDate = styled.div`
  font-family: ${robotoRegular.style.fontFamily};
  font-weight: ${robotoRegular.style.fontWeight};
  color: ${colors.secondaryText};
  font-size: 0.75rem;
  line-height: 1rem;
`;

export const ReviewText = styled.div`
  font-family: ${robotoRegular.style.fontFamily};
  font-weight: ${robotoRegular.style.fontWeight};
  color: ${colors.secondaryText};
  text-overflow: ellipsis;
  text-align: justify;
  font-size: 0.875rem;
  letter-spacing: 0.0142857143em;
  line-height: 1.25rem;
  overflow-wrap: anywhere;
`;
