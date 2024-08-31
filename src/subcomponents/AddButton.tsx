import { ArticleContext } from "@/context/ArticleContext";
import { useContext } from "react";
import { toast } from "sonner";

interface AddButtonProps {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}

export default function AddButton({ counter, setCounter }: AddButtonProps) {
  const { setNumberOfArticles } = useContext(ArticleContext);

  const handleAddArticle = () => (
    setNumberOfArticles((c: number) => c + counter),
    setCounter(1),
    toast("New article add to your shopping cart", {
      description: `Meryl Lounge Chair : ${counter} x $149.99`,
    })
  );

  return (
    <button
      className="px-10 py-4 text-white rounded text-base font-semibold bg-verdi-gris"
      onClick={handleAddArticle}
    >
      <p>Add to Cart</p>
    </button>
  );
}
