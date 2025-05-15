import { Box, Typography } from "@mui/material";

interface ErrorProp {
  error: string;
}
const ErrorMessage = ({ error }: ErrorProp) => {
  return (
    <Box sx={{ color: "red" }}>
      <Typography variant="h4">Oops! We are facing some Error.</Typography>
      <Typography variant="subtitle1">{error}</Typography>
    </Box>
  );
};

export default ErrorMessage;
