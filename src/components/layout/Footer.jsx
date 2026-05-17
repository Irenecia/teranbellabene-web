import Logo from "./Logo";
import { Link } from "react-router-dom";
import { footerLinks } from "../../data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full py-section-gap bg-surface-container-low">
      <div className="flex flex-col items-center text-center gap-unit px-margin-edge w-full max-w-container-max mx-auto">
        <Logo />
        <div className="flex flex-wrap justify-center gap-8 mb-8 mt-4">
          {footerLinks.map((link) => (
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.to}
                className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            )
          ))}
        </div>
        <div className="space-y-1 text-center text-on-surface-variant opacity-80">
          <p className="font-body-md text-body-md">© {year} Teranbellabene. Todos los derechos reservados.</p>
          <p className="font-body-sm text-body-sm">Titular: Virginia Fiorella Terán Sosa</p>
          <p className="font-body-sm text-body-sm">NIE: X 6431550-Z</p>
          <p className="font-body-sm text-body-sm">
            Av. Constitución 212, 1.º 3.ª, 08860 Castelldefels, Barcelona, España
          </p>
          <p className="font-body-sm text-body-sm">Email: vteransosa1@gmail.com</p>
          <p className="font-body-sm text-body-sm">Teléfono / WhatsApp: 691 812 323</p>
        </div>
      </div>
    </footer>
  );
}
