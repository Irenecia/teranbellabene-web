import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import MobileNav from "./components/layout/MobileNav";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LegalNotice from "./pages/LegalNotice";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiesPolicy from "./pages/CookiesPolicy";
import TermsConditions from "./pages/TermsConditions";
import TreatwellBookings from "./pages/TreatwellBookings";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="bg-background text-on-background font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/sobre-mi" element={<About />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/aviso-legal" element={<LegalNotice />} />
        <Route path="/politica-privacidad" element={<PrivacyPolicy />} />
        <Route path="/politica-cookies" element={<CookiesPolicy />} />
        <Route path="/terminos-condiciones" element={<TermsConditions />} />
        <Route path="/reservas-treatwell" element={<TreatwellBookings />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
      <MobileNav />
    </div>
  );
}
