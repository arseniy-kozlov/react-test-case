interface CellViewProps {
  row: number;
  col: number;
  value?: string;
}

export function CellView(props: CellViewProps) {
  const { row, col, value } = props;
  return (
    <div
      className={`w-[60px] h-[60px] ml-[-1px] border border-neutral-600 bg-white`}
    >
      <div className="absolute text-xs text-neutral-300 ml-1">
        {row},{col}
      </div>
      <div className="flex items-center justify-center h-full text-2xl font-bold text-black">
        {value}
      </div>
    </div>
  );
}
