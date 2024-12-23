import { Box, Container, Grid2, Link, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Link as LinkRoute } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const { fetchProduct, products } = useProductStore();

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  return (
    <Container maxWidth="xl" sx={{ py: 8 }}>
      <Stack
        direction="column"
        spacing={5}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          level="h3"
          fontSize={{ xs: 35, md: 50 }}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          Current Products 🚀
        </Typography>

        <Box sx={{ flexGrow: 1 }}>
          <Grid2
            container
            spacing={2}
            sx={{
              justifyContent: "center",
            }}
          >
            {products.map((product) => (
              <Grid2 xs={12} sm={6} md={4} lg={3} key={product._id}>
                <ProductCard product={product} />
              </Grid2>
            ))}
          </Grid2>
        </Box>

        {products.length === 0 && (
          <Typography
            level="h6"
            fontSize={30}
            color="gray"
            textAlign={"center"}
          >
            No Products Found 🥲{" "}
            <Link
              component={LinkRoute}
              to="/create"
              color="secondary"
              underline="hover"
            >
              Create a Product
            </Link>
          </Typography>
        )}
      </Stack>
    </Container>
  );
};

export default HomePage;
