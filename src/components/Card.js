import React from "react";

const Card = ({ product, addToCart, isInCart }) => {
  const handleAddToCart = () => {
    if (!isInCart(product.id)) {
      addToCart(product);
    }
  };

  const redirect = (url) => {
    return () => {
      if (!url) {
        url = "https://www.amazon.in/";
      }
      window.open(url, "_blank");
    };
  };

  return (
    <section className="card">
      <img
        src={product.img}
        alt={product.title}
        className="card-img"
        onClick={redirect(product.url)}
      />
      <div className="card-details">
        <h3 className="card-title" onClick={redirect(product.url)}>
          {product.title}
        </h3>
        <section className="card-reviews">
          {Array(product.star)
            .fill()
            .map((_, i) => (
              <span key={i}>⭐</span>
            ))}
          <span className="total-reviews">{product.reviews}</span>
        </section>
        <section className="card-price">
          <div className="price">
            <del>{product.prevPrice}</del> {product.newPrice}
          </div>
          <button className="cart-add" disabled={isInCart(product.id)}>
            <div
              className={`add-to-cart add-to-cart-button ${
                isInCart(product.id) ? "disabled" : ""
              }`}
              onClick={handleAddToCart}
            >
              {isInCart(product.id) ? "In basket" : "ADD TO CART"}
            </div>
          </button>
        </section>
      </div>
    </section>
  );
};

export default Card;
