import type { AppCopy } from "../i18n/translations";

interface WorkflowProps {
  copy: AppCopy["workflow"];
}

export function Workflow({ copy }: WorkflowProps) {
  return (
    <section id="workflow" className="workflow-section" aria-labelledby="workflow-title">
      <div>
        <p className="eyebrow">{copy.eyebrow}</p>
        <h2 id="workflow-title">{copy.title}</h2>
      </div>
      <div className="workflow-cards">
        {copy.items.map((item, index) => (
          <article key={item.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
