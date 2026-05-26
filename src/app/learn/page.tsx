'use client';
import Link from 'next/link';
import { useLocale } from '@/hooks/useLocale';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { FeatureCard } from '@/components/cards/FeatureCard';
import { FormulaCard } from '@/components/cards/FormulaCard';
import { ConstantTable } from '@/components/cards/ConstantTable';
import { CONSTANT_KEYS, FORMULA_ITEMS, OUTPUT_ITEMS, PARAMETER_ITEMS } from './content';

export default function LearnPage() {
  const t = useLocale();

  const constantRows = CONSTANT_KEYS.map((key) => t.learn.constants[key]);

  return (
    <main className="flex flex-col flex-1 px-6 py-8 max-w-5xl mx-auto w-full gap-12">
      {/* Hero */}
      <section className="flex flex-col items-center text-center gap-4 pt-4">
        <span className="material-symbols-rounded text-5xl text-f1-red">school</span>
        <Typography variant="tagline" as="div">
          {t.learn.tagline}
        </Typography>
        <Typography variant="h1">{t.learn.title}</Typography>
        <Typography variant="body" className="max-w-2xl">
          {t.learn.intro}
        </Typography>
      </section>

      <div className="border-t border-f1-border" />

      {/* About */}
      <section className="flex flex-col gap-4">
        <Typography variant="h3">{t.learn.about.title}</Typography>
        <Typography variant="body">{t.learn.about.body}</Typography>
      </section>

      <div className="border-t border-f1-border" />

      {/* Input parameters */}
      <section className="flex flex-col gap-6">
        <Typography variant="tagline" as="div">
          {t.learn.parameters.sectionTitle}
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PARAMETER_ITEMS.map(({ key, icon, iconColor }) => {
            const item = t.learn.parameters[key];
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

      {/* Physics constants */}
      <section className="flex flex-col gap-6">
        <Typography variant="tagline" as="div">
          {t.learn.constants.sectionTitle}
        </Typography>
        <ConstantTable rows={constantRows} />
      </section>

      <div className="border-t border-f1-border" />

      {/* Formulas */}
      <section className="flex flex-col gap-6">
        <Typography variant="tagline" as="div">
          {t.learn.formulas.sectionTitle}
        </Typography>
        <div className="grid grid-cols-1 gap-4">
          {FORMULA_ITEMS.map(({ key, color }) => {
            const item = t.learn.formulas[key];
            return (
              <FormulaCard
                key={key}
                title={item.title}
                formula={item.formula}
                variables={item.variables}
                explanation={item.explanation}
                color={color}
              />
            );
          })}
        </div>
      </section>

      <div className="border-t border-f1-border" />

      {/* Output metrics */}
      <section className="flex flex-col gap-6">
        <Typography variant="tagline" as="div">
          {t.learn.outputs.sectionTitle}
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {OUTPUT_ITEMS.map(({ key, icon, iconColor }) => {
            const item = t.learn.outputs[key];
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

      {/* CTA */}
      <section className="flex flex-col items-center text-center gap-6 pb-8">
        <Typography variant="body" className="max-w-lg">
          {t.learn.cta.text}
        </Typography>
        <Button as={Link} href="/simulation">
          {t.learn.cta.button}
        </Button>
      </section>
    </main>
  );
}
