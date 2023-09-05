import { useContext, useRef, useState } from "react";
import { CurrentProductContext } from "../contexts/product";
import "../styles/Preview.scss";
import { Thumbnails } from "./Thumbnails";
import { PreviewContext } from "../interfaces/preview";

const Preview = () => {
  const product = useContext(CurrentProductContext).product;
  const { previewState, setPreviewState } = useContext(PreviewContext);
  const [preview, setPreview] = useState(product.images.split(";")[0]);
  const previewRef = useRef<HTMLDivElement>(null);

  return (
    <div id="preview-container">
      {previewState ? (
        <>
          <div
            id="preview"
            ref={previewRef}
            style={{ backgroundImage: `url(/${preview})` }}
          ></div>
          <Thumbnails setPreview={setPreview} previewRef={previewRef} />
        </>
      ) : null}
    </div>
  );
};

export default Preview;
