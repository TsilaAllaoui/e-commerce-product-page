import { createContext } from "react";

export interface CartState {
  cartState: boolean;
  setCartState: (s: boolean) => void;
}

export const CartStateContext = createContext<CartState>({
  cartState: false,
  setCartState: (_s: boolean) => {},
});
