import logo from "../assets/ArjunTeelaLogo.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white/70 py-16">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20 grid md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 text-white mb-6">
            <img
              src={logo}
              alt="Arjun Teela Logo"
              className="h-12 w-12 object-contain"
            />

            {/* Wordmark */}
            <div className="flex flex-col leading-tight">
              <span className="serif-heading text-xl font-bold tracking-wide">
                Arjun Teela
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-gray-500">
                Royal Villa Retreat
              </span>
            </div>
          </div>

          <p className="max-w-md mb-8 leading-relaxed">
            A boutique retreat in Jaipur offering a personalized gateway into
            the royal history and vibrant culture of Rajasthan. Experience
            hospitality reimagined through the lens of heritage and modern
            design.
          </p>

          <div className="flex gap-4">
            <a
              className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all"
              href="#"
            >
              <span className="material-symbols-outlined text-sm">public</span>
            </a>
            <a
              className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all"
              href="#"
            >
              <span className="material-symbols-outlined text-sm">share</span>
            </a>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h4 className="text-white font-bold mb-6">Explore</h4>
          <ul className="flex flex-col gap-4 text-sm">
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Our Suites
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Dine with Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Wellness & Spa
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Location & Map
              </a>
            </li>
          </ul>
        </div>

        {/* Location */}
        <div>
          <h4 className="text-white font-bold mb-6">Location</h4>
          <p className="text-sm mb-4 leading-relaxed">
            24 Civil Lines, Near Raj Mandir,
            <br />
            Jaipur, Rajasthan 302001, India
          </p>

          <p className="text-sm font-bold text-white mb-2">Bookings</p>
          <a
            href="tel:+91141223344"
            className="text-sm hover:text-primary transition-colors"
          >
            +91 141 223 344
          </a>
          <br />
          <a
            href="mailto:stay@heritagehaven.com"
            className="text-sm hover:text-primary transition-colors"
          >
            stay@heritagehaven.com
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20 mt-16 pt-8 border-t border-white/10 text-xs flex flex-col md:flex-row justify-between gap-4">
        <p>© 2024 Heritage Haven Jaipur. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
