import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const CartItem = ({ product, quantity, onRemove }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt={product.title}
        height="140"
        image={product.thumbnail}
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
        <Typography variant="body1" color="text.primary">
          Quantity: {quantity}
        </Typography>
        <button onClick={() => onRemove(product)}>Remove</button>
      </CardContent>
    </Card>
  );
};

export default CartItem;
