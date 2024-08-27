export default function ChairLists() {
  const chairList = [1, 2, 3, 4, 5];

  return (
    <div className="flex gap-6">
      {chairList.map((chair, index) => (
        <img
          key={index}
          className="w-[88px] border-2 border-french-grey rounded-md p-2"
          src={`/assets/Rectangle ${chair}.png`}
          alt=""
        />
      ))}
    </div>
  );
}
