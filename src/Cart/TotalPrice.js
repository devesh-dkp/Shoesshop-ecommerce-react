import React from "react";
import "./Cart.css";

const TotalPrice = ({ amount }) => {
  return (
    <div className="total-price">
      <h2>Total Price: ₹{amount}</h2>
    </div>
  );
};

export default TotalPrice;
