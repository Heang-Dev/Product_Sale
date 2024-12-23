import React from "react";
import { ToggleButton } from "@mui/material";
import { useColorMode } from "./ThemeProvider";
import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";
import WbSunnyTwoToneIcon from "@mui/icons-material/WbSunnyTwoTone";

export default function ThemeToggleButton() {
  const { mode, toggleColorMode } = useColorMode();

  return (
    <ToggleButton
      value="check"
      selected={mode === "dark"}
      onChange={toggleColorMode}
      sx={{
        textTransform: "none",
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      {mode === "dark" ? <WbSunnyTwoToneIcon /> : <DarkModeTwoToneIcon />}
    </ToggleButton>
  );
}
