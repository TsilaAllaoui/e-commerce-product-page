import { Buttons } from "./Buttons";
import { Thumbnails } from "./Thumbnails";
import Vendor from "./Vendor";
import "../styles/Product.scss";
import { Product } from "../interfaces/product";
import React, { useContext, useRef, useState } from "react";
import { CurrentProductContext } from "../contexts/product";
import { PreviewContext } from "../interfaces/preview";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const ProductPage = () => {
  const [preview, setPreview] = useState(0);
  const product: Product = useContext(CurrentProductContext).product;
  const setPreviewState = useContext(PreviewContext).setPreviewState;
  const previewRef = useRef<HTMLDivElement>(null);

  const handlePreview = (_e: React.MouseEvent<HTMLDivElement>) => {
    const previewElement = document.querySelector(
      "#preview-container"
    ) as HTMLDivElement;
    previewElement.style.zIndex = "5";
    setPreviewState(true);
  };

  const handlePrev = () => {
    if (preview > 0) {
      previewRef.current!.style.opacity = "0";
      setTimeout(() => {
        previewRef.current!.style.opacity = "1";
        setPreview((preview) => preview - 1);
      }, 300);
    }
  };

  const handleNext = () => {
    if (preview < 3) {
      previewRef.current!.style.opacity = "0";
      setTimeout(() => {
        previewRef.current!.style.opacity = "1";
        setPreview((preview) => preview + 1);
      }, 300);
    }
  };

  return (
    <div id="product">
      <div id="left">
        {window.innerWidth > 416 ? (
          <>
            <div
              id="preview"
              style={{
                backgroundImage: `url(/${product.images.split(";")[preview]})`,
              }}
              onClick={handlePreview}
              ref={previewRef}
            ></div>
            <Thumbnails setPreview={setPreview} previewRef={previewRef} />
          </>
        ) : (
          <div
            id="preview-mobile"
            ref={previewRef}
            style={{
              backgroundImage: `url(/${product.images.split(";")[preview]})`,
            }}
          >
            <div onClick={handlePrev}>
              <GrFormPrevious id="prev" />
            </div>
            <div onClick={handleNext}>
              <GrFormNext id="next" />
            </div>
          </div>
        )}
      </div>
      <div id="right">
        <Vendor />
        <h1 id="name">{product.name}</h1>
        <p id="desc">{product.desc == "" ? "No description" : product.desc}</p>
        <div id="pricing">
          <div id="price">
            <p>
              {"$" +
                (
                  product.price! -
                  (product.discount
                    ? (product.price! * product.discount) / 100
                    : 0)
                ).toFixed(2)}
            </p>
            <p>{product.discount}%</p>
          </div>
          <p id="full-price">
            {product.discount != 0 ? `$${product.price}` : ""}
          </p>
        </div>
        <Buttons />
      </div>
    </div>
  );
};

export default ProductPage;
