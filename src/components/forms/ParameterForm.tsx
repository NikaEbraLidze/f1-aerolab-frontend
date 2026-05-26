'use client';
import { useLocale } from '@/hooks/useLocale';
import { useSimulationStore } from '@/store/simulationStore';
import { Slider } from '@/components/ui/Slider';
import { Typography } from '@/components/ui/Typography';
import {
  SPEED_MIN, SPEED_MAX, SPEED_STEP,
  WING_ANGLE_MIN, WING_ANGLE_MAX, WING_ANGLE_STEP,
  WEIGHT_MIN, WEIGHT_MAX, WEIGHT_STEP,
  DRAG_MIN, DRAG_MAX, DRAG_STEP,
} from '@/lib/constants';

export function ParameterForm() {
  const t = useLocale();
  const params = useSimulationStore((s) => s.params);
  const setParams = useSimulationStore((s) => s.setParams);

  return (
    <div className="rounded-xl bg-f1-surface border border-f1-border p-6 flex flex-col gap-6">
      <Typography variant="label" color="white" className="font-semibold">
        {t.simulation.parameters}
      </Typography>
      <Slider
        label={t.simulation.speed}
        value={params.speed}
        min={SPEED_MIN}
        max={SPEED_MAX}
        step={SPEED_STEP}
        unit="km/h"
        onChange={(v) => setParams({ speed: v })}
      />
      <Slider
        label={t.simulation.wingAngle}
        value={params.wingAngle}
        min={WING_ANGLE_MIN}
        max={WING_ANGLE_MAX}
        step={WING_ANGLE_STEP}
        unit="°"
        onChange={(v) => setParams({ wingAngle: v })}
      />
      <Slider
        label={t.simulation.weight}
        value={params.weight}
        min={WEIGHT_MIN}
        max={WEIGHT_MAX}
        step={WEIGHT_STEP}
        unit="kg"
        onChange={(v) => setParams({ weight: v })}
      />
      <Slider
        label={t.simulation.dragCoefficient}
        value={params.dragCoefficient}
        min={DRAG_MIN}
        max={DRAG_MAX}
        step={DRAG_STEP}
        decimals={1}
        onChange={(v) => setParams({ dragCoefficient: v })}
      />
    </div>
  );
}
