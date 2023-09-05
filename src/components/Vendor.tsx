import { usePalette } from "react-palette";
import { useContext } from "react";
import { CurrentProductContext } from "../contexts/product";

const Vendor = ({}: {}) => {
  const product = useContext(CurrentProductContext).product;
  const { data, loading } = usePalette("/" + product.images.split(";")[0]!);

  return (
    <h2 id="vendor" style={{ color: loading ? "black" : data.vibrant }}>
      {product.vendor}
    </h2>
  );
};
export default Vendor;
