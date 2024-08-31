import { ArticleContext } from "@/context/ArticleContext";
import { useContext, useState } from "react";
import Panier from "./Panier";

export default function NavBar() {
  const { numberOfArticles } = useContext(ArticleContext);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (isHovered) {
      setIsHovered(false);
    } else {
      setIsHovered(true);
    }
  };

  return (
    <div className="flex w-screen  border-b border-french-grey">
      <div className="flex justify-between w-full items-center py-6 px-10 border-r">
        <img src="/assets/logo.svg" alt="" />
        <ul className="flex gap-10 uppercase text-sm font-semibold">
          <li>Shop</li>
          <li>Collective</li>
          <li>Designers</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
        <div className="flex gap-10">
          <img src="/assets/menu 1.svg" alt="" />
          <img src="/assets/search.svg" alt="" />
        </div>
      </div>
      <div
        className="px-10 py-7 items-center w-fit flex cursor-pointer"
        onClick={handleClick}
      >
        <img src="/assets/shopping-cart.svg" alt="" />
        <div>{numberOfArticles}</div>
      </div>
      {isHovered && <Panier />}
    </div>
  );
}
