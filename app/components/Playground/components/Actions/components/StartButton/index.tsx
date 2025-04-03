interface StartButtonProps {
  onClick?: () => void;
}

export function StartButton(props: StartButtonProps) {
  const { onClick } = props;
  return (
    <button
      className="w-[128px] h-[60px] rounded-xl border border-neutral-600 bg-emerald-300 cursor-pointer text-black uppercase font-bold"
      onClick={onClick}
    >
      Start Game
    </button>
  );
}
