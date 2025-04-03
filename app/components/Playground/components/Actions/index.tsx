import { usePlaygroundContext } from "../../context/usePlaygroundContext";
import { Dice } from "./components/Dice";
import { RollButton } from "./components/RollButton";
import { StartButton } from "./components/StartButton";

export function Actions() {
  const { startGame, rollDice, direction, steps } = usePlaygroundContext();
  return (
    <div className="flex flex-col justify-start h-full gap-2">
      <div className="flex flex-col items-center justify-center gap-2">
        <StartButton onClick={startGame} />
        <RollButton onClick={rollDice} />
      </div>
      <div className="flex flex-row gap-2">
        <Dice name="step" value={steps} />
        <Dice name="dir" value={direction} />
      </div>
    </div>
  );
}
