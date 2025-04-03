import { useState, type PropsWithChildren } from "react";
import { RandInt } from "~/utils";
import { PlaygroundContext } from "./usePlaygroundContext";
import { GenerateKingPosition, GeneratePlayer, GeneratePlayerPosition } from "../methods";

export const PlaygroundProvider = ({ children }: PropsWithChildren) => {
  const [direction, setDirection] = useState<number | undefined>(undefined);
  const [steps, setSteps] = useState<number | undefined>(undefined);
  const [kingPosition, setKingPosition] = useState<Position | undefined>(
    undefined
  );
  const [playerPosition, setPlayerPosition] = useState<Position | undefined>(
    undefined
  );
  const [player, setPlayer] = useState<Player | undefined>(undefined);

  const startGame = () => {
    setKingPosition(GenerateKingPosition());
    setPlayer(GeneratePlayer());
    setPlayerPosition(GeneratePlayerPosition());
    // TODO
  };

  const rollDice = () => {
    const [st, dir] = [RandInt(1, 6), RandInt(1, 6)];
    setSteps(st);
    setDirection(dir);
    // TODO
  };

  return (
    <PlaygroundContext.Provider
      value={{
        direction,
        steps,
        kingPosition,
        playerPosition,
        player,
        startGame,
        rollDice,
      }}
    >
      {children}
    </PlaygroundContext.Provider>
  );
};
