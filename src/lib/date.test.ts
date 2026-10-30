import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { clampWeek, weekFromBirthdate } from './date';
import { WEEKS, TOTAL_WEEKS } from '../data/weeks';

function weekOn(birth: string, now: Date): number {
  vi.setSystemTime(now);
  return weekFromBirthdate(birth);
}

describe('weekFromBirthdate', () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it('teller hele uker fra fødselsdagen', () => {
    expect(weekOn('2026-01-01', new Date(2026, 0, 1, 12))).toBe(1); // dag 0
    expect(weekOn('2026-01-01', new Date(2026, 0, 7, 23, 59))).toBe(1); // dag 6
    expect(weekOn('2026-01-01', new Date(2026, 0, 8, 0, 1))).toBe(2); // dag 7
  });

  it('tåler overgang til sommertid rett etter midnatt', () => {
    expect(weekOn('2026-03-25', new Date(2026, 3, 1, 0, 30))).toBe(2);
  });

  it('holder seg innenfor 1–52', () => {
    expect(weekOn('2026-06-01', new Date(2026, 0, 1))).toBe(1); // dato i framtiden
    expect(weekOn('2024-01-01', new Date(2026, 0, 1))).toBe(TOTAL_WEEKS);
    expect(weekOn('tull', new Date(2026, 0, 1))).toBe(1);
  });
});

describe('clampWeek', () => {
  it('klemmer til gyldig uke', () => {
    expect(clampWeek(0)).toBe(1);
    expect(clampWeek(99)).toBe(TOTAL_WEEKS);
  });
});

it('WEEKS har uke 1–52 i rekkefølge (WeekPage slår opp på indeks)', () => {
  expect(WEEKS.map((w) => w.week)).toEqual(Array.from({ length: 52 }, (_, i) => i + 1));
});
