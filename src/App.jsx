import Header from "./components/Header/Header";
import ProductsHeader from "./components/ProductsHeader/ProductsHeader";
import { useState } from "react";
import ProductList from "./components/ProductList/ProductList";
import "./App.css";

function App() {
  const [products] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      <Header cartCount={cartCount}/>
      <div className="container">
        <ProductsHeader numResults={products.length} />
        <ProductList setCartCount={setCartCount}/>
      </div>
    </>
  );
}
export default App;
