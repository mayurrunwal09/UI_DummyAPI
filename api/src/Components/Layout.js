




import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import ProductList from "./ProductList";
import Cart from "./Cart";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import { Link as MuiLink } from "@mui/material";

const NavigationBar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#333' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/about">
          About
        </Button>
        <Button color="inherit" component={Link} to="/ProductList">
          Products
        </Button>
        <Button color="inherit" component={Link} to="/cart">
         My Cart
        </Button>
        <Button color="inherit" component={Link} to="/Page not found">
         MORE   
        </Button>
      </Toolbar>
    </AppBar>
  );
};

const Layout = () => {
  return (
    <div>
      <NavigationBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ProductList" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Container>
    </div>
  );
};

export default Layout;

