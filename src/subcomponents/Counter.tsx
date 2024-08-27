import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(1);

  const handleClickMinus = () => {
    if (counter > 1) {
      setCounter((counter) => counter - 1);
    }
  };

  const handleClickPLus = () => {
    setCounter((counter) => counter + 1);
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
