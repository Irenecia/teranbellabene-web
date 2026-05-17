import SectionHeader from "../components/ui/SectionHeader";
import virginiaTeranImage from "../assets/about/virginia-teran.png";

export default function About() {
  return (
    <main className="pt-32 pb-section-gap">
      <section className="max-w-container-max mx-auto px-margin-edge">
        <SectionHeader eyebrow="Conoceme" title="Sobre mi" />
        <div className="mt-6 grid gap-8 md:grid-cols-[280px_1fr] md:items-start">
          <div className="overflow-hidden rounded-2xl border border-outline-variant/30 shadow-sm">
            <img src={virginiaTeranImage} alt="Virginia Teran" className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="text-headline-md font-headline-md text-primary">Soy Virginia Teran</p>
            <div className="mt-3 max-w-2xl space-y-4 text-on-surface-variant">
              <p>
                Mi pasion es transmitir bienestar a un nivel que va mas alla de lo fisico. Para mi, cada
                tratamiento es una forma de arte: me gusta sentir que, a traves de mis manos, puedo ayudar
                a esculpir, equilibrar y renovar el cuerpo.
              </p>
              <p>
                El trabajo manual es lo que mas me conecta con cada persona. Mis manos son mi herramienta
                principal, pero tambien mis sensores: a traves de ellas escucho el cuerpo, percibo sus
                necesidades y adapto cada tratamiento de forma personalizada.
              </p>
              <p>
                Cada cuerpo es diferente, por eso cada tratamiento se realiza de manera individualizada,
                teniendo en cuenta tanto el estado fisico como el bienestar energetico de cada persona.
              </p>
              <p>
                Trato, cuido y escucho tu cuerpo, porque el me guia y me muestra lo que necesita para
                recuperar su equilibrio, liberar tensiones y sentirse mejor. Mi objetivo es que cada sesion
                sea una experiencia de bienestar, renovacion y conexion contigo misma.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
