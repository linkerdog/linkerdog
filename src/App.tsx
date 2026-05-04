import { useEffect, useMemo } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProjectCard } from "./components/ProjectCard";
import { SignalStrip } from "./components/SignalStrip";
import { Workflow } from "./components/Workflow";
import { ModelSupport } from "./components/ModelSupport";
import { UseCases } from "./components/UseCases";
import { detectLanguage, languageOptions } from "./i18n/languages";
import { translations } from "./i18n/translations";
import { projects } from "./content/projects";

export function App() {
  const language = useMemo(() => detectLanguage(window.location.pathname, window.navigator.language), []);
  const copy = translations[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = copy.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", copy.meta.description);
  }, [copy.meta.description, copy.meta.title, language]);

  return (
    <>
      <Header copy={copy.header} currentLanguage={language} languageOptions={languageOptions} />
      <main id="top">
        <Hero copy={copy.hero} />
        <SignalStrip items={copy.signals} />
        <ModelSupport copy={copy.modelSupport} />
        <UseCases copy={copy.useCases} />
        <section className="project-grid" aria-label={copy.projectsLabel}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} copy={copy.projects[project.id]} />
          ))}
        </section>
        <Workflow copy={copy.workflow} />
      </main>
      <footer className="site-footer">
        <span>www.linkerdog.work</span>
        <div>
          {projects.map((project) => (
            <a key={project.id} href={project.repositoryUrl} target="_blank" rel="noreferrer">
              {project.name}
            </a>
          ))}
        </div>
      </footer>
    </>
  );
}
