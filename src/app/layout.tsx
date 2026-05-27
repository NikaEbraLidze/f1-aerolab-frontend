import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { StoreProvider } from '@/providers/StoreProvider';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { createPageMetadata, DEFAULT_TITLE } from '@/lib/seo/metadata';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = createPageMetadata({
  title: DEFAULT_TITLE,
  description:
    'Interactive Formula 1 aerodynamics playground. Tune wing angle, speed, weight and drag, then watch downforce, drag, grip and efficiency update live via WebSocket.',
  path: '/',
  titleAbsolute: true,
});

const themeScript = `
(function () {
  try {
    var raw = localStorage.getItem('f1-aerolab-theme');
    var theme = 'dark';
    if (raw) {
      var parsed = JSON.parse(raw);
      if (parsed.state && parsed.state.theme) theme = parsed.state.theme;
    }
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`} data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-f1-black text-f1-white">
        <StoreProvider>
          <ThemeProvider>
            <Header />
            <div className="flex flex-col flex-1">{children}</div>
            <Footer />
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
