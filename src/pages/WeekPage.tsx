import { useEffect, useRef } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { WEEKS, TOTAL_WEEKS } from '../data/weeks';
import { clampWeek } from '../lib/date';
import WeekView from '../components/WeekView';
import WeekNav from '../components/WeekNav';
import { useApp } from '../context/AppContext';

export default function WeekPage() {
  const { week } = useParams();
  const navigate = useNavigate();
  const { currentWeek } = useApp();

  const parsed = Number(week);
  const valid = Number.isInteger(parsed) && parsed >= 1 && parsed <= TOTAL_WEEKS;
  const data = WEEKS[parsed - 1];

  const touchStart = useRef<{ x: number; y: number } | null>(null);

  // Tastaturnavigasjon med piltaster
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.target instanceof HTMLInputElement) return;
      if (e.key === 'ArrowRight' && parsed < TOTAL_WEEKS) {
        navigate(`/uke/${parsed + 1}`);
      } else if (e.key === 'ArrowLeft' && parsed > 1) {
        navigate(`/uke/${parsed - 1}`);
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [parsed, navigate]);

  // Rull til toppen ved bytte av uke
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [parsed]);

  if (!valid) {
    return <Navigate to={`/uke/${clampWeek(Math.round(parsed) || 1)}`} replace />;
  }

  function onTouchStart(e: React.TouchEvent) {
    touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }
  function onTouchEnd(e: React.TouchEvent) {
    if (touchStart.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStart.current.x;
    const dy = e.changedTouches[0].clientY - touchStart.current.y;
    touchStart.current = null;
    // Skrå rulling skal ikke bytte uke
    if (Math.abs(dx) <= Math.abs(dy)) return;
    const threshold = 60;
    if (dx < -threshold && parsed < TOTAL_WEEKS) navigate(`/uke/${parsed + 1}`);
    else if (dx > threshold && parsed > 1) navigate(`/uke/${parsed - 1}`);
  }

  return (
    <div
      className="max-w-3xl mx-auto px-5 sm:px-8 py-8 sm:py-12"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="mb-8">
        <WeekNav week={parsed} currentWeek={currentWeek} />
      </div>

      <WeekView data={data} isCurrent={currentWeek === parsed} />

      <div className="mt-10">
        <WeekNav week={parsed} currentWeek={currentWeek} />
      </div>

      <p className="text-center text-xs text-muted/80 mt-6">
        Tips: bruk piltastene ← → eller sveip for å bla mellom uker.
      </p>
    </div>
  );
}
