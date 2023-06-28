import * as React from "react";
import { ReactNode } from "react";
import { Link } from "gatsby";
import "../styles/global.css";

type Card = {
  product: {
    title: String;
    category: String;
    price: number;
  };
};

const ProductCard = ({ product }: Card) => {
  const { title, category, price } = product;
  console.log(product);
  return (
    <div className="w-full flex flex-col">
      <div className="py-48 text-9xl text-center text-rose-300 bg-slate-300">
        {title}
      </div>
      <div className="px-2 flex flex-row justify-between">
        <p>The Letter {title}</p>
        <p>${price}</p>
      </div>
      <p className="pl-4 font-extralight">
        This is where a product description goes.
      </p>
      <button className="mt-px px-2 h-8 shadow-md hover:shadow-none hover:border-green-500 hover:border-2">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
