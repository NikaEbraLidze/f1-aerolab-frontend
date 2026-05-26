import type { Locale } from './en';

const ka = {
  nav: {
    home: 'მთავარი',
    simulation: 'სიმულაცია',
    learn: 'სწავლა',
    build: 'არქიტექტურა',
    mainLabel: 'მთავარი მენიუ',
    openMenu: 'მენიუს გახსნა',
    closeMenu: 'მენიუს დახურვა',
  },
  lang: {
    groupLabel: 'ენა',
    en: 'EN',
    ka: 'KA',
    switchToEn: 'ინგლისურზე გადართვა',
    switchToKa: 'ქართულზე გადართვა',
  },
  theme: {
    groupLabel: 'თემა',
    dark: 'მუქი',
    light: 'ღია',
    switchToDark: 'მუქი რეჟიმზე გადართვა',
    switchToLight: 'ღია რეჟიმზე გადართვა',
  },
  home: {
    tagline: 'ფორმულა 1 საინჟინრო გარემო',
    description:
      'დაარეგულირეთ მანქანის პარამეტრები რეალურ დროში და დააკვირდით, როგორ რეაგირებს აეროდინამიკური ძალები — ქვედა ძალა, წინაღობა, შეჭიდულობა და ეფექტიანობა, ცოცხლად WebSocket-ის საშუალებით.',
    cta: 'სიმულაციის გაშვება',
    features: {
      sectionTitle: 'რა შეგიძლიათ',
      websocket: {
        title: 'რეალური WebSocket',
        description: 'პარამეტრები განახლდება Socket.io-ს საშუალებით მყისიერად — გამოკითხვის გარეშე.',
      },
      aeroForces: {
        title: 'აეროდინამიკური ძალები',
        description: 'ქვედა ძალა, წინაღობა, ამწე ძალა და შეჭიდულობა გამოითვლება ცოცხლად F1 ფორმულებით.',
      },
      presets: {
        title: 'მანქანის პრეფსეტები',
        description: 'შეინახეთ საყვარელი კონფიგურაციები და ჩატვირთეთ მყისიერად შესადარებლად.',
      },
      charts: {
        title: 'სიჩქარის გრაფიკები',
        description: 'ძალა-სიჩქარის მრუდები განახლდება ცოცხლად — 0-დან 400 კმ/სთ-მდე.',
      },
    },
    nav: {
      sectionTitle: 'გამოიკვლიეთ',
      simulation: {
        title: 'სიმულაცია',
        description: 'გახსენით ცოცხალი სიმულატორი — დაარეგულირეთ ფრთის კუთხე, სიჩქარე, წონა და წინაღობა.',
        cta: 'სიმულატორის გახსნა',
      },
      learn: {
        title: 'სწავლა',
        description: 'გაიგეთ ქვედა ძალის, წინაღობის და კუთხეში შეჭიდულობის ფიზიკა მარტივად.',
        cta: 'დოკუმენტაცია',
      },
      build: {
        title: 'არქიტექტურა',
        description: 'გამოიკვლიეთ NestJS backend, Socket.io გეითვეი, Prisma სქემა და Next.js frontend.',
        cta: 'არქიტექტურა',
      },
    },
  },
  simulation: {
    title: 'სიმულაცია',
    parameters: 'მანქანის პარამეტრები',
    speed: 'სიჩქარე',
    wingAngle: 'ფრთის კუთხე',
    weight: 'წონა',
    dragCoefficient: 'წინაღობის კოეფიციენტი',
    downforce: 'მიწისაკენ ძალა',
    drag: 'წინაღობა',
    lift: 'ამწე ძალა',
    aeroEfficiency: 'აეროდინამიკური ეფექტიანობა',
    grip: 'შეჭიდულობა',
    weightTransfer: 'წონის გადანაწილება',
    chartTitle: 'სიჩქარის გრაფიკი',
    launchCta: 'სიმულაციის გაშვება',
    connected: 'დაკავშირებულია',
    disconnected: 'გათიშულია',
  },
  presets: {
    title: 'პრეფსეტები',
    save: 'პრეფსეტის შენახვა',
    delete: 'წაშლა',
    namePlaceholder: 'შეიყვანეთ პრეფსეტის სახელი…',
    listEmpty: 'პრეფსეტები არ არის შენახული.',
  },
  footer: {
    tagline: 'ფ1 აეროდინამიკის სიმულაცია რეალურ დროში.',
    copyright: '© 2025 F1 AeroLab',
  },
  errors: {
    connectionFailed: 'სიმულაციის სერვერთან დაკავშირება ვერ მოხერხდა.',
    invalidParams: 'არასწორი პარამეტრები.',
    loadPresetsFailed: 'პრეფსეტების ჩატვირთვა ვერ მოხერხდა.',
  },
  learn: {
    tagline: 'დოკუმენტაცია',
    title: 'სწავლა',
    intro:
      'გაიგეთ, როგორ ითვლის F1 AeroLab აეროდინამიკურ ძალებს — ფიზიკა, ფორმულები და თითოეული მეტრიკის მნიშვნელობა.',
    about: {
      title: 'როგორ მუშაობს სისტემა',
      body:
        'დაარეგულირეთ ოთხი პარამეტრი სლაიდერებით სიმულაციის გვერდზე. ყოველი ცვლილება WebSocket-ით (simulate:update) იგზავნება NestJS backend-ში, რომელიც აეროდინამიკურ ფორმულებს ასრულებს და აბრუნებს simulate:result-ს ცოცხალი ძალებით და 41-წერტილიან სიჩქარის მრუდს 0-დან 400 კმ/სთ-მდე, 10-ის ბიჯით.',
    },
    parameters: {
      sectionTitle: 'შემავალი პარამეტრები',
      speed: {
        title: 'სიჩქარე',
        description:
          'მანქანის სიჩქარე კმ/სთ-ში (0–400). გარდაიქმნება m/s-ში ძალის ფორმულებში. სიჩქარის გაორმაგება ოთხჯერ ზრდის ქვედა ძალას და წინაღობას.',
      },
      wingAngle: {
        title: 'ფრთის კუთხე',
        description:
          'უკანა ფრთის კუთხე გრადუსებში (0–30). აკონტროლებს ამწე კოეფიციენტს Cl = wingAngle × 0.1. მაღალი კუთხე უფრო მეტ ქვედა ძალას, მაგრამ მეტ წინაღობასაც ქმნის.',
      },
      weight: {
        title: 'წონა',
        description:
          'მანქანის მასა კგ-ში (600–1000). გამოიყენება შეჭიდულობის კოეფიციენტის გამოსათვლელად. მძიმე მანქანას მექანიკური შეჭიდულობა მეტი აქვს, მაგრამ იგივე აერო ქვედა ძალა პროპორციულად ნაკლებს ამატებს.',
      },
      dragCoefficient: {
        title: 'წინაღობის კოეფიციენტი',
        description:
          'უგანზომილებო Cd მნიშვნელობა (0.1–2.0). ასახავს მანქანის აეროდინამიკურობას. დაბალი Cd ამცირებს წინაღობას; მაღალი Cd უფრო ღია აერო კონფიგურაციას ასიმულირებს.',
      },
    },
    constants: {
      sectionTitle: 'ფიზიკური მუდმივები',
      rho: {
        symbol: 'ρ',
        value: '1.225',
        unit: 'kg/m³',
        description: 'ჰაერის სიმძიმე ზღვის დონეზე',
      },
      area: {
        symbol: 'A',
        value: '1.5',
        unit: 'm²',
        description: 'მანქანის ფრონტალური ფართობი',
      },
      gravity: {
        symbol: 'g',
        value: '9.81',
        unit: 'm/s²',
        description: 'მოკვერცხის ბრუნვის აჩქარება',
      },
      wheelbase: {
        symbol: 'ბაზა',
        value: '3.6',
        unit: 'm',
        description: 'წინა და უკანა ღერძებს შორის მანძილი',
      },
      cgHeight: {
        symbol: 'CG სიმაღლე',
        value: '0.3',
        unit: 'm',
        description: 'მასის ცენტრის სიმაღლე ზედაპირის ზემოთ',
      },
      brakingAccel: {
        symbol: 'დამუხრუჭების აჩქ.',
        value: '30',
        unit: 'm/s²',
        description: 'ტიპური F1 დამუხრუჭების აჩქარება (~3g)',
      },
    },
    formulas: {
      sectionTitle: 'ფორმულები',
      speedConversion: {
        title: 'სიჩქარის გარდაქმნა',
        formula: 'v = speed / 3.6',
        variables: 'speed — კმ/სთ, v — m/s',
        explanation: 'ყველა ძალის ფორმული SI ერთეულებს იყენებს. სლაიდერის სიჩქარე კმ/სთ-დან m/s-ში გარდაიქმნება.',
      },
      liftCoefficient: {
        title: 'ამწე კოეფიციენტი',
        formula: 'Cl = wingAngle × 0.1',
        variables: 'wingAngle — გრადუსი, Cl — უგანზომილებო ამწე კოეფიციენტი',
        explanation: 'გამარტივებული ხაზოვანი მოდელი: ფრთის ყოველი გრადუსი 0.1-ით ზრდის ამწე კოეფიციენტს. 0°-ზე აერო ქვედა ძალა არ არის.',
      },
      downforce: {
        title: 'მიწისაკენ ძალა',
        formula: 'F_d = ½ × ρ × v² × Cl × A',
        variables: 'ρ — ჰაერის სიმძიმე, v — სიჩქარე (m/s), Cl — ამწე კოეფ., A — ფრონტ. ფართობი',
        explanation: 'სტანდარტული აეროდინამიკური ძალის ფორმული. ქვედა ძალა მანქანას ტრასში აჭერინებს და ზრდის კუთხეში შეჭიდულობას. შედეგი ნიუტონებში (N).',
      },
      drag: {
        title: 'წინაღობა',
        formula: 'F_drag = ½ × ρ × v² × Cd × A',
        variables: 'ρ — ჰაერის სიმძიმე, v — სიჩქარე (m/s), Cd — წინაღობის კოeficienti, A — ფრონტ. ფართობი',
        explanation: 'წინააღმდეგობის ძალა, რომელიც უშლის წინ სვლას. მაღალი წინაღობა ამცირებს მაქს. სიჩქარეს.',
      },
      lift: {
        title: 'ამწე ძალა',
        formula: 'Lift = −Downforce',
        variables: 'Downforce — გამოთვლილი ქვედა ძალა N-ში',
        explanation: 'ამ მოდელში ამწე ძალა ზუსტად ქვედა ძალის საპირისპიროა. უარყოფითი ამწე ნიშნავს, რომ მანქანა ქვემოთ იჭერება.',
      },
      efficiency: {
        title: 'აეროდინამიკური ეფექტიანობა',
        formula: 'Efficiency = Downforce / Drag',
        variables: 'Downforce, Drag — ორივე N-ში',
        explanation: 'ქვედა ძალისა და წინაღობის თანაფარდობა. მაღალი უკეთესია — მეტი შეჭიდულობა ნაკლები სიჩქარის დანაკარგით. 0-ს აბრუნებს, როცა წინაღობა 0-ია.',
      },
      grip: {
        title: 'შეჭიდულობა',
        formula: 'Grip = (Downforce + weight × g) / (weight × g)',
        variables: 'Downforce — N, weight — kg, g — 9.81 m/s²',
        explanation: 'საბურავებზე დატვირთვის ჯამი წონასთან შედარებით. 1.0 ნიშნავს აეროს გარეშე; 1.0-ზე მაღალი — ქვედა ძალა ამატებს შეჭიდულობას.',
      },
      weightTransfer: {
        title: 'წონის გადანაწილება',
        formula: 'WT = (weight × 30 × 0.3) / 3.6',
        variables: 'weight — kg; 30 — დამუხრუჭების აჩქ. (m/s²); 0.3 — CG სიმაღლე (m); 3.6 — ბაზა (m)',
        explanation: 'წინა ღერძზე დატვირთვის გადაცემა მძიმე დამუხრუჭებისას (~3g). მაღალი მნიშვნელობა — მეტი წინა დატვირთვა.',
      },
    },
    outputs: {
      sectionTitle: 'გამომავალი მეტრიკები',
      downforce: {
        title: 'მიწისაკენ ძალა',
        description: 'ძალა, რომელიც მანქანას ტრასში აჭერინებს (N). მეტი ქვედა ძალა — მეტი შეჭიდულობა კუთხეში, მაგრამ მეტი წინაღობაც.',
      },
      drag: {
        title: 'წინაღობა',
        description: 'წინააღმდეგობის ძალა (N). ზღუდავს მაქს. სიჩქარეს და ზიანს აყენებს სწორზე.',
      },
      lift: {
        title: 'ამწე ძალა',
        description: 'ვertikaluri აერო ძალა (N). ამ მოდელში ყოველთვის უარყოფითია — მანქანა ქვემოთ იჭერება.',
      },
      aeroEfficiency: {
        title: 'აეროდინამიკური ეფექტიანობა',
        description: 'ქვედა ძალა/წინაღობის თანაფარდობა. გუნდები აუმჯობესებენ ფრთის კონფიგურაციას თითოეული ტრასისთვის.',
      },
      grip: {
        title: 'შეჭიდულობა',
        description: 'საბურავებზე საერთო დატვირთვის გამყოფი. 1.0-ზე მაღალი — აეროდინამიკური შეჭიდულობა წონას მიყევებს.',
      },
      weightTransfer: {
        title: 'წონის გადანაწილება',
        description: 'წინა დატვირთვის ცვლილება დამუხრუჭებისას (N). გავლენას ახდენს დამუხრუჭების სტაბილურობაზე.',
      },
    },
    cta: {
      text: 'მზად ხართ ექსპერიმენტებისთვის? გახსენით სიმულატორი და დააკვირდით ძალების ცოცხალ განახლებას.',
      button: 'სიმულაციის გაშვება',
    },
  },
  build: {
    tagline: 'არქიტექტურა',
    title: 'Build',
    intro:
      'როგორ არის აგებული F1 AeroLab — ორი რეპozitori, NestJS API PostgreSQL-ით და Next.js frontend Socket.io-ს real-time კავშირით.',
    overview: {
      title: 'პროექტის მიმოხილვა',
      body:
        'F1 AeroLab არის საგანმანათლებლო full-stack გარემო F1 აეროდინამიკისთვის. Backend პირველად აიგო სtable API კონტraktisთვის; frontend იყენებს REST-ს preset-ებისთვის და WebSocket-ს live სიმულაციისთვის. ფaza 1 (მიმდინარე) — core სიმულაცია და preset-ების შენახვა, auth-ისა და AI-ის გარეშე.',
    },
    repos: {
      sectionTitle: 'რეპozitoriები',
      backend: {
        title: 'f1-aerolab-backend',
        description:
          'NestJS API პორტ 3001-ზე. ფლინავს აეროდინამიკურ გამოთვლებს (AeroService), WebSocket gateway-ს, REST endpoint-ებს და Prisma preset-ების შენახვას.',
      },
      frontend: {
        title: 'f1-aerolab-frontend',
        description:
          'Next.js App Router UI პორტ 3000-ზე. სლაიდერები, live Recharts გრაფიკები, preset-ების მართვა და ლოკalizirebuli Learn/Build გვერდები.',
      },
    },
    dataFlow: {
      title: 'Real-time მონაცემთა ნflowი',
      body:
        'მომხმარებელი სlaider-ს moves → useSimulation hook debounce-ს და emit-ს simulate:update Socket.io-ით → SimulationGateway ამოწმებს DTO-ს და იძახებს SimulationService-ს → AeroService pure math-ს → simulate:result ბრუნდება → Zustand store განახლდება → StatCards და AeroChart re-render-დება.',
    },
    phases: {
      sectionTitle: 'განვითარების ფazები',
      phase1: {
        title: 'ფaza 1 — Core სიმულაცია',
        description:
          'NestJS გამოთვლის engine, PostgreSQL + Prisma (Preset მodeli), WebSocket gateway, REST API, Next.js სიმულაციის UI სლაიდerებით, გrafikებით და preset CRUD-ით. მიმდინარე ფaza.',
      },
      phase2: {
        title: 'ფaza 2 — AI ახსნები',
        description:
          'OpenAI ინტegratsia AiModule-ით backend-ში. AI ქმნის plain-English ახსნებს პარამეტრების ცვლილebisას; პასუხები ინახება session-ში. Frontend-ში explanation panel.',
      },
      phase3: {
        title: 'ფaza 3 — სრული პlatforma',
        description:
          'Learn და Build გვერდები, optional user account-ები, 3D vizualizatsiis საფundaმento და გაფართოებული საგანმანათლებლო კონტentი.',
      },
    },
    frontend: {
      sectionTitle: 'Frontend stack',
      nextjs: {
        title: 'Next.js 16',
        description: 'App Router framework — routing, layout, metadata და static გვერდების generation.',
      },
      react: {
        title: 'React 19',
        description: 'UI library. Client components ინტeraktivi სიმუ�ulatsiistvis; server layout SEO metadata-სთვის.',
      },
      typescript: {
        title: 'TypeScript 5',
        description: 'Strict typing კომponentebs, hook-ებს, store-ებს და API response shape-ებში.',
      },
      tailwind: {
        title: 'Tailwind CSS 4',
        description: 'Utility-first styling. Design token-ები globals.css-ში @theme-ით — F1 brand palette და semantic chart ფerები.',
      },
      zustand: {
        title: 'Zustand 5',
        description: 'მსუბუქი global state სიმulatsiis params/result, preset-ების სიისა და locale-სთვის — fetch ლogiкa store-ებში არ არის.',
      },
      socketio: {
        title: 'Socket.io-client',
        description: 'WebSocket კავშირი NestJS gateway-თან live simulate:update / simulate:result event-ებისთვის.',
      },
      recharts: {
        title: 'Recharts',
        description: 'სიჩქარე–ძala performance chart 41 data point-ით (0–400 km/h). Dynamic import SSR პრობlemის თავიდან ასაცილებლად.',
      },
    },
    backend: {
      sectionTitle: 'Backend stack',
      nestjs: {
        title: 'NestJS 11',
        description: 'Modular framework — REST controller-ები, WebSocket gateway-ები, injectable service-ები business logic-ისთვის.',
      },
      prisma: {
        title: 'Prisma ORM',
        description: 'Type-safe DB access, schema migration-ები და generated client global PrismaModule-ით.',
      },
      postgresql: {
        title: 'PostgreSQL',
        description: 'ლოკalური relational DB (f1_aerolab). Docker-ის გარეშე — psql-ით ხელით შექმნა.',
      },
      socketio: {
        title: 'Socket.io',
        description: '@nestjs/websockets + @nestjs/platform-socket.io real-time bidirectional სიმulatsiis განახლებებისთვის.',
      },
      validation: {
        title: 'class-validator',
        description: 'DTO validation ყოველ HTTP body-სა და WebSocket payload-ზე global ValidationPipe-ით.',
      },
      config: {
        title: '@nestjs/config',
        description: 'Environment variable-ები — DATABASE_URL, CORS_ORIGIN, port .env-დან.',
      },
      swagger: {
        title: 'Swagger',
        description: 'Auto-generated interactive API docs /api/docs-ზე backend-ის გაშვებისას.',
      },
    },
    modules: {
      sectionTitle: 'Backend module-ები',
      aero: {
        title: 'AeroModule',
        description: 'Pure აეროდინამიკური math AeroService-ში — DB-ისა და side effect-ების გარეშე.',
      },
      simulation: {
        title: 'SimulationModule',
        description: 'SimulationGateway (WebSocket), SimulationController (REST /simulation/run) და SimulationService orchestration.',
      },
      presets: {
        title: 'PresetsModule',
        description: 'შენახული car setup-ების CRUD — PresetsController + PresetsService Prisma query-ებით.',
      },
      prisma: {
        title: 'PrismaModule',
        description: 'Global PrismaService client ყველა module-ისთვის, რომელსაც DB access სჭირდება.',
      },
      health: {
        title: 'HealthController',
        description: 'GET /health — მარტივი uptime check monitoring-ისა და dev tooling-ისთვის.',
      },
    },
    frontendArch: {
      sectionTitle: 'Frontend არქიტექტურა',
      appRouter: {
        title: 'App Router',
        description: 'Route-ები src/app/-ში — home, simulation, learn, build. თხელი page component-ები hook-ებსა და card-ებს აკompozitებენ.',
      },
      zustand: {
        title: 'Zustand store-ები',
        description: 'simulationStore (params, result, connection), presetsStore, localeStore — მხოლოდ data, side effect-ების გარეშე.',
      },
      hooks: {
        title: 'Custom hook-ები',
        description: 'useSimulation socket lifecycle-ს მართავს; usePresets REST CRUD-ს; useLocale en/ka string-ებს აბრუნებს.',
      },
      locales: {
        title: 'Localization',
        description: 'ყველა UI ტeksti src/lib/locales/en.ts და ka.ts-ში. Type-safe Locale type ორივე ფაილის sync-ს უზრუნველყოფს.',
      },
      components: {
        title: 'Component layer-ები',
        description: 'ui/ primitive-ები, cards/ და forms/ composition-ისთვის, shared/ Header/Footer-ისთვის. Component-ები render-ს — hook-ები orchestrate-ს.',
      },
    },
    database: {
      sectionTitle: 'Database schema',
      intro:
        'ფaza 1 მinimal Prisma schema-ს იყენებს — ერთი Preset modeli შენახული car კonfiguratsiisთვის. სიმulatsiis შედეგები on-the-fly გამოითვლება და არ ინახება.',
      id: { field: 'id', type: 'String', description: 'Primary key — Prisma-ს cuid' },
      name: { field: 'name', type: 'String', description: 'მომხმარებლის preset სახელი' },
      speed: { field: 'speed', type: 'Float', description: 'მანქანის სიჩქარე km/h-ში (0–400)' },
      wingAngle: { field: 'wingAngle', type: 'Float', description: 'უკანა ფრთის კუთხე გრადus-ში (0–30)' },
      weight: { field: 'weight', type: 'Float', description: 'მანქანის მასა kg-ში (600–1000)' },
      dragCoefficient: { field: 'dragCoefficient', type: 'Float', description: 'Drag coefficient Cd (0.1–2.0)' },
      createdAt: { field: 'createdAt', type: 'DateTime', description: 'Auto-set შექმნისას' },
      updatedAt: { field: 'updatedAt', type: 'DateTime', description: 'Auto-update შენახვისას' },
    },
    rest: {
      sectionTitle: 'REST API',
      health: {
        method: 'GET',
        path: '/health',
        description: 'Health check — სერვერის სტatus-ს აბრუნებს.',
      },
      simulationRun: {
        method: 'POST',
        path: '/simulation/run',
        description: 'ერთჯერადი აეროდინამიკური გამოთვლა WebSocket-ის გარეშე. იგივე result shape, როგორც simulate:result.',
      },
      presetsList: {
        method: 'GET',
        path: '/presets',
        description: 'ყველა შენახული preset-ის სია შექმნის თარიღის მიხედვით.',
      },
      presetsCreate: {
        method: 'POST',
        path: '/presets',
        description: 'ახალი preset-ის შენახვა სახელით და ოთხი car პარამეტრით.',
      },
      presetsGet: {
        method: 'GET',
        path: '/presets/:id',
        description: 'ერთი preset-ის მიღება ID-ით.',
      },
      presetsDelete: {
        method: 'DELETE',
        path: '/presets/:id',
        description: 'preset-ის სამუდამოდ წაშლა.',
      },
    },
    websocket: {
      sectionTitle: 'WebSocket event-ები',
      simulateUpdate: {
        direction: 'Client → Server',
        event: 'simulate:update',
        description: 'Payload: { speed, wingAngle, weight, dragCoefficient }. იგზავნება ყოველი slider ცვლილebisას.',
      },
      simulateResult: {
        direction: 'Server → Client',
        event: 'simulate:result',
        description: 'აბრუნებს downforce, drag, lift, aeroEfficiency, grip, weightTransfer და 41-point chartData-ს.',
      },
      simulateError: {
        direction: 'Server → Client',
        event: 'simulate:error',
        description: 'Validation ან calculation error — { code, message, details }.',
      },
    },
    cta: {
      text: 'ფიზიკა Learn გვერდზე, ან პირდაპირ სიმulatoრში შესვლა.',
      learnButton: 'Learn დოკუმენტაცია',
      simButton: 'სიმულაციის გაშვება',
    },
  },
} satisfies Locale;

export default ka;
