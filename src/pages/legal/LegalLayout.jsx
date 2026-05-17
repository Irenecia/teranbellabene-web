import SectionHeader from "../../components/ui/SectionHeader";

export default function LegalLayout({ eyebrow, title, children }) {
  return (
    <main className="pt-32 pb-section-gap">
      <section className="max-w-container-max mx-auto px-margin-edge">
        <SectionHeader eyebrow={eyebrow} title={title} />
        <div className="mt-6 max-w-4xl space-y-5 text-on-surface-variant">{children}</div>
      </section>
    </main>
  );
}
