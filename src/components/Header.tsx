import type { AppCopy } from "../i18n/translations";
import type { Language, LanguageOption } from "../i18n/languages";

interface HeaderProps {
  copy: AppCopy["header"];
  currentLanguage: Language;
  languageOptions: LanguageOption[];
}

export function Header({ copy, currentLanguage, languageOptions }: HeaderProps) {
  const activeLanguage = languageOptions.find((language) => language.code === currentLanguage) ?? languageOptions[0];

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Linkerdog home">
        <span className="brand-mark">
          <img className="brand-logo" src="/logos/linkerdog.svg" alt="" />
        </span>
        <span>Linkerdog</span>
      </a>
      <nav className="nav-links" aria-label="Main navigation">
        <a href="#agenthub">{copy.nav.agenthub}</a>
        <a href="#rara">{copy.nav.rara}</a>
        <a href="#workflow">{copy.nav.workflow}</a>
      </nav>
      <div className="header-actions">
        <details className="language-menu">
          <summary aria-label={copy.languageLabel}>
            <span>{activeLanguage.shortLabel}</span>
          </summary>
          <div className="language-menu-list">
            {languageOptions.map((language) => (
              <a
                key={language.code}
                aria-current={language.code === currentLanguage ? "page" : undefined}
                href={language.href}
                title={language.label}
              >
                <span>{language.shortLabel}</span>
                <span>{language.label}</span>
              </a>
            ))}
          </div>
        </details>
        <a className="nav-cta" href="https://github.com/hawkingrei" target="_blank" rel="noreferrer">
          {copy.github}
        </a>
      </div>
    </header>
  );
}
