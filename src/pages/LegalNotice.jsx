import LegalLayout from "./legal/LegalLayout";

export default function LegalNotice() {
  return (
    <LegalLayout eyebrow="Legal" title="Aviso legal">
      <h2 className="font-headline-md text-on-surface">1. Datos identificativos</h2>
      <p>
        Nombre comercial: Teranbellabene. Titular: Virginia Fiorella Teran Sosa. NIE: X 6431550-Z.
        Correo electronico: vteransosa1@gmail.com. Telefono / WhatsApp: 691 812 323. Domicilio:
        Av. Constitucion 212, 1.º 3.ª, 08860 Castelldefels, Barcelona, Espana.
      </p>
      <p>
        La presente web tiene como finalidad ofrecer informacion sobre servicios de estetica,
        masajes, tratamientos corporales, tratamientos faciales y bienestar.
      </p>

      <h2 className="font-headline-md text-on-surface">2. Objeto de la web</h2>
      <p>
        Esta pagina web tiene caracter informativo y permite conocer los servicios ofrecidos por
        Teranbellabene, asi como solicitar informacion o realizar reservas por WhatsApp o mediante
        la plataforma externa Treatwell.es.
      </p>
      <p>
        Los servicios ofrecidos estan relacionados con el bienestar, la estetica y el cuidado
        corporal. En ningun caso sustituyen diagnostico, tratamiento medico, fisioterapeutico,
        psicologico o sanitario.
      </p>

      <h2 className="font-headline-md text-on-surface">3. Uso de la web</h2>
      <p>
        La persona usuaria se compromete a utilizar esta web de forma correcta, licita y
        respetuosa, sin realizar acciones que puedan danar la imagen, intereses o derechos de la
        titular de la web, ni impedir el correcto funcionamiento de la misma.
      </p>
      <p>
        Queda prohibido utilizar los contenidos de esta web con fines ilicitos, fraudulentos o que
        puedan perjudicar a terceros.
      </p>

      <h2 className="font-headline-md text-on-surface">4. Responsabilidad</h2>
      <p>
        La titular procura que la informacion publicada sea clara, actualizada y correcta. No
        obstante, no se garantiza la ausencia de errores puntuales o desactualizaciones.
      </p>
      <p>
        La titular no se hace responsable de los danos derivados del mal uso de la web, ni de
        problemas tecnicos, interrupciones del servicio o errores ajenos a su control.
      </p>
      <p>
        Las imagenes, textos o recursos visuales utilizados en la web tienen una finalidad
        informativa, estetica o ilustrativa. Si alguna persona considera que algun contenido vulnera
        derechos de terceros, puede comunicarlo por correo electronico para su revision o retirada.
      </p>

      <h2 className="font-headline-md text-on-surface">5. Enlaces externos</h2>
      <p>
        Esta web puede incluir enlaces a paginas externas, como Treatwell.es, WhatsApp, redes
        sociales u otras plataformas de reserva, pago o contacto.
      </p>
      <p>
        La titular no se responsabiliza del contenido, condiciones, politicas de privacidad,
        funcionamiento o cambios realizados por dichas plataformas externas.
      </p>
      <p>
        Cuando la persona usuaria acceda a Treatwell.es, WhatsApp u otras plataformas externas,
        quedara sujeta a sus propias condiciones legales, politicas de privacidad, cookies y normas
        de uso.
      </p>

      <h2 className="font-headline-md text-on-surface">6. Legislacion aplicable</h2>
      <p>
        Este aviso legal se rige por la legislacion espanola. Para cualquier controversia derivada
        del uso de esta web, se aplicara la normativa vigente que corresponda.
      </p>
    </LegalLayout>
  );
}
