import React, { createContext, useState } from "react";
import Navbar from "./components/Navbar";
import "./index.css";
import Products from "./components/Products";
export const productsContext = createContext();
const App = () => {
  const [products, setProducts] = useState([
    { id: 1, title: "product1" },
    { id: 2, title: "product2" },
    { id: 3, title: "product3" },
  ]);
  return (
    <productsContext.Provider value={products}>
      <div>
        <Navbar />
        <Products/>
      </div>
    </productsContext.Provider>
  );
};

export default App;
