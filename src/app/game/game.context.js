import { createContext } from "react";

export const GameContext = createContext({
  action: {},
  setAction: () => {},
  cards: [],
  setCards: () => {}
});

export const ScenarioContext = createContext({});
