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
      <button onClick={() => handleUpdateQuantity(productId, "-1")}>-</button>
      <span>{quantity}</span>
      <button onClick={() => handleUpdateQuantity(productId, "1")}>+</button>
      <button className="remove-button" onClick={removeProductCallback}>
        Remove
      </button>
    </div>
  );
};

export default Quantifier;
