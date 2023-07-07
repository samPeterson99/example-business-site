import * as React from "react";
import { Link } from "gatsby";
import ProductCard from "../components/ProductCard";
import type { HeadFC, PageProps } from "gatsby";
import { link } from "fs";
import { graphql } from "gatsby";
import { useStaticQuery } from "gatsby";
import { ProductType } from "../../types";
//@ts-ignore
import productsData from "../data/products";

const ShopPage: React.FC<PageProps> = () => {
  const [filter, setFilter] = React.useState("all");

  let products: ProductType[] = productsData.products;
  if (filter !== "all") {
    products = products.filter((product) => {
      return product.category === filter;
    });
  }

  return (
    <main>
      <nav className="w-full bg-green-500">
        <ul className="ml-4 py-2 flex flex-row gap-4">
          {filter === "all" ? (
            <button className="font-bold underline">all</button>
          ) : (
            <button
              className="font-light"
              onClick={() => setFilter("all")}>
              all
            </button>
          )}
          {filter === "con" ? (
            <button className="font-bold underline">consonants</button>
          ) : (
            <button
              className="font-light"
              onClick={() => setFilter("con")}>
              consonants
            </button>
          )}
          {filter === "vow" ? (
            <button className="font-bold underline">vowels</button>
          ) : (
            <button
              className="font-light"
              onClick={() => setFilter("vow")}>
              vowels
            </button>
          )}
          {filter === "oth" ? (
            <button className="font-bold underline">other</button>
          ) : (
            <button
              className="font-light"
              onClick={() => setFilter("oth")}>
              other
            </button>
          )}
        </ul>
      </nav>
      <div className="mt-4 w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-2">
        {products.map((product, index) => {
          return (
            <ProductCard
              key={index}
              product={product}
            />
          );
        })}
      </div>
    </main>
  );
};

export default ShopPage;
