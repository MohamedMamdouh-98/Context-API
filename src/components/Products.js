import React, { useContext } from "react";
import { productsContext } from "../context/productsContext";

const Products = () => {
  const products = useContext(productsContext);
  return (
    <div>
      <h2>Products</h2>
      {products.map((item) => (
        <h3 key={item.id}>
          {item.id}. {item.title}
        </h3>
      ))}
    </div>
  );
};

export default Products;
