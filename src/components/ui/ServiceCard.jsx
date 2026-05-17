import { Link } from "react-router-dom";

export default function ServiceCard({ service }) {
  return (
    <article className="group relative rounded-xl overflow-hidden h-[320px]">
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-8">
        <h3 className="text-white font-headline-md text-headline-md mb-2">{service.title}</h3>
        <p className="text-white/80 font-body-md mb-4">{service.description}</p>
        <Link to="/servicios" className="text-primary-fixed-dim font-label-md inline-flex items-center gap-2">
          Saber mas <span className="material-symbols-outlined">east</span>
        </Link>
      </div>
    </article>
  );
}
