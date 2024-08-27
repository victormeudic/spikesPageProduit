import { toast } from "sonner";

interface AddButtonProps {
  counter: number;
}

export default function AddButton({ counter }: AddButtonProps) {
  const handleAddArticle = () =>
    toast("New article add to your shopping cart", {
      description: `Meryl Lounge Chair : ${counter} x $149.99`,
    });

  return (
    <button
      className="px-10 py-4 text-white rounded text-base font-semibold bg-verdi-gris"
      onClick={handleAddArticle}
    >
      <p>Add to Cart</p>
    </button>
  );
}
