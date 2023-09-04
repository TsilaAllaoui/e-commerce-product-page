import React, { useContext, useState } from "react";
import "../styles/Thumbnails.scss";
import { CurrentProductContext } from "../contexts/product";

export const Thumbnails = ({
  setPreview,
}: {
  setPreview: (s: string) => void;
}) => {
  const [currIndex, setCurrIndex] = useState(0);
  const product = useContext(CurrentProductContext).product;
  const handleClick = (_e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const preview = document.querySelector("#preview") as HTMLImageElement;
    preview.style.opacity = "0";
    setTimeout(() => {
      preview.style.opacity = "1";
      setPreview(product.images.split(";")[index]);
      setCurrIndex(index);
    }, 300);
  };

  return (
    <div id="mini-preview">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="thumbnail"
          style={{
            backgroundImage: `url(/${product.images.split(";")[i]})`,
            border: "solid 2px " + (i == currIndex ? "orange" : "transparent"),
            opacity: currIndex == i ? "1" : "0.3",
          }}
          onClick={(e) => handleClick(e, i)}
        ></div>
      ))}
    </div>
  );
};
