import { ArticleContext } from "@/context/ArticleContext";
import { useContext } from "react";

export default function Panier() {
  const { numberOfArticles, setNumberOfArticles } = useContext(ArticleContext);

  const handleEmptyCart = () => {
    setNumberOfArticles(0);
  };

  return (
    <div className="absolute right-4 top-24 flex-col bg-white border rounded items-center px-3 py-4 font-Poppins shadow-lg">
      <p className="text-lg font-semibold">Cart</p>
      <div className="w-full h-[1px] bg-french-grey my-1"></div>
      <div className="border-2 rounded border-verdi-gris flex justify-center">
        <img src="/assets/Rectangle 1.png" alt="" className="w-[88px]" />
      </div>
      <p className="text-cool-grey font-medium">Meryl lounge Chair</p>
      <p className="text-cool-grey">{numberOfArticles} x 149.99$</p>
      <div className="w-full h-[1px] bg-french-grey my-1"></div>
      <p className="font-semibold">{Math.round(numberOfArticles * 149.99)}$</p>
      <button className="w-full bg-verdi-gris text-white font-semibold text-lg py-2 rounded">
        Buy now
      </button>
      <button className="w-full py-2 mt-2" onClick={handleEmptyCart}>
        Empty the cart
      </button>
    </div>
  );
}
