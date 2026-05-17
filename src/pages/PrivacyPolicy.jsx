import LegalLayout from "./legal/LegalLayout";

export default function PrivacyPolicy() {
  return (
    <LegalLayout eyebrow="Legal" title="Politica de privacidad">
      <h2 className="font-headline-md text-on-surface">1. Responsable del tratamiento</h2>
      <p>
        Responsable: Virginia Fiorella Teran Sosa (Teranbellabene). NIE: X 6431550-Z. Email:
        vteransosa1@gmail.com. WhatsApp: 691 812 323. Direccion: Av. Constitucion 212, 1.º 3.ª,
        08860 Castelldefels, Barcelona, Espana.
      </p>

      <h2 className="font-headline-md text-on-surface">2. Datos que se pueden tratar</h2>
      <p>
        Nombre y apellidos, telefono, correo electronico, informacion de cita o tratamiento,
        informacion necesaria para gestionar reservas y datos facilitados voluntariamente sobre
        preferencias, necesidades o contraindicaciones.
      </p>
      <p>
        En determinados casos pueden solicitarse datos relacionados con alergias, embarazo, lesiones,
        medicacion, patologias o contraindicaciones, solo cuando sea necesario para adaptar el
        tratamiento y valorar su seguridad.
      </p>

      <h2 className="font-headline-md text-on-surface">3. Finalidad</h2>
      <p>
        Atender solicitudes, gestionar citas y reservas, confirmar o cancelar citas, prestar
        servicios, adaptar tratamientos, comunicar incidencias, gestionar pagos/facturacion y enviar
        comunicaciones comerciales cuando exista consentimiento o base legal.
      </p>

      <h2 className="font-headline-md text-on-surface">4. Base legal</h2>
      <p>
        Ejecucion de una relacion contractual o precontractual, consentimiento, cumplimiento de
        obligaciones legales e interes legitimo en la gestion ordinaria de la actividad.
      </p>

      <h2 className="font-headline-md text-on-surface">5. Conservacion</h2>
      <p>
        Los datos se conservaran el tiempo necesario para su finalidad y, posteriormente, durante los
        plazos legalmente exigidos. Los datos de comunicaciones comerciales se conservaran hasta la
        baja de la persona interesada.
      </p>

      <h2 className="font-headline-md text-on-surface">6. Comunicacion a terceros</h2>
      <p>
        No se cederan datos a terceros salvo obligacion legal o necesidad para prestar el servicio.
        En plataformas externas (Treatwell o WhatsApp) aplican tambien sus propias politicas.
      </p>

      <h2 className="font-headline-md text-on-surface">7. Derechos</h2>
      <p>
        Puedes ejercer acceso, rectificacion, supresion, oposicion, limitacion y portabilidad en
        vteransosa1@gmail.com, indicando claramente el derecho solicitado.
      </p>
      <p>
        Tambien puedes reclamar ante la Agencia Espanola de Proteccion de Datos si consideras que tus
        derechos no han sido atendidos.
      </p>

      <h2 className="font-headline-md text-on-surface">8. Seguridad</h2>
      <p>
        Se adoptan medidas razonables para proteger los datos personales frente a accesos no
        autorizados, perdida, uso indebido o divulgacion.
      </p>
    </LegalLayout>
  );
}
