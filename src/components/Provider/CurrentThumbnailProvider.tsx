import { useState } from "react";
import { CurrentThumbnailContext } from "../../contexts/thumbnail";

function CurrentThumbnailProvider({ children }: { children: any }) {
  const [currentThumbnail, setCurrentThumbnail] = useState<number>(0);
  return (
    <CurrentThumbnailContext.Provider
      value={{
        currentThumbnail: currentThumbnail,
        setCurrentThumbnail: setCurrentThumbnail,
      }}
    >
      {children}
    </CurrentThumbnailContext.Provider>
  );
}

export default CurrentThumbnailProvider;
