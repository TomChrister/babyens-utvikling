import type { WeekData } from '../data/types';
import { ageLabel } from '../lib/date';
import MilestoneCard from './MilestoneCard';

function LeafIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 19c0-7 5-12 14-13 0 9-5 14-12 14-1 0-2-.3-2-1z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M9 15c2-2 4-3 7-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 20s-7-4.6-9-9.2C1.5 6.9 4 4 7 4c2 0 3.4 1.2 4 2.3C11.6 5.2 13 4 15 4c3 0 5.5 2.9 4 6.8C19 15.4 12 20 12 20z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 11v5M12 8h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

interface Props {
  data: WeekData;
  isCurrent?: boolean;
}

export default function WeekView({ data, isCurrent }: Props) {
  return (
    <article key={data.week} className="animate-fade-up">
      {/* Topptekst */}
      <header className="mb-7">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-sage-soft/40 text-sage px-3 py-1 text-xs font-body font-bold uppercase tracking-wide">
            <LeafIcon />
            {data.phase}
          </span>
          {isCurrent && (
            <span className="inline-block rounded-full bg-terracotta text-white px-3 py-1 text-xs font-body font-bold uppercase tracking-wide">
              Dere er her nå
            </span>
          )}
        </div>

        <div className="flex items-end gap-3 flex-wrap">
          <h1 className="font-display text-5xl sm:text-6xl text-ink leading-none">
            Uke {data.week}
          </h1>
        </div>
        <p className="text-muted font-body mt-2 text-sm">{ageLabel(data.week)}</p>
      </header>

      {/* Oppsummering */}
      <p className="text-lg sm:text-xl text-ink/90 leading-relaxed text-balance mb-7">{data.summary}</p>

      {/* Fokus-stikkord */}
      {data.focus.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          {data.focus.map((f, i) => (
            <span
              key={i}
              className="rounded-full border border-sand bg-white/60 px-3.5 py-1.5 text-sm font-body text-ink/80"
            >
              {f}
            </span>
          ))}
        </div>
      )}

      {/* Tips */}
      <div className="rounded-2xl bg-terracotta-soft/20 border border-terracotta-soft/40 p-5 sm:p-6 mb-6 flex gap-3.5">
        <span className="text-terracotta shrink-0 mt-0.5">
          <HeartIcon />
        </span>
        <div>
          <h3 className="font-body font-extrabold text-sm uppercase tracking-wide text-terracotta mb-1">
            Tips til uken
          </h3>
          <p className="text-ink/90 leading-relaxed">{data.tip}</p>
        </div>
      </div>

      {/* Milepæler (CDC) */}
      {data.milestone && (
        <div className="mb-6">
          <MilestoneCard milestone={data.milestone} />
        </div>
      )}

      {/* Helsestasjon */}
      {data.helsestasjon && (
        <div className="rounded-2xl bg-sage-soft/25 border border-sage-soft/50 p-5 sm:p-6 mb-6 flex gap-3.5">
          <span className="text-sage shrink-0 mt-0.5">
            <InfoIcon />
          </span>
          <div>
            <h3 className="font-body font-extrabold text-sm uppercase tracking-wide text-sage mb-1">
              På helsestasjonen
            </h3>
            <p className="text-ink/90 leading-relaxed">{data.helsestasjon}</p>
          </div>
        </div>
      )}

      {/* Ekstra notat */}
      {data.note && (
        <div className="rounded-2xl bg-white/60 border border-sand p-5 sm:p-6 mb-2">
          <p className="text-ink/80 leading-relaxed text-[15px]">
            <span className="font-extrabold text-ink">Godt å vite&nbsp;·&nbsp;</span>
            {data.note}
          </p>
        </div>
      )}
    </article>
  );
}
