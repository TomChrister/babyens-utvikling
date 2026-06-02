import { Link } from 'react-router-dom';
import { TOTAL_WEEKS } from '../data/weeks';

interface Props {
  week: number;
  currentWeek?: number | null;
}

function Arrow({ dir }: { dir: 'left' | 'right' }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      className={dir === 'left' ? '' : 'rotate-180'}
      aria-hidden
    >
      <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function WeekNav({ week, currentWeek }: Props) {
  const hasPrev = week > 1;
  const hasNext = week < TOTAL_WEEKS;
  const progress = (week / TOTAL_WEEKS) * 100;

  return (
    <nav className="w-full">
      {/* Progresjon gjennom året */}
      <div className="mb-4">
        <div className="flex justify-between text-xs text-muted mb-1.5 font-body">
          <span>Uke 1</span>
          <span className="font-bold text-terracotta">{Math.round(progress)}&nbsp;% av første året</span>
          <span>Uke {TOTAL_WEEKS}</span>
        </div>
        <div className="h-2 rounded-full bg-sand overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-terracotta-soft to-terracotta transition-[width] duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="flex items-center justify-between gap-3">
        {hasPrev ? (
          <Link
            to={`/uke/${week - 1}`}
            className="group flex items-center gap-2 rounded-xl border border-sand bg-white/70 px-4 py-2.5
                       text-ink hover:bg-white hover:border-terracotta-soft transition-all active:scale-[0.98]"
          >
            <Arrow dir="left" />
            <span className="font-body font-bold text-sm">
              Uke {week - 1}
            </span>
          </Link>
        ) : (
          <span />
        )}

        {currentWeek && currentWeek !== week && (
          <Link
            to={`/uke/${currentWeek}`}
            className="text-sm font-body font-bold text-terracotta hover:underline underline-offset-4"
          >
            Til denne uken (uke {currentWeek})
          </Link>
        )}

        {hasNext ? (
          <Link
            to={`/uke/${week + 1}`}
            className="group flex items-center gap-2 rounded-xl border border-sand bg-white/70 px-4 py-2.5
                       text-ink hover:bg-white hover:border-terracotta-soft transition-all active:scale-[0.98]"
          >
            <span className="font-body font-bold text-sm">Uke {week + 1}</span>
            <Arrow dir="right" />
          </Link>
        ) : (
          <span />
        )}
      </div>
    </nav>
  );
}
