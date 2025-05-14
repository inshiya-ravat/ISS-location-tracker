import {
  Box,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CustomButton from "../CustomButton/CustomButton";
import { BG, COLOR, GAP } from "../../Constants/StyleConstants";

const UpdateInterval = () => {
  const smScreen = useMediaQuery("(min-width:460px)");
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
        <TextField variant="outlined" />
        <p>seconds</p>
        <CustomButton text="Apply" />
      </Box>
      <Typography sx={{ color: COLOR.GREY }}>
        Last updated: 2 seconds ago
      </Typography>
    </Paper>
  );
};

export default UpdateInterval;
