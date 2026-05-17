import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { ctaText, navItems } from "../../data/site";

const VENUE_BOOKING_URL = "https://www.treatwell.es/establecimiento/teranbellabene/";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md shadow-sm">
      <nav className="flex justify-between items-center px-margin-edge h-20 w-full max-w-container-max mx-auto">
        <Logo />
        <div className="hidden md:flex items-center gap-gutter">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              end
              className={({ isActive }) =>
                `font-label-md text-label-md border-b-2 pb-1 transition-all duration-300 ${
                  isActive
                    ? "text-primary font-bold border-primary"
                    : "text-on-surface-variant border-transparent hover:text-primary hover:border-primary/40"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
        <a
          href={VENUE_BOOKING_URL}
          target="_blank"
          rel="noreferrer"
          className="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-label-md text-label-md hover:opacity-90 active:scale-95 transition-all"
        >
          {ctaText}
        </a>
      </nav>
    </header>
  );
}
