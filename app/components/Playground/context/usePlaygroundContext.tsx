import { createContext, useContext } from "react";

interface PlaygroundContextProps {
  direction?: number;
  steps?: number;
  kingPosition?: Position;
  playerPosition?: Position;
  player?: Player;
  startGame?: () => void;
  rollDice?: () => void;
}

export const PlaygroundContext = createContext<
  PlaygroundContextProps | undefined
>(undefined);

export const usePlaygroundContext = () => {
  const context = useContext(PlaygroundContext);
  if (!context) {
    throw new Error(
      "usePlaygroundContext must be used within a PlaygroundProvider"
    );
  }
  return context;
};
