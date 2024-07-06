import React from "react";
import "./Cart.css";

const Quantifier = ({
  productId,
  handleUpdateQuantity,
  quantity,
  removeProductCallback,
}) => {
  return (
    <div className="quantifier">
      <button
        className={`${
          quantity === 1 ? "remove-icon" : "update-quantity-button"
        }`}
        onClick={() =>
          quantity === 1
            ? removeProductCallback()
            : handleUpdateQuantity(productId, "-1")
        }
      >
        {quantity > 1 && "-"}
      </button>
      <span>{quantity}</span>
      <button
        className="update-quantity-button"
        onClick={() => handleUpdateQuantity(productId, "1")}
      >
        +
      </button>
      <button className="remove-button" onClick={removeProductCallback}>
        Remove
      </button>
    </div>
  );
};

export default Quantifier;
