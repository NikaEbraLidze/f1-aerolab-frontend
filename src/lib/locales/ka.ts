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
  errors: {
    connectionFailed: 'სიმულაციის სერვერთან დაკავშირება ვერ მოხერხდა.',
    invalidParams: 'არასწორი პარამეტრები.',
    loadPresetsFailed: 'პრეფსეტების ჩატვირთვა ვერ მოხერხდა.',
  },
} satisfies Locale;

export default ka;
