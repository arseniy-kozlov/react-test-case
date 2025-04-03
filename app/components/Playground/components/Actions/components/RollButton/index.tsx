interface RollButtonProps {
  onClick?: () => void;
}

export function RollButton(props: RollButtonProps) {
  const { onClick } = props;
  return (
    <button
      className="w-[128px] h-[60px] rounded-xl border border-neutral-600 bg-white cursor-pointer text-black uppercase"
      onClick={onClick}
    >
      Roll Dice
    </button>
  );
}
