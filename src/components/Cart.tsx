import { useContext, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CurrentProductContext } from "../contexts/product";
import "../styles/Cart.scss";
import { CartStateContext } from "../contexts/cart";
import { RiDeleteBin6Line } from "react-icons/ri";

export const Cart = () => {
  const product = useContext(CurrentProductContext).product;
  const { cartState, setCartState } = useContext(CartStateContext);
  const handleClick = (_e: React.MouseEvent<HTMLDivElement>) => {
    setCartState(true);
  };

  const price =
    product.price! -
    (product.discount ? (product.price! * product.discount) / 100 : 0);

  return (
    <>
      {cartState && <div id="back" onClick={() => setCartState(false)}></div>}
      <div id="cart" onClick={handleClick}>
        <AiOutlineShoppingCart id="icon" />
        {cartState && (
          <div id="cart-portal">
            <h1>Cart</h1>
            <div id="items-container">
              {product?.count > 0 ? (
                <>
                  <div id="items">
                    <img src={product.images.split(";")[0]} alt="" />
                    <div id="inner">
                      <p>{product.name}</p>
                      <div id="price">
                        <p>{`$ ${price} x ${product.count}`}</p>
                        <p>{`$${product.count * price}`}</p>
                      </div>
                    </div>
                    <RiDeleteBin6Line id="icon" />
                  </div>
                  <div id="checkout">Checkout</div>
                </>
              ) : (
                <h1>Your cart is empty.</h1>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
