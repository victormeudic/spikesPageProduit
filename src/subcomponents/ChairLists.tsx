interface ChairPropos {
  counter: number;
}

export default function ChairLists({ counter }: ChairPropos) {
  const chairList = [1, 2, 3, 4, 5];

  return (
    <div className="flex gap-6 mt-16">
      {chairList.map((chair, index) => (
        <div
          key={index}
          className={`w-[88px] border-2 border-french-grey rounded-md p-2 ${
            index === counter - 1 ? "border-verdi-gris" : ""
          }
        }`}
        >
          <img key={index} src={`/assets/Rectangle ${chair}.png`} alt="" />
        </div>
      ))}
    </div>
  );
}
