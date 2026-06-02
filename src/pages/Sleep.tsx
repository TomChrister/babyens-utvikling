import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  SAFE_SLEEP,
  TRANSITION_TIPS,
  SLEEP_BY_AGE,
  SLEEP_METHODS,
  REGRESSIONS,
  type InfoItem,
} from '../data/sleep';

function MoonIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 3l7 3v5c0 4.4-3 8-7 10-4-2-7-5.6-7-10V6l7-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Section({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-12">
      <h2 className="font-display text-2xl sm:text-3xl text-ink mb-2">{title}</h2>
      {intro && <p className="text-muted leading-relaxed mb-5 max-w-2xl">{intro}</p>}
      {children}
    </section>
  );
}

function ItemCards({ items, accent }: { items: InfoItem[]; accent: 'terracotta' | 'sage' }) {
  const border = accent === 'sage' ? 'border-sage-soft/50' : 'border-terracotta-soft/40';
  const dot = accent === 'sage' ? 'bg-sage' : 'bg-terracotta';
  return (
    <div className="grid sm:grid-cols-2 gap-3.5">
      {items.map((it, i) => (
        <div key={i} className={`rounded-2xl bg-white/70 border ${border} p-5`}>
          <div className="flex items-center gap-2 mb-1.5">
            <span className={`w-2 h-2 rounded-full ${dot}`} />
            <h3 className="font-body font-extrabold text-ink">{it.title}</h3>
          </div>
          <p className="text-ink/85 leading-relaxed text-[15px]">{it.text}</p>
        </div>
      ))}
    </div>
  );
}

export default function Sleep() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-8 sm:py-12">
      {/* Topp */}
      <header className="mb-10">
        <span className="inline-flex items-center gap-2 rounded-full bg-[#3a3550] text-cream px-3 py-1 text-xs font-body font-bold uppercase tracking-wide">
          <MoonIcon />
          Søvn
        </span>
        <h1 className="font-display text-4xl sm:text-5xl text-ink mt-4 mb-3 leading-tight text-balance">
          Hjelp babyen å sove trygt – og etter hvert mer selvstendig
        </h1>
        <p className="text-lg text-ink/85 leading-relaxed max-w-2xl">
          At babyen sovner i armene eller ved brystet er helt normalt – særlig de første månedene.
          Her er trygge sove­råd og skånsomme måter å øve på å legge babyen ned på ryggen i egen seng eller nest.
        </p>
      </header>

      {/* Trygt sovemiljø – mest sikkerhetskritisk, derfor øverst og fremhevet */}
      <section className="mb-12">
        <div className="rounded-3xl bg-[#36314a] text-cream p-6 sm:p-8 shadow-soft">
          <div className="flex items-center gap-2.5 mb-2">
            <span className="text-cream/90">
              <ShieldIcon />
            </span>
            <h2 className="font-display text-2xl sm:text-3xl">Trygt sovemiljø først</h2>
          </div>
          <p className="text-cream/80 leading-relaxed mb-6 max-w-2xl">
            Disse rådene reduserer risikoen for krybbedød. Krybbedød er uvanlig og forekommer sjelden
            etter 6 måneder, men rådene er viktige å følge fra første dag.
          </p>
          <div className="grid sm:grid-cols-2 gap-3.5">
            {SAFE_SLEEP.map((it, i) => (
              <div key={i} className="rounded-2xl bg-white/10 border border-white/15 p-5">
                <h3 className="font-body font-extrabold text-cream mb-1.5">{it.title}</h3>
                <p className="text-cream/80 leading-relaxed text-[15px]">{it.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fra armene til egen seng */}
      <Section
        title="Fra armene til egen seng"
        intro="Målet er at babyen lærer å sovne på ryggen i egen seng eller nest. Det skjer gradvis – disse teknikkene er skånsomme og kan tilpasses deres rytme."
      >
        <ItemCards items={TRANSITION_TIPS} accent="terracotta" />
      </Section>

      {/* Søvn gjennom året */}
      <Section
        title="Søvn gjennom første året"
        intro="Omtrentlige tall – variasjonen mellom barn er stor. Bruk dem som en pekepinn, ikke en fasit."
      >
        <div className="overflow-x-auto rounded-2xl border border-sand bg-white/70">
          <table className="w-full text-left border-collapse min-w-[560px]">
            <thead>
              <tr className="bg-sand/60 text-ink/80 text-sm">
                <th className="font-body font-extrabold px-4 py-3">Alder</th>
                <th className="font-body font-extrabold px-4 py-3">Søvn / døgn</th>
                <th className="font-body font-extrabold px-4 py-3">Dagsøvner</th>
                <th className="font-body font-extrabold px-4 py-3">Våkenvindu</th>
                <th className="font-body font-extrabold px-4 py-3">Typisk</th>
              </tr>
            </thead>
            <tbody>
              {SLEEP_BY_AGE.map((row, i) => (
                <tr key={i} className="border-t border-sand text-[15px] align-top">
                  <td className="px-4 py-3 font-bold text-ink whitespace-nowrap">{row.age}</td>
                  <td className="px-4 py-3 text-ink/85 whitespace-nowrap">{row.total}</td>
                  <td className="px-4 py-3 text-ink/85 whitespace-nowrap">{row.naps}</td>
                  <td className="px-4 py-3 text-ink/85 whitespace-nowrap">{row.wakeWindow}</td>
                  <td className="px-4 py-3 text-ink/75 min-w-[220px]">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted mt-2">
          Våkenvindu = hvor lenge babyen er komfortabelt våken mellom søvnøkter.
        </p>
      </Section>

      {/* Søvnregresjoner */}
      <Section
        title="Søvnregresjoner"
        intro="Perioder der søvnen plutselig blir urolig henger som regel sammen med utvikling – det er framskritt, ikke tilbakeskritt."
      >
        <ItemCards items={REGRESSIONS} accent="sage" />
      </Section>

      {/* Metoder */}
      <Section
        title="Søvnmetoder – med aldersgrenser"
        intro="Det finnes alt fra helt skånsomme metoder til mer strukturerte. Det viktigste er at metoden passer babyens alder og temperament – og dere som familie."
      >
        <div className="rounded-2xl bg-terracotta-soft/20 border border-terracotta-soft/40 p-5 mb-5">
          <p className="text-ink/90 leading-relaxed text-[15px]">
            <span className="font-extrabold">Før ~4 måneder</span> anbefales ingen formell søvntrening. Da handler
            det om trygt sovemiljø, en rolig leggerutine og realistiske forventninger – og kontaktsøvn er helt greit.
            Strukturerte metoder med innsovning alene passer som regel først fra rundt 6 måneder, og er omdiskutert
            blant fagfolk.
          </p>
        </div>

        <div className="space-y-3.5">
          {SLEEP_METHODS.map((m, i) => (
            <div key={i} className="rounded-2xl bg-white/70 border border-sand p-5">
              <div className="flex items-center justify-between gap-3 flex-wrap mb-1.5">
                <h3 className="font-body font-extrabold text-ink">{m.name}</h3>
                <span
                  className={
                    'rounded-full px-3 py-1 text-xs font-body font-bold uppercase tracking-wide ' +
                    (m.kind === 'skånsom'
                      ? 'bg-sage-soft/40 text-sage'
                      : 'bg-[#3a3550]/10 text-[#3a3550]')
                  }
                >
                  {m.kind === 'skånsom' ? 'Skånsom' : 'Strukturert'}
                </span>
              </div>
              <p className="text-xs font-body font-bold text-terracotta mb-2">{m.age}</p>
              <p className="text-ink/85 leading-relaxed text-[15px]">{m.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Når søke hjelp */}
      <section className="rounded-2xl bg-sage-soft/25 border border-sage-soft/50 p-6">
        <h3 className="font-display text-xl text-ink mb-1.5">Når bør dere søke hjelp?</h3>
        <p className="text-ink/85 leading-relaxed">
          Er dere bekymret for babyens søvn, pust eller vekst – eller hvis søvnvanskene tærer hardt på dere som
          foreldre – ta kontakt med helsestasjonen eller fastlegen. De kjenner barnet deres og kan gi
          tilpassede råd.
        </p>
      </section>

      <div className="mt-10 text-center">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-xl border border-sand bg-white/70 px-5 py-2.5
                     text-ink font-body font-bold hover:bg-white hover:border-terracotta-soft transition-all"
        >
          ← Tilbake til ukene
        </Link>
      </div>
    </div>
  );
}
