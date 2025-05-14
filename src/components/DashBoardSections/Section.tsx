import { Paper, Typography } from "@mui/material";
import type { ReactNode } from "react";
import { BG, GAP } from "../../Constants/StyleConstants";

interface SectionProp {
  heading: string;
  children: ReactNode;
}
const Section = ({ heading, children }: SectionProp) => {
  return (
    <Paper
      elevation={1}
      sx={{
        backgroundColor: BG.SECTION,
        padding: GAP.MD,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{ color: BG.NAV, fontWeight: "bold" }}
      >
        {heading}
      </Typography>
      {children}
    </Paper>
  );
};

export default Section;
