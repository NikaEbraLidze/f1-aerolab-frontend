const en = {
  nav: {
    home: 'Home',
    simulation: 'Simulation',
    learn: 'Learn',
    build: 'Build',
    mainLabel: 'Main navigation',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  lang: {
    groupLabel: 'Language',
    en: 'EN',
    ka: 'KA',
    switchToEn: 'Switch to English',
    switchToKa: 'Switch to Georgian',
  },
  home: {
    tagline: 'Formula 1 Engineering Playground',
    description:
      'Adjust car parameters in real time and see how aerodynamic forces respond — downforce, drag, grip, and efficiency, live via WebSocket.',
    cta: 'Launch Simulation',
    features: {
      sectionTitle: 'What this does',
      websocket: {
        title: 'Real-time WebSocket',
        description: 'Parameters update instantly via Socket.io — no polling, sub-millisecond response.',
      },
      aeroForces: {
        title: 'Aerodynamic Forces',
        description: 'Downforce, drag, lift, grip and weight transfer calculated live using F1-grade formulas.',
      },
      presets: {
        title: 'Car Presets',
        description: 'Save favourite setups and reload them instantly to compare performance profiles.',
      },
      charts: {
        title: 'Performance Charts',
        description: 'Speed-force curves rendered live as you adjust parameters — 0 to 400 km/h.',
      },
    },
    nav: {
      sectionTitle: 'Explore',
      simulation: {
        title: 'Simulation',
        description: 'Open the live simulator — tune wing angle, speed, weight and drag with instant visual feedback.',
        cta: 'Open simulator',
      },
      learn: {
        title: 'Learn',
        description: 'Understand the physics behind downforce, drag and cornering grip in plain language.',
        cta: 'Read docs',
      },
      build: {
        title: 'Architecture',
        description: 'Explore the NestJS backend, Socket.io gateway, Prisma schema and Next.js frontend.',
        cta: 'View architecture',
      },
    },
  },
  simulation: {
    title: 'Simulation',
    parameters: 'Car Parameters',
    speed: 'Speed',
    wingAngle: 'Wing Angle',
    weight: 'Weight',
    dragCoefficient: 'Drag Coefficient',
    downforce: 'Downforce',
    drag: 'Drag',
    lift: 'Lift',
    aeroEfficiency: 'Aero Efficiency',
    grip: 'Grip',
    weightTransfer: 'Weight Transfer',
    chartTitle: 'Performance Chart',
    launchCta: 'Launch Simulation',
    connected: 'Connected',
    disconnected: 'Disconnected',
  },
  presets: {
    title: 'Presets',
    save: 'Save Preset',
    delete: 'Delete',
    namePlaceholder: 'Enter preset name…',
    listEmpty: 'No presets saved yet.',
  },
  footer: {
    tagline: 'Real-time Formula 1 aerodynamics simulation.',
    copyright: '© 2025 F1 AeroLab',
  },
  errors: {
    connectionFailed: 'Could not connect to simulation server.',
    invalidParams: 'Invalid parameters.',
    loadPresetsFailed: 'Failed to load presets.',
  },
  learn: {
    tagline: 'Documentation',
    title: 'Learn',
    intro:
      'Understand how F1 AeroLab calculates aerodynamic forces — the physics, formulas, and what each metric means.',
    about: {
      title: 'How the system works',
      body:
        'Adjust four car parameters with sliders on the Simulation page. Each change is sent instantly via WebSocket (simulate:update) to the NestJS backend, which runs the aerodynamic formulas and returns simulate:result with live force values and a 41-point speed curve from 0 to 400 km/h in steps of 10.',
    },
    parameters: {
      sectionTitle: 'Input parameters',
      speed: {
        title: 'Speed',
        description:
          'Vehicle speed in km/h (0–400). Converted to m/s before entering force equations. Force scales with the square of speed — doubling speed quadruples downforce and drag.',
      },
      wingAngle: {
        title: 'Wing Angle',
        description:
          'Rear wing angle in degrees (0–30). Controls lift coefficient via Cl = wingAngle × 0.1. Higher angle generates more downforce but also increases drag.',
      },
      weight: {
        title: 'Weight',
        description:
          'Car mass in kg (600–1000). Used in the grip ratio calculation. Heavier cars have more mechanical grip from weight alone, but the same aero downforce adds proportionally less.',
      },
      dragCoefficient: {
        title: 'Drag Coefficient',
        description:
          'Dimensionless Cd value (0.1–2.0). Represents how streamlined the car is. Lower Cd reduces drag; higher Cd simulates more bodywork or open aero settings.',
      },
    },
    constants: {
      sectionTitle: 'Physics constants',
      rho: {
        symbol: 'ρ',
        value: '1.225',
        unit: 'kg/m³',
        description: 'Air density at sea level',
      },
      area: {
        symbol: 'A',
        value: '1.5',
        unit: 'm²',
        description: 'Reference frontal area of the car',
      },
      gravity: {
        symbol: 'g',
        value: '9.81',
        unit: 'm/s²',
        description: 'Gravitational acceleration',
      },
      wheelbase: {
        symbol: 'Wheelbase',
        value: '3.6',
        unit: 'm',
        description: 'Distance between front and rear axles',
      },
      cgHeight: {
        symbol: 'CG height',
        value: '0.3',
        unit: 'm',
        description: 'Centre of gravity height above ground',
      },
      brakingAccel: {
        symbol: 'Braking decel.',
        value: '30',
        unit: 'm/s²',
        description: 'Typical F1 braking deceleration (~3g)',
      },
    },
    formulas: {
      sectionTitle: 'Formulas',
      speedConversion: {
        title: 'Speed conversion',
        formula: 'v = speed / 3.6',
        variables: 'speed — km/h, v — m/s',
        explanation: 'All force equations use SI units. Speed from the slider is converted from km/h to m/s before calculation.',
      },
      liftCoefficient: {
        title: 'Lift coefficient',
        formula: 'Cl = wingAngle × 0.1',
        variables: 'wingAngle — degrees, Cl — dimensionless lift coefficient',
        explanation: 'A simplified linear model: each degree of wing angle adds 0.1 to the lift coefficient. At 0° there is no aero downforce.',
      },
      downforce: {
        title: 'Downforce',
        formula: 'F_d = ½ × ρ × v² × Cl × A',
        variables: 'ρ — air density, v — speed (m/s), Cl — lift coefficient, A — frontal area',
        explanation: 'Standard aerodynamic force equation. Downforce pushes the car into the track, increasing cornering grip. Result is in newtons (N).',
      },
      drag: {
        title: 'Drag',
        formula: 'F_drag = ½ × ρ × v² × Cd × A',
        variables: 'ρ — air density, v — speed (m/s), Cd — drag coefficient, A — frontal area',
        explanation: 'Resistance force opposing forward motion. Higher drag reduces top speed and increases fuel/energy consumption.',
      },
      lift: {
        title: 'Lift',
        formula: 'Lift = −Downforce',
        variables: 'Downforce — calculated downforce in N',
        explanation: 'In this model, lift is the exact negative of downforce. Negative lift means the car is pushed downward rather than upward.',
      },
      efficiency: {
        title: 'Aero efficiency',
        formula: 'Efficiency = Downforce / Drag',
        variables: 'Downforce, Drag — both in N',
        explanation: 'Ratio of downforce produced per unit of drag incurred. Higher is better — more grip for less speed penalty. Returns 0 when drag is zero.',
      },
      grip: {
        title: 'Grip',
        formula: 'Grip = (Downforce + weight × g) / (weight × g)',
        variables: 'Downforce — N, weight — kg, g — 9.81 m/s²',
        explanation: 'Total vertical load on tyres relative to weight alone. A value of 1.0 means no aero contribution; above 1.0 means downforce adds extra grip.',
      },
      weightTransfer: {
        title: 'Weight transfer',
        formula: 'WT = (weight × 30 × 0.3) / 3.6',
        variables: 'weight — kg; 30 — braking decel. (m/s²); 0.3 — CG height (m); 3.6 — wheelbase (m)',
        explanation: 'Load shift to the front wheels under heavy braking (~3g). Higher values mean more forward weight transfer, affecting brake balance and front tyre load.',
      },
    },
    outputs: {
      sectionTitle: 'Output metrics',
      downforce: {
        title: 'Downforce',
        description: 'Force pushing the car into the track (N). More downforce means more grip in corners but also more drag.',
      },
      drag: {
        title: 'Drag',
        description: 'Resistance force against forward motion (N). Limits top speed and costs lap time on straights.',
      },
      lift: {
        title: 'Lift',
        description: 'Vertical aero force (N). Always negative in this model — the car is pushed down, not up.',
      },
      aeroEfficiency: {
        title: 'Aero efficiency',
        description: 'Downforce-to-drag ratio. Teams optimise wing settings to maximise this on each circuit.',
      },
      grip: {
        title: 'Grip',
        description: 'Total tyre load factor. Values above 1.0 indicate aerodynamic grip beyond the car\'s weight alone.',
      },
      weightTransfer: {
        title: 'Weight transfer',
        description: 'Forward load shift under braking (N). Affects braking stability and front-tyre wear.',
      },
    },
    cta: {
      text: 'Ready to experiment? Open the simulator and watch these forces update live.',
      button: 'Launch Simulation',
    },
  },
  build: {
    tagline: 'Architecture',
    title: 'Build',
    intro:
      'How F1 AeroLab is built — two repositories, a NestJS API with PostgreSQL, and a Next.js frontend connected via Socket.io in real time.',
    overview: {
      title: 'Project overview',
      body:
        'F1 AeroLab is an educational full-stack playground for Formula 1 aerodynamics. The backend was built first to define a stable API contract; the frontend consumes REST for presets and WebSocket for live simulation. Phase 1 (current) covers core simulation and preset storage — no auth, no AI yet.',
    },
    repos: {
      sectionTitle: 'Repositories',
      backend: {
        title: 'f1-aerolab-backend',
        description:
          'NestJS API on port 3001. Owns aerodynamic calculations (AeroService), WebSocket gateway, REST endpoints, and Prisma persistence for car presets.',
      },
      frontend: {
        title: 'f1-aerolab-frontend',
        description:
          'Next.js App Router UI on port 3000. Parameter sliders, live Recharts graphs, preset management, and localized Learn/Build documentation pages.',
      },
    },
    dataFlow: {
      title: 'Real-time data flow',
      body:
        'User moves a slider → useSimulation hook debounces and emits simulate:update via Socket.io → SimulationGateway validates the DTO and calls SimulationService → AeroService runs pure math → simulate:result is emitted back → Zustand store updates → StatCards and AeroChart re-render instantly.',
    },
    phases: {
      sectionTitle: 'Development phases',
      phase1: {
        title: 'Phase 1 — Core simulation',
        description:
          'NestJS calculation engine, PostgreSQL + Prisma (Preset model), WebSocket gateway, REST API, Next.js simulation UI with sliders, charts, and preset CRUD. Current phase.',
      },
      phase2: {
        title: 'Phase 2 — AI explanations',
        description:
          'OpenAI integration via AiModule in the backend. AI generates plain-English explanations when parameters change; responses stored per session. Frontend adds an explanation panel.',
      },
      phase3: {
        title: 'Phase 3 — Full platform',
        description:
          'Learning and Build pages (this page), optional user accounts, 3D visualization groundwork, and expanded educational content.',
      },
    },
    frontend: {
      sectionTitle: 'Frontend stack',
      nextjs: {
        title: 'Next.js 16',
        description: 'App Router framework — routing, layout, metadata, and static page generation.',
      },
      react: {
        title: 'React 19',
        description: 'UI library. Client components for interactive simulation; server layout for SEO metadata.',
      },
      typescript: {
        title: 'TypeScript 5',
        description: 'Strict typing across components, hooks, stores, and API response shapes.',
      },
      tailwind: {
        title: 'Tailwind CSS 4',
        description: 'Utility-first styling. Design tokens defined in globals.css via @theme — F1 brand palette and semantic chart colors.',
      },
      zustand: {
        title: 'Zustand 5',
        description: 'Lightweight global state for simulation params/results, presets list, and locale — no fetch logic inside stores.',
      },
      socketio: {
        title: 'Socket.io-client',
        description: 'WebSocket connection to the NestJS gateway for live simulate:update / simulate:result events.',
      },
      recharts: {
        title: 'Recharts',
        description: 'Speed–force performance chart with 41 data points (0–400 km/h). Dynamically imported to avoid SSR issues.',
      },
    },
    backend: {
      sectionTitle: 'Backend stack',
      nestjs: {
        title: 'NestJS 11',
        description: 'Modular framework — controllers for REST, gateways for WebSocket, injectable services for business logic.',
      },
      prisma: {
        title: 'Prisma ORM',
        description: 'Type-safe database access, schema migrations, and generated client injected via global PrismaModule.',
      },
      postgresql: {
        title: 'PostgreSQL',
        description: 'Local relational database (f1_aerolab). No Docker — created manually via psql.',
      },
      socketio: {
        title: 'Socket.io',
        description: '@nestjs/websockets + @nestjs/platform-socket.io for real-time bidirectional simulation updates.',
      },
      validation: {
        title: 'class-validator',
        description: 'DTO validation on every HTTP body and WebSocket payload via global ValidationPipe.',
      },
      config: {
        title: '@nestjs/config',
        description: 'Environment variables — DATABASE_URL, CORS_ORIGIN, port configuration from .env.',
      },
      swagger: {
        title: 'Swagger',
        description: 'Auto-generated interactive API docs at /api/docs when the backend is running.',
      },
    },
    modules: {
      sectionTitle: 'Backend modules',
      aero: {
        title: 'AeroModule',
        description: 'Pure aerodynamic math in AeroService — no DB, no side effects. Same input always produces the same output.',
      },
      simulation: {
        title: 'SimulationModule',
        description: 'SimulationGateway (WebSocket), SimulationController (REST /simulation/run), and SimulationService orchestration.',
      },
      presets: {
        title: 'PresetsModule',
        description: 'CRUD for saved car setups — PresetsController + PresetsService with Prisma queries.',
      },
      prisma: {
        title: 'PrismaModule',
        description: 'Global PrismaService client exported to all modules that need database access.',
      },
      health: {
        title: 'HealthController',
        description: 'GET /health — simple uptime check for monitoring and dev tooling.',
      },
    },
    frontendArch: {
      sectionTitle: 'Frontend architecture',
      appRouter: {
        title: 'App Router',
        description: 'Routes in src/app/ — home, simulation, learn, build. Thin page components compose hooks and presentational cards.',
      },
      zustand: {
        title: 'Zustand stores',
        description: 'simulationStore (params, result, connection state), presetsStore, localeStore — data only, no side effects.',
      },
      hooks: {
        title: 'Custom hooks',
        description: 'useSimulation manages the socket lifecycle; usePresets handles REST CRUD; useLocale resolves en/ka strings.',
      },
      locales: {
        title: 'Localization',
        description: 'All UI text in src/lib/locales/en.ts and ka.ts. Type-safe Locale type ensures both files stay in sync.',
      },
      components: {
        title: 'Component layers',
        description: 'ui/ primitives, cards/ and forms/ for composition, shared/ for Header/Footer. Components render — hooks orchestrate.',
      },
    },
    database: {
      sectionTitle: 'Database schema',
      intro:
        'Phase 1 uses a minimal Prisma schema — a single Preset model for saved car configurations. Simulation results are computed on the fly and never persisted.',
      id: { field: 'id', type: 'String', description: 'Primary key — cuid generated by Prisma' },
      name: { field: 'name', type: 'String', description: 'User-defined preset label' },
      speed: { field: 'speed', type: 'Float', description: 'Car speed in km/h (0–400)' },
      wingAngle: { field: 'wingAngle', type: 'Float', description: 'Rear wing angle in degrees (0–30)' },
      weight: { field: 'weight', type: 'Float', description: 'Car mass in kg (600–1000)' },
      dragCoefficient: { field: 'dragCoefficient', type: 'Float', description: 'Drag coefficient Cd (0.1–2.0)' },
      createdAt: { field: 'createdAt', type: 'DateTime', description: 'Auto-set on create' },
      updatedAt: { field: 'updatedAt', type: 'DateTime', description: 'Auto-updated on save' },
    },
    rest: {
      sectionTitle: 'REST API',
      health: {
        method: 'GET',
        path: '/health',
        description: 'Health check — returns server status.',
      },
      simulationRun: {
        method: 'POST',
        path: '/simulation/run',
        description: 'One-shot aerodynamic calculation without WebSocket. Same result shape as simulate:result.',
      },
      presetsList: {
        method: 'GET',
        path: '/presets',
        description: 'List all saved presets ordered by creation date.',
      },
      presetsCreate: {
        method: 'POST',
        path: '/presets',
        description: 'Save a new preset with name and four car parameters.',
      },
      presetsGet: {
        method: 'GET',
        path: '/presets/:id',
        description: 'Fetch a single preset by ID.',
      },
      presetsDelete: {
        method: 'DELETE',
        path: '/presets/:id',
        description: 'Delete a preset permanently.',
      },
    },
    websocket: {
      sectionTitle: 'WebSocket events',
      simulateUpdate: {
        direction: 'Client → Server',
        event: 'simulate:update',
        description: 'Payload: { speed, wingAngle, weight, dragCoefficient }. Sent on every slider change.',
      },
      simulateResult: {
        direction: 'Server → Client',
        event: 'simulate:result',
        description: 'Returns downforce, drag, lift, aeroEfficiency, grip, weightTransfer, and 41-point chartData.',
      },
      simulateError: {
        direction: 'Server → Client',
        event: 'simulate:error',
        description: 'Validation or calculation error — { code, message, details }.',
      },
    },
    cta: {
      text: 'See the physics behind the numbers on the Learn page, or jump straight into the simulator.',
      learnButton: 'Read Learn docs',
      simButton: 'Launch Simulation',
    },
  },
} as const;

export default en;

type DeepString<T> = { [K in keyof T]: T[K] extends object ? DeepString<T[K]> : string };
export type Locale = DeepString<typeof en>;
