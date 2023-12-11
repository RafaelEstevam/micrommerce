import { createContext } from "react";

export const GodOfWarContext = createContext({
  lastAction: undefined,
  setLastAction: () => {}
});