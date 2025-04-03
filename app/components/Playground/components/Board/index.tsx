import { BOARD_SIZE } from "~/constants";
import { Row } from "./Row";

export function Board() {
  return (
    <div className="w-[600px] min-w-[600px] h-[600px] min-h-[600px] rounded-xl bg-amber-100">
      <div className="flex flex-col items-center justify-center h-full">
        {Array.from({ length: BOARD_SIZE }, (_, i) => (
          <Row key={i} row={i + 1} />
        ))}
      </div>
    </div>
  );
}
