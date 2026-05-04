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
  useCases: {
    eyebrow: string;
    title: string;
    body: string;
    items: Array<{
      title: string;
      body: string;
      accent: string;
    }>;
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
        "Linkerdog uses AgentHub and RARA agent to turn general agents into a team that can deliver, move, and collaborate.",
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
      eyebrow: "Agent Teams for real work",
      title: "Turn general agents into a team that delivers.",
      lead:
        "AgentHub makes goals, tasks, progress, and outcomes manageable. RARA agent executes the work, keeps context, and continues complex tasks locally or in the cloud.",
      agenthubCta: "View AgentHub",
      raraCta: "View RARA",
      consoleLabel: "Runtime relationship preview",
      consoleLines: [
        { prompt: "$", text: "agenthub team create research-ops" },
        { prompt: ">", text: "create the team, assign work, sync progress", tone: "muted" },
        { prompt: "$", text: "rara migrate --target cloud-node-a" },
        { prompt: "ok", text: "keep context and continue in the better place", tone: "success" },
      ],
    },
    signals: [
      { title: "One workspace", body: "manage the Agent Team from one place" },
      { title: "Continuous delivery", body: "track tasks, progress, and outcomes" },
      { title: "Movable agent", body: "RARA agent shifts between local and cloud" },
      { title: "General work", body: "research, operations, automation, and review" },
    ],
    projectsLabel: "Project overview",
    modelSupport: {
      eyebrow: "Model support",
      title: "Choose the model for the task, not the other way around.",
      body:
        "RARA agent connects to multiple providers and deployment shapes. Keep lightweight work local, move harder tasks to the cloud, and preserve the same agent context throughout.",
      centerLabel: "RARA agent",
      note: "Codex · Gemini · Kimi · OpenRouter · DeepSeek · AWS Bedrock",
    },
    useCases: {
      eyebrow: "Where it helps",
      title: "Built for work that does not fit in a single chat.",
      body:
        "AgentHub and RARA agent are useful when the work needs continuity, shared ownership, and the freedom to move execution as conditions change.",
      items: [
        {
          title: "Research operations",
          body: "Run multiple agents through source gathering, comparison, synthesis, and review while keeping decisions visible.",
          accent: "Research",
        },
        {
          title: "Business automation",
          body: "Coordinate recurring work across tools, files, web tasks, and human checkpoints without restarting context.",
          accent: "Ops",
        },
        {
          title: "Review workflows",
          body: "Let agents inspect plans, artifacts, and results over time, then hand off work with a traceable record.",
          accent: "Review",
        },
      ],
    },
    projects: {
      agenthub: {
        eyebrow: "Agent Team workspace",
        summary:
          "AgentHub turns multiple general agents into a manageable digital team: who owns the work, where it stands, and what it produced are visible in one workspace.",
        features: [
          "Bring scattered agent sessions into a shared team view that is easier to coordinate and hand off.",
          "Capture plans, execution records, research material, decisions, and final outcomes.",
          "Use tasks, channels, and clear responsibility to keep people and agents moving toward the same goal.",
        ],
      },
      rara: {
        eyebrow: "RARA agent",
        summary:
          "RARA agent is a movable general-purpose executor. It can start locally, continue in the cloud, and carry context forward when the environment changes.",
        features: [
          "Pick local, hosted, or cloud models for each task without locking the workflow to one provider.",
          "Bring tools, files, search, web, planning, memory, and skills to work beyond coding tasks.",
          "Restore, fork, or migrate while preserving context so long-running work does not restart.",
        ],
      },
    },
    workflow: {
      eyebrow: "How they fit together",
      title: "The platform organizes the team. The agent gets the work done.",
      items: [
        {
          title: "Organize the work",
          body: "AgentHub keeps goals, tasks, responsibility, and outcomes in one collaboration space for people to manage and review.",
        },
        {
          title: "Move execution",
          body: "RARA agent chooses local or cloud execution for the task and keeps context when it moves.",
        },
        {
          title: "Expand the use cases",
          body: "Use the same team-and-agent model for research, operations, automation, review, and broader business work.",
        },
      ],
    },
  },
  zh: {
    meta: {
      title: "Linkerdog - AgentHub 与 RARA",
      description: "Linkerdog 通过 AgentHub 与 RARA agent，将通用 Agent 组织为可协作、可迁移、可持续交付的数字团队。",
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
      title: "将通用 Agent 组织为可持续交付的数字团队。",
      lead:
        "AgentHub 统一管理目标、任务、进展与结果；RARA agent 承担执行与上下文延续，并可在本地或云端持续推进复杂任务。",
      agenthubCta: "查看 AgentHub",
      raraCta: "查看 RARA",
      consoleLabel: "运行关系预览",
      consoleLines: [
        { prompt: "$", text: "agenthub team create research-ops" },
        { prompt: ">", text: "创建团队、分配任务、同步进展", tone: "muted" },
        { prompt: "$", text: "rara migrate --target cloud-node-a" },
        { prompt: "ok", text: "保留上下文，并迁移到更合适的执行位置", tone: "success" },
      ],
    },
    signals: [
      { title: "统一工作台", body: "集中管理 Agent Team" },
      { title: "持续交付", body: "任务、进展与结果全程可追踪" },
      { title: "跨环境执行", body: "RARA agent 可在本地与云端之间迁移" },
      { title: "通用场景", body: "覆盖研究、运营、自动化与审查" },
    ],
    projectsLabel: "项目概览",
    modelSupport: {
      eyebrow: "模型支持",
      title: "按任务选择模型，而不是被模型绑定。",
      body:
        "RARA agent 支持多种模型 Provider 与部署形态。轻量任务可在本地执行，复杂任务可迁移到云端，同一 Agent 持续保留上下文与工作状态。",
      centerLabel: "RARA agent",
      note: "Codex · Gemini · Kimi · OpenRouter · DeepSeek · AWS Bedrock",
    },
    useCases: {
      eyebrow: "适用场景",
      title: "面向需要长期上下文的复杂任务。",
      body:
        "当任务需要持续上下文、明确责任边界与可迁移执行能力时，AgentHub 与 RARA agent 可以将通用 Agent 转化为可管理的工作系统。",
      items: [
        {
          title: "研究型工作",
          body: "组织多个 Agent 参与资料收集、对比分析、归纳总结与复核，并在同一工作空间中保留决策过程与结果。",
          accent: "Research",
        },
        {
          title: "业务自动化",
          body: "协调工具、文件、网页任务与人工检查点，使周期性工作在环境切换后仍能保持上下文连续。",
          accent: "Ops",
        },
        {
          title: "审查与交接",
          body: "支持 Agent 持续审查计划、产物与结果，并形成可追踪记录，便于团队接续推进。",
          accent: "Review",
        },
      ],
    },
    projects: {
      agenthub: {
        eyebrow: "Agent Team 工作台",
        summary:
          "AgentHub 将多个通用 Agent 组织为可管理的数字团队，使任务责任、执行进展与最终产出在同一工作台中保持可见。",
        features: [
          "将分散的 Agent 会话整合为团队视图，降低协作与交接成本。",
          "沉淀计划、执行记录、研究材料、决策过程与最终结果。",
          "通过任务、频道与责任归属，使人和 Agent 围绕统一目标协同推进。",
        ],
      },
      rara: {
        eyebrow: "RARA agent",
        summary:
          "RARA agent 是可迁移的通用执行成员。它可以从本地执行开始，在云端继续推进，并在环境变化时保持上下文连续。",
        features: [
          "根据任务需求选择本地模型、托管模型或云端模型，避免绑定单一 Provider。",
          "结合工具、文件、搜索、Web、计划、记忆与 Skill，支持不局限于代码的通用任务。",
          "在保留上下文的前提下恢复、分叉或迁移，降低长周期任务的中断风险。",
        ],
      },
    },
    workflow: {
      eyebrow: "它们如何配合",
      title: "平台负责组织协作，Agent 负责持续执行。",
      items: [
        {
          title: "组织工作",
          body: "AgentHub 将目标、任务、责任与结果集中到同一协作空间，便于管理、审查与复盘。",
        },
        {
          title: "移动执行",
          body: "RARA agent 根据任务需要选择本地或云端执行，并在迁移过程中保留上下文。",
        },
        {
          title: "扩展场景",
          body: "同一套团队与 Agent 协作关系，可扩展至研究、运营、自动化、审查等业务场景。",
        },
      ],
    },
  },
  es: {
    meta: {
      title: "Linkerdog - AgentHub y RARA",
      description:
        "Linkerdog usa AgentHub y RARA agent para convertir agentes generales en un equipo que entrega, se mueve y colabora.",
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
      eyebrow: "Agent Teams para trabajo real",
      title: "Convierte agentes generales en un equipo que entrega.",
      lead:
        "AgentHub hace gestionables los objetivos, tareas, avances y resultados. RARA agent ejecuta el trabajo, conserva el contexto y continúa tareas complejas en local o en cloud.",
      agenthubCta: "Ver AgentHub",
      raraCta: "Ver RARA",
      consoleLabel: "Vista previa de la colaboración",
      consoleLines: [
        { prompt: "$", text: "agenthub team create research-ops" },
        { prompt: ">", text: "crear equipo, asignar trabajo, sincronizar avances", tone: "muted" },
        { prompt: "$", text: "rara migrate --target cloud-node-a" },
        { prompt: "ok", text: "conservar contexto y continuar en el mejor lugar", tone: "success" },
      ],
    },
    signals: [
      { title: "Un workspace", body: "gestiona el Agent Team desde un lugar" },
      { title: "Entrega continua", body: "sigue tareas, avances y resultados" },
      { title: "Agente móvil", body: "RARA agent se mueve entre local y cloud" },
      { title: "Trabajo general", body: "investigación, operaciones, automatización y revisión" },
    ],
    projectsLabel: "Resumen de proyectos",
    modelSupport: {
      eyebrow: "Soporte de modelos",
      title: "Elige el modelo para la tarea, no al revés.",
      body:
        "RARA agent conecta con varios proveedores y formas de despliegue. Mantén el trabajo ligero en local, mueve tareas complejas a cloud y conserva el mismo contexto del agente.",
      centerLabel: "RARA agent",
      note: "Codex · Gemini · Kimi · OpenRouter · DeepSeek · AWS Bedrock",
    },
    useCases: {
      eyebrow: "Dónde ayuda",
      title: "Diseñado para trabajo que no cabe en un solo chat.",
      body:
        "AgentHub y RARA agent ayudan cuando el trabajo necesita continuidad, responsabilidad compartida y libertad para mover la ejecución cuando cambian las condiciones.",
      items: [
        {
          title: "Operaciones de investigación",
          body: "Coordina agentes para recopilar fuentes, comparar, sintetizar y revisar manteniendo visibles las decisiones.",
          accent: "Research",
        },
        {
          title: "Automatización de negocio",
          body: "Organiza trabajo recurrente entre herramientas, archivos, tareas web y checkpoints humanos sin reiniciar contexto.",
          accent: "Ops",
        },
        {
          title: "Flujos de revisión",
          body: "Permite que los agentes inspeccionen planes, artefactos y resultados a lo largo del tiempo y entreguen un registro trazable.",
          accent: "Review",
        },
      ],
    },
    projects: {
      agenthub: {
        eyebrow: "Workspace de Agent Team",
        summary:
          "AgentHub convierte varios agentes generales en un equipo digital gestionable: quién tiene cada tarea, en qué punto está y qué produjo queda visible en un solo workspace.",
        features: [
          "Reúne sesiones de agentes dispersas en una vista de equipo más fácil de coordinar y transferir.",
          "Guarda planes, registros de ejecución, material de investigación, decisiones y resultados finales.",
          "Usa tareas, canales y responsabilidades claras para mantener a personas y agentes orientados al mismo objetivo.",
        ],
      },
      rara: {
        eyebrow: "RARA agent",
        summary:
          "RARA agent es un ejecutor general que se puede mover. Puede empezar en local, continuar en cloud y llevar el contexto cuando cambia el entorno.",
        features: [
          "Elige modelos locales, hosted o cloud por tarea sin encerrar el flujo en un solo proveedor.",
          "Lleva herramientas, archivos, búsqueda, web, planificación, memoria y skills para trabajos más allá del código.",
          "Restaura, bifurca o migra conservando contexto para que las tareas largas no vuelvan a empezar.",
        ],
      },
    },
    workflow: {
      eyebrow: "Cómo encajan",
      title: "La plataforma organiza el equipo. El agente termina el trabajo.",
      items: [
        {
          title: "Organiza el trabajo",
          body: "AgentHub mantiene objetivos, tareas, responsabilidades y resultados en un espacio de colaboración que las personas pueden gestionar y revisar.",
        },
        {
          title: "Mueve la ejecución",
          body: "RARA agent elige ejecución local o cloud según la tarea y conserva el contexto cuando se mueve.",
        },
        {
          title: "Amplía los casos",
          body: "Usa el mismo modelo de equipo y agente para investigación, operaciones, automatización, revisión y más trabajo de negocio.",
        },
      ],
    },
  },
  fr: {
    meta: {
      title: "Linkerdog - AgentHub et RARA",
      description:
        "Linkerdog utilise AgentHub et RARA agent pour transformer des agents généraux en une équipe capable de livrer, de se déplacer et de collaborer.",
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
      eyebrow: "Agent Teams pour le travail réel",
      title: "Transformer des agents généraux en une équipe qui livre.",
      lead:
        "AgentHub rend les objectifs, tâches, progrès et résultats pilotables. RARA agent exécute le travail, garde le contexte et poursuit les tâches complexes en local ou dans le cloud.",
      agenthubCta: "Voir AgentHub",
      raraCta: "Voir RARA",
      consoleLabel: "Aperçu de la collaboration",
      consoleLines: [
        { prompt: "$", text: "agenthub team create research-ops" },
        { prompt: ">", text: "créer l'équipe, assigner le travail, synchroniser les progrès", tone: "muted" },
        { prompt: "$", text: "rara migrate --target cloud-node-a" },
        { prompt: "ok", text: "garder le contexte et continuer au meilleur endroit", tone: "success" },
      ],
    },
    signals: [
      { title: "Un workspace", body: "gérer l'Agent Team depuis un seul endroit" },
      { title: "Livraison continue", body: "suivre tâches, progrès et résultats" },
      { title: "Agent mobile", body: "RARA agent passe du local au cloud" },
      { title: "Travail général", body: "recherche, opérations, automatisation et revue" },
    ],
    projectsLabel: "Aperçu des projets",
    modelSupport: {
      eyebrow: "Support des modèles",
      title: "Choisir le modèle pour la tâche, pas l'inverse.",
      body:
        "RARA agent se connecte à plusieurs fournisseurs et modes de déploiement. Gardez les tâches légères en local, déplacez les tâches complexes vers le cloud et conservez le même contexte d'agent.",
      centerLabel: "RARA agent",
      note: "Codex · Gemini · Kimi · OpenRouter · DeepSeek · AWS Bedrock",
    },
    useCases: {
      eyebrow: "Où cela aide",
      title: "Conçu pour le travail qui ne tient pas dans un seul chat.",
      body:
        "AgentHub et RARA agent sont utiles lorsque le travail demande continuité, responsabilité partagée et liberté de déplacer l'exécution selon le contexte.",
      items: [
        {
          title: "Opérations de recherche",
          body: "Coordonner plusieurs agents pour collecter, comparer, synthétiser et relire tout en gardant les décisions visibles.",
          accent: "Research",
        },
        {
          title: "Automatisation métier",
          body: "Organiser le travail récurrent entre outils, fichiers, tâches web et validations humaines sans perdre le contexte.",
          accent: "Ops",
        },
        {
          title: "Flux de revue",
          body: "Laisser les agents inspecter plans, artefacts et résultats dans la durée, puis transmettre un historique traçable.",
          accent: "Review",
        },
      ],
    },
    projects: {
      agenthub: {
        eyebrow: "Workspace Agent Team",
        summary:
          "AgentHub transforme plusieurs agents généraux en une équipe numérique pilotable : qui possède le travail, où il en est et ce qu'il produit restent visibles dans un seul workspace.",
        features: [
          "Rassembler des sessions d'agents dispersées dans une vue d'équipe plus simple à coordonner et transmettre.",
          "Conserver plans, traces d'exécution, matériaux de recherche, décisions et résultats finaux.",
          "Utiliser tâches, canaux et responsabilités claires pour garder humains et agents alignés sur le même objectif.",
        ],
      },
      rara: {
        eyebrow: "RARA agent",
        summary:
          "RARA agent est un exécuteur général mobile. Il peut démarrer en local, continuer dans le cloud et garder le contexte lorsque l'environnement change.",
        features: [
          "Choisir des modèles locaux, hosted ou cloud pour chaque tâche sans enfermer le workflow chez un seul fournisseur.",
          "Emporter outils, fichiers, recherche, web, planification, mémoire et skills pour travailler au-delà du code.",
          "Restaurer, forker ou migrer en conservant le contexte afin que les tâches longues ne redémarrent pas.",
        ],
      },
    },
    workflow: {
      eyebrow: "Comment ils s'articulent",
      title: "La plateforme organise l'équipe. L'agent termine le travail.",
      items: [
        {
          title: "Organiser le travail",
          body: "AgentHub garde objectifs, tâches, responsabilités et résultats dans un espace de collaboration que les humains peuvent piloter et relire.",
        },
        {
          title: "Déplacer l'exécution",
          body: "RARA agent choisit l'exécution locale ou cloud selon la tâche et garde le contexte lorsqu'il se déplace.",
        },
        {
          title: "Élargir les usages",
          body: "Utilisez le même modèle équipe-agent pour la recherche, les opérations, l'automatisation, la revue et d'autres travaux métier.",
        },
      ],
    },
  },
};
