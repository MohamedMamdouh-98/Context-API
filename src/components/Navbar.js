import React, { useContext } from "react";
import { productsContext } from "../context/productsContext";

const Navbar = () => {
    const products = useContext(productsContext)
    console.log(products)
  return (
    <div style={{
        width:"100%",
        height:"50px",
        background:"#fafa",
    }}>
      
      <h3>Products : {products.length}</h3>
    </div>
  );
};

export default Navbar;
