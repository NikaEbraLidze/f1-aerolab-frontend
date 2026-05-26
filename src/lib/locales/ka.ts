import type { Locale } from './en';

const ka = {
  nav: {
    simulation: 'სიმულაცია',
    learn: 'სწავლა',
    build: 'არქიტექტურა',
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
        cta: 'მალე',
      },
      build: {
        title: 'არქიტექტურა',
        description: 'გამოიკვლიეთ NestJS backend, Socket.io გეითვეი, Prisma სქემა და Next.js frontend.',
        cta: 'მალე',
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
} satisfies Locale;

export default ka;
