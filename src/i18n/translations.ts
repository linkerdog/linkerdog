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
      description: "Linkerdog 用 AgentHub 与 RARA agent，把通用 Agent 组织成可交付、可迁移、可协作的数字团队。",
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
      eyebrow: "面向真实工作的 Agent Team",
      title: "把通用 Agent 组织成一支会交付的团队。",
      lead:
        "AgentHub 让目标、任务、进展和结果可管理；RARA agent 负责执行、记住上下文，并在本地或云端接力复杂任务。",
      agenthubCta: "查看 AgentHub",
      raraCta: "查看 RARA",
      consoleLabel: "运行关系预览",
      consoleLines: [
        { prompt: "$", text: "agenthub team create research-ops" },
        { prompt: ">", text: "创建团队、分配任务、同步进展", tone: "muted" },
        { prompt: "$", text: "rara migrate --target cloud-node-a" },
        { prompt: "ok", text: "保留上下文，在更合适的位置继续工作", tone: "success" },
      ],
    },
    signals: [
      { title: "统一入口", body: "从一个工作台管理 Agent Team" },
      { title: "持续交付", body: "任务、进展和结果可追踪" },
      { title: "自由迁移", body: "RARA agent 在本地与云端之间移动" },
      { title: "通用任务", body: "覆盖研究、运营、自动化与审查" },
    ],
    projectsLabel: "项目概览",
    modelSupport: {
      eyebrow: "模型支持",
      title: "按任务选择模型，而不是被模型绑定。",
      body:
        "RARA agent 可以连接多种模型 Provider 和部署形态。轻量任务留在本地，复杂任务切到云端，同一个 Agent 继续保留上下文和工作状态。",
      centerLabel: "RARA agent",
      note: "Codex · Gemini · Kimi · OpenRouter · DeepSeek · AWS Bedrock",
    },
    projects: {
      agenthub: {
        eyebrow: "Agent Team 工作台",
        summary:
          "AgentHub 把多个通用 Agent 组织成一支可管理的数字团队：谁负责什么、进展到哪里、产出了什么，都在同一个工作台里可见。",
        features: [
          "把分散的 Agent 会话收拢成团队视图，降低协作和交接成本。",
          "沉淀计划、执行记录、研究材料、决策过程和最终结果。",
          "通过任务、频道和责任归属，让人和 Agent 围绕同一个目标推进。",
        ],
      },
      rara: {
        eyebrow: "RARA agent",
        summary:
          "RARA agent 是可迁移的通用执行成员。它可以在本地开始，在云端接力，也可以在环境变化时带着上下文继续工作。",
        features: [
          "根据任务选择本地模型、托管模型或云端模型，不被单一 Provider 锁定。",
          "携带工具、文件、搜索、Web、计划、记忆和 Skill，处理不止代码的通用工作。",
          "在保留上下文的前提下恢复、分叉或迁移，让长任务不中断。",
        ],
      },
    },
    workflow: {
      eyebrow: "它们如何配合",
      title: "平台负责组织团队，Agent 负责把事情做完。",
      items: [
        {
          title: "组织工作",
          body: "AgentHub 把目标、任务、责任和结果放到同一个协作空间里，方便人来管理和审查。",
        },
        {
          title: "移动执行",
          body: "RARA agent 根据任务需要选择本地或云端执行，并在迁移时保留上下文。",
        },
        {
          title: "扩展场景",
          body: "同一套团队与 Agent 关系，可以覆盖研究、运营、自动化、审查和更多业务任务。",
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
