import { COLOR } from "../../Constants/StyleConstants";
import { Box, Typography } from "@mui/material";

interface CurrentSectionProp {
  mainHeading: string;
  caption: string;
  footerHeading: string;
  footerValue: string;
}
const ContentSection = ({
  mainHeading,
  caption,
  footerHeading,
  footerValue,
}: CurrentSectionProp) => {
  return (
    <Box
      sx={{
        margin: "auto 0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        height: "100%",
      }}
    >
      <Box>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          {mainHeading}
        </Typography>
        <Typography variant="caption" sx={{ color: COLOR.GREY }}>
          {caption}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <Typography variant="body2">{footerHeading}:</Typography>
        <Typography variant="body2" sx={{ fontWeight: "bold" }}>
          {footerValue}
        </Typography>
      </Box>
    </Box>
  );
};

export default ContentSection;
