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
        cta: 'Read docs',
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
} as const;

export default en;

type DeepString<T> = { [K in keyof T]: T[K] extends object ? DeepString<T[K]> : string };
export type Locale = DeepString<typeof en>;
