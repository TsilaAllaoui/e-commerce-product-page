import { useContext, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { CurrentProductContext } from "../contexts/product";
import { PreviewContext } from "../interfaces/preview";
import "../styles/Preview.scss";
import { ThumbnailsAlt } from "./Thumbnails";
import { CurrentThumbnailContext } from "../contexts/thumbnail";

const Preview = () => {
  const product = useContext(CurrentProductContext).product;
  const { previewState, setPreviewState } = useContext(PreviewContext);
  const { currentThumbnail, setCurrentThumbnail } = useContext(
    CurrentThumbnailContext
  );
  const [preview, setPreview] = useState(0);
  const previewRef = useRef<HTMLDivElement>(null);

  const handleClose = (_e: React.MouseEvent<HTMLDivElement>) => {
    const previewElement = document.querySelector(
      "#preview-container"
    ) as HTMLDivElement;
    previewElement.style.zIndex = "-1";
    setPreviewState(false);
  };

  const handlePrev = () => {
    if (preview > 0) {
      previewRef.current!.style.opacity = "0";
      setTimeout(() => {
        previewRef.current!.style.opacity = "1";
        setPreview((preview) => preview - 1);
        const index = currentThumbnail - 1;
        setCurrentThumbnail(index);
      }, 300);
    }
  };

  const handleNext = () => {
    if (preview < 3) {
      previewRef.current!.style.opacity = "0";
      setTimeout(() => {
        previewRef.current!.style.opacity = "1";
        setPreview((preview) => preview + 1);
        const index = currentThumbnail + 1;
        setCurrentThumbnail(index);
      }, 300);
    }
  };

  return (
    <div id="preview-container">
      {previewState ? (
        <>
          <div id="close" onClick={handleClose}>
            <AiOutlineClose id="icon" />
          </div>
          <div
            id="preview"
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
          <ThumbnailsAlt setPreview={setPreview} previewRef={previewRef} />
        </>
      ) : null}
    </div>
  );
};

export default Preview;
