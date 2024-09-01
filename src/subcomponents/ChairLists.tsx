interface ChairPropos {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}

export default function ChairLists({ counter, setCounter }: ChairPropos) {
  const chairList = [1, 2, 3, 4, 5];

  const handleClick = (chair: number) => {
    setCounter(chair);
  };

  return (
    <div className="flex gap-6 mt-16">
      {chairList.map((chair, index) => (
        <div
          key={index}
          className={`w-[88px] border-2 border-french-grey rounded-md p-2 cursor-pointer ${
            index === counter - 1 ? "border-verdi-gris" : ""
          }
        }`}
          onClick={() => {
            handleClick(chair);
          }}
        >
          <img key={index} src={`/assets/Rectangle ${chair}.png`} alt="" />
        </div>
      ))}
    </div>
  );
}
