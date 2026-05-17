import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { navItems } from "../../data/site";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

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
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden inline-flex items-center justify-center rounded-lg border border-outline-variant p-2 text-on-surface"
          aria-label={isMenuOpen ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <span className="material-symbols-outlined">{isMenuOpen ? "close" : "menu"}</span>
        </button>
      </nav>

      {isMenuOpen ? (
        <div id="mobile-menu" className="md:hidden border-t border-outline-variant/40 bg-surface px-margin-edge py-4">
          <div className="ml-auto flex w-fit min-w-52 flex-col gap-2">
            {navItems.map((item) => (
              <NavLink
                key={`mobile-${item.label}`}
                to={item.to}
                end
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 font-label-md text-label-md transition-colors ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-on-surface-variant hover:bg-surface-container hover:text-primary"
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
