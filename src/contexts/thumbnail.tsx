import { createContext } from "react";

export interface ThumbnailState {
  currentThumbnail: number;
  setCurrentThumbnail: (n: number) => void;
}

export const CurrentThumbnailContext = createContext<ThumbnailState>({
  currentThumbnail: 0,
  setCurrentThumbnail: (_v: number) => {},
});
