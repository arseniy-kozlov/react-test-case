import { BOARD_SIZE } from "~/constants";
import { Cell } from "../Cell";

interface RowProps {
  row: number;
}

export function Row(props: RowProps) {
  const { row } = props;
  return (
    <div className="flex flex-row items-center justify-center mt-[-1px]">
      {Array.from({ length: BOARD_SIZE }, (_, j) => (
        <Cell key={j} row={row} col={j + 1} />
      ))}
    </div>
  );
}
