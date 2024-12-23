import { Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import AddBoxTwoToneIcon from "@mui/icons-material/AddBoxTwoTone";
import ThemeToggleButton from "./ThemeToggleButton";

const Navbar = () => {
  return (
    <Container maxWidth="xl">
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mt={3}
      >
        <Typography
          sx={{
            background:
              "linear-gradient(to right,rgb(0, 98, 255),rgb(252, 0, 139))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textAlign: "center",
            fontWeight: "bold",
            textTransform: "uppercase",
            fontSize: { xs: "20px", md: "25px" },
          }}
        >
          <Link to={"/"}>Heang Store 🛒</Link>
        </Typography>
        <Stack direction={"row"} alignItems="center" spacing={{ xs: 2, md: 5 }}>
          <Link to={"/create"}>
            <Button
              variant="outlined"
              color="info"
              startIcon={<AddBoxTwoToneIcon />}
            >
              Create
            </Button>
          </Link>
          <ThemeToggleButton />
        </Stack>
      </Stack>
    </Container>
  );
};

export default Navbar;
