import { Routes, Route } from "react-router-dom";
import { Home } from "../pages";

export const AllRoutes = () => {
  return (
    <div className="dark:bg-slate-800">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};
