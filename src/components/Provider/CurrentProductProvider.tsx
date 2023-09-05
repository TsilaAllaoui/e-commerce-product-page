import { useState } from "react";
import { CurrentProductContext } from "../../contexts/product";
import { Product } from "../../interfaces/product";

export const CurrentProductContextProvider = ({
  children,
}: {
  children: any;
}) => {
  const [product, setProduct] = useState<Product & { count: number }>({
    name: "Fall Limited Edition Sneakers",
    desc: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    vendor: "SNEAKER COMPANY",
    price: 250.0,
    discount: 50.0,
    images:
      "images/image-product-1.jpg;images/image-product-2.jpg;images/image-product-3.jpg;images/image-product-4.jpg",
    count: 0,
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
