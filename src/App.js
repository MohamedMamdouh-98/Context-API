import React, { useState } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, title: "product1" },
    { id: 2, title: "product2" },
    { id: 3, title: "product3" },
  ]);
  return (
    <div>
      <Navbar products= {products}/>
      {products.map((item) => (
        <h3 key={item.id}>
          {item.id}. {item.title}
        </h3>
      ))}
    </div>
  );
};

export default App;
