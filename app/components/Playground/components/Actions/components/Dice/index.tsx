interface DiceProps {
  name?: string;
  value?: number;
}

export function Dice(props: DiceProps) {
  const { name, value } = props;
  return (
    <div className="w-[60px] h-[60px] rounded-xl border border-neutral-600 border-dashed">
      <div className="absolute text-sm text-neutral-300 ml-1 uppercase">
        {name}
      </div>
      <div className="flex items-center justify-center h-full text-2xl font-bold text-black">
        {value || "-"}
      </div>
    </div>
  );
}
