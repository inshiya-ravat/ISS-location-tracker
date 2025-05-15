import { Box, Button, Paper, Typography } from "@mui/material";
import { COLOR, GAP } from "../../Constants/StyleConstants";
import SpaceLogo from "../../assets/Space.svg";
import CurrentPosition from "../DashBoardSections/CurrentPosition";
import DistanceFromYou from "../DashBoardSections/DistanceFromYou";
import Velocity from "../DashBoardSections/Velocity";
import SolarPosition from "../DashBoardSections/SolarPosition";
import Timestamp from "../DashBoardSections/Timestamp";
import { useEffect, useState } from "react";
import { getISSInfo } from "../../util/getISSInfo";
import ErrorMessage from "../Error/ErrorMEssage";

const initialAllParam = {
  id: "loading...",
  currentPosition: {
    latitude: "loading...",
    longitude: "loading...",
    altitude: "loading...",
    visibility: "loading...",
  },
  distance: {
    footprints: "loading...",
  },
  velocity: {
    velocity: "loading...",
    units: "loading...",
  },
  solar: {
    solar_lat: "loading...",
    solar_lon: "loading...",
    daynum: "loading...",
  },
};
interface DashboardProp {
  updateLastUpdated: () => void;
}
const Dashboard = ({ updateLastUpdated }: DashboardProp) => {
  const [error, setError] = useState<string | null>(null);
  const [param, setParam] = useState(initialAllParam);
  async function refreshPage() {
    try {
      const data = await getISSInfo();
      setParam(data);
      updateLastUpdated();
    } catch (error) {
      setError(error.message);
    }
  }
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
