import { useState } from "react";
import { PreviewContext } from "../../interfaces/preview";

const PreviewProvider = ({ children }: { children: any }) => {
  const [previewState, setPreviewState] = useState<boolean>(false);
  return (
    <PreviewContext.Provider
      value={{
        previewState: previewState,
        setPreviewState: setPreviewState,
      }}
    >
      {children}
    </PreviewContext.Provider>
  );
};

export default PreviewProvider;
