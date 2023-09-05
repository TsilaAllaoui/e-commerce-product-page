import { useContext, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar";
import Preview from "./components/Preview";
import ProductPage from "./components/Product";
import CartStateProvider from "./components/Provider/CartStateProvider";
import { CurrentProductContextProvider } from "./components/Provider/CurrentProductProvider";
import PreviewProvider from "./components/Provider/PreviewProvider";
import { CartState, CartStateContext } from "./contexts/cart";
import { User } from "./interfaces/user";
import CurrentThumbnailProvider from "./components/Provider/CurrentThumbnailProvider";

function App() {
  const currentUser: User = {
    name: "Tsila",
    image: "/images/image-avatar.png",
  };

  const { cartState, setCartState } = useContext<CartState>(CartStateContext);

  useEffect(() => {
    const listener = () => {
      document.body.addEventListener("click", (e) => {
        const cart = document.querySelector("#cart-portal") as HTMLDivElement;
        if (cartState && e.currentTarget != cart) {
          setCartState(false);
        }
      });
    };

    listener();

    return () => {
      removeEventListener("click", listener);
    };
  }, []);

  return (
    <BrowserRouter>
      <CurrentProductContextProvider>
        <CartStateProvider>
          <PreviewProvider>
            <CurrentThumbnailProvider>
              <div id="app">
                <Navbar currentUser={currentUser} />
                <ProductPage />
                <Preview />
              </div>
            </CurrentThumbnailProvider>
          </PreviewProvider>
        </CartStateProvider>
      </CurrentProductContextProvider>
    </BrowserRouter>
  );
}

export default App;
