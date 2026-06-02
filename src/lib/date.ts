import { TOTAL_WEEKS } from '../data/weeks';

const STORAGE_KEY = 'baby-fodselsdato';

/** Lagre fødselsdato (ISO-format YYYY-MM-DD) lokalt i nettleseren. */
export function saveBirthdate(iso: string): void {
  try {
    localStorage.setItem(STORAGE_KEY, iso);
  } catch {
    // localStorage kan være utilgjengelig (privat modus e.l.) – ignorer stille
  }
}

export function loadBirthdate(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

export function clearBirthdate(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignorer
  }
}

/** Antall hele dager mellom to datoer. */
function daysBetween(from: Date, to: Date): number {
  const ms = to.getTime() - from.getTime();
  return Math.floor(ms / (1000 * 60 * 60 * 24));
}

/**
 * Regn ut hvilken leveuke barnet er i ut fra fødselsdato.
 * Uke 1 = de første 7 dagene. Returnerer et tall mellom 1 og TOTAL_WEEKS.
 */
export function weekFromBirthdate(iso: string): number {
  const birth = new Date(iso + 'T00:00:00');
  if (isNaN(birth.getTime())) return 1;
  const today = new Date();
  const days = daysBetween(birth, today);
  const week = Math.floor(days / 7) + 1;
  return clampWeek(week);
}

export function clampWeek(week: number): number {
  if (week < 1) return 1;
  if (week > TOTAL_WEEKS) return TOTAL_WEEKS;
  return week;
}

/** Er barnet eldre enn det siste uketrinnet siden dekker? */
export function isPastLastWeek(iso: string): boolean {
  const birth = new Date(iso + 'T00:00:00');
  if (isNaN(birth.getTime())) return false;
  const days = daysBetween(birth, new Date());
  return Math.floor(days / 7) + 1 > TOTAL_WEEKS;
}

/** Omtrentlig alder i måneder for en gitt uke (avrundet til én desimal). */
export function approxMonths(week: number): number {
  return Math.round((week / 4.345) * 10) / 10;
}

/** Lesbar aldersetikett, f.eks. "6 uker (~1,4 måneder)". */
export function ageLabel(week: number): string {
  const months = approxMonths(week);
  const monthStr = months.toLocaleString('no-NO');
  const ukeOrd = week === 1 ? '1. leveuke' : `Uke ${week}`;
  return `${ukeOrd} · ca. ${monthStr} måneder`;
}
