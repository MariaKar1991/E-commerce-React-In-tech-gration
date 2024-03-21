import Product from "../Product/Product";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

export default function ProductList({ setCartCount }) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);

  
  useEffect(() => {
    fetch("/products.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products. Please try again later.");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data.map((product) => ({ ...product, liked: false })));
      })
      .catch((error) => {
        if (error instanceof SyntaxError) {
          setError(
            "Error parsing JSON data. Please check the format of the JSON file."
          );
        } else {
          setError("Failed to fetch products. Please try again later.");
        }
        console.error("Error fetching products:", error);
      });
  }, []);

  // Function to handle like toggle
  const handleLikeToggle = (productId, liked) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, liked: liked } : product
      )
    );
  };

  /// Function to handle adding to cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    setCartCount((prevCount) => prevCount + 1);
  };

  // Function to handle removing from cart
  const removeFromCart = (product) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
    setCartCount((prevCount) => prevCount - 1);
  };

  // Function to check if a product is in the cart
  const isProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  return (
    <div>
      {error && (
        <div className="alert" role="alert">
          {error}
        </div>
      )}
      {!error && (
        <div className="thumb-wrapper">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              description={product.description}
              liked={product.liked}
              onLikeToggle={handleLikeToggle}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              isProductInCart={isProductInCart}
            />
          ))}
        </div>
      )}
    </div>
  );
}

ProductList.propTypes = {
  setCartCount: PropTypes.func.isRequired,
};