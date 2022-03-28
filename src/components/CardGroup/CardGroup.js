import React from "react";
import Card from "../Card/Card";

const CardGroup = () => {
  const products = [
    { id: 1, name: "Laptop Pro", price: 12500 },
    { id: 2, name: "Laptop Crow", price: 12500 },
    { id: 3, name: "Laptop Grow", price: 12500 },
  ];
  return (
    <div>
      <h2>This is my Cart</h2>
      {products.map((product) => (
        <Card key={product.id} product={product}></Card>
      ))}
    </div>
  );
};

export default CardGroup;
