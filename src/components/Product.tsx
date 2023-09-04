import { Buttons } from "./Buttons";
import { Thumbnails } from "./Thumbnails";
import Vendor from "./Vendor";
import "../styles/Product.scss";
import { Product } from "../interfaces/product";
import { useContext, useState } from "react";
import { CurrentProductContext } from "../contexts/product";

const ProductPage = () => {
  const [preview, setPreview] = useState("images/image-product-1.jpg");

  const product: Product = useContext(CurrentProductContext).product;

  return (
    <div id="product">
      <div id="left">
        <div id="preview" style={{ backgroundImage: `url(/${preview})` }}></div>
        <Thumbnails setPreview={setPreview} />
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
