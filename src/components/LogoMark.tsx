import type { ProjectId } from "../content/projects";

interface LogoMarkProps {
  kind: "linkerdog" | ProjectId;
  className?: string;
}

export function LogoMark({ kind, className = "" }: LogoMarkProps) {
  if (kind === "agenthub") {
    return (
      <svg className={className} viewBox="0 0 160 160" role="img" aria-label="AgentHub logo">
        <path d="M80 18 125 44 80 70 35 44 80 18Z" />
        <path d="M35 44v42l45 26 45-26V44" />
        <path d="M80 70v42" />
        <circle cx="70" cy="44" r="4" />
        <circle cx="90" cy="44" r="4" />

        <path d="M35 86 80 112 35 138 10 123V96l25-10Z" />
        <path d="M10 96 35 111 80 86" />
        <path d="M35 111v27" />

        <path d="M125 86 80 112 125 138 150 123V96l-25-10Z" />
        <path d="M150 96 125 111 80 86" />
        <path d="M125 111v27" />

        <path d="M80 112v30" />
        <path d="M35 138 80 142 125 138" />
      </svg>
    );
  }

  if (kind === "rara") {
    return (
      <svg className={className} viewBox="0 0 160 160" role="img" aria-label="RARA logo">
        <path d="M32 104c20-58 72-58 96 0" />
        <path d="M44 104c16-34 56-34 72 0" />
        <path d="M56 104c11-14 37-14 48 0" />
        <circle cx="32" cy="104" r="10" />
        <circle cx="80" cy="52" r="10" />
        <circle cx="128" cy="104" r="10" />
        <path d="M39 97 73 59" />
        <path d="M87 59 121 97" />
        <path d="M80 62v72" />
        <path d="M58 132h44" />
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 160 160" role="img" aria-label="Linkerdog logo">
      <path d="M42 32c37-2 67-1 84 18 23 25 22 72-2 94-18 16-48 17-82 15V32Z" />
      <path d="M66 52h28c25 0 43 18 43 43s-18 43-43 43H66V52Z" />
      <path d="M42 102 86 126 122 56" />
      <path d="M42 142 126 50" />
      <circle cx="42" cy="102" r="11" />
      <circle cx="42" cy="142" r="11" />
      <circle cx="86" cy="126" r="11" />
      <circle cx="126" cy="50" r="11" />
      <circle cx="82" cy="72" r="3.5" />
      <circle cx="98" cy="72" r="3.5" />
    </svg>
  );
}
