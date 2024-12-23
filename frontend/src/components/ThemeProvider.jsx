import React, { createContext, useContext, useState, useEffect } from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";

// Create the context
const ColorModeContext = createContext();

// Custom hook to use the context
const useColorMode = () => {
  return useContext(ColorModeContext);
};

// ThemeProvider component
const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    // Initialize mode from localStorage or default to 'dark'
    return localStorage.getItem("themeMode") || "dark";
  });

  useEffect(() => {
    // Save the current mode to localStorage whenever it changes
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  const theme = createTheme({
    palette: {
      mode,
    },
  });

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  return (
    <ColorModeContext.Provider value={{ mode, toggleColorMode }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ColorModeContext.Provider>
  );
};

// Add default export
export { useColorMode }; // Named export for hook
export default ThemeProvider; // Default export for the provider
