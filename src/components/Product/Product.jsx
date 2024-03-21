import "./Product.css";
import PropTypes from "prop-types";

export default function Product({
  product,
  liked,
  onLikeToggle,
  addToCart,
  removeFromCart,
  isProductInCart,
}) {
  const { price, description, image, id } = product;

  // Function to handle like status toggle
  const handleLikeToggle = () => {
    onLikeToggle(id, !liked);
  };


  // Function to handle cart toggle
  const handleCartToggle = () => {
    if (isProductInCart(product)) {
      removeFromCart(product);
    } else {
      addToCart(product);
    }
  };

  return (
    <div
      className={`thumb-unit ${isProductInCart(product) ? "is-in-cart" : ""}`}
    >
      <div className="heading">
        <span>${price}</span>
        <span>
          <i
            className={`fa fa-heart ${liked ? "liked" : "fa-heart-o"}`}
            onClick={handleLikeToggle}
          ></i>
        </span>
      </div>
      <div className="box" style={{ backgroundImage: `url(${image})` }} />
      <div className="info">
        <p>{description}</p>
        <span className="icon">
          <i
            className={`fa fa-shopping-cart ${
              isProductInCart(product) ? "is-in-cart" : ""
            }`}
            onClick={handleCartToggle}
          ></i>
        </span>
      </div>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  liked: PropTypes.bool.isRequired,
  onLikeToggle: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  isProductInCart: PropTypes.func.isRequired,
};
