import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const userAtom = atom(null);

export const isProcessingAtom = atomWithStorage("isProcessing", false);
