import React, { useState } from "react";
import { Filter } from "./components/Filter";

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
      {showFilter && <Filter />}
    </main>
  );
};
