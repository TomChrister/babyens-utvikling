import { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import BirthdateSetup from './BirthdateSetup';
import { useApp } from '../context/AppContext';

function BabyMark() {
  return (
    <svg width="34" height="34" viewBox="0 0 32 32" aria-hidden>
      <circle cx="16" cy="15" r="9" fill="#FBF6EE" stroke="#C9764F" strokeWidth="1.4" />
      <circle cx="12.5" cy="14" r="1.3" fill="#33302B" />
      <circle cx="19.5" cy="14" r="1.3" fill="#33302B" />
      <path d="M12.5 18 q3.5 3 7 0" stroke="#33302B" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      <path d="M16 5 q-1.8 -2.4 -3.6 -1.2" stroke="#869B7E" strokeWidth="1.6" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export default function Layout() {
  const { birthdate, setBirthdate } = useApp();
  const [editing, setEditing] = useState(false);

  return (
    <div className="min-h-screen flex flex-col paper-grain">
      <header className="sticky top-0 z-20 backdrop-blur-md bg-cream/80 border-b border-sand/70">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 py-3.5 flex items-center justify-between gap-3">
          <Link to="/" className="flex items-center gap-2.5 group">
            <BabyMark />
            <span className="font-display text-lg sm:text-xl text-ink leading-tight group-hover:text-terracotta transition-colors">
              Babyens utvikling
            </span>
          </Link>
          <div className="flex items-center gap-1 sm:gap-3">
            <NavLink
              to="/sovn"
              className={({ isActive }) =>
                'flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-body font-bold transition-colors ' +
                (isActive
                  ? 'bg-[#36314a] text-cream'
                  : 'text-muted hover:text-[#36314a] hover:bg-sand/60')
              }
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                />
              </svg>
              Søvn
            </NavLink>
            <button
              onClick={() => setEditing((v) => !v)}
              className="text-sm font-body font-bold text-muted hover:text-terracotta transition-colors flex items-center gap-1.5 px-2 py-1.5"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M7 8h10M7 12h10M7 16h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <rect x="3" y="4" width="18" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
              </svg>
              <span className="hidden sm:inline">{birthdate ? 'Endre dato' : 'Sett dato'}</span>
            </button>
          </div>
        </div>
        {editing && (
          <div className="max-w-3xl mx-auto px-5 sm:px-8 pb-4 animate-fade-in">
            <BirthdateSetup
              compact
              initial={birthdate}
              onSave={(iso) => {
                setBirthdate(iso);
                setEditing(false);
              }}
            />
            {birthdate && (
              <button
                onClick={() => {
                  setBirthdate(null);
                  setEditing(false);
                }}
                className="mt-2 text-xs text-muted hover:text-ink underline underline-offset-4"
              >
                Fjern lagret fødselsdato
              </button>
            )}
          </div>
        )}
      </header>

      <main className="flex-1 w-full">
        <Outlet />
      </main>

      <footer className="border-t border-sand/70 mt-12">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 py-8 text-sm text-muted leading-relaxed space-y-2">
          <p>
            <span className="font-extrabold text-ink/80">Husk:</span> Normalvariasjonen er stor, og barn
            modnes i ulikt tempo. Dette er generell informasjon, ikke medisinske råd. Er du i tvil om barnets
            utvikling, ta kontakt med helsestasjonen eller fastlegen.
          </p>
          <p className="text-xs">
            Milepæler er bearbeidet fra CDC «Learn the Signs. Act Early.» og helsestasjonspunktene følger
            Helsedirektoratets helsestasjonsprogram (0–5 år).
          </p>
        </div>
      </footer>
    </div>
  );
}
