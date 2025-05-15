import { Button } from "@mui/material";
import type { HtmlHTMLAttributes } from "react";
import { BG, GAP } from "../../Constants/StyleConstants";

interface CustomButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  variant?: "active" | "inactive";
  text: string;
  onClick?: () => void;
}
const CustomButton = ({ variant, text, onClick }: CustomButtonProps) => {
  const color = variant
    ? variant === "active"
      ? BG.BTN_ACTIVE
      : BG.BTN_INACTIVE
    : BG.BTN_INACTIVE;
  return (
    <Button
      sx={{ backgroundColor: color, color: "white", marginRight: GAP.SM }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
