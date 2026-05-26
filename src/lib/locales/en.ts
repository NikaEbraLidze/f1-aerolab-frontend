const en = {
  nav: {
    simulation: 'Simulation',
    learn: 'Learn',
    build: 'Build',
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
        cta: 'Coming soon',
      },
      build: {
        title: 'Architecture',
        description: 'Explore the NestJS backend, Socket.io gateway, Prisma schema and Next.js frontend.',
        cta: 'Coming soon',
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
} as const;

export default en;

type DeepString<T> = { [K in keyof T]: T[K] extends object ? DeepString<T[K]> : string };
export type Locale = DeepString<typeof en>;
