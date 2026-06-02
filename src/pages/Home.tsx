import { Navigate, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import BirthdateSetup from '../components/BirthdateSetup';

export default function Home() {
  const { birthdate, currentWeek, setBirthdate } = useApp();
  const navigate = useNavigate();

  // Har vi fødselsdato, hopp rett til riktig uke
  if (birthdate && currentWeek) {
    return <Navigate to={`/uke/${currentWeek}`} replace />;
  }

  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-12 sm:py-20">
      <div className="flex flex-col items-center text-center mb-10">
        <p className="text-terracotta font-body font-bold tracking-widest uppercase text-xs mb-3">
          Det første året
        </p>
        <h1 className="font-display text-4xl sm:text-5xl text-ink mb-4 text-balance leading-tight">
          Følg babyens utvikling, én uke om gangen
        </h1>
        <p className="text-muted text-lg max-w-xl leading-relaxed">
          Hver uke får du en oversikt over hva som er typisk for alderen – fra de første smilene til de
          første skrittene – med milepæler og tips underveis.
        </p>
      </div>

      <div className="flex justify-center">
        <BirthdateSetup
          onSave={(iso) => setBirthdate(iso)}
          onSkip={() => navigate('/uke/1')}
          initial={birthdate}
        />
      </div>
    </div>
  );
}
