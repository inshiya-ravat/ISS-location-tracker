import { Box, Typography } from "@mui/material";
import { GAP, BG } from "../../Constants/StyleConstants";

const Navbar = () => {
  return (
    <Box
      sx={{
        backgroundColor: BG.NAV,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: `${GAP.SM} ${GAP.MD}`,
      }}
    >
      <Typography variant="h6">ISS Location Tracker</Typography>
    </Box>
  );
};

export default Navbar;
