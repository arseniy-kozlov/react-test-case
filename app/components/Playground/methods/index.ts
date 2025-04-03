import { BOARD_SIZE } from "~/constants";
import { RandInt } from "~/utils";

export function GenerateKingPosition(): Position {
  const x = RandInt(1, BOARD_SIZE);
  const y = RandInt(1, BOARD_SIZE);
  return { x, y };
}

export function GeneratePlayerPosition(): Position {
  const x = RandInt(1, BOARD_SIZE);
  const y = RandInt(1, BOARD_SIZE);
  return { x, y };
}

export function GeneratePlayer(): Player {
  const t = RandInt(0, 2);
  let p: Player = "Q";
  if (t === 0) p = "Q"; // Queen
  if (t === 1) p = "R"; // Rook
  if (t === 2) p = "B"; // Bishop
  return p;
}

export function RollDice(): [number, number] {
  return [RandInt(1, 6), RandInt(1, 6)];
}
