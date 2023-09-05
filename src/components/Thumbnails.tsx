import React, { useContext, useEffect, useState } from "react";
import "../styles/Thumbnails.scss";
import { CurrentProductContext } from "../contexts/product";
import { CurrentThumbnailContext } from "../contexts/thumbnail";

export const Thumbnails = ({
  setPreview,
  previewRef,
}: {
  setPreview: (i: number) => void;
  previewRef: React.RefObject<HTMLDivElement>;
}) => {
  const [currIndex, setCurrIndex] = useState(0);
  const product = useContext(CurrentProductContext).product;
  const handleClick = (_e: React.MouseEvent<HTMLDivElement>, index: number) => {
    previewRef.current!.style.opacity = "0";
    setTimeout(() => {
      previewRef.current!.style.opacity = "1";
      setPreview(index);
      setCurrIndex(index);
    }, 300);
  };

  return (
    <div id="mini-preview">
      {[0, 1, 2, 3].map((i) => (
        <div key={i + 5 + product.images.split(";")[i]}>
          <div
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
        </div>
      ))}
    </div>
  );
};

export const ThumbnailsAlt = ({
  setPreview,
  previewRef,
}: {
  setPreview: (i: number) => void;
  previewRef: React.RefObject<HTMLDivElement>;
}) => {
  const { currentThumbnail, setCurrentThumbnail } = useContext(
    CurrentThumbnailContext
  );
  const product = useContext(CurrentProductContext).product;
  const handleClick = (_e: React.MouseEvent<HTMLDivElement>, index: number) => {
    previewRef.current!.style.opacity = "0";
    setTimeout(() => {
      previewRef.current!.style.opacity = "1";
      setPreview(index);
      setCurrentThumbnail(index);
    }, 300);
  };

  useEffect(() => {
    console.log(currentThumbnail);
  }, [currentThumbnail]);

  return (
    <div id="mini-preview">
      {[0, 1, 2, 3].map((i) => (
        <div key={i + product.images.split(";")[i]}>
          <div
            className="thumbnail"
            style={{
              backgroundImage: `url(/${product.images.split(";")[i]})`,
              border:
                "solid 2px " +
                (i == currentThumbnail ? "orange" : "transparent"),
            }}
            onClick={(e) => handleClick(e, i)}
          >
            {currentThumbnail == i ? <div id="filter"></div> : null}
          </div>
        </div>
      ))}
    </div>
  );
};
