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
      useCases: string;
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
    useCasesCta: string;
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
        "Linkerdog uses AgentHub and RARA agent to run durable agent teams with persistent memory, auditable work records, and movable execution.",
    },
    header: {
      nav: {
        agenthub: "AgentHub",
        rara: "RARA",
        useCases: "Use cases",
        workflow: "Workflow",
      },
      github: "GitHub",
      languageLabel: "Choose language",
    },
    hero: {
      eyebrow: "Agent Teams for real work",
      title: "Turn general agents into a team that delivers.",
      lead:
        "AgentHub gives every goal, owner, handoff, message, and result a durable team workspace. RARA agent carries memory, hooks, diagnostics, and tools across local and cloud execution without losing context.",
      agenthubCta: "View AgentHub",
      raraCta: "View RARA",
      useCasesCta: "Explore use cases",
      consoleLabel: "Runtime relationship preview",
      consoleLines: [
        { prompt: "$", text: "agenthub team create research-ops" },
        { prompt: ">", text: "create the team, assign work, sync progress", tone: "muted" },
        { prompt: "$", text: "rara migrate --target cloud-node-a" },
        { prompt: "ok", text: "keep context and continue in the better place", tone: "success" },
      ],
    },
    signals: [
      { title: "Durable workspace", body: "store team work, messages, and results" },
      { title: "Operational runtime", body: "ship as a service with release packaging" },
      { title: "Context engine", body: "memory search, hooks, and diagnostics stay live" },
      { title: "Movable execution", body: "continue work across local and cloud nodes" },
    ],
    projectsLabel: "Project overview",
    modelSupport: {
      eyebrow: "Model support",
      title: "Choose the model for the task, not the other way around.",
      body:
        "RARA agent connects to multiple providers and deployment shapes while keeping memory, hooks, tools, and runtime diagnostics attached to the same long-running task.",
      centerLabel: "RARA agent",
      note: "Codex · Gemini · Kimi · OpenRouter · DeepSeek · AWS Bedrock",
    },
    useCases: {
      eyebrow: "Where it helps",
      title: "Built for work that does not fit in a single chat.",
      body:
        "AgentHub and RARA agent are useful when the work needs continuity, shared ownership, durable history, and execution that can keep adapting as conditions change.",
      items: [
        {
          title: "Research operations",
          body: "Run multiple agents through source gathering, comparison, synthesis, and review while preserving decisions and message history.",
          accent: "Research",
        },
        {
          title: "Business automation",
          body: "Coordinate recurring work across tools, files, web tasks, hooks, and human checkpoints without restarting context.",
          accent: "Ops",
        },
        {
          title: "Review workflows",
          body: "Let agents inspect code, diagnostics, plans, artifacts, and results over time, then hand off work with a traceable record.",
          accent: "Review",
        },
      ],
    },
    projects: {
      agenthub: {
        eyebrow: "Durable Agent Team runtime",
        summary:
          "AgentHub turns multiple general agents into an operational team runtime: ownership, messages, handoffs, durable storage, and final outcomes stay visible in one workspace.",
        features: [
          "Bring scattered agent sessions into a shared team view with tasks, channels, and clear responsibility.",
          "Persist conversation bodies through tiered storage and a RocksDB-backed body store for long-running team history.",
          "Run AgentHub as deployable infrastructure with release packaging, service defaults, and a lighter routed workbench.",
        ],
      },
      rara: {
        eyebrow: "RARA agent",
        summary:
          "RARA agent is a movable general-purpose executor with memory, hooks, diagnostics, and tool orchestration built into the runtime context.",
        features: [
          "Search memory with local indexes and retrieval tools so resumed work can reuse prior context instead of rebuilding it.",
          "Use hook lifecycles around tool execution to inject policy, automation, and task-specific context at the right phase.",
          "Surface LSP diagnostics, goal evaluation, resume search, tools, files, web, planning, and skills in one execution loop.",
        ],
      },
    },
    workflow: {
      eyebrow: "How they fit together",
      title: "The platform organizes the team. The agent gets the work done.",
      items: [
        {
          title: "Persist the work",
          body: "AgentHub keeps goals, tasks, responsibility, messages, and outcomes in one durable collaboration space for people to manage and review.",
        },
        {
          title: "Enrich execution",
          body: "RARA agent brings memory search, hooks, diagnostics, tools, and model choice into the active task loop.",
        },
        {
          title: "Move when needed",
          body: "Use the same team-and-agent model to continue research, operations, automation, and review across local or cloud environments.",
        },
      ],
    },
  },
  zh: {
    meta: {
      title: "Linkerdog - AgentHub 与 RARA",
      description: "Linkerdog 通过 AgentHub 与 RARA agent，运行具备持久记忆、可审计记录与可迁移执行能力的 Agent Team。",
    },
    header: {
      nav: {
        agenthub: "AgentHub",
        rara: "RARA",
        useCases: "适用场景",
        workflow: "工作流",
      },
      github: "GitHub",
      languageLabel: "选择语言",
    },
    hero: {
      eyebrow: "面向真实工作的 Agent Team",
      title: "将通用 Agent 组织为可持续交付的数字团队。",
      lead:
        "AgentHub 为目标、责任、交接、消息与结果提供持久化团队工作台；RARA agent 将记忆、hooks、诊断与工具带入本地和云端执行过程，迁移时仍保留上下文。",
      agenthubCta: "查看 AgentHub",
      raraCta: "查看 RARA",
      useCasesCta: "查看适用场景",
      consoleLabel: "运行关系预览",
      consoleLines: [
        { prompt: "$", text: "agenthub team create research-ops" },
        { prompt: ">", text: "创建团队、分配任务、同步进展", tone: "muted" },
        { prompt: "$", text: "rara migrate --target cloud-node-a" },
        { prompt: "ok", text: "保留上下文，并迁移到更合适的执行位置", tone: "success" },
      ],
    },
    signals: [
      { title: "持久工作台", body: "保存团队工作、消息与结果" },
      { title: "服务化运行", body: "支持发布包与长期部署" },
      { title: "上下文引擎", body: "记忆搜索、hooks 与诊断持续可用" },
      { title: "跨环境执行", body: "在本地与云端节点之间接续推进" },
    ],
    projectsLabel: "项目概览",
    modelSupport: {
      eyebrow: "模型支持",
      title: "按任务选择模型，而不是被模型绑定。",
      body:
        "RARA agent 支持多种模型 Provider 与部署形态，并将记忆、hooks、工具与运行时诊断绑定到同一个长期任务上下文中。",
      centerLabel: "RARA agent",
      note: "Codex · Gemini · Kimi · OpenRouter · DeepSeek · AWS Bedrock",
    },
    useCases: {
      eyebrow: "适用场景",
      title: "面向需要长期上下文的复杂任务。",
      body:
        "当任务需要持续上下文、明确责任边界、持久历史与可迁移执行能力时，AgentHub 与 RARA agent 可以将通用 Agent 转化为可管理的工作系统。",
      items: [
        {
          title: "研究型工作",
          body: "组织多个 Agent 参与资料收集、对比分析、归纳总结与复核，并保留决策过程、消息历史与结果。",
          accent: "Research",
        },
        {
          title: "业务自动化",
          body: "协调工具、文件、网页任务、hooks 与人工检查点，使周期性工作在环境切换后仍能保持上下文连续。",
          accent: "Ops",
        },
        {
          title: "审查与交接",
          body: "支持 Agent 持续审查代码诊断、计划、产物与结果，并形成可追踪记录，便于团队接续推进。",
          accent: "Review",
        },
      ],
    },
    projects: {
      agenthub: {
        eyebrow: "持久化 Agent Team 运行时",
        summary:
          "AgentHub 将多个通用 Agent 组织为可运营的团队运行时，使责任归属、消息、交接、持久存储与最终产出在同一工作台中保持可见。",
        features: [
          "将分散的 Agent 会话整合为团队视图，通过任务、频道与责任归属降低协作和交接成本。",
          "通过分层存储与 RocksDB body store 持久化 conversation body，支撑长周期团队历史。",
          "以可部署基础设施形态运行，包含发布包、服务默认配置与更轻量的工作台路由。",
        ],
      },
      rara: {
        eyebrow: "RARA agent",
        summary:
          "RARA agent 是可迁移的通用执行成员，将记忆、hooks、诊断与工具编排放入同一个运行时上下文。",
        features: [
          "通过本地索引和检索工具搜索记忆，使恢复后的任务复用已有上下文，而不是重新构建。",
          "围绕工具执行提供 hook lifecycle，在合适阶段注入策略、自动化和任务上下文。",
          "在同一执行循环中整合 LSP 诊断、目标评估、恢复搜索、工具、文件、Web、计划与 Skill。",
        ],
      },
    },
    workflow: {
      eyebrow: "它们如何配合",
      title: "平台负责组织协作，Agent 负责持续执行。",
      items: [
        {
          title: "持久化工作",
          body: "AgentHub 将目标、任务、责任、消息与结果集中到同一持久协作空间，便于管理、审查与复盘。",
        },
        {
          title: "增强执行",
          body: "RARA agent 将记忆搜索、hooks、诊断、工具与模型选择带入当前任务循环。",
        },
        {
          title: "按需迁移",
          body: "同一套团队与 Agent 协作关系，可以在本地或云端环境中接续推进研究、运营、自动化与审查。",
        },
      ],
    },
  },
  es: {
    meta: {
      title: "Linkerdog - AgentHub y RARA",
      description:
        "Linkerdog usa AgentHub y RARA agent para operar equipos de agentes duraderos con memoria persistente, historial auditable y ejecución móvil.",
    },
    header: {
      nav: {
        agenthub: "AgentHub",
        rara: "RARA",
        useCases: "Casos",
        workflow: "Flujo",
      },
      github: "GitHub",
      languageLabel: "Elegir idioma",
    },
    hero: {
      eyebrow: "Agent Teams para trabajo real",
      title: "Convierte agentes generales en un equipo que entrega.",
      lead:
        "AgentHub da un workspace duradero a cada objetivo, responsable, traspaso, mensaje y resultado. RARA agent lleva memoria, hooks, diagnósticos y herramientas entre ejecución local y cloud sin perder contexto.",
      agenthubCta: "Ver AgentHub",
      raraCta: "Ver RARA",
      useCasesCta: "Ver casos de uso",
      consoleLabel: "Vista previa de la colaboración",
      consoleLines: [
        { prompt: "$", text: "agenthub team create research-ops" },
        { prompt: ">", text: "crear equipo, asignar trabajo, sincronizar avances", tone: "muted" },
        { prompt: "$", text: "rara migrate --target cloud-node-a" },
        { prompt: "ok", text: "conservar contexto y continuar en el mejor lugar", tone: "success" },
      ],
    },
    signals: [
      { title: "Workspace duradero", body: "guarda trabajo, mensajes y resultados" },
      { title: "Runtime operativo", body: "se despliega como servicio empaquetado" },
      { title: "Motor de contexto", body: "memoria, hooks y diagnósticos siguen activos" },
      { title: "Ejecución móvil", body: "continúa entre nodos locales y cloud" },
    ],
    projectsLabel: "Resumen de proyectos",
    modelSupport: {
      eyebrow: "Soporte de modelos",
      title: "Elige el modelo para la tarea, no al revés.",
      body:
        "RARA agent conecta con varios proveedores y formas de despliegue mientras mantiene memoria, hooks, herramientas y diagnósticos unidos a la misma tarea larga.",
      centerLabel: "RARA agent",
      note: "Codex · Gemini · Kimi · OpenRouter · DeepSeek · AWS Bedrock",
    },
    useCases: {
      eyebrow: "Dónde ayuda",
      title: "Diseñado para trabajo que no cabe en un solo chat.",
      body:
        "AgentHub y RARA agent ayudan cuando el trabajo necesita continuidad, responsabilidad compartida, historial duradero y ejecución que se adapta cuando cambian las condiciones.",
      items: [
        {
          title: "Operaciones de investigación",
          body: "Coordina agentes para recopilar fuentes, comparar, sintetizar y revisar preservando decisiones e historial de mensajes.",
          accent: "Research",
        },
        {
          title: "Automatización de negocio",
          body: "Organiza trabajo recurrente entre herramientas, archivos, tareas web, hooks y checkpoints humanos sin reiniciar contexto.",
          accent: "Ops",
        },
        {
          title: "Flujos de revisión",
          body: "Permite que los agentes inspeccionen código, diagnósticos, planes, artefactos y resultados en el tiempo con un registro trazable.",
          accent: "Review",
        },
      ],
    },
    projects: {
      agenthub: {
        eyebrow: "Runtime duradero de Agent Team",
        summary:
          "AgentHub convierte varios agentes generales en un runtime operativo de equipo: ownership, mensajes, traspasos, almacenamiento duradero y resultados quedan visibles en un solo workspace.",
        features: [
          "Reúne sesiones de agentes dispersas en una vista de equipo con tareas, canales y responsabilidades claras.",
          "Persiste conversation bodies con almacenamiento por niveles y un body store respaldado por RocksDB para historial largo.",
          "Ejecuta AgentHub como infraestructura desplegable con paquetes de release, defaults de servicio y un workbench más ligero.",
        ],
      },
      rara: {
        eyebrow: "RARA agent",
        summary:
          "RARA agent es un ejecutor general móvil con memoria, hooks, diagnósticos y orquestación de herramientas integrados en el contexto runtime.",
        features: [
          "Busca memoria con índices locales y herramientas de retrieval para reutilizar contexto previo al reanudar el trabajo.",
          "Usa hook lifecycles alrededor de herramientas para inyectar política, automatización y contexto en la fase correcta.",
          "Muestra diagnósticos LSP, evaluación de objetivos, búsqueda de sesiones, herramientas, archivos, web, planificación y skills en un mismo loop.",
        ],
      },
    },
    workflow: {
      eyebrow: "Cómo encajan",
      title: "La plataforma organiza el equipo. El agente termina el trabajo.",
      items: [
        {
          title: "Persiste el trabajo",
          body: "AgentHub mantiene objetivos, tareas, responsabilidades, mensajes y resultados en un espacio duradero que las personas pueden gestionar y revisar.",
        },
        {
          title: "Enriquece la ejecución",
          body: "RARA agent trae memoria, hooks, diagnósticos, herramientas y elección de modelo al loop activo de la tarea.",
        },
        {
          title: "Muévete cuando haga falta",
          body: "Usa el mismo modelo equipo-agente para continuar investigación, operaciones, automatización y revisión entre local y cloud.",
        },
      ],
    },
  },
  fr: {
    meta: {
      title: "Linkerdog - AgentHub et RARA",
      description:
        "Linkerdog utilise AgentHub et RARA agent pour exploiter des équipes d'agents durables avec mémoire persistante, historique auditable et exécution mobile.",
    },
    header: {
      nav: {
        agenthub: "AgentHub",
        rara: "RARA",
        useCases: "Usages",
        workflow: "Flux",
      },
      github: "GitHub",
      languageLabel: "Choisir la langue",
    },
    hero: {
      eyebrow: "Agent Teams pour le travail réel",
      title: "Transformer des agents généraux en une équipe qui livre.",
      lead:
        "AgentHub donne un workspace durable à chaque objectif, responsable, passage de relais, message et résultat. RARA agent transporte mémoire, hooks, diagnostics et outils entre exécution locale et cloud sans perdre le contexte.",
      agenthubCta: "Voir AgentHub",
      raraCta: "Voir RARA",
      useCasesCta: "Voir les usages",
      consoleLabel: "Aperçu de la collaboration",
      consoleLines: [
        { prompt: "$", text: "agenthub team create research-ops" },
        { prompt: ">", text: "créer l'équipe, assigner le travail, synchroniser les progrès", tone: "muted" },
        { prompt: "$", text: "rara migrate --target cloud-node-a" },
        { prompt: "ok", text: "garder le contexte et continuer au meilleur endroit", tone: "success" },
      ],
    },
    signals: [
      { title: "Workspace durable", body: "stocker travail, messages et résultats" },
      { title: "Runtime opérationnel", body: "déployer comme service packagé" },
      { title: "Moteur de contexte", body: "mémoire, hooks et diagnostics restent actifs" },
      { title: "Exécution mobile", body: "continuer entre noeuds locaux et cloud" },
    ],
    projectsLabel: "Aperçu des projets",
    modelSupport: {
      eyebrow: "Support des modèles",
      title: "Choisir le modèle pour la tâche, pas l'inverse.",
      body:
        "RARA agent se connecte à plusieurs fournisseurs et modes de déploiement tout en gardant mémoire, hooks, outils et diagnostics attachés à la même tâche longue.",
      centerLabel: "RARA agent",
      note: "Codex · Gemini · Kimi · OpenRouter · DeepSeek · AWS Bedrock",
    },
    useCases: {
      eyebrow: "Où cela aide",
      title: "Conçu pour le travail qui ne tient pas dans un seul chat.",
      body:
        "AgentHub et RARA agent sont utiles lorsque le travail demande continuité, responsabilité partagée, historique durable et exécution capable de s'adapter.",
      items: [
        {
          title: "Opérations de recherche",
          body: "Coordonner plusieurs agents pour collecter, comparer, synthétiser et relire tout en préservant décisions et historique de messages.",
          accent: "Research",
        },
        {
          title: "Automatisation métier",
          body: "Organiser le travail récurrent entre outils, fichiers, tâches web, hooks et validations humaines sans perdre le contexte.",
          accent: "Ops",
        },
        {
          title: "Flux de revue",
          body: "Laisser les agents inspecter code, diagnostics, plans, artefacts et résultats dans la durée avec un historique traçable.",
          accent: "Review",
        },
      ],
    },
    projects: {
      agenthub: {
        eyebrow: "Runtime Agent Team durable",
        summary:
          "AgentHub transforme plusieurs agents généraux en runtime d'équipe opérationnel : ownership, messages, relais, stockage durable et résultats restent visibles dans un seul workspace.",
        features: [
          "Rassembler des sessions d'agents dispersées dans une vue d'équipe avec tâches, canaux et responsabilités claires.",
          "Persister les conversation bodies via stockage par niveaux et un body store RocksDB pour l'historique long.",
          "Exécuter AgentHub comme infrastructure déployable avec packages de release, defaults de service et workbench allégé.",
        ],
      },
      rara: {
        eyebrow: "RARA agent",
        summary:
          "RARA agent est un exécuteur général mobile avec mémoire, hooks, diagnostics et orchestration d'outils intégrés au contexte runtime.",
        features: [
          "Chercher la mémoire avec index locaux et outils de retrieval pour réutiliser le contexte au lieu de le reconstruire.",
          "Utiliser des hook lifecycles autour des outils pour injecter politique, automatisation et contexte au bon moment.",
          "Afficher diagnostics LSP, évaluation d'objectif, recherche de reprise, outils, fichiers, web, planification et skills dans une même boucle.",
        ],
      },
    },
    workflow: {
      eyebrow: "Comment ils s'articulent",
      title: "La plateforme organise l'équipe. L'agent termine le travail.",
      items: [
        {
          title: "Persister le travail",
          body: "AgentHub garde objectifs, tâches, responsabilités, messages et résultats dans un espace durable que les humains peuvent piloter et relire.",
        },
        {
          title: "Enrichir l'exécution",
          body: "RARA agent apporte mémoire, hooks, diagnostics, outils et choix de modèle dans la boucle active de la tâche.",
        },
        {
          title: "Bouger quand nécessaire",
          body: "Utilisez le même modèle équipe-agent pour continuer recherche, opérations, automatisation et revue entre local et cloud.",
        },
      ],
    },
  },
};
