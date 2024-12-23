import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Modal,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdatesRounded";
import React, { useState } from "react";
import { useProductStore } from "../store/product";
import { enqueueSnackbar } from "notistack";

const ProductCard = ({ product }) => {
  const theme = useTheme();
  const { deleteProduct, updateProduct } = useProductStore();
  const [open, setOpen] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState(product);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);

    if (!success) {
      enqueueSnackbar(message, {
        variant: "error",
      });
    } else {
      enqueueSnackbar(message, {
        variant: "success",
      });
    }
  };

  const handleUpdateProduct = async (pid, updateProduct) => {
    const { success, message } = await updateProduct(pid, updatedProduct);

    if (!success) {
      enqueueSnackbar(message, {
        variant: "error",
      });
    } else {
      enqueueSnackbar(message, {
        variant: "success",
      });
    }

    handleClose();
  };

  return (
    <>
      <Card
        sx={{
          maxWidth: 350,
          minWidth: 350,
          cursor: "pointer",
          transition: "all 0.5s ease",
          backgroundColor:
            theme.palette.mode === "light" ? "#f8f9fa" : "#0d1321",
          "&:hover": {
            backgroundColor:
              theme.palette.mode === "light" ? "#e9ecef" : "#222222", // Change color on hover
            transform: "translateY(-8px)", // Move the card upward on hover
            // transform: "scale(1.05)", // Slightly enlarge on hover
          },
        }}
      >
        <CardMedia
          component="img"
          alt="product img"
          height="200"
          image={product.image}
          sx={{ objectFit: "cover", overflowY: "hidden", maxWidth: 350 }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontWeight={"bold"}
            sx={{
              whiteSpace: "nowrap", // Prevent wrapping
              overflow: "hidden", // Hide overflowed content
              textOverflow: "ellipsis", // Add ellipsis when content overflows
              maxWidth: "100%", // Optional: ensures text doesn’t overflow the container
            }}
          >
            {product.name}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#49a078", fontSize: 25, fontWeight: "bold" }}
          >
            ${product.price}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "flex-end", // Align items to the right
            alignItems: "center", // Align items vertically if needed
          }}
        >
          <Button
            onClick={() => handleDeleteProduct(product._id)}
            color="error"
            variant="contained"
            size="small"
          >
            <DeleteIcon />
          </Button>
          <Button
            onClick={handleOpen}
            color="primary"
            variant="contained"
            size="small"
          >
            <TipsAndUpdatesIcon />
          </Button>
        </CardActions>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "1px solid #000",
            boxShadow: 24,
            minWidth: { xs: "300px", md: "550px" },
            p: 4,
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h4"
            fontWeight={"bold"}
            textAlign={"center"}
            component="h2"
          >
            Update Product
          </Typography>
          <Stack direction={"column"} spacing={3} my={5}>
            <TextField
              id="outlined-basic"
              value={updatedProduct.name}
              label="Product Name"
              variant="outlined"
              onChange={(e) =>
                setUpdatedProduct({ ...updatedProduct, name: e.target.value })
              }
            />
            <TextField
              id="outlined-basic"
              value={updatedProduct.price}
              label="Price"
              variant="outlined"
              onChange={(e) =>
                setUpdatedProduct({ ...updatedProduct, price: e.target.value })
              }
            />
            <TextField
              id="outlined-basic"
              value={updatedProduct.image}
              label="Image URL"
              variant="outlined"
              onChange={(e) =>
                setUpdatedProduct({ ...updatedProduct, image: e.target.value })
              }
            />
          </Stack>
          <Stack
            direction={"row"}
            spacing={2}
            display={"flex"}
            justifyContent={"flex-end"}
          >
            <Button
              onClick={() => handleUpdateProduct(product._id, updateProduct)}
              variant="contained"
            >
              Update
            </Button>
            <Button onClick={handleClose} variant="outlined">
              Cancel
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};

export default ProductCard;
