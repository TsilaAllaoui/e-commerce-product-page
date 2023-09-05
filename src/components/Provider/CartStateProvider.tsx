import { useState } from "react";
import { CartStateContext } from "../../contexts/cart";

const CartStateProvider = ({ children }: { children: any }) => {
  const [cartState, setCartState] = useState(false);
  return (
    <CartStateContext.Provider
      value={{
        cartState: cartState,
        setCartState: setCartState,
      }}
    >
      {children}
    </CartStateContext.Provider>
  );
};

export default CartStateProvider;
