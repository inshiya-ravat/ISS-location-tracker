import { Button } from "@mui/material";
import type { MapHTMLAttributes } from "react";
import {
  BTN_ACTIVE_BG,
  BTN_INACTIVE_BG,
  GAP_SM,
} from "../../Constants/StyleConstants";

interface CustomButtonProps extends MapHTMLAttributes<HTMLButtonElement> {
  variant?: "active" | "inactive";
  text: string;
}
const CustomButton = ({ variant, text }: CustomButtonProps) => {
  const color = variant
    ? variant === "active"
      ? BTN_ACTIVE_BG
      : BTN_INACTIVE_BG
    : BTN_INACTIVE_BG;
  return (
    <Button
      sx={{ backgroundColor: color, color: "white", marginRight: GAP_SM }}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
