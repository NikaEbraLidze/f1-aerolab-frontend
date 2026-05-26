'use client';
import { useState } from 'react';
import { useLocale } from '@/hooks/useLocale';
import { Button } from '@/components/ui/Button';

interface PresetSaveFormProps {
  onSave: (name: string) => Promise<void>;
}

export function PresetSaveForm({ onSave }: PresetSaveFormProps) {
  const t = useLocale();
  const [name, setName] = useState('');
  const [saving, setSaving] = useState(false);

  async function handleSave() {
    if (!name.trim()) return;
    setSaving(true);
    try {
      await onSave(name.trim());
      setName('');
    } catch {
      // silently fail
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSave()}
        placeholder={t.presets.namePlaceholder}
        className="flex-1 min-w-0 text-sm bg-f1-black border border-f1-border rounded-full px-4 py-2
          text-f1-white placeholder:text-f1-muted/60
          focus:outline-none focus:border-f1-red/50 transition-colors"
      />
      <Button size="sm" onClick={handleSave} disabled={!name.trim() || saving}>
        {t.presets.save}
      </Button>
    </div>
  );
}
