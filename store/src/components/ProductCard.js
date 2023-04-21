import React from "react";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { CartContext } from ".../CartContext";
import { useContext } from "react";
function ProductCard(props) {
  //props.product is the prod we are selling
  const product = props.product;
  return (
    <Card>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
