import { usePlaygroundContext } from "~/components/Playground/context/usePlaygroundContext";
import { CellView } from "./CellView";

interface CellProps {
  row: number;
  col: number;
}

export function Cell(props: CellProps) {
  const { row, col } = props;
  const { kingPosition, playerPosition, player } = usePlaygroundContext();
  const isKing =
    kingPosition && kingPosition.x === row && kingPosition.y === col;
  const isPlayer =
    playerPosition && playerPosition.x === row && playerPosition.y === col;
  const value = isKing ? "K" : isPlayer ? player : "";
  return <CellView col={col} row={row} value={value} />;
}
