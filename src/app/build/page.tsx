'use client';
import Link from 'next/link';
import { useLocale } from '@/hooks/useLocale';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { FeatureCard } from '@/components/cards/FeatureCard';
import { ConstantTable } from '@/components/cards/ConstantTable';
import { EndpointTable } from '@/components/cards/EndpointTable';
import {
  BACKEND_STACK_ITEMS,
  FRONTEND_ARCH_ITEMS,
  FRONTEND_STACK_ITEMS,
  MODULE_ITEMS,
  PHASE_ITEMS,
  PRESET_FIELD_KEYS,
  REST_ENDPOINT_KEYS,
  WS_EVENT_KEYS,
} from './content';

export default function BuildPage() {
  const t = useLocale();

  const presetRows = PRESET_FIELD_KEYS.map((key) => {
    const field = t.build.database[key];
    return {
      symbol: field.field,
      value: field.type,
      unit: '',
      description: field.description,
    };
  });

  const restRows = REST_ENDPOINT_KEYS.map((key) => {
    const endpoint = t.build.rest[key];
    return {
      badge: endpoint.method,
      label: endpoint.path,
      description: endpoint.description,
    };
  });

  const wsRows = WS_EVENT_KEYS.map((key) => {
    const event = t.build.websocket[key];
    return {
      badge: event.direction,
      label: event.event,
      description: event.description,
    };
  });

  return (
    <main className="flex flex-col flex-1 px-6 py-8 max-w-5xl mx-auto w-full gap-12">
      {/* Hero */}
      <section className="flex flex-col items-center text-center gap-4 pt-4">
        <span className="material-symbols-rounded text-5xl text-f1-red">architecture</span>
        <Typography variant="tagline" as="div">
          {t.build.tagline}
        </Typography>
        <Typography variant="h1">{t.build.title}</Typography>
        <Typography variant="body" className="max-w-2xl">
          {t.build.intro}
        </Typography>
      </section>

      <div className="border-t border-f1-border" />

      {/* Overview */}
      <section className="flex flex-col gap-4">
        <Typography variant="h3">{t.build.overview.title}</Typography>
        <Typography variant="body">{t.build.overview.body}</Typography>
      </section>

      <div className="border-t border-f1-border" />

      {/* Repositories */}
      <section className="flex flex-col gap-6">
        <Typography variant="tagline" as="div">
          {t.build.repos.sectionTitle}
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FeatureCard
            icon="dns"
            iconColor="text-f1-red"
            title={t.build.repos.backend.title}
            description={t.build.repos.backend.description}
          />
          <FeatureCard
            icon="web"
            iconColor="text-downforce"
            title={t.build.repos.frontend.title}
            description={t.build.repos.frontend.description}
          />
        </div>
      </section>

      <div className="border-t border-f1-border" />

      {/* Data flow */}
      <section className="flex flex-col gap-4">
        <Typography variant="h3">{t.build.dataFlow.title}</Typography>
        <Typography variant="body">{t.build.dataFlow.body}</Typography>
      </section>

      <div className="border-t border-f1-border" />

      {/* Phases */}
      <section className="flex flex-col gap-6">
        <Typography variant="tagline" as="div">
          {t.build.phases.sectionTitle}
        </Typography>
        <div className="grid grid-cols-1 gap-4">
          {PHASE_ITEMS.map(({ key, icon, iconColor }) => {
            const phase = t.build.phases[key];
            return (
              <FeatureCard
                key={key}
                icon={icon}
                iconColor={iconColor}
                title={phase.title}
                description={phase.description}
              />
            );
          })}
        </div>
      </section>

      <div className="border-t border-f1-border" />

      {/* Frontend stack */}
      <section className="flex flex-col gap-6">
        <Typography variant="tagline" as="div">
          {t.build.frontend.sectionTitle}
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {FRONTEND_STACK_ITEMS.map(({ key, icon, iconColor }) => {
            const item = t.build.frontend[key];
            return (
              <FeatureCard
                key={key}
                icon={icon}
                iconColor={iconColor}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>
      </section>

      <div className="border-t border-f1-border" />

      {/* Backend stack */}
      <section className="flex flex-col gap-6">
        <Typography variant="tagline" as="div">
          {t.build.backend.sectionTitle}
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {BACKEND_STACK_ITEMS.map(({ key, icon, iconColor }) => {
            const item = t.build.backend[key];
            return (
              <FeatureCard
                key={key}
                icon={icon}
                iconColor={iconColor}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>
      </section>

      <div className="border-t border-f1-border" />

      {/* Backend modules */}
      <section className="flex flex-col gap-6">
        <Typography variant="tagline" as="div">
          {t.build.modules.sectionTitle}
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {MODULE_ITEMS.map(({ key, icon, iconColor }) => {
            const item = t.build.modules[key];
            return (
              <FeatureCard
                key={key}
                icon={icon}
                iconColor={iconColor}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>
      </section>

      <div className="border-t border-f1-border" />

      {/* Frontend architecture */}
      <section className="flex flex-col gap-6">
        <Typography variant="tagline" as="div">
          {t.build.frontendArch.sectionTitle}
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {FRONTEND_ARCH_ITEMS.map(({ key, icon, iconColor }) => {
            const item = t.build.frontendArch[key];
            return (
              <FeatureCard
                key={key}
                icon={icon}
                iconColor={iconColor}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>
      </section>

      <div className="border-t border-f1-border" />

      {/* Database */}
      <section className="flex flex-col gap-6">
        <Typography variant="tagline" as="div">
          {t.build.database.sectionTitle}
        </Typography>
        <Typography variant="body">{t.build.database.intro}</Typography>
        <ConstantTable rows={presetRows} />
      </section>

      <div className="border-t border-f1-border" />

      {/* REST API */}
      <section className="flex flex-col gap-6">
        <Typography variant="tagline" as="div">
          {t.build.rest.sectionTitle}
        </Typography>
        <EndpointTable rows={restRows} />
      </section>

      <div className="border-t border-f1-border" />

      {/* WebSocket */}
      <section className="flex flex-col gap-6">
        <Typography variant="tagline" as="div">
          {t.build.websocket.sectionTitle}
        </Typography>
        <EndpointTable rows={wsRows} />
      </section>

      <div className="border-t border-f1-border" />

      {/* CTA */}
      <section className="flex flex-col items-center text-center gap-6 pb-8">
        <Typography variant="body" className="max-w-lg">
          {t.build.cta.text}
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button as={Link} href="/learn" variant="ghost">
            {t.build.cta.learnButton}
          </Button>
          <Button as={Link} href="/simulation">
            {t.build.cta.simButton}
          </Button>
        </div>
      </section>
    </main>
  );
}
