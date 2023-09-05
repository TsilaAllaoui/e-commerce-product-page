import { createContext } from "react";

export interface PreviewState {
  previewState: boolean;
  setPreviewState: (s: boolean) => void;
}

export const PreviewContext = createContext<PreviewState>({
  previewState: false,
  setPreviewState: (_s: boolean) => {},
});
