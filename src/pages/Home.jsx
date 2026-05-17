import SectionHeader from "../components/ui/SectionHeader";
import ServiceCard from "../components/ui/ServiceCard";
import TestimonialCard from "../components/ui/TestimonialCard";
import { Link } from "react-router-dom";
import { featuredServices } from "../data/services";
import { testimonials } from "../data/testimonials";

const VENUE_BOOKING_URL = "https://www.treatwell.es/establecimiento/teranbellabene/";

export default function Home() {
  return (
    <main>
      <section className="relative min-h-[86vh] flex items-center pt-20 hero-bg">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative w-full max-w-container-max mx-auto px-margin-edge py-section-gap">
          <div className="max-w-2xl">
            <h1 className="font-headline-xl text-headline-xl text-white mb-6 leading-tight">
              Reconecta con tu cuerpo, tu mente y tu energia
            </h1>
            <p className="font-body-lg text-body-lg text-surface-container-low mb-10">
              Bienestar, masajes y tratamientos esteticos en un ambiente intimo y personal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={VENUE_BOOKING_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center bg-primary text-on-primary px-8 py-4 rounded-lg font-label-md text-label-md hover:opacity-90 active:scale-95 transition-all"
              >
                Reservar sesión
              </a>
              <Link
                to="/servicios"
                className="inline-flex items-center justify-center bg-primary text-on-primary px-8 py-4 rounded-lg font-label-md text-label-md hover:opacity-90 active:scale-95 transition-all"
              >
                Explorar servicios
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-section-gap bg-surface">
        <div className="max-w-container-max mx-auto px-margin-edge">
          <SectionHeader eyebrow="Tratamientos" title="Explora nuestros servicios" />
          <div className="grid md:grid-cols-3 gap-gutter mt-12">
            {featuredServices.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-section-gap bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-edge">
          <SectionHeader title="Experiencias de paz" centered />
          <div className="grid md:grid-cols-3 gap-gutter mt-12">
            {testimonials.map((item) => (
              <TestimonialCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-section-gap text-center px-margin-edge">
        <h2 className="font-headline-xl text-headline-xl text-on-surface mb-6">Tu momento de paz te espera</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-3xl mx-auto">
          Regalate el descanso que mereces y comienza tu camino hacia una version mas equilibrada.
        </p>
        <a
          href={VENUE_BOOKING_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center bg-primary text-on-primary px-12 py-5 rounded-lg font-label-md text-headline-md hover:opacity-90 active:scale-95 transition-all"
        >
          Reservar ahora
        </a>
      </section>
    </main>
  );
}
