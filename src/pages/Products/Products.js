import React, { useState } from "react";
import { Filter } from "./components/Filter";
import { ProductCard } from "./components/ProductCard";

export const Products = () => {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <main>
      <div className="flex justify-between text-2xl">
        <span className="dark:text-white">Book count (X)</span>
        <span>
          <button
            onClick={() => setShowFilter(!showFilter)}
            className="bi-three-dots-vertical dark:text-white text-2xl"
          ></button>
        </span>
      </div>
      <div className="flex justify-center items-center flex-wrap my-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      {showFilter && <Filter setShowFilter={setShowFilter} />}
    </main>
  );
};
