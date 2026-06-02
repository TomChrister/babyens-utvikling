import type { Milestone, Domain } from '../data/types';
import { DOMAIN_LABELS, DOMAIN_DOT } from '../data/types';

const DOMAIN_ORDER: Domain[] = ['social', 'sprak', 'kognitivt', 'motorikk'];

export default function MilestoneCard({ milestone }: { milestone: Milestone }) {
  const grouped = DOMAIN_ORDER.map((domain) => ({
    domain,
    items: milestone.items.filter((i) => i.domain === domain),
  })).filter((g) => g.items.length > 0);

  return (
    <section className="rounded-3xl border border-sand bg-white/75 backdrop-blur p-6 sm:p-8 shadow-card">
      <div className="flex items-baseline justify-between flex-wrap gap-2 mb-1">
        <h3 className="font-display text-xl sm:text-2xl text-ink">Milepæler {milestone.label.toLowerCase()}</h3>
      </div>
      <p className="text-xs text-muted mb-6">
        Ferdigheter de fleste barn (75&nbsp;% eller mer) mestrer ved denne alderen. Kilde: {milestone.source}.
      </p>

      <div className="grid sm:grid-cols-2 gap-x-8 gap-y-7">
        {grouped.map((g) => (
          <div key={g.domain}>
            <div className="flex items-center gap-2 mb-3">
              <span className={`inline-block w-2.5 h-2.5 rounded-full ${DOMAIN_DOT[g.domain]}`} />
              <h4 className="font-body font-extrabold text-sm uppercase tracking-wide text-ink/80">
                {DOMAIN_LABELS[g.domain]}
              </h4>
            </div>
            <ul className="space-y-2.5">
              {g.items.map((item, idx) => (
                <li key={idx} className="flex gap-2.5 text-[15px] leading-snug text-ink/90">
                  <span className={`mt-2 shrink-0 w-1.5 h-1.5 rounded-full ${DOMAIN_DOT[g.domain]} opacity-70`} />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
