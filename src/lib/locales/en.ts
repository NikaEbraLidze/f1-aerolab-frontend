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
  },
  presets: {
    title: 'Presets',
    save: 'Save Preset',
    delete: 'Delete',
    namePlaceholder: 'Enter preset name…',
    listEmpty: 'No presets saved yet.',
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
