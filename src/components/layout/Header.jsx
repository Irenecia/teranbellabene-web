import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { navItems } from "../../data/site";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-lg border border-outline-variant px-3 py-2 text-on-surface"
          aria-label={mobileMenuOpen ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </nav>

      {mobileMenuOpen ? (
        <div className="md:hidden border-t border-outline-variant/30 bg-surface px-margin-edge py-3 shadow-sm">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={`mobile-${item.label}`}
                to={item.to}
                end
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 font-label-md text-label-md transition-colors ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-on-surface-variant hover:bg-surface-container-low hover:text-primary"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
