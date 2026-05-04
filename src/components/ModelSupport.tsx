import type { AppCopy } from "../i18n/translations";
import type { CSSProperties } from "react";

interface ModelSupportProps {
  copy: AppCopy["modelSupport"];
}

const models = ["Codex", "Gemini", "Kimi", "OpenRouter", "DeepSeek", "AWS Bedrock"];

export function ModelSupport({ copy }: ModelSupportProps) {
  return (
    <section className="model-section" aria-labelledby="model-title">
      <div className="model-copy">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h2 id="model-title">{copy.title}</h2>
        <p>{copy.body}</p>
        <span>{copy.note}</span>
      </div>
      <div className="model-map" aria-label={copy.note}>
        <div className="model-center">{copy.centerLabel}</div>
        {models.map((model, index) => (
          <div className="model-node" style={{ "--node-index": index } as CSSProperties} key={model}>
            {model}
          </div>
        ))}
      </div>
    </section>
  );
}
