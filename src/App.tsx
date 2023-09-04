import { useState } from "react";
import ProductPage from "./components/Product";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import { User } from "./interfaces/user";
import "./App.scss";
import { CurrentProductContextProvider } from "./components/CurrentProduct";

function App() {
  const [currentUser, setCurrentUser] = useState<User>({
    name: "Tsila",
    image: "/images/image-avatar.png",
  });
  return (
    <BrowserRouter>
      <CurrentProductContextProvider>
        <div id="app">
          <Navbar currentUser={currentUser} />
          <ProductPage />
        </div>
      </CurrentProductContextProvider>
    </BrowserRouter>
  );
}

export default App;
