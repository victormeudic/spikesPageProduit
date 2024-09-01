import { useState } from "react";
import { motion } from "framer-motion";
import ChairLists from "../subcomponents/ChairLists";
export default function RightPanel() {
  const [counter, setCounter] = useState(1);
  const [direction, setDirection] = useState(0); // 0 = gauche, 1 = droite

  const handleClickPlus = () => {
    setDirection(1);
    setCounter((counter) => counter + 1);
    if (counter >= 5) {
      setCounter(1);
    }
  };

  const handleClickMinus = () => {
    setDirection(0);
    setCounter((counter) => counter - 1);
    if (counter <= 1) {
      setCounter(5);
    }
  };

  return (
    <div className="font-Poppins w-1/2 flex-col p-12">
      <div className="flex-col w-full justify-end">
        <div className="flex w-full justify-end items-end gap-2">
          <p className="font-bold text-3xl">0{counter}</p>
          <p className="font-semibold text-2xl text-cool-grey">/</p>
          <p className="font-semibold text-2xl text-cool-grey">05</p>
        </div>
        <div className="flex justify-end gap-20 mt-6">
          <div className="p-1 hover:bg-[#f1f5f9] hover:rounded transition-colors">
            <img
              src="/assets/chevron-left.svg"
              alt=""
              onClick={handleClickMinus}
            />
          </div>
          <div className="p-1 hover:bg-[#f1f5f9] hover:rounded transition-colors">
            <img
              src="/assets/chevron-right.svg"
              alt=""
              onClick={handleClickPlus}
            />
          </div>
        </div>
      </div>

      <motion.div
        className="flex justify-center"
        key={counter}
        initial={{ x: direction === 1 ? 150 : -150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: direction === 1 ? -150 : 150, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img
          className="w-[400px]"
          src={`/assets/Rectangle ${counter}.png`}
          alt=""
        />
      </motion.div>
      <ChairLists counter={counter} setCounter={setCounter} />
    </div>
  );
}
