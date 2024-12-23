import * as React from "react";
import { Box, CssBaseline } from "@mui/material";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import ThemeProvider, { useColorMode } from "./components/ThemeProvider";
import { SnackbarProvider } from "notistack";
import "@fontsource/roboto";

const App = () => {
  const { theme } = useColorMode();
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3}>
        <CssBaseline />
        <Box sx={{ minHeight: "100vh" }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreatePage />} />
          </Routes>
        </Box>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;
