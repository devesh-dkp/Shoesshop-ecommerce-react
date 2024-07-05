import { AiOutlineShoppingCart } from "react-icons/ai";
import "./CartWidget.css"; // Add a separate CSS file for CartWidget styles

const CartWidget = ({ productsCount }) => {
  return (
    <div
      className="cart-widget"
      onClick={() => window.location.assign("/cart")}
    >
      <span className="items-count">{productsCount}</span>
      <AiOutlineShoppingCart className="cart-icon" />
    </div>
  );
};

export default CartWidget;
