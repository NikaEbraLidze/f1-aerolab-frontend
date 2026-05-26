'use client';
import Link from 'next/link';
import { useLocale } from '@/hooks/useLocale';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { FeatureCard } from '@/components/cards/FeatureCard';
import { NavCard } from '@/components/cards/NavCard';

export default function Home() {
  const t = useLocale();

  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <Typography variant="tagline" as="div" className="mb-4">
          {t.home.tagline}
        </Typography>

        <Typography variant="display" className="mb-2">
          F1 <span className="text-f1-red">Aero</span>Lab
        </Typography>

        <Typography variant="body" className="mt-4 max-w-md">
          {t.home.description}
        </Typography>

        <Button as={Link} href="/simulation" className="mt-10">
          {t.home.cta}
        </Button>

        <span className="material-symbols-rounded text-f1-muted mt-16 animate-bounce text-3xl select-none">
          expand_more
        </span>
      </section>

      <div className="border-t border-f1-border" />

      {/* Features */}
      <section className="px-6 py-20 w-full max-w-5xl mx-auto">
        <Typography variant="tagline" as="div" className="mb-8">
          {t.home.features.sectionTitle}
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <FeatureCard
            icon="bolt"
            iconColor="text-f1-red"
            title={t.home.features.websocket.title}
            description={t.home.features.websocket.description}
          />
          <FeatureCard
            icon="air"
            iconColor="text-downforce"
            title={t.home.features.aeroForces.title}
            description={t.home.features.aeroForces.description}
          />
          <FeatureCard
            icon="bookmarks"
            iconColor="text-drag"
            title={t.home.features.presets.title}
            description={t.home.features.presets.description}
          />
          <FeatureCard
            icon="show_chart"
            iconColor="text-grip"
            title={t.home.features.charts.title}
            description={t.home.features.charts.description}
          />
        </div>
      </section>

      <div className="border-t border-f1-border" />

      {/* Navigation */}
      <section className="px-6 py-20 w-full max-w-5xl mx-auto">
        <Typography variant="tagline" as="div" className="mb-8">
          {t.home.nav.sectionTitle}
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <NavCard
            icon="speed"
            title={t.home.nav.simulation.title}
            description={t.home.nav.simulation.description}
            cta={t.home.nav.simulation.cta}
            href="/simulation"
          />
          <NavCard
            icon="school"
            title={t.home.nav.learn.title}
            description={t.home.nav.learn.description}
            cta={t.home.nav.learn.cta}
            href="/learn"
            disabled
          />
          <NavCard
            icon="architecture"
            title={t.home.nav.build.title}
            description={t.home.nav.build.description}
            cta={t.home.nav.build.cta}
            href="/build"
            disabled
          />
        </div>
      </section>
    </main>
  );
}
