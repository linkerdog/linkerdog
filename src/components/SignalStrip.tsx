import type { AppCopy } from "../i18n/translations";

interface SignalStripProps {
  items: AppCopy["signals"];
}

export function SignalStrip({ items }: SignalStripProps) {
  return (
    <section className="signal-strip" aria-label="Project signals">
      {items.map((item) => (
        <div key={item.title}>
          <strong>{item.title}</strong>
          <span>{item.body}</span>
        </div>
      ))}
    </section>
  );
}
