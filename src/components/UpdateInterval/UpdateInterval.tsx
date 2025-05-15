import {
  Box,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CustomButton from "../CustomButton/CustomButton";
import { BG, COLOR, GAP } from "../../Constants/StyleConstants";
import { useRef } from "react";
import { getISSInfo } from "../../util/getISSInfo";
import type { Param } from "../../App";

interface UpdateIntervalProp {
  lastUpdate: number;
  updateParam: (param: Param) => void;
  updateLastUpdated: () => void;
}
const UpdateInterval = ({
  lastUpdate,
  updateParam,
  updateLastUpdated,
}: UpdateIntervalProp) => {
  const smScreen = useMediaQuery("(min-width:460px)");
  const intervalRef = useRef<HTMLInputElement>(null);
  const intervalId = useRef<number>(null);
  function addInterval() {
    if (intervalRef.current) {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
      if (intervalRef.current.value) {
        intervalId.current = setInterval(
          async () => {
            const data = await getISSInfo();
            updateParam(data);
            updateLastUpdated();
          },
          Number(intervalRef.current.value) * 1000,
        );
      }
    }
  }
  return (
    <Paper
      elevation={1}
      sx={{
        display: smScreen ? "flex" : "block",
        padding: GAP.SM,
        margin: `${GAP.MD} auto`,
        width: "80%",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: BG.INTERVAL,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: GAP.SM }}>
        <Typography>Update Interval:</Typography>
        <TextField variant="outlined" type="number" inputRef={intervalRef} />
        <p>seconds</p>
        <CustomButton text="Apply" onClick={addInterval} />
      </Box>
      <Typography sx={{ color: COLOR.GREY }}>
        Last updated: {(Date.now() - lastUpdate) / 1000} seconds ago
      </Typography>
    </Paper>
  );
};

export default UpdateInterval;
