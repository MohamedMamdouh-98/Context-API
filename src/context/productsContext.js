import { createContext, useState } from "react";

export const productsContext = createContext();

const ProductProvider = ({children}) => {
  const [products, setProducts] = useState([
    { id: 1, title: "product1" },
    { id: 2, title: "product2" },
    { id: 3, title: "product3" },
  ]);
  return (
    <productsContext.Provider value={products}>
      {children}
    </productsContext.Provider>
  );
};

export default ProductProvider;
