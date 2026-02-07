import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#e6d7d0] bg-background-light/90 backdrop-blur-md">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20 py-4 flex items-center justify-between">
        {/* Brand */}
        <NavLink to="/" className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-3xl leading-none">
            temple_hindu
          </span>
          <span className="serif-heading text-2xl font-bold tracking-tight">
            Heritage Haven
          </span>
        </NavLink>

        {/* Links */}
        <div className="hidden md:flex items-center gap-10">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors ${
                isActive ? "text-primary" : "hover:text-primary"
              }`
            }
          >
            The Villa
          </NavLink>

          <NavLink
            to="/amenities"
            className="text-sm font-medium hover:text-primary"
          >
            Amenities
          </NavLink>

          <NavLink
            to="/gallery"
            className="text-sm font-medium hover:text-primary"
          >
            Gallery
          </NavLink>

          <NavLink
            to="/experiences"
            className="text-sm font-medium hover:text-primary"
          >
            Experiences
          </NavLink>
        </div>

        {/* CTA */}
        <button className="bg-primary hover:bg-terracotta text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-md active:scale-95">
          Book Now
        </button>
      </div>
    </nav>
  );
}
