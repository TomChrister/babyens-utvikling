export type Domain = 'social' | 'sprak' | 'kognitivt' | 'motorikk';

export interface MilestoneItem {
  domain: Domain;
  text: string;
}

export interface Milestone {
  /** F.eks. "Rundt 2 måneder" */
  label: string;
  /** Kilde for milepælene */
  source: string;
  items: MilestoneItem[];
}

export interface WeekData {
  /** 1–52 */
  week: number;
  /** Utviklingsfase, f.eks. "Fjerde trimester" */
  phase: string;
  /** 2–3 setninger om hva som skjer denne uken */
  summary: string;
  /** Korte stikkord som er typiske rundt denne uken */
  focus: string[];
  /** Et praktisk tips / en aktivitet */
  tip: string;
  /** CDC-milepælssjekkpunkt, vises på utvalgte uker */
  milestone?: Milestone;
  /** Norsk helsestasjons-/vaksinepunkt rundt denne alderen */
  helsestasjon?: string;
  /** Ekstra notat, f.eks. vanlig vekstspurt eller urolig periode */
  note?: string;
}

export const DOMAIN_LABELS: Record<Domain, string> = {
  social: 'Sosialt og følelser',
  sprak: 'Språk og kommunikasjon',
  kognitivt: 'Tenkning og læring',
  motorikk: 'Bevegelse og motorikk',
};

export const DOMAIN_DOT: Record<Domain, string> = {
  social: 'bg-social',
  sprak: 'bg-sprak',
  kognitivt: 'bg-kognitivt',
  motorikk: 'bg-motorikk',
};
