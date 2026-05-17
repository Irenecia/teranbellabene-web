import { Link } from "react-router-dom";
import brandLogo from "../../assets/logo/logo.png";

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <img src={brandLogo} alt="Logo Teranbellabene" className="h-12 w-12 rounded-full object-cover md:h-14 md:w-14" />
      <span className="text-lg font-headline-md text-primary md:text-headline-md">Teranbellabene</span>
    </Link>
  );
}
