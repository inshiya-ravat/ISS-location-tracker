import { Box, Typography, useMediaQuery } from "@mui/material";
import CustomButton from "../CustomButton/CustomButton";
import Hamburger from "../../assets/Hamburger.svg";
import { GAP_MD, GAP_SM, NAV_BG } from "../../Constants/StyleConstants";

const Navbar = () => {
  const matches = useMediaQuery("(min-width:500px)");
  return (
    <Box
      sx={{
        backgroundColor: NAV_BG,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: `${GAP_SM} ${GAP_MD}`,
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
