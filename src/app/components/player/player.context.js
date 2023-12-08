import { createContext } from "react";

export const PlayerContext = createContext({
  life: 0,
  setLife: () => {},
  fury: 0,
  setFury: () => {},
  cards: [],
  setCards: () => {},
  character: '',
  setCharacter: () => {},
  phase: '',
  setPhase: () => {}
});