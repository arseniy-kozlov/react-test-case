import { Actions } from "./components/Actions";
import { Board } from "./components/Board";
import { PlaygroundProvider } from "./context/PlaygroundProvider";

export function Playground() {
  return (
    <PlaygroundProvider>
      <div className="flex flex-row items-center justify-center gap-2">
        <Board />
        <Actions />
      </div>
    </PlaygroundProvider>
  );
}
