import AddButton from "../subcomponents/AddButton";
import Counter from "../subcomponents/Counter";
import ProductDescription from "../subcomponents/ProductDescription";
import Selection from "./Selection";

export default function LeftPannel() {
  return (
    <div className="w-1/2 mt-14">
      <img src="/assets/back.svg" alt="" />
      <div className="flex text-space-cadet text-sm font-semibold mt-8 mb-20">
        <p className="text-cool-grey">Chair</p>
        <p className=" mx-2">/</p>
        <p>Meryl Lounge Chair</p>
      </div>
      <ProductDescription />
      <Selection />
      <div className="flex gap-6">
        <Counter />
        <AddButton />
      </div>
    </div>
  );
}
