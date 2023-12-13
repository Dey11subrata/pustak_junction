import { Routes, Route } from "react-router-dom";
import { Home } from "../pages";
import { Products } from "../pages/Products/Products";

export const AllRoutes = () => {
  return (
    <div className="dark:bg-slate-800">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
};
