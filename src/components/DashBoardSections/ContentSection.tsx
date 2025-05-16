import { COLOR } from "../../Constants/StyleConstants";
import { Box, Skeleton, Typography } from "@mui/material";

interface CurrentSectionProp {
  mainHeading: string;
  caption: string;
  footerHeading: string;
  footerValue: string;
  isLoading: boolean;
}
const ContentSection = ({
  mainHeading,
  caption,
  footerHeading,
  footerValue,
  isLoading,
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
          {isLoading ? (
            <Skeleton
              variant="text"
              sx={{ fontSize: "1rem", width: "100px" }}
              animation="wave"
            />
          ) : (
            mainHeading
          )}
        </Typography>
        <Typography variant="caption" sx={{ color: COLOR.GREY }}>
          {caption}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <Typography variant="body2">{footerHeading}:</Typography>
        <Typography variant="body2" sx={{ fontWeight: "bold" }}>
          {isLoading ? (
            <Skeleton
              variant="text"
              sx={{ fontSize: "1rem", width: "50px" }}
              animation="wave"
            />
          ) : (
            footerValue
          )}
        </Typography>
      </Box>
    </Box>
  );
};

export default ContentSection;
