import { Box, Button, Paper, Typography } from "@mui/material";
import { COLOR, GAP } from "../../Constants/StyleConstants";
import SpaceLogo from "../../assets/Space.svg";
import CurrentPosition from "../DashBoardSections/CurrentPosition";
import DistanceFromYou from "../DashBoardSections/DistanceFromYou";
import Velocity from "../DashBoardSections/Velocity";
import SolarPosition from "../DashBoardSections/SolarPosition";
import Timestamp from "../DashBoardSections/Timestamp";

const Dashboard = () => {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: GAP.MD,
        padding: GAP.SM,
        margin: `${GAP.MD} auto`,
        width: "80%",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box sx={{ margin: "auto" }}>
        <img src={SpaceLogo} alt="space logo" />
        <Typography variant="subtitle1">
          {" "}
          INTERNATIONAL SPACE STATION
        </Typography>
        <Typography variant="caption" sx={{ color: COLOR.GREY }}>
          ID: 2554
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: GAP.MD }}>
          <CurrentPosition />
          <DistanceFromYou />
          <Velocity />
          <SolarPosition />
          <Timestamp />
        </Box>
      </Box>
      <Button sx={{ backgroundColor: COLOR.GREEN, color: "white" }}>
        Refresh Now
      </Button>
    </Paper>
  );
};

export default Dashboard;
