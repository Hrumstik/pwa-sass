import { Button, Grid } from "@mui/material";
import { ButtonTitle } from "../styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useTranslations } from "next-intl";

const OpenSectionButton = ({ string }: { string: string }) => {
  const app = useTranslations("App");
  return (
    <Button fullWidth sx={{ padding: 0 }}>
      <Grid container alignItems="center">
        <Grid item xs={10}>
          <ButtonTitle>{app(string)}</ButtonTitle>
        </Grid>
        <Grid item xs={2} container justifyContent="end" alignItems="center">
          <ArrowForwardIcon sx={{ color: "rgb(32, 33, 36)" }} />
        </Grid>
      </Grid>
    </Button>
  );
};

export default OpenSectionButton;
