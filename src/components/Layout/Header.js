import { Link } from "react-router-dom";

import Logo from "../../assets/logo.png";
import { useEffect, useState } from "react";

export const Header = () => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    JSON.stringify(localStorage.setItem("theme", darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 border-b-2">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4 pt-1  ">
          <Link
            href="https://flowbite.com"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={Logo} className="h-10" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              PustakJunction
            </span>
          </Link>
          <div className="flex items-center max-sm:hidden">
            <span
              onClick={() => setDarkMode(!darkMode)}
              className="bi bi-gear-wide-connected text-2xl text-slate-800 dark:text-white mr-5 "
            ></span>
            <span className="bi bi-search text-2xl text-slate-800 dark:text-white mr-5"></span>
            <span className="bi bi-cart-fill text-2xl text-slate-800 dark:text-white mr-5 relative">
              <span className="text-white text-sm absolute -top-1 left-2 opacity-90 bg-rose-500 px-1 rounded-full ">
                0
              </span>
            </span>
            <span className="bi bi-person-circle text-2xl text-slate-800 dark:text-white mr-5"></span>
          </div>
          {/* Burger Menu -> */}
          <span
            onClick={() => setToggle(!toggle)}
            class="bi bi-list sm:hidden text-2xl dark:text-white"
          ></span>
        </div>
        <div>
          {toggle && (
            <div className="flex justify-around flex-wrap sm:hidden">
              <span
                onClick={() => setDarkMode(!darkMode)}
                className="bi bi-gear-wide-connected text-2xl text-slate-800 dark:text-white mr-5 "
              ></span>
              <span className="bi bi-search text-2xl text-slate-800 dark:text-white mr-5"></span>
              <span className="bi bi-cart-fill text-2xl text-slate-800 dark:text-white mr-5 relative">
                <span className="text-white text-sm absolute -top-1 left-2 opacity-90 bg-rose-500 px-1 rounded-full ">
                  0
                </span>
              </span>
              <span className="bi bi-person-circle text-2xl text-slate-800 dark:text-white mr-5"></span>
            </div>
          )}
          {/* <- Burger Menu */}
        </div>
      </nav>
    </header>
  );
};
