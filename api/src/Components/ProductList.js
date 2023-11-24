



// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchProducts, addToCartAction } from "../reducers/ProductsSlice";
// import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import Dialog from "@mui/material/Dialog";
// import DialogContent from "@mui/material/DialogContent";
// import { createTheme, ThemeProvider } from "@mui/material/styles";

// const ProductList = () => {
//   const dispatch = useDispatch();
//   const products = useSelector((state) => state.products.data.products);
//   const cart = useSelector((state) => state.products.cart);
//   const status = useSelector((state) => state.products.status);
//   const error = useSelector((state) => state.products.error);

//   const [openImageDialog, setOpenImageDialog] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [isDarkTheme, setDarkTheme] = useState(false);

//   const handleOpenImageDialog = (product) => {
//     setSelectedProduct(product);
//     setOpenImageDialog(true);
//   };

//   const handleCloseImageDialog = () => {
//     setSelectedProduct(null);
//     setOpenImageDialog(false);
//   };
  

//   const toggleTheme = () => {
//     setDarkTheme(!isDarkTheme);
//   };

//   const theme = createTheme({
//     palette: {
//       mode: isDarkTheme ? "dark" : "light",
//     },
//   });

//   useEffect(() => {
//     if (status === "idle") {
//       dispatch(fetchProducts());
//     }
//   }, [dispatch, status]);

//   const addToCart = (product) => {
//     dispatch(addToCartAction(product));
//   };

//   const getCartItemQuantity = (productId) => {
//     return cart.filter((item) => item.id === productId).reduce((total, item) => total + item.quantity, 0);
//   };

//   const getTotalCartQuantity = () => {
//     return cart.reduce((total, item) => total + item.quantity, 0);
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <div>
//       <Button
//   variant="contained"
//   onClick={toggleTheme}
//   color={isDarkTheme ? "primary" : "secondary"}
//   sx={{
//     '&:hover': {
//       backgroundColor: 'orange', // Change the hover color to orange
//     },
//   }}
// >
//   Change Theme
// </Button>


//         <Typography variant="h6" color="text.primary">
//           Total Products in Cart: {getTotalCartQuantity()}
//         </Typography>
//         <Grid container spacing={2}>
//           {products.map((product) => (
//             <Grid item xs={12} sm={6} md={4} key={product.id}>
//               <Card sx={{ height: "100%" }}>
//                 <CardMedia
//                   component="img"
//                   alt={product.title}
//                   height="140"
//                   image={product.thumbnail}
//                   onClick={() => handleOpenImageDialog(product)}
//                   style={{ cursor: "pointer" }}
//                 />
//                 <CardContent>
//                   <Typography variant="h6" component="div">
//                     {product.title}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     {product.description}
//                   </Typography>
//                   <Typography variant="body1" color="primary">
//                     ${product.discountPercentage}
//                   </Typography>
//                   <Typography variant="body1" color="text.secondary">
//                     Rating: {product.rating}
//                   </Typography>
//                   <Typography variant="body1" color="text.secondary">
//                     Stock: {product.stock}
//                   </Typography>
//                   <Typography variant="body1" color="text.secondary">
//                     Brand: {product.brand}
//                   </Typography>
//                   <Typography variant="body1" color="text.secondary">
//                     Category: {product.category}
//                   </Typography>
//                   <Button
//                     variant="contained"
//                     color={isDarkTheme ? "primary" : "primary"}
//                     onClick={() => addToCart(product)}
//                     startIcon={<ShoppingCartIcon />}
//                     sx={{
//                       '&:hover': {
//                         backgroundColor: 'red', // Change the hover color to green
//                       },
//                     }}
//                   >
//                     Add to Cart
//                   </Button>
//                   <Typography variant="body1" color="text.primary">
//                     Quantity in Cart: {getCartItemQuantity(product.id)}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>

//         <Dialog open={openImageDialog} onClose={handleCloseImageDialog}>
//           {selectedProduct && (
//             <DialogContent>
//               <img
//                 src={selectedProduct.thumbnail}
//                 alt={selectedProduct.title}
//                 style={{ maxWidth: "100%" }}
//               />
//             </DialogContent>
//           )}
//         </Dialog>
//       </div>
//     </ThemeProvider>
//   );
// };

// export default ProductList;







import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, addToCartAction } from "../reducers/ProductsSlice";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data.products);
  const cart = useSelector((state) => state.products.cart);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  const [openImageDialog, setOpenImageDialog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isDarkTheme, setDarkTheme] = useState(false);

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

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  const addToCart = (product) => {
    dispatch(addToCartAction(product));
  };

  const getCartItemQuantity = (productId) => {
    return cart.filter((item) => item.id === productId).reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalCartQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
      <Button
  variant="contained"
  onClick={toggleTheme}
  color={isDarkTheme ? "primary" : "secondary"}
  sx={{
    '&:hover': {
      backgroundColor: 'darkred', // Change the hover color to orange
    },
  }}
>
  Change Theme
</Button>


        <Typography variant="h6" color="text.primary">
          Total Products in Cart: {getTotalCartQuantity()}
        </Typography>
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card sx={{ height: "100%" }}>
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
                  <Typography variant="body1" color="text.secondary">
                    Rating: {product.rating}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Stock: {product.stock}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Brand: {product.brand}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Category: {product.category}
                  </Typography>
                  <Button
                    variant="contained"
                    color={isDarkTheme ? "primary" : "primary"}
                    onClick={() => addToCart(product)}
                    startIcon={<ShoppingCartIcon />}
                    sx={{
                      '&:hover': {
                        backgroundColor: 'darkblue', // Change the hover color to green
                      },
                    }}
                  >
                    Add to Cart
                  </Button>
                  <Typography variant="body1" color="text.primary">
                    Quantity in Cart: {getCartItemQuantity(product.id)}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Dialog open={openImageDialog} onClose={handleCloseImageDialog}>
          {selectedProduct && (
            <DialogContent>
              <img
                src={selectedProduct.thumbnail}
                alt={selectedProduct.title}
                style={{ maxWidth: "100%" }}
              />
              {/* Display more details here */}
              <Typography variant="h6" color="text.primary">
                {selectedProduct.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {selectedProduct.description}
              </Typography>
              <Typography variant="body1" color="primary">
                ${selectedProduct.discountPercentage}
              </Typography>
              {/* Add more product details as needed */}
            </DialogContent>
          )}
        </Dialog>
      </div>
    </ThemeProvider>
  );
};

export default ProductList;
