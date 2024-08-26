import { useState } from "react";

export default function Selection() {
  const colors = ["#C1BDB3", "#58737D", "#545454", "#CBA5A5"];

  const [selected, setSelected] = useState(0);

  const handleClick = (index: number) => setSelected(index);

  return (
    <div className="flex gap-4 my-8">
      {colors.map((color, index) => (
        <div
          key={index}
          className={`w-5 h-5 inline-flex justify-center rounded-full items-center bg-[${color}]`}
          onClick={() => handleClick(index)}
        >
          {selected === index && (
            <div className="absolute w-7 h-7 rounded-full -z-10 bg-[#eaebed]"></div>
          )}
        </div>
      ))}
    </div>
  );
}
