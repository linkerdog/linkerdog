import type { AppCopy } from "../i18n/translations";

interface HeroProps {
  copy: AppCopy["hero"];
}

export function Hero({ copy }: HeroProps) {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-backdrop" aria-hidden="true">
        <div className="grid-layer" />
        <div className="code-rain">
          <span>agenthub team</span>
          <span>rara migrate</span>
          <span>team_create</span>
          <span>acp timeline</span>
        </div>
      </div>

      <div className="hero-copy animate-[paper-rise_640ms_ease-out_both]">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h1 id="hero-title">{copy.title}</h1>
        <p className="hero-lead">{copy.lead}</p>
        <div className="hero-actions" aria-label="Primary actions">
          <a className="button button-primary" href="https://github.com/hawkingrei/agenthub" target="_blank" rel="noreferrer">
            {copy.agenthubCta}
          </a>
          <a className="button button-secondary" href="https://github.com/hawkingrei/rara" target="_blank" rel="noreferrer">
            {copy.raraCta}
          </a>
          <a className="button button-tertiary" href="#use-cases">
            {copy.useCasesCta}
          </a>
        </div>
      </div>

      <div className="hero-console animate-[paper-rise_720ms_ease-out_120ms_both]" aria-label={copy.consoleLabel}>
        <div className="console-toolbar">
          <span />
          <span />
          <span />
          <strong>workspace</strong>
        </div>
        <div className="console-body">
          {copy.consoleLines.map((line) => (
            <div className={`console-line ${line.tone ?? ""}`} key={`${line.prompt}-${line.text}`}>
              <span className="prompt">{line.prompt}</span>
              <span>{line.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
