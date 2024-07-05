import React, { useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";
import { useLocation } from "react-router-dom";
import Quantifier from "./Quantifier";
import TotalPrice from "./TotalPrice";
import "./Cart.css";

const Cart = () => {
  const [cart, setCart] = useLocalStorageState("cart", {});
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleRemoveProduct = (productId) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      delete updatedCart[productId];
      return updatedCart;
    });
  };

  const handleUpdateQuantity = (productId, operation) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[productId]) {
        if (operation === "1") {
          updatedCart[productId] = {
            ...updatedCart[productId],
            quantity: updatedCart[productId].quantity + 1,
          };
        } else {
          updatedCart[productId] = {
            ...updatedCart[productId],
            quantity: updatedCart[productId].quantity - 1,
          };
        }
      }
      return updatedCart;
    });
  };

  const getProducts = () => Object.values(cart || {});

  const totalPrice = getProducts().reduce(
    (total, product) => total + product.newPrice * product.quantity,
    0
  );

  return (
    <section className="cart">
      <h1>Cart</h1>

      <div className="container">
        {getProducts().map((product) => (
          <div className="product" key={product.id}>
            <img src={product.img} alt={product.title} />
            <h3>{product.title}</h3>
            <Quantifier
              removeProductCallback={() => handleRemoveProduct(product.id)}
              productId={product.id}
              handleUpdateQuantity={handleUpdateQuantity}
              quantity={product.quantity}
            />
            <div className="price">
              {product.newPrice} x {product.quantity} ={" "}
              {product.newPrice * product.quantity}
            </div>
          </div>
        ))}
      </div>
      <TotalPrice amount={totalPrice} />
    </section>
  );
};

export default Cart;
