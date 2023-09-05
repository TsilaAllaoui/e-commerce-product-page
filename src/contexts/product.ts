import { createContext } from "react";
import { Product } from "../interfaces/product";

interface ProductCtxType {
  product: Product & { count: number };
  setProduct: (p: Product & { count: number }) => void;
}

export const CurrentProductContext = createContext<ProductCtxType>({
  product: {
    name: "Fall Limited Edition Sneakers",
    desc: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    vendor: "SNEAKER COMPANY",
    price: 250,
    discount: 50,
    images:
      "images/image-product-1.jpg;images/image-product-2.jpg;images/image-product-3.jpg;images/image-product-4.jpg",
    count: 0,
  },
  setProduct: (_p: Product & { count: number }) => {},
});
