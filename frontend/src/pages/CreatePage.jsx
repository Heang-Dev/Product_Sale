import { Button, Container, Paper, Stack, TextField } from "@mui/material";
import Typography from "@mui/joy/Typography";
import React, { useState } from "react";
import { useProductStore } from "../store/product";
import { enqueueSnackbar } from "notistack";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);

    if (!success) {
      enqueueSnackbar(message, {
        variant: "error",
      });
    } else {
      enqueueSnackbar(message, {
        variant: "success",
      });
    }

    setNewProduct({
      name: "",
      price: "",
      image: "",
    });
  };

  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", mt: { xs: 5, md: 8 } }}>
      <Stack direction="column" spacing={{ xs: 7, md: 10 }}>
        <Typography
          level="h3"
          fontSize={{ xs: 40, md: 50 }}
          fontWeight={"bold"}
        >
          Create New Product
        </Typography>
        <Paper
          elevation={1}
          sx={{ borderRadius: 3, padding: { xs: 3, md: 5 } }}
        >
          <Stack direction={"column"} spacing={2}>
            <TextField
              id="outlined-basic"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
              label="Product Name"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
              label="Price"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
              label="Image URL"
              variant="outlined"
            />
            <Button
              onClick={handleAddProduct}
              variant="contained"
              sx={{ height: 50 }}
            >
              Add Product
            </Button>
          </Stack>
        </Paper>
      </Stack>
    </Container>
  );
};

export default CreatePage;
