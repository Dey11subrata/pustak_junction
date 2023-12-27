import { Link } from "react-router-dom";

export const Filter = ({ setShowFilter }) => {
  return (
    <section>
      {/* <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span className="sr-only">Open sidebar</span>
   <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
   <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button> */}

      <aside
        id="default-sidebar"
        className="relative -left-1 top-15 z-40 w-64 h-[83vh] transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-600">
          <div
            onClick={() => setShowFilter(false)}
            className="flex justify-between mb-2"
          >
            <h2>Filters</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-x-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
            </svg>{" "}
          </div>
          <form>
            <section className="flex flex-col mb-2">
              <h2>Sorting</h2>
              <label htmlFor="high_low">
                <input
                  type="radio"
                  name="sort_by"
                  id="high_low"
                  value="Price - High to Low"
                />{" "}
                Price - High to Low
              </label>
              <label htmlFor="low_high">
                <input
                  type="radio"
                  name="sort_by"
                  id="low_high"
                  value="Price - Low to High"
                />{" "}
                Price - Low to High
              </label>
            </section>
            <section className="flex flex-col mb-2">
              <h2>Ratings</h2>
              <label htmlFor="four-plus">
                <input type="radio" name="rating" id="four_plus" /> 4 and Above
              </label>
              <label htmlFor="three_plus">
                <input type="radio" name="rating" id="three_plus" /> 3 and Above
              </label>
              <label htmlFor="two_plus">
                <input type="radio" name="rating" id="two_plus" /> 2 and Above
              </label>
              <label htmlFor="one_plus">
                <input type="radio" name="rating" id="one_plus" /> 1 and Above
              </label>
            </section>
            <section className="flex flex-col mb-2">
              <h2>Other Filters</h2>
              <label htmlFor="four-plus">
                <input type="checkbox" name="availablity" id="best_selling" />{" "}
                Best Selling
              </label>
              <label htmlFor="">
                <input type="checkbox" name="availablity" id="in_stock" /> In
                Stock
              </label>
            </section>
          </form>
        </div>
      </aside>
    </section>
  );
};
