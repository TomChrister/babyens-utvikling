// Innhold til Søvn-siden.
// Trygt sovemiljø følger norske råd (Helsenorge, Landsforeningen uventet barnedød (LUB),
// Store medisinske leksikon, NHI). Søvnteknikker og metoder er sammenstilt fra
// barnehelse- og søvnressurser (bl.a. NHS-tradisjonen, AAP og kjente metodebeskrivelser).
// Dette er generell informasjon, ikke medisinske råd.

export interface InfoItem {
  title: string;
  text: string;
}

/** Trygt sovemiljø – de viktigste rådene. */
export const SAFE_SLEEP: InfoItem[] = [
  {
    title: 'Alltid på ryggen',
    text: 'Legg babyen på ryggen hver gang hen skal sove – både dag og natt. Sideleie frarådes, fordi babyen lett kan rulle over på magen. Selv om babyen gulper, er det ingen fare for at hen kveles av å ligge på ryggen.',
  },
  {
    title: 'Egen, fast og flat soveplass',
    text: 'Babyen bør ha sin egen seng eller nest med fast, flatt underlag, på foreldrenes soverom de første ~6 månedene. Det gir nærhet og trygghet uten risikoen ved å dele madrass.',
  },
  {
    title: 'Tom seng',
    text: 'Ingen puter, dyner, kosedyr eller løse tepper i senga, og ikke dekk til hodet. En sovepose i riktig størrelse holder babyen passe varm uten løst sengetøy.',
  },
  {
    title: 'Passe temperatur',
    text: 'Hold soverommet kjølig, rundt 18 °C, og unngå å kle på for varmt. Kjenn i nakken om babyen er klam – overoppheting er en risikofaktor.',
  },
  {
    title: 'Røykfritt',
    text: 'Røykfritt miljø er det viktigste enkelttiltaket mot krybbedød. Unngå røyking i svangerskapet og i nærheten av babyen.',
  },
  {
    title: 'Amming og smokk',
    text: 'Amming ser ut til å beskytte mot krybbedød, og bruk av smokk ved innsovning kan også redusere risikoen.',
  },
  {
    title: 'Ikke sovne med babyen på brystet',
    text: 'La aldri babyen sove på magen på brystet ditt mens du selv sovner. Det gir samme økte risiko som mageleie. Legg babyen på ryggen i egen seng når dere er ferdige.',
  },
  {
    title: 'Når babyen ruller selv',
    text: 'Når babyen kan rulle stødig begge veier (ofte fra 5–6 måneder), kan hen bli liggende i stillingen hen selv velger. Legg likevel ned på ryggen, og hold senga fri for løse ting.',
  },
  {
    title: 'Hvis samsoving skjer',
    text: 'Skjer samsoving – planlagt eller ikke – følg rådene for forsvarlig samsoving: ikke ved for tidlig fødsel eller lav fødselsvekt, ikke hvis noen røyker/snuser eller er påvirket av alkohol, rusmidler eller sløvende medisiner, og bruk en fast, bred madrass uten sprekker babyen kan havne i.',
  },
];

/** Fra armene til egen seng – konkrete teknikker (kjernen i det Tom spurte om). */
export const TRANSITION_TIPS: InfoItem[] = [
  {
    title: 'Fast, kort leggerutine',
    text: 'Gjør de samme tingene i samme rekkefølge hver kveld (f.eks. bleie, sovepose, dempet lys, en sang). Rutinen blir et signal om at det er sovetid. Den som ikke ammer kan gjerne ta avslutningen, så amming og innsovning ikke alltid henger sammen.',
  },
  {
    title: 'Legg ned rolig, men våken',
    text: 'Når det går, legg babyen ned mens hen er rolig men fortsatt litt våken – ikke helt sovende. Da får babyen øve på å koble innsovning til senga, ikke bare til armene eller brystet. Begynn med leggingen om kvelden; det er det enkleste stedet å starte.',
  },
  {
    title: 'Overgangen ut av armene',
    text: 'Hold babyen tett inntil deg helt til hen er lagt ned. Senk rumpa først, så hodet, og la en hånd hvile på brystet noen sekunder før du slipper. Ha underlaget passe varmt (ikke kaldt) og bruk gjerne hvit støy – brå temperatur- eller lydskifte er ofte det som vekker.',
  },
  {
    title: 'Kort pause før du griper inn',
    text: 'Hvis babyen syter litt (ikke eskalerende gråt) når du legger hen ned, vent et par minutter og se an. Mange finner roen selv, og å løfte opp for raskt kan vekke babyen mer enn å la hen prøve.',
  },
  {
    title: 'Løft opp – legg ned',
    text: 'Gråter babyen, løft opp og trøst til hen er rolig, og legg ned igjen mens hen ennå er våken. Gjenta så mange ganger som trengs. Dette er en skånsom måte å øve på selvinnsovning uten å la babyen gråte alene.',
  },
  {
    title: 'På natten etter amming',
    text: 'Sovner babyen ved brystet om natten, bytt bleie ved behov og legg babyen på ryggen i egen seng eller nest mens hen fortsatt er litt våken. Hold det rolig og mørkt, og bruk samme rutine ved hver oppvåkning.',
  },
  {
    title: 'Vær realistisk – og snill mot dere selv',
    text: 'Kontaktsøvn er helt normalt, og de første ~3 månedene «ødelegger» det ingenting. Det er viktigere at babyen får sove enn nøyaktig hvordan. Øv på én søvn om dagen (gjerne leggingen), ikke alle. Søvnsykluser er bare ~45 minutter, så korte dagssøvner og oppvåkninger mellom syklusene er vanlig.',
  },
];

export interface SleepAgeRow {
  age: string;
  total: string;
  naps: string;
  wakeWindow: string;
  note: string;
}

/** Søvn gjennom første året – omtrentlige tall. Store individuelle variasjoner. */
export const SLEEP_BY_AGE: SleepAgeRow[] = [
  {
    age: '0–3 mnd',
    total: '14–17 t',
    naps: 'Mange, korte',
    wakeWindow: '30–90 min',
    note: 'Døgnrytmen er ikke etablert ennå; natt og dag blandes. Kontaktsøvn er normalt.',
  },
  {
    age: '2–4 mnd',
    total: '14–16 t',
    naps: '3–4',
    wakeWindow: '75–120 min',
    note: 'Mønster begynner å feste seg. 4-måneders søvnregresjon er vanlig her.',
  },
  {
    age: '4–6 mnd',
    total: '14–15,5 t',
    naps: '3',
    wakeWindow: '1,5–2,5 t',
    note: 'Søvnsyklusene modnes til mer voksenlignende søvn; ofte flere nattoppvåkninger.',
  },
  {
    age: '6–9 mnd',
    total: '~14 t',
    naps: '2–3',
    wakeWindow: '2,5–3 t',
    note: 'Rundt 8 måneder kan en ny regresjon komme med separasjonsangst og nye ferdigheter.',
  },
  {
    age: '9–12 mnd',
    total: '13–14 t',
    naps: '2',
    wakeWindow: '3–3,5 t',
    note: 'Mer forutsigbart, med lengre sammenhengende nattsøvn for mange.',
  },
];

export interface SleepMethod {
  name: string;
  kind: 'skånsom' | 'strukturert';
  age: string;
  text: string;
}

export const SLEEP_METHODS: SleepMethod[] = [
  {
    name: 'Døsig/våken nedlegging',
    kind: 'skånsom',
    age: 'Fra ~6–8 uker, én søvn om dagen',
    text: 'Legg babyen ned rolig men våken etter en fast leggerutine, så hen øver på å sovne selv. Ingen gråt-metode – du kan fortsatt trøste underveis.',
  },
  {
    name: 'Løft opp – legg ned',
    kind: 'skånsom',
    age: 'Egnet for små babyer',
    text: 'Løft og trøst babyen når hen gråter, legg ned igjen rolig/våken, og gjenta til hen sovner. Skånsomt, men kan ta tid og krever tålmodighet.',
  },
  {
    name: 'Gradvis tilbaketrekking («stoltrinn»)',
    kind: 'skånsom',
    age: 'Fra ~4–6 mnd',
    text: 'Sitt ved senga til babyen sovner, og flytt deg gradvis lenger unna over flere netter til babyen sovner uten at du er ved senga. Lite gråt, men tar gjerne 1–2 uker.',
  },
  {
    name: 'Kontrollert gråt / Ferber',
    kind: 'strukturert',
    age: 'Vanligvis fra ~6 mnd',
    text: 'Legg ned våken, og se innom ved gradvis økende intervaller med kort trøst (stemme eller berøring) uten å løfte opp. Gir ofte raskere resultat, men er omdiskutert.',
  },
  {
    name: 'Full ekstinksjon («cry it out»)',
    kind: 'strukturert',
    age: 'Tidligst ~6 mnd',
    text: 'Legg ned våken uten å se innom før babyen sovner. Den mest omstridte metoden. Bruk videomonitor, og bare når alle behov er dekket og babyen er utviklingsmessig klar.',
  },
];

export const REGRESSIONS: InfoItem[] = [
  {
    title: 'Rundt 3–4 måneder',
    text: 'Den mest kjente «regresjonen». Søvnen modnes til mer voksenlignende sykluser, noe som ofte gir flere oppvåkninger og kortere dagssøvner. Det er et utviklingssteg framover, ikke et tilbakeskritt.',
  },
  {
    title: 'Rundt 8–10 måneder',
    text: 'Sammenfaller ofte med separasjonsangst og nye ferdigheter som å krabbe og dra seg opp. Som regel forbigående – hold fast på trygge rutiner.',
  },
];
