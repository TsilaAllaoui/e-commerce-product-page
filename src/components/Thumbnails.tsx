import React, { useContext, useState } from "react";
import "../styles/Thumbnails.scss";
import { CurrentProductContext } from "../contexts/product";

export const Thumbnails = ({
  setPreview,
  previewRef,
}: {
  setPreview: (s: string) => void;
  previewRef: React.RefObject<HTMLDivElement>;
}) => {
  const [currIndex, setCurrIndex] = useState(0);
  const product = useContext(CurrentProductContext).product;
  const handleClick = (_e: React.MouseEvent<HTMLDivElement>, index: number) => {
    previewRef.current!.style.opacity = "0";
    setTimeout(() => {
      previewRef.current!.style.opacity = "1";
      setPreview(product.images.split(";")[index]);
      setCurrIndex(index);
    }, 300);
  };

  return (
    <div id="mini-preview">
      {[0, 1, 2, 3].map((i) => (
        <>
          <div
            key={i}
            className="thumbnail"
            style={{
              backgroundImage: `url(/${product.images.split(";")[i]})`,
              border:
                "solid 2px " + (i == currIndex ? "orange" : "transparent"),
            }}
            onClick={(e) => handleClick(e, i)}
          >
            {currIndex == i ? <div id="filter"></div> : null}
          </div>
        </>
      ))}
    </div>
  );
};
