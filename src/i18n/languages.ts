export type Language = "en" | "zh" | "es" | "fr";

export interface LanguageOption {
  code: Language;
  label: string;
  shortLabel: string;
  href: string;
}

export const defaultLanguage: Language = "en";

export const languageOptions: LanguageOption[] = [
  { code: "en", label: "English", shortLabel: "EN", href: "/en/" },
  { code: "zh", label: "中文", shortLabel: "中", href: "/zh/" },
  { code: "es", label: "Español", shortLabel: "ES", href: "/es/" },
  { code: "fr", label: "Français", shortLabel: "FR", href: "/fr/" },
];

export function detectLanguage(pathname: string, browserLanguage: string): Language {
  const pathLanguage = pathname.split("/").filter(Boolean)[0];

  if (isLanguage(pathLanguage)) {
    return pathLanguage;
  }

  const browserPrefix = browserLanguage.slice(0, 2).toLowerCase();
  return isLanguage(browserPrefix) ? browserPrefix : defaultLanguage;
}

function isLanguage(value: string | undefined): value is Language {
  return value === "en" || value === "zh" || value === "es" || value === "fr";
}
