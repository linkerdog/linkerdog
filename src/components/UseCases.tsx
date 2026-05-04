import type { AppCopy } from "../i18n/translations";

interface UseCasesProps {
  copy: AppCopy["useCases"];
}

export function UseCases({ copy }: UseCasesProps) {
  return (
    <section id="use-cases" className="use-case-section" aria-labelledby="use-cases-title">
      <div className="use-case-intro">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h2 id="use-cases-title">{copy.title}</h2>
        <p>{copy.body}</p>
      </div>
      <div className="use-case-grid">
        {copy.items.map((item) => (
          <article key={item.title}>
            <span>{item.accent}</span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
