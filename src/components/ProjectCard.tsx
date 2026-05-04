import type { Project } from "../content/projects";
import type { AppCopy } from "../i18n/translations";
import { LogoMark } from "./LogoMark";

interface ProjectCardProps {
  project: Project;
  copy: AppCopy["projects"][Project["id"]];
}

export function ProjectCard({ project, copy }: ProjectCardProps) {
  return (
    <article id={project.id} className={`project-panel project-panel-${project.accent}`}>
      <div className="panel-header">
        <p className="eyebrow">{copy.eyebrow}</p>
        <a href={project.primaryUrl} target="_blank" rel="noreferrer">
          {project.primaryLabel}
        </a>
      </div>
      <h2>{project.name}</h2>
      <p>{copy.summary}</p>
      <div className="project-logo-panel" aria-hidden="true">
        {project.logoImageUrl ? (
          <img className="project-logo-image" src={project.logoImageUrl} alt="" loading="lazy" />
        ) : (
          <LogoMark kind={project.id} className="project-logo" />
        )}
      </div>
      <ul className="feature-list">
        {copy.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
    </article>
  );
}
