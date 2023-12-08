import { createContext } from "react";

export const GameContext = createContext({
  action: {},
  setAction: () => {}
});

export const ScenarioContext = createContext({});
