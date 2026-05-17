import SectionHeader from "../components/ui/SectionHeader";

export default function Contact() {
  const address = "Av. Constitución 212, 1º 3ª, 08860 Castelldefels";
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Av.+Constituci%C3%B3n+212%2C+1%C2%BA+3%C2%AA%2C+08860+Castelldefels";
  const mapsEmbedUrl = "https://www.google.com/maps?q=Av.+Constituci%C3%B3n+212,+1%C2%BA+3%C2%AA,+08860+Castelldefels&output=embed";
  const whatsappUrl = "https://wa.me/34691812323";

  return (
    <main className="pt-32 pb-section-gap">
      <section className="max-w-container-max mx-auto px-margin-edge">
        <SectionHeader eyebrow="Hablemos" title="Contacto" />
        <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_340px]">
          <div>
            <p className="max-w-2xl text-on-surface-variant">
              Puedes escribir por WhatsApp o Instagram para reservar tu sesion y resolver cualquier duda
              sobre tratamientos.
            </p>

            <div className="mt-6 rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-5">
              <p className="font-label-md text-on-surface-variant">Direccion</p>
              <a href={mapsUrl} target="_blank" rel="noreferrer" className="mt-1 block text-primary hover:underline">
                {address}
              </a>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-outline-variant/30">
              <iframe
                title="Mapa de localizacion"
                src={mapsEmbedUrl}
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <aside className="rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-6 h-fit">
            <p className="font-headline-md text-headline-md text-on-surface">WhatsApp directo</p>
            <p className="mt-2 text-on-surface-variant">Escribenos al 691 812 323 y te respondemos lo antes posible.</p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-primary px-5 py-3 font-label-md text-on-primary transition-opacity hover:opacity-90"
            >
              Abrir WhatsApp
            </a>
          </aside>
        </div>
      </section>
    </main>
  );
}
