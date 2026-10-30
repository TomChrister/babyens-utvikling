import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import { loadBirthdate, saveBirthdate, clearBirthdate, weekFromBirthdate } from '../lib/date';

export interface AppContextValue {
  birthdate: string | null;
  currentWeek: number | null;
  setBirthdate: (iso: string | null) => void;
}

const AppContext = createContext<Omit<AppContextValue, 'currentWeek'> | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [birthdate, setBirthdateState] = useState<string | null>(() => loadBirthdate());

  const setBirthdate = useCallback((iso: string | null) => {
    if (iso) saveBirthdate(iso);
    else clearBirthdate();
    setBirthdateState(iso);
  }, []);

  const value = useMemo(() => ({ birthdate, setBirthdate }), [birthdate, setBirthdate]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp må brukes innenfor AppProvider');
  // Regnes ut ved hver render, så en fane som står åpen i flere dager ikke viser gammel uke
  return { ...ctx, currentWeek: ctx.birthdate ? weekFromBirthdate(ctx.birthdate) : null };
}
