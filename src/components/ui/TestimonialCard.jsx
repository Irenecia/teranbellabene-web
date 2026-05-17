export default function TestimonialCard({ item }) {
  return (
    <article className="bg-surface p-8 rounded-xl shadow-sm border border-outline-variant/30">
      <div className="flex gap-1 mb-4 text-primary">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
            star
          </span>
        ))}
      </div>
      <p className="font-body-md text-on-surface-variant italic mb-6">"{item.quote}"</p>
      <p className="font-label-md text-on-surface">{item.name}</p>
      <p className="text-caption text-on-surface-variant">{item.role}</p>
    </article>
  );
}
