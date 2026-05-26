'use client';
import dynamic from 'next/dynamic';
import { useLocale } from '@/hooks/useLocale';
import { useSimulation } from '@/hooks/useSimulation';
import { usePresets } from '@/hooks/usePresets';
import { useSimulationStore } from '@/store/simulationStore';
import { Typography } from '@/components/ui/Typography';
import { ParameterForm } from '@/components/forms/ParameterForm';
import { StatCard } from '@/components/cards/StatCard';
import { PresetSaveForm } from '@/components/forms/PresetSaveForm';
import { PresetCard } from '@/components/cards/PresetCard';
import { cn } from '@/lib/utils/cn';

const AeroChart = dynamic(
  () => import('@/components/charts/AeroChart').then((m) => m.AeroChart),
  { ssr: false },
);

export default function SimulationPage() {
  const t = useLocale();
  useSimulation();

  const result = useSimulationStore((s) => s.result);
  const isConnected = useSimulationStore((s) => s.isConnected);
  const params = useSimulationStore((s) => s.params);

  const { presets, isLoading: presetsLoading, save, remove, load } = usePresets();

  return (
    <main className="flex flex-col flex-1 px-6 py-8 max-w-7xl mx-auto w-full gap-6">
      {/* Page header */}
      <div className="flex items-center justify-between">
        <Typography variant="h3">{t.simulation.title}</Typography>
        <div className="flex items-center gap-2">
          <span
            className={cn(
              'w-2 h-2 rounded-full transition-colors',
              isConnected ? 'bg-grip' : 'bg-f1-muted',
            )}
          />
          <Typography variant="caption">
            {isConnected ? t.simulation.connected : t.simulation.disconnected}
          </Typography>
        </div>
      </div>

      {/* Main layout: left sidebar + right content */}
      <div className="flex flex-col lg:flex-row gap-6 flex-1">
        {/* Left column — parameters + presets */}
        <div className="w-full lg:w-80 shrink-0 flex flex-col gap-4 lg:sticky lg:top-20 lg:self-start">
          <ParameterForm />

          {/* Presets panel */}
          <div className="rounded-xl bg-f1-surface border border-f1-border p-6 flex flex-col gap-4">
            <Typography variant="label" color="white" className="font-semibold">
              {t.presets.title}
            </Typography>
            <PresetSaveForm onSave={(name) => save(name, params)} />
            <div className="flex flex-col gap-2">
              {presetsLoading && (
                <Typography variant="caption">Loading…</Typography>
              )}
              {!presetsLoading && presets.length === 0 && (
                <Typography variant="caption">{t.presets.listEmpty}</Typography>
              )}
              {presets.map((preset, i) => (
                <PresetCard
                  key={preset.id ?? i}
                  preset={preset}
                  onLoad={() => load(preset)}
                  onDelete={() => remove(preset.id)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right column — metrics + chart */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <StatCard
              label={t.simulation.downforce}
              value={result?.downforce ?? null}
              unit="N"
              color="downforce"
            />
            <StatCard
              label={t.simulation.drag}
              value={result?.drag ?? null}
              unit="N"
              color="drag"
            />
            <StatCard
              label={t.simulation.lift}
              value={result?.lift ?? null}
              unit="N"
            />
            <StatCard
              label={t.simulation.aeroEfficiency}
              value={result?.aeroEfficiency ?? null}
              decimals={3}
            />
            <StatCard
              label={t.simulation.grip}
              value={result?.grip ?? null}
              decimals={2}
              color="grip"
            />
            <StatCard
              label={t.simulation.weightTransfer}
              value={result?.weightTransfer ?? null}
              unit="N"
            />
          </div>

          <AeroChart />
        </div>
      </div>
    </main>
  );
}
