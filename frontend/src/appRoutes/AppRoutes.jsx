import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Amenities from "../pages/Amenities";
import Gallery from "../pages/Gallery";
import Experiences from "../pages/Experiences";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Layout Route */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/amenities" element={<Amenities />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/experiences" element={<Experiences />} />
      </Route>
    </Routes>
  );
}
