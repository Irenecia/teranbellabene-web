import { NavLink } from "react-router-dom";

const items = [
  { to: "/", label: "Inicio", icon: "home" },
  { to: "/servicios", label: "Explorar", icon: "search" },
  { to: "#", label: "Citas", icon: "calendar_today" },
  { to: "#", label: "Perfil", icon: "person" }
];

export default function MobileNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-3 bg-surface shadow-[0_-4px_20px_0_rgba(0,0,0,0.05)] rounded-t-xl">
      {items.map((item) => (
        <NavLink
          key={item.label}
          to={item.to}
          className={({ isActive }) =>
            `flex flex-col items-center justify-center rounded-lg p-1 ${
              isActive ? "bg-tertiary-fixed text-on-tertiary-fixed" : "text-on-secondary-container"
            }`
          }
        >
          <span className="material-symbols-outlined">{item.icon}</span>
          <span className="font-label-md text-label-md">{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
