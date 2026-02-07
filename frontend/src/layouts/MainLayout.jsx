import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Page content grows */}
      <main className="flex-1 overflow-visible">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
