import { Box, Typography, useMediaQuery } from "@mui/material";
import CustomButton from "../CustomButton/CustomButton";
import Hamburger from "../../assets/Hamburger.svg";
import { GAP, BG } from "../../Constants/StyleConstants";

const Navbar = () => {
  const matches = useMediaQuery("(min-width:500px)");
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
      <Box sx={{ display: matches ? "inline" : "none" }}>
        <CustomButton variant="active" text="Dashboard" />
        <CustomButton text="Details" />
      </Box>
      <Box
        sx={{ display: matches ? "none" : "inline", verticalAlign: "middle" }}
      >
        <img
          src={Hamburger}
          alt="menu"
          aria-label="Click here for naivgation options"
        />
      </Box>
    </Box>
  );
};

export default Navbar;
