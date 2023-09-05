import React, { useContext, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ImMinus, ImPlus } from "react-icons/im";
import "../styles/Buttons.scss";
import { Toast } from "./Toast";
import { CurrentProductContext } from "../contexts/product";

export const Buttons = () => {
  const [count, setCount] = useState(0);
  const productCtx = useContext(CurrentProductContext);

  const add = (_e: React.MouseEvent<HTMLDivElement>) => {
    setCount(count + 1);
  };

  const substract = (_e: React.MouseEvent<HTMLDivElement>) => {
    if (count > 0) setCount(count - 1);
  };

  const handleCartAdd = async (_e: React.MouseEvent<HTMLDivElement>) => {
    if (count == 0) return;
    productCtx.setProduct({
      ...productCtx.product,
      count: count,
    });
    setCount(0);

    const toast = document.querySelector("#toast") as HTMLDivElement;
    toast.scrollIntoView({ behavior: "smooth" });
    toast.style.animation = "slide 1500ms ease-in-out";
    setTimeout(() => {
      toast.style.animation = "unset";
    }, 1000);
  };

  return (
    <>
      <div id="interactions">
        <div id="buttons">
          <div id="minus" onClick={substract}>
            <ImMinus />
          </div>
          <p>{count}</p>
          <div id="plus" onClick={add}>
            <ImPlus />
          </div>
        </div>
        <div id="add-to-cart" onClick={handleCartAdd}>
          <AiOutlineShoppingCart id="icon" />
          <p>Add to cart</p>
        </div>
      </div>
      <Toast color="green" content={"Added to cart!"} className="toast" />
    </>
  );
};
