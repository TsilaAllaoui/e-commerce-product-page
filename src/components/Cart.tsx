import { useContext, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "../styles/Cart.scss";
import { CurrentProductContext } from "../contexts/product";

export const Cart = () => {
  const product = useContext(CurrentProductContext).product;
  const [showCart, setShowCart] = useState(false);
  const handleClick = (_e: React.MouseEvent<HTMLDivElement>) => {
    setShowCart(true);
  };

  return (
    <div id="cart" onClick={handleClick}>
      <AiOutlineShoppingCart id="icon" />
      {showCart && (
        <div id="cart-portal">
          <h1>Cart</h1>
          <div id="items-container">
            <div id="items">
              <img src={product.images.split(";")[0]} alt="" />
            </div>
            <div id="checkout">Checkout</div>
          </div>
        </div>
      )}
    </div>
  );
};
