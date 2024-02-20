import {
  useTranslations,
  NextIntlClientProvider,
  useMessages,
} from "next-intl";
import pick from "lodash/pick";
import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  MainContainer,
  AppDescriptionWrapper,
  LogoContainer,
  AppNameContainer,
  AppHeader,
  AppHeaderInfoContainer,
  AppDeveloperСompanyName,
  AppStatisticsCard,
  AppStatisticsCardItem,
  VerticalDivider,
  AppStatisticsCardItemTitle,
  AppStatisticsCardItemContent,
  AgeLogoContainer,
  CustomButton,
  AboutGameContainer,
  ButtonTitle,
  ShortDescriptionWrapper,
} from "./ui/styles";
import ContentSlider from "./ui/ContentSlider";
import { Button, Grid } from "@mui/material";
import ChipSlider from "./ui/ChipSlider";
import OpenSectionButton from "./ui/OpenSectionButton";

export default function Index() {
  const app = useTranslations("App");
  const messages = useMessages();
  return (
    <MainContainer>
      <AppDescriptionWrapper>
        <AppHeader>
          <LogoContainer>
            <Image
              src="/icon.png"
              alt="App logo"
              fill={true}
              priority
              sizes="(max-width: 480) 100vw"
            />
          </LogoContainer>
          <AppHeaderInfoContainer>
            <AppNameContainer>{app("name")}</AppNameContainer>
            <AppDeveloperСompanyName>
              {app("developerName")}
            </AppDeveloperСompanyName>
          </AppHeaderInfoContainer>
        </AppHeader>
        <AppStatisticsCard>
          <AppStatisticsCardItem>
            <AppStatisticsCardItemTitle>
              5,0 <StarIcon fontSize="inherit" />
            </AppStatisticsCardItemTitle>
            <AppStatisticsCardItemContent>
              {app("reviews")}
            </AppStatisticsCardItemContent>
          </AppStatisticsCardItem>
          <VerticalDivider orientation="vertical" variant="inset" flexItem />
          <AppStatisticsCardItem>
            <AppStatisticsCardItemTitle>1000 +</AppStatisticsCardItemTitle>
            <AppStatisticsCardItemContent>
              {app("donwloads")}
            </AppStatisticsCardItemContent>
          </AppStatisticsCardItem>
          <VerticalDivider orientation="vertical" variant="inset" flexItem />
          <AppStatisticsCardItem>
            <AppStatisticsCardItemTitle>
              <AgeLogoContainer>
                <Image
                  src="/18.png"
                  alt="Age icon"
                  fill={true}
                  priority
                  sizes="(max-width: 480) 100vw"
                />
              </AgeLogoContainer>
            </AppStatisticsCardItemTitle>
            <AppStatisticsCardItemContent>
              {app("age")}
            </AppStatisticsCardItemContent>
          </AppStatisticsCardItem>
        </AppStatisticsCard>
        <CustomButton fullWidth>{app("install")}</CustomButton>
        <ContentSlider />
        <AboutGameContainer>
          <NextIntlClientProvider messages={pick(messages, "App")}>
            <OpenSectionButton string="about" />
          </NextIntlClientProvider>
        </AboutGameContainer>
        <ShortDescriptionWrapper>
          {app("shortDescription")}
        </ShortDescriptionWrapper>
        <NextIntlClientProvider messages={pick(messages, "App")}>
          <ChipSlider />
        </NextIntlClientProvider>
        <NextIntlClientProvider messages={pick(messages, "App")}>
          <OpenSectionButton string="ratingAndReviews" />
        </NextIntlClientProvider>
      </AppDescriptionWrapper>
    </MainContainer>
  );
}
