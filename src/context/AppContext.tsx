import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import { loadBirthdate, saveBirthdate, clearBirthdate, weekFromBirthdate } from '../lib/date';

export interface AppContextValue {
  birthdate: string | null;
  currentWeek: number | null;
  setBirthdate: (iso: string | null) => void;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [birthdate, setBirthdateState] = useState<string | null>(() => loadBirthdate());

  const currentWeek = useMemo(
    () => (birthdate ? weekFromBirthdate(birthdate) : null),
    [birthdate],
  );

  const setBirthdate = useCallback((iso: string | null) => {
    if (iso) saveBirthdate(iso);
    else clearBirthdate();
    setBirthdateState(iso);
  }, []);

  const value = useMemo(
    () => ({ birthdate, currentWeek, setBirthdate }),
    [birthdate, currentWeek, setBirthdate],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp må brukes innenfor AppProvider');
  return ctx;
}
