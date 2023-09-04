import { useState } from "react";
import { Product } from "../interfaces/product";
import { CurrentProductContext } from "../contexts/product";

export const CurrentProductContextProvider = ({
  children,
}: {
  children: any;
}) => {
  const [product, setProduct] = useState<Product>({
    name: "Fall Limited Edition Sneakers",
    desc: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    vendor: "SNEAKER COMPANY",
    price: 250,
    discount: 50,
    images:
      "images/image-product-1.jpg;images/image-product-2.jpg;images/image-product-3.jpg;images/image-product-4.jpg",
  });

  return (
    <CurrentProductContext.Provider
      value={{
        product: product,
        setProduct: setProduct,
      }}
    >
      {children}
    </CurrentProductContext.Provider>
  );
};
