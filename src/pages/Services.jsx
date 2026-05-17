import SectionHeader from "../components/ui/SectionHeader";
import { useMemo, useState } from "react";
import { serviceSections } from "../data/services";

function slugify(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function IntensityMeter({ level = 1 }) {
  return (
    <div className="flex items-center gap-3 mt-4 mb-5" aria-label={`Intensidad ${level} de 5`}>
      <span className="text-caption text-on-surface-variant uppercase tracking-wider">Intensidad</span>
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={`h-2.5 w-7 rounded-full ${i < level ? "bg-primary" : "bg-outline-variant/50"}`}
          />
        ))}
      </div>
      <span className="text-caption text-on-surface-variant">{level}/5</span>
    </div>
  );
}

function MiniCard({ item }) {
  const hasMultipleOptions = Array.isArray(item.options);
  const serviceSlug = slugify(item.title);
  const durationId = `duracion-${serviceSlug}`;
  const [selectedOption, setSelectedOption] = useState(0);

  const currentOption = useMemo(() => {
    if (hasMultipleOptions) {
      return item.options[selectedOption] || item.options[0];
    }

    return { duration: item.duration, price: item.price };
  }, [hasMultipleOptions, item.duration, item.options, item.price, selectedOption]);

  return (
    <article
      id={`servicio-${serviceSlug}`}
      className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/20 scroll-mt-32"
    >
      {item.image ? (
        <div className="mb-5 overflow-hidden rounded-xl aspect-[4/3]">
          <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
        </div>
      ) : null}
      <h3 className="font-headline-md text-headline-md mb-3">{item.title}</h3>
      <p className="text-on-surface-variant mb-3">{item.description}</p>
      <p className="text-caption text-on-surface-variant mb-2">
        <span className="font-semibold text-on-surface">Ideal para:</span> {item.ideal}
      </p>
      <IntensityMeter level={item.intensity} />
      <div className="flex justify-between items-center border-t border-surface-variant pt-4 gap-3">
        {hasMultipleOptions ? (
          <label className="flex items-center gap-2 font-label-md text-secondary" htmlFor={durationId}>
            <span>Duracion</span>
            <select
              id={durationId}
              className="rounded-md border border-outline-variant bg-surface px-2 py-1 text-on-surface"
              value={selectedOption}
              onChange={(event) => setSelectedOption(Number(event.target.value))}
            >
              {item.options.map((option, index) => (
                <option key={`${option.duration}-${option.price}`} value={index}>
                  {option.duration}
                </option>
              ))}
            </select>
          </label>
        ) : (
          <span className="font-label-md text-secondary">{currentOption.duration}</span>
        )}
        <div className="text-right">
          <p className="text-caption text-on-surface-variant">Precio</p>
          <p className="font-label-md text-primary">{currentOption.price}</p>
        </div>
        <a
          href={item.bookingUrl}
          target="_blank"
          rel="noreferrer"
          className="font-label-md text-primary hover:underline"
        >
          Reservar
        </a>
      </div>
    </article>
  );
}

export default function Services() {
  return (
    <main id="top-servicios" className="pt-32 pb-section-gap">
      <section className="max-w-container-max mx-auto px-margin-edge mb-20 text-center">
        <SectionHeader eyebrow="Carta de bienestar" title="Nuestros servicios" centered />
        <p className="max-w-2xl mx-auto text-body-lg mt-6 text-on-surface-variant">
          Cada tratamiento es un ritual de cuidado personal donde el tiempo se detiene.
        </p>
      </section>

      <div className="sticky top-20 z-30 mb-14 border-y border-outline-variant/40 bg-surface/95 py-4 backdrop-blur">
        <div className="max-w-container-max mx-auto px-margin-edge flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            {serviceSections.map((section) => (
              <a
                key={`jump-${section.key}`}
                href={`#${section.key}`}
                className="inline-flex items-center rounded-full border border-outline-variant bg-surface px-4 py-2 text-label-md font-label-md text-on-surface hover:border-primary hover:text-primary transition-colors"
              >
                {section.title}
              </a>
            ))}
          </div>
          <a
            href="#top-servicios"
            className="inline-flex self-center md:self-auto items-center justify-center rounded-lg border border-outline-variant bg-surface px-4 py-2.5 font-label-md text-label-md text-on-surface hover:border-primary hover:text-primary transition-colors"
          >
            Volver arriba
          </a>
        </div>
      </div>

      {serviceSections.map((section) => (
        <section id={section.key} key={section.key} className="max-w-container-max mx-auto px-margin-edge mb-20 scroll-mt-28">
          <div className="mb-8">
            <h2 className="font-headline-lg text-headline-lg text-primary capitalize">{section.title}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {section.services.map((item) => (
              <MiniCard key={item.title} item={item} />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
