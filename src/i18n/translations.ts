import type { ProjectId } from "../content/projects";
import type { Language } from "./languages";

export interface AppCopy {
  meta: {
    title: string;
    description: string;
  };
  header: {
    nav: {
      agenthub: string;
      rara: string;
      workflow: string;
    };
    github: string;
    languageLabel: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    agenthubCta: string;
    raraCta: string;
    consoleLabel: string;
    consoleLines: Array<{
      prompt: string;
      text: string;
      tone?: "muted" | "success";
    }>;
  };
  signals: Array<{
    title: string;
    body: string;
  }>;
  projectsLabel: string;
  modelSupport: {
    eyebrow: string;
    title: string;
    body: string;
    centerLabel: string;
    note: string;
  };
  projects: Record<
    ProjectId,
    {
      eyebrow: string;
      summary: string;
      features: string[];
    }
  >;
  workflow: {
    eyebrow: string;
    title: string;
    items: Array<{
      title: string;
      body: string;
    }>;
  };
}

export const translations: Record<Language, AppCopy> = {
  en: {
    meta: {
      title: "Linkerdog - AgentHub and RARA",
      description:
        "Linkerdog introduces AgentHub and RARA: an Agent Team platform and a local/cloud-first, movable general agent.",
    },
    header: {
      nav: {
        agenthub: "AgentHub",
        rara: "RARA",
        workflow: "Workflow",
      },
      github: "GitHub",
      languageLabel: "Choose language",
    },
    hero: {
      eyebrow: "General agent infrastructure",
      title: "An Agent Team platform, and the agent that moves with the work.",
      lead:
        "AgentHub is the platform layer for coordinating Agent Teams. RARA agent is local/cloud first: dynamic, portable, and able to move across environments as the task changes.",
      agenthubCta: "View AgentHub",
      raraCta: "View RARA",
      consoleLabel: "Runtime relationship preview",
      consoleLines: [
        { prompt: "$", text: "agenthub team create research-ops" },
        { prompt: ">", text: "Agent Team platform, ACP timelines, shared coordination", tone: "muted" },
        { prompt: "$", text: "rara migrate --target cloud-node-a" },
        { prompt: "ok", text: "local/cloud first agent, dynamic context, movable runtime", tone: "success" },
      ],
    },
    signals: [
      { title: "Platform", body: "AgentHub coordinates Agent Teams" },
      { title: "Runtime", body: "RARA moves with the task" },
      { title: "Local/cloud first", body: "choose the right execution place" },
      { title: "General agents", body: "not limited to software work" },
    ],
    projectsLabel: "Project overview",
    modelSupport: {
      eyebrow: "Model support",
      title: "One agent, many model backends.",
      body:
        "RARA agent can work with different model providers and deployment shapes, so the same task can move between local, hosted, and cloud model environments.",
      centerLabel: "RARA agent",
      note: "Codex · Gemini · Kimi · OpenRouter · DeepSeek · AWS Bedrock",
    },
    projects: {
      agenthub: {
        eyebrow: "AgentHub platform",
        summary:
          "An Agent Team platform for coordinating long-running general agents, shared workspaces, structured ACP timelines, task ownership, and optional remote execution nodes.",
        features: [
          "Run Agent Teams from one platform surface instead of scattered runtime sessions.",
          "Inspect plans, tool calls, command output, research notes, decisions, and replayable history.",
          "Coordinate people and agents through channels, tasks, ownership, and per-agent inspection.",
        ],
      },
      rara: {
        eyebrow: "RARA agent",
        summary:
          "A local/cloud-first general agent written in Rust, designed for dynamic context, tool execution, workspace memory, sandboxing, and migration across changing environments.",
        features: [
          "Adapt to hosted, OpenAI-compatible, Ollama, Gemini, and local model backends.",
          "Carry shell, PTY, files, search, web, planning, memory, skills, and sub-agent tools.",
          "Restore, fork, and migrate work while preserving the agent's operational context.",
        ],
      },
    },
    workflow: {
      eyebrow: "How they fit together",
      title: "AgentHub is the platform. RARA agent moves with the task.",
      items: [
        {
          title: "Coordinate the team",
          body: "Use AgentHub when multiple agents need shared channels, visible ownership, and reviewable timelines.",
        },
        {
          title: "Move the worker",
          body: "Use RARA as the adaptable runtime that follows tools, context, providers, and environment changes.",
        },
        {
          title: "Generalize the task",
          body: "Use the same platform/runtime split for research, operations, automation, review, and other agent work.",
        },
      ],
    },
  },
  zh: {
    meta: {
      title: "Linkerdog - AgentHub 与 RARA",
      description: "Linkerdog 介绍 AgentHub 与 RARA：一个 Agent Team 平台，以及一个 local/cloud first、可迁移的通用 Agent。",
    },
    header: {
      nav: {
        agenthub: "AgentHub",
        rara: "RARA",
        workflow: "工作流",
      },
      github: "GitHub",
      languageLabel: "选择语言",
    },
    hero: {
      eyebrow: "通用 Agent 基础设施",
      title: "一个 Agent Team 平台，一个跟着任务迁移的 Agent。",
      lead:
        "AgentHub 是协调 Agent Team 的平台层。RARA agent 是 local/cloud first 的通用 Agent，可以按任务选择本地或云端，并在环境变化时迁移。",
      agenthubCta: "查看 AgentHub",
      raraCta: "查看 RARA",
      consoleLabel: "运行关系预览",
      consoleLines: [
        { prompt: "$", text: "agenthub team create research-ops" },
        { prompt: ">", text: "Agent Team 平台、ACP 时间线、共享协作", tone: "muted" },
        { prompt: "$", text: "rara migrate --target cloud-node-a" },
        { prompt: "ok", text: "local/cloud first Agent、动态上下文、可迁移", tone: "success" },
      ],
    },
    signals: [
      { title: "平台", body: "AgentHub 协调 Agent Team" },
      { title: "RARA agent", body: "跟随任务迁移" },
      { title: "Local/cloud first", body: "本地或云端都能成为执行位置" },
      { title: "通用 Agent", body: "不只服务于软件开发任务" },
    ],
    projectsLabel: "项目概览",
    modelSupport: {
      eyebrow: "模型支持",
      title: "一个 Agent，连接多种模型后端。",
      body:
        "RARA agent 可以适配不同模型 Provider 和部署形态，让同一个任务在本地、托管服务和云端模型环境之间迁移。",
      centerLabel: "RARA agent",
      note: "Codex · Gemini · Kimi · OpenRouter · DeepSeek · AWS Bedrock",
    },
    projects: {
      agenthub: {
        eyebrow: "AgentHub 平台",
        summary:
          "一个 Agent Team 平台，用于协调长时间运行的通用 Agent、共享工作区、结构化 ACP 时间线、任务归属，以及可选的远程执行节点。",
        features: [
          "用一个平台界面承载 Agent Team，而不是分散在多个运行会话里。",
          "检查计划、工具调用、命令输出、研究记录、决策和可回放历史。",
          "通过频道、任务、责任归属和单 Agent 检查来协调人和 Agent。",
        ],
      },
      rara: {
        eyebrow: "RARA agent",
        summary:
          "一个 Rust 编写的 local/cloud first 通用 Agent，面向动态上下文、工具执行、工作区记忆、命令沙箱，以及跨动态环境迁移。",
        features: [
          "适配托管、OpenAI 兼容、Ollama、Gemini 和本地模型后端。",
          "携带 shell、PTY、文件、搜索、Web、计划、记忆、Skill 和子 Agent 工具。",
          "在保留运行上下文的前提下恢复、fork，并把工作迁移到需要的位置。",
        ],
      },
    },
    workflow: {
      eyebrow: "它们如何配合",
      title: "AgentHub 是平台，RARA agent 跟随任务迁移。",
      items: [
        {
          title: "协调团队",
          body: "当多个 Agent 需要共享频道、可见责任归属和可审查时间线时，使用 AgentHub。",
        },
        {
          title: "迁移执行体",
          body: "把 RARA agent 作为可适应的通用 Agent，让它跟随工具、上下文、Provider 和环境变化。",
        },
        {
          title: "泛化任务",
          body: "同一套平台与 RARA agent 关系可以覆盖研究、运营、自动化、审查和其他 Agent 工作。",
        },
      ],
    },
  },
  es: {
    meta: {
      title: "Linkerdog - AgentHub y RARA",
      description:
        "Linkerdog presenta AgentHub y RARA: una plataforma Agent Team y un agente general local/cloud first y portable.",
    },
    header: {
      nav: {
        agenthub: "AgentHub",
        rara: "RARA",
        workflow: "Flujo",
      },
      github: "GitHub",
      languageLabel: "Elegir idioma",
    },
    hero: {
      eyebrow: "Infraestructura de agentes generales",
      title: "Una plataforma Agent Team, y el agente que se mueve con el trabajo.",
      lead:
        "AgentHub es la capa de plataforma para coordinar Agent Teams. RARA agent es local/cloud first: dinámico, portable y capaz de moverse entre entornos cuando cambia la tarea.",
      agenthubCta: "Ver AgentHub",
      raraCta: "Ver RARA",
      consoleLabel: "Vista previa de la relación runtime",
      consoleLines: [
        { prompt: "$", text: "agenthub team create research-ops" },
        { prompt: ">", text: "plataforma Agent Team, líneas ACP, coordinación", tone: "muted" },
        { prompt: "$", text: "rara migrate --target cloud-node-a" },
        { prompt: "ok", text: "agente local/cloud first, contexto dinámico, portable", tone: "success" },
      ],
    },
    signals: [
      { title: "Plataforma", body: "AgentHub coordina Agent Teams" },
      { title: "Runtime", body: "RARA se mueve con la tarea" },
      { title: "Local/cloud first", body: "elige el lugar de ejecución adecuado" },
      { title: "Agentes generales", body: "no limitado al trabajo de software" },
    ],
    projectsLabel: "Resumen de proyectos",
    modelSupport: {
      eyebrow: "Soporte de modelos",
      title: "Un agente, muchos backends de modelo.",
      body:
        "RARA agent puede trabajar con distintos proveedores y formas de despliegue, para mover la misma tarea entre entornos locales, hosted y cloud.",
      centerLabel: "RARA agent",
      note: "Codex · Gemini · Kimi · OpenRouter · DeepSeek · AWS Bedrock",
    },
    projects: {
      agenthub: {
        eyebrow: "Plataforma AgentHub",
        summary:
          "Una plataforma Agent Team para coordinar agentes generales de larga duración, workspaces compartidos, líneas ACP estructuradas, ownership de tareas y nodos remotos opcionales.",
        features: [
          "Ejecuta Agent Teams desde una plataforma en lugar de sesiones de runtime dispersas.",
          "Inspecciona planes, herramientas, salida de comandos, notas de investigación, decisiones e historial reproducible.",
          "Coordina personas y agentes con canales, tareas, ownership e inspección por agente.",
        ],
      },
      rara: {
        eyebrow: "RARA agent",
        summary:
          "Un agente general local/cloud first escrito en Rust, diseñado para contexto dinámico, herramientas, memoria de workspace, sandbox y migración entre entornos cambiantes.",
        features: [
          "Se adapta a backends hosted, compatibles con OpenAI, Ollama, Gemini y modelos locales.",
          "Lleva shell, PTY, archivos, búsqueda, web, planificación, memoria, skills y subagentes.",
          "Restaura, bifurca y migra trabajo preservando el contexto operativo del agente.",
        ],
      },
    },
    workflow: {
      eyebrow: "Cómo encajan",
      title: "AgentHub es la plataforma. RARA agent se mueve con la tarea.",
      items: [
        {
          title: "Coordina el equipo",
          body: "Usa AgentHub cuando varios agentes necesitan canales compartidos, ownership visible y timelines revisables.",
        },
        {
          title: "Mueve el worker",
          body: "Usa RARA como runtime adaptable que sigue herramientas, contexto, proveedores y cambios de entorno.",
        },
        {
          title: "Generaliza la tarea",
          body: "Usa la misma separación plataforma/runtime para investigación, operaciones, automatización, revisión y otros trabajos de agente.",
        },
      ],
    },
  },
  fr: {
    meta: {
      title: "Linkerdog - AgentHub et RARA",
      description:
        "Linkerdog présente AgentHub et RARA : une plateforme Agent Team et un agent général local/cloud first et portable.",
    },
    header: {
      nav: {
        agenthub: "AgentHub",
        rara: "RARA",
        workflow: "Flux",
      },
      github: "GitHub",
      languageLabel: "Choisir la langue",
    },
    hero: {
      eyebrow: "Infrastructure pour agents généraux",
      title: "Une plateforme Agent Team, et l'agent qui suit le travail.",
      lead:
        "AgentHub est la couche plateforme pour coordonner les Agent Teams. RARA agent est local/cloud first : dynamique, portable et capable de migrer entre environnements lorsque la tâche change.",
      agenthubCta: "Voir AgentHub",
      raraCta: "Voir RARA",
      consoleLabel: "Aperçu de la relation runtime",
      consoleLines: [
        { prompt: "$", text: "agenthub team create research-ops" },
        { prompt: ">", text: "plateforme Agent Team, timelines ACP, coordination", tone: "muted" },
        { prompt: "$", text: "rara migrate --target cloud-node-a" },
        { prompt: "ok", text: "agent local/cloud first, contexte dynamique, portable", tone: "success" },
      ],
    },
    signals: [
      { title: "Plateforme", body: "AgentHub coordonne les Agent Teams" },
      { title: "Runtime", body: "RARA suit la tâche" },
      { title: "Local/cloud first", body: "choisir le bon lieu d'exécution" },
      { title: "Agents généraux", body: "pas limité au travail logiciel" },
    ],
    projectsLabel: "Aperçu des projets",
    modelSupport: {
      eyebrow: "Support des modèles",
      title: "Un agent, plusieurs backends de modèles.",
      body:
        "RARA agent peut travailler avec différents fournisseurs et formes de déploiement, afin de déplacer une même tâche entre environnements locaux, hosted et cloud.",
      centerLabel: "RARA agent",
      note: "Codex · Gemini · Kimi · OpenRouter · DeepSeek · AWS Bedrock",
    },
    projects: {
      agenthub: {
        eyebrow: "Plateforme AgentHub",
        summary:
          "Une plateforme Agent Team pour coordonner des agents généraux longue durée, des workspaces partagés, des timelines ACP structurées, l'ownership des tâches et des noeuds distants optionnels.",
        features: [
          "Exécuter des Agent Teams depuis une plateforme plutôt que des sessions runtime dispersées.",
          "Inspecter plans, outils, sorties de commandes, notes de recherche, décisions et historique rejouable.",
          "Coordonner humains et agents avec canaux, tâches, ownership et inspection par agent.",
        ],
      },
      rara: {
        eyebrow: "RARA agent",
        summary:
          "Un agent général local/cloud first écrit en Rust, conçu pour le contexte dynamique, les outils, la mémoire de workspace, le sandbox et la migration entre environnements changeants.",
        features: [
          "S'adapter aux backends hosted, compatibles OpenAI, Ollama, Gemini et modèles locaux.",
          "Emporter shell, PTY, fichiers, recherche, web, planification, mémoire, skills et sous-agents.",
          "Restaurer, forker et migrer le travail en préservant le contexte opérationnel de l'agent.",
        ],
      },
    },
    workflow: {
      eyebrow: "Comment ils s'articulent",
      title: "AgentHub est la plateforme. RARA agent suit la tâche.",
      items: [
        {
          title: "Coordonner l'équipe",
          body: "Utilisez AgentHub quand plusieurs agents ont besoin de canaux partagés, d'ownership visible et de timelines révisables.",
        },
        {
          title: "Déplacer le worker",
          body: "Utilisez RARA comme runtime adaptable qui suit outils, contexte, fournisseurs et changements d'environnement.",
        },
        {
          title: "Généraliser la tâche",
          body: "Utilisez la même séparation plateforme/runtime pour recherche, opérations, automatisation, revue et autres travaux d'agent.",
        },
      ],
    },
  },
};
