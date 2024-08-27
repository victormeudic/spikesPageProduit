import { Toaster } from "sonner";
import ProductDescription from "../subcomponents/ProductDescription";
import Selection from "./Selection";
import AddArticle from "./AddArticle";

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
        <AddArticle />
      </div>
      <p className="text-base font-normal mt-8">
        Free 3-5 day shipping • Tool-free assembly • 30-day trial
      </p>
      <div className="flex items-center mt-6 gap-36">
        <div className="flex items-center gap-4 text-verdi-gris font-semibold">
          <img src="/assets/heart.svg" alt="" className="color" />
          <p>Add to Wishlist</p>
        </div>
        <div className="flex gap-6">
          <img className="w-4" src="/assets/facebook.svg" alt="" />
          <img className="w-4" src="/assets/twitter.svg" alt="" />
          <img className="w-4" src="/assets/pinterest.svg" alt="" />
          <img className="w-4" src="/assets/instagram.svg" alt="" />
        </div>
      </div>
      <Toaster position="bottom-center" />
    </div>
  );
}
