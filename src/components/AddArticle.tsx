import AddButton from "@/subcomponents/AddButton";
import Counter from "@/subcomponents/Counter";
import { useState } from "react";

export default function AddArticle() {
  const [counter, setCounter] = useState(1);

  return (
    <div className="flex gap-6">
      <Counter counter={counter} setCounter={setCounter} />
      <AddButton counter={counter} setCounter={setCounter} />
    </div>
  );
}
