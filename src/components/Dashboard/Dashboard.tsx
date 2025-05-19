import { Box, Button, Paper, Skeleton, Typography } from "@mui/material";
import { COLOR, GAP } from "../../Constants/StyleConstants";
import SpaceLogo from "../../assets/Space.svg";
import CurrentPosition from "../DashBoardSections/CurrentPosition";
import DistanceFromYou from "../DashBoardSections/DistanceFromYou";
import Velocity from "../DashBoardSections/Velocity";
import SolarPosition from "../DashBoardSections/SolarPosition";
import Timestamp from "../DashBoardSections/Timestamp";
import { useEffect, useState } from "react";
import ErrorMessage from "../Error/ErrorMEssage";
import type { Param } from "../../App";
import { getDistanceFromLatLonInKm } from "../../util/getDistance";
import { toast } from "react-toastify";

interface DashboardProp {
  refreshPage: () => Promise<void>;
  error: string | null;
  param: Param;
  isLoading: boolean;
}

const Dashboard = ({ refreshPage, error, param, isLoading }: DashboardProp) => {
  const [distance, setDistance] = useState<string>("");
  useEffect(() => {
    async function seperatePramas() {
      await refreshPage();
      getDistanceFromLatLonInKm(
        Number(param.currentPosition.latitude),
        Number(param.currentPosition.longitude),
      )
        .then((result) => setDistance(result))
        .catch((err) => toast.error(err));
    }
    seperatePramas();
  }, [refreshPage]);
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
        {isLoading ? (
          <Skeleton
            variant="text"
            animation="wave"
            sx={{ fontSize: "1rem", width: "150px", margin: "auto" }}
          />
        ) : (
          <Typography variant="caption" sx={{ color: COLOR.GREY }}>
            ID: {param.id}
          </Typography>
        )}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: GAP.MD,
          }}
        >
          <CurrentPosition
            isLoading={isLoading}
            parameters={param.currentPosition}
          />
          <DistanceFromYou
            isLoading={isLoading}
            parameters={param.distance}
            distance={distance}
          />
          <Velocity isLoading={isLoading} parameters={param.velocity} />
          <SolarPosition isLoading={isLoading} parameters={param.solar} />
          <Timestamp />
        </Box>
      </Box>
      <Button
        onClick={refreshPage}
        sx={{ backgroundColor: COLOR.GREEN, color: "white" }}
      >
        Refresh Now
      </Button>
    </Paper>
  );
};

export default Dashboard;
