import LegalLayout from "./legal/LegalLayout";

export default function CookiesPolicy() {
  return (
    <LegalLayout eyebrow="Legal" title="Politica de cookies">
      <h2 className="font-headline-md text-on-surface">1. Uso de cookies</h2>
      <p>
        Esta web puede utilizar cookies propias o de terceros para mejorar la experiencia,
        analizar el uso de la web o permitir funcionalidades concretas.
      </p>

      <h2 className="font-headline-md text-on-surface">2. Tipos de cookies</h2>
      <p>
        Cookies tecnicas (funcionamiento), cookies de analisis (interaccion) y cookies de terceros
        (servicios externos como reservas, mapas, redes sociales, analitica o enlaces a Treatwell).
      </p>

      <h2 className="font-headline-md text-on-surface">3. Consentimiento</h2>
      <p>
        Cuando sea necesario, se solicitara consentimiento antes de instalar cookies no tecnicas.
        La persona usuaria podra aceptar, rechazar o configurar cookies mediante banner o panel.
      </p>

      <h2 className="font-headline-md text-on-surface">4. Configuracion o rechazo</h2>
      <p>
        Puedes aceptar, rechazar o configurar cookies con el sistema habilitado en la web, y
        tambien eliminarlas o bloquearlas desde la configuracion de tu navegador.
      </p>

      <h2 className="font-headline-md text-on-surface">5. Cookies de terceros</h2>
      <p>
        Al acceder a enlaces externos (Treatwell, WhatsApp, redes sociales o mapas), dichas
        plataformas pueden usar sus propias cookies. Esta web no se responsabiliza de sus politicas.
      </p>
    </LegalLayout>
  );
}
