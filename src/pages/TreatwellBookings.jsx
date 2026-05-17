import LegalLayout from "./legal/LegalLayout";

const TREATWELL_URL = "https://www.treatwell.es/establecimiento/teranbellabene/";

export default function TreatwellBookings() {
  return (
    <LegalLayout eyebrow="Reservas" title="Reservas Treatwell">
      <p>
        Puedes reservar tu cita en Treatwell desde el siguiente acceso directo. Al hacerlo,
        aceptas las condiciones de uso, reserva, pago, modificacion y cancelacion de Treatwell.
      </p>
      <a
        href={TREATWELL_URL}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 font-label-md text-on-primary transition-opacity hover:opacity-90"
      >
        Ir a reservas en Treatwell
      </a>
      <p>
        Treatwell es una plataforma externa e independiente. Teranbellabene no controla su
        funcionamiento tecnico, politicas internas, metodos de pago o cambios del servicio.
      </p>
    </LegalLayout>
  );
}
