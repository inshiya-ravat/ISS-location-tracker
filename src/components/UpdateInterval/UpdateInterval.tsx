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
import { Bounce, toast, ToastContainer } from "react-toastify";

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
      if (intervalRef.current.value && Number(intervalRef.current.value) > 4) {
        intervalId.current = setInterval(
          async () => {
            const data = await getISSInfo();
            if (data) {
              updateParam(data);
            }
            updateLastUpdated();
          },
          Number(intervalRef.current.value) * 1000,
        );
      } else {
        toast.error("Interval value should be more than 4 seconds!");
      }
    }
  }
  return (
    <>
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
          <TextField
            variant="outlined"
            placeholder="Enter interval..."
            inputProps={{
              style: {
                padding: GAP.SM,
              },
            }}
            type="number"
            inputRef={intervalRef}
          />
          <p>seconds</p>
          <CustomButton text="Apply" onClick={addInterval} />
        </Box>
        <Typography sx={{ color: COLOR.GREY }}>
          Last updated: {(Date.now() - lastUpdate) / 1000} seconds ago
        </Typography>
      </Paper>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
};

export default UpdateInterval;
