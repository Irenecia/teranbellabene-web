export default function SectionHeader({ eyebrow, title, centered = false }) {
  return (
    <div className={centered ? "text-center" : ""}>
      {eyebrow ? <span className="text-primary font-label-md tracking-widest mb-2 block uppercase">{eyebrow}</span> : null}
      <h2 className="font-headline-lg text-headline-lg text-on-surface">{title}</h2>
    </div>
  );
}
