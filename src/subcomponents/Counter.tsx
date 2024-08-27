interface CounterProps {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}

export default function Counter({ counter, setCounter }: CounterProps) {
  const handleClickMinus = () => {
    if (counter > 1) {
      setCounter((c: number) => c - 1);
    }
  };

  const handleClickPLus = () => {
    setCounter((c: number) => c + 1);
  };

  return (
    <div className="flex gap-10 w-fit border border-cool-grey text-xl font-semibold items-center rounded font-Poppins p-1">
      <div
        className="w-10 h-10 inline-flex justify-center items-center hover:bg-[#f1f5f9] hover:rounded transition-colors"
        onClick={handleClickMinus}
      >
        <img src="/assets/minus.svg" alt="" />
      </div>
      <p>{counter}</p>
      <div
        className="w-10 h-10 inline-flex justify-center items-center hover:bg-[#f1f5f9] hover:rounded transition-colors"
        onClick={handleClickPLus}
      >
        <img src="/assets/plus.svg" alt="" />
      </div>
    </div>
  );
}
