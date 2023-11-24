import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../reducers/ProductsSlice";
import { Button, Grid, Card, CardContent, CardMedia, Typography, Dialog, DialogContent } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Cart = () => {
  const cart = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();

  const [openImageDialog, setOpenImageDialog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isDarkTheme, setDarkTheme] = useState(false);

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleOpenImageDialog = (product) => {
    setSelectedProduct(product);
    setOpenImageDialog(true);
  };

  const handleCloseImageDialog = () => {
    setSelectedProduct(null);
    setOpenImageDialog(false);
  };

  const toggleTheme = () => {
    setDarkTheme(!isDarkTheme);
  };

  const theme = createTheme({
    palette: {
      mode: isDarkTheme ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Button
          variant="contained"
          onClick={toggleTheme}
          color={isDarkTheme ? "primary" : "secondary"}
          sx={{
            '&:hover': {
              backgroundColor: 'red', // Change the hover color to orange
            },
          }}
        >
          Change Theme
        </Button>
        <Typography variant="h4" gutterBottom>
          Cart
        </Typography>
        {cart.length > 0 ? (
          <Grid container spacing={2}>
            {cart.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <Card>
                  <CardMedia
                    component="img"
                    alt={product.title}
                    height="140"
                    image={product.thumbnail}
                    onClick={() => handleOpenImageDialog(product)}
                    style={{ cursor: "pointer" }}
                  />
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {product.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.description}
                    </Typography>
                    <Typography variant="body1" color="primary">
                      ${product.discountPercentage}
                    </Typography>
                    <Button
  variant="contained"
  color="error"
  onClick={() => handleRemoveFromCart(product)}
  sx={{
    '&:hover': {
      backgroundColor: 'darkred', // Change the hover color to dark red
    },
  }}
>
  Remove One
</Button>

                    <Typography variant="body1" color="text.primary">
                      Quantity: {product.quantity}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography variant="body1" color="textSecondary">
            Your cart is empty.
          </Typography>
        )}
      </div>

      <Dialog open={openImageDialog} onClose={handleCloseImageDialog}>
        {selectedProduct && (
          <DialogContent>
            <img
              src={selectedProduct.thumbnail}
              alt={selectedProduct.title}
              style={{ maxWidth: "100%" }}
            />
          </DialogContent>
        )}
      </Dialog>
    </ThemeProvider>
  );
};

export default Cart;
