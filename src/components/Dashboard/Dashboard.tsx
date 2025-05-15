import { Box, Button, Paper, Typography } from "@mui/material";
import { COLOR, GAP } from "../../Constants/StyleConstants";
import SpaceLogo from "../../assets/Space.svg";
import CurrentPosition from "../DashBoardSections/CurrentPosition";
import DistanceFromYou from "../DashBoardSections/DistanceFromYou";
import Velocity from "../DashBoardSections/Velocity";
import SolarPosition from "../DashBoardSections/SolarPosition";
import Timestamp from "../DashBoardSections/Timestamp";
import { useEffect } from "react";
import ErrorMessage from "../Error/ErrorMEssage";
import type { Param } from "../../App";

interface DashboardProp {
  refreshPage: () => Promise<void>;
  error: string | null;
  param: Param;
}

const Dashboard = ({ refreshPage, error, param }: DashboardProp) => {
  useEffect(() => {
    async function seperatePramas() {
      await refreshPage();
    }
    seperatePramas();
  }, []);
  if (error) {
    return <ErrorMessage error={error} />;
  }
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
          ID: {param.id}
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: GAP.MD }}>
          <CurrentPosition parameters={param.currentPosition} />
          <DistanceFromYou parameters={param.distance} />
          <Velocity parameters={param.velocity} />
          <SolarPosition parameters={param.solar} />
          <Timestamp />
        </Box>
      </Box>
      <Button
        onClick={async () => await refreshPage()}
        sx={{ backgroundColor: COLOR.GREEN, color: "white" }}
      >
        Refresh Now
      </Button>
    </Paper>
  );
};

export default Dashboard;
