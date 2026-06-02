import { useState } from 'react';

interface Props {
  initial?: string | null;
  onSave: (iso: string) => void;
  onSkip?: () => void;
  compact?: boolean;
}

export default function BirthdateSetup({ initial, onSave, onSkip, compact }: Props) {
  const [value, setValue] = useState(initial ?? '');
  const today = new Date().toISOString().slice(0, 10);

  function handleSave() {
    if (value) onSave(value);
  }

  return (
    <div
      className={
        compact
          ? 'rounded-2xl bg-white/70 backdrop-blur border border-sand p-5 shadow-card'
          : 'rounded-3xl bg-white/80 backdrop-blur border border-sand p-7 sm:p-9 shadow-soft max-w-md w-full'
      }
    >
      {!compact && (
        <>
          <p className="text-terracotta font-body font-bold tracking-wide uppercase text-xs mb-2">
            Velkommen
          </p>
          <h2 className="font-display text-2xl sm:text-3xl text-ink mb-2 text-balance">
            Når ble babyen født?
          </h2>
          <p className="text-muted text-sm mb-6 leading-relaxed">
            Da regner vi ut hvilken uke dere er i akkurat nå, og åpner siden på riktig sted hver gang.
            Datoen lagres kun lokalt i din nettleser.
          </p>
        </>
      )}
      {compact && (
        <label className="block text-ink font-body font-bold text-sm mb-2">Babyens fødselsdato</label>
      )}
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="date"
          max={today}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="flex-1 rounded-xl border border-sand bg-cream/60 px-4 py-3 text-ink font-body
                     focus:border-terracotta focus:bg-white transition-colors"
        />
        <button
          onClick={handleSave}
          disabled={!value}
          className="rounded-xl bg-terracotta px-6 py-3 text-white font-body font-bold
                     hover:bg-[#b5683f] active:scale-[0.98] transition-all
                     disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {compact ? 'Oppdater' : 'Sett i gang'}
        </button>
      </div>
      {!compact && onSkip && (
        <button
          onClick={onSkip}
          className="mt-4 text-sm text-muted hover:text-ink underline underline-offset-4 transition-colors"
        >
          Hopp over – bla manuelt fra uke 1
        </button>
      )}
    </div>
  );
}
