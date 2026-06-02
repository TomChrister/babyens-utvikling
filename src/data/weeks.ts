import type { WeekData } from './types';

// Milepælene er bearbeidet fra CDC «Learn the Signs. Act Early.»
// (utviklingstrekk de fleste barn – 75 % eller mer – mestrer ved en gitt alder),
// og helsestasjonspunktene følger Helsedirektoratets helsestasjonsprogram (0–5 år).
// Husk: normalvariasjonen er stor. Barn modnes i ulikt tempo.

export const WEEKS: WeekData[] = [
  {
    week: 1,
    phase: 'Nyfødt · fjerde trimester',
    summary:
      'Den aller første uken handler om å lande i verden. Babyen sover store deler av døgnet (gjerne 16–18 timer), styres av reflekser og kjenner igjen stemmen og lukten din fra svangerskapet.',
    focus: ['Sover mesteparten av døgnet', 'Gripe- og søkerefleks', 'Ser best 20–30 cm unna', 'Trygghet gjennom nærhet'],
    tip: 'Mye hud-mot-hud. Det roer babyen, regulerer temperatur og puls, og styrker tilknytningen mellom dere.',
    helsestasjon: 'Hjemmebesøk av helsesykepleier kommer vanligvis i løpet av de første 7–10 dagene.',
  },
  {
    week: 2,
    phase: 'Nyfødt · fjerde trimester',
    summary:
      'Babyen begynner å feste blikket på ansiktet ditt i korte øyeblikk, spesielt under amming og stell. Vekten som ble tapt rett etter fødselen er gjerne på vei tilbake.',
    focus: ['Fester blikket kort på ansikter', 'Gjenkjenner kjente stemmer', 'Roer seg av kjent lukt', 'Spisemønster begynner å sette seg'],
    tip: 'Hold ansiktet ditt rundt 25 cm fra babyen når dere «prater». Det er akkurat der synet er skarpest nå.',
  },
  {
    week: 3,
    phase: 'Nyfødt · fjerde trimester',
    summary:
      'Bevegelsene blir gradvis mindre rykkete, og du ser kanskje litt lengre våkne perioder. Babyen vender seg mot lyd og lys, og blir mer nysgjerrig på omgivelsene.',
    focus: ['Mindre rykkete bevegelser', 'Vender seg mot lyd og lys', 'Lengre våkne stunder'],
    tip: 'Snakk og syng rolig gjennom dagen. Babyen lærer språk lenge før den kan svare, og stemmen din er det tryggeste lyden som finnes.',
    note: 'Mange opplever en urolig periode / vekstspurt rundt nå. Hyppigere amming og litt mer gråt er vanlig og går over.',
  },
  {
    week: 4,
    phase: 'Nyfødt · fjerde trimester',
    summary:
      'Ved én måned er babyen sterkere og mer våken. På magen kan hodet løftes så vidt, og du merker at babyen begynner å «svare» på ansikt og stemme på sin egen måte.',
    focus: ['Kortere, tydeligere våkne perioder', 'Løfter hodet så vidt på magen', 'Følger ansikt med øynene'],
    tip: 'Start med korte økter med magetid mens babyen er våken og du er til stede. Noen få minutter av gangen bygger nakke- og skulderstyrke.',
  },
  {
    week: 5,
    phase: 'Fjerde trimester',
    summary:
      'Blikkontakten blir tydeligere og lengre. Mange babyer øver nå på de aller første sosiale signalene – små grimaser og mimikk som svar på ansiktet ditt.',
    focus: ['Lengre, bevisst blikkontakt', 'Mer mimikk', 'Følger bevegelse med øynene'],
    tip: 'Lag overdrevne, vennlige ansiktsuttrykk og vent. Pausen gir babyen sjansen til å «svare» tilbake.',
  },
  {
    week: 6,
    phase: 'Fjerde trimester',
    summary:
      'En milepæl mange foreldre venter på: det første ekte sosiale smilet dukker ofte opp rundt nå. Babyen kan holde hodet stødigere på magen og virker mer til stede.',
    focus: ['Første sosiale smil', 'Bedre hodekontroll på magen', 'Roer seg lettere av stemmen din'],
    tip: 'Smil, snakk og vent på respons – så smil tilbake. Denne fram-og-tilbake-leken legger grunnlaget for språk og samspill.',
    helsestasjon: '6-ukerskonsultasjon hos helsestasjonen, ofte med både helsesykepleier og lege. Vaksine kan bli gitt etter barnevaksinasjonsprogrammet.',
    note: 'Rundt 6 uker er ofte toppen av gråt og uro for mange babyer. Det er normalt og avtar gradvis.',
  },
  {
    week: 7,
    phase: 'Fjerde trimester',
    summary:
      'Hørselen blir skarpere, og babyen reagerer mer aktivt på stemmen din. Mange begynner å oppdage sine egne hender og lager flere lyder enn bare gråt.',
    focus: ['Reagerer tydeligere på lyd', 'Oppdager hendene sine', 'Lager kurrelyder'],
    tip: 'Svar på lydene babyen lager ved å herme dem. Da lærer babyen at lyder skaper kontakt.',
  },
  {
    week: 8,
    phase: 'Rundt 2 måneder',
    summary:
      'Ved omtrent to måneder er bevegelsene mer koordinerte, smilene kommer lettere, og babyen følger deg med blikket når du beveger deg rundt i rommet.',
    focus: ['Følger deg med blikket', 'Smiler responsivt', 'Holder hodet bedre på magen'],
    tip: 'Heng en kontrastrik leke i synsfeltet og beveg den sakte fra side til side, så babyen kan øve på å følge med øynene.',
    milestone: {
      label: 'Rundt 2 måneder',
      source: 'CDC – Learn the Signs. Act Early.',
      items: [
        { domain: 'social', text: 'Roer seg når hen blir snakket til eller løftet opp' },
        { domain: 'social', text: 'Ser på ansiktet ditt og virker glad for å se deg' },
        { domain: 'social', text: 'Smiler når du snakker til eller smiler til hen' },
        { domain: 'sprak', text: 'Lager andre lyder enn gråt' },
        { domain: 'sprak', text: 'Reagerer på høye lyder' },
        { domain: 'kognitivt', text: 'Følger deg med blikket når du beveger deg' },
        { domain: 'kognitivt', text: 'Ser på en leke i flere sekunder' },
        { domain: 'motorikk', text: 'Holder hodet oppe når hen ligger på magen' },
        { domain: 'motorikk', text: 'Beveger begge armer og begge bein' },
        { domain: 'motorikk', text: 'Åpner hendene kort' },
      ],
    },
  },
  {
    week: 9,
    phase: 'Fjerde trimester',
    summary:
      'Babyen løfter hodet høyere under magetid og svarer gjerne på smilet ditt med sitt eget. Kommunikasjonen blir mer toveis.',
    focus: ['Løfter hodet høyere på magen', 'Smiler tilbake', 'Mer øyekontakt'],
    tip: 'Legg deg ned på gulvet i øyehøyde under magetid. Ansiktet ditt er den beste motivasjonen til å løfte hodet.',
  },
  {
    week: 10,
    phase: 'Fjerde trimester',
    summary:
      'Babyen begynner å bli interessert i å nå etter ting og studerer omgivelsene mer aktivt. Hendene åpner og lukker seg mer bevisst.',
    focus: ['Begynner å rekke mot ting', 'Studerer omgivelsene', 'Mer bevisste håndbevegelser'],
    tip: 'Heng fargerike leker innen synsrekkevidde slik at babyen kan øve på å strekke seg og sikte.',
  },
  {
    week: 11,
    phase: 'Fjerde trimester',
    summary:
      'Kurringen og babbelet blir mer variert. Babyen «prater» med vokallyder og liker å veksle lyder med deg.',
    focus: ['Mer variert kurring', 'Liker fram-og-tilbake «prat»', 'Reagerer på tonefall'],
    tip: 'Hold små «samtaler»: si noe, vent, og svar på det babyen kurrer tilbake. Turtaking er starten på språk.',
  },
  {
    week: 12,
    phase: 'Slutten av fjerde trimester',
    summary:
      'Ved tre måneder har de fleste babyer klart bedre hodekontroll, smiler og ler mer, og noen begynner å skyve seg opp på underarmene. Den utfordrende nyfødtfasen går mot slutten.',
    focus: ['God hodekontroll', 'Ler og kurrer mer', 'Skyver opp på underarmene', 'Mer forutsigbar rytme'],
    tip: 'Gi rikelig med gulvtid på et teppe. Frihet til å bevege armer og bein bygger styrken som trengs for å rulle senere.',
    note: 'En vekstspurt og litt søvnuro rundt 3 måneder er vanlig før ting roer seg igjen.',
  },
  {
    week: 13,
    phase: 'Rundt 3 måneder',
    summary:
      'Babyen blir mer sosial og uttrykksfull. Hendene møtes på midten, og mange begynner å gripe etter ting de ser.',
    focus: ['Fører hendene sammen', 'Griper etter ting', 'Mer uttrykksfull mimikk'],
    tip: 'Tilby lette skrangler babyen kan holde. Det kobler sammen syn, grep og lyd.',
    helsestasjon: '3-månederskonsultasjon på helsestasjonen, vanligvis med vaksine etter barnevaksinasjonsprogrammet.',
  },
  {
    week: 14,
    phase: '3–4 måneder',
    summary:
      'Latter og hyl av glede dukker opp. Babyen holder hodet stødig når du holder hen oppreist, og følger ting smidigere med blikket.',
    focus: ['Ler høyt', 'Stødig hode oppreist', 'Følger ting jevnt med øynene'],
    tip: 'Lek lyder og «overraskelser» som får babyen til å le – latter er både glede og språktrening.',
  },
  {
    week: 15,
    phase: '3–4 måneder',
    summary:
      'Babyen utforsker verden med munnen og fører gjerne hender og leker dit. Grepet blir fastere og mer villet.',
    focus: ['Fører hender til munnen', 'Fastere grep', 'Utforsker med munnen'],
    tip: 'Sørg for rene, trygge leker uten små løse deler – munnen er babyens viktigste utforskningsverktøy nå.',
  },
  {
    week: 16,
    phase: '3–4 måneder',
    summary:
      'Babyen svinger armene mot leker og treffer stadig bedre. Kurringen svarer på stemmen din, og hen vender hodet mot lyder.',
    focus: ['Sikter og slår mot leker', 'Svarer med lyder', 'Vender hodet mot stemmen din'],
    tip: 'Heng en aktivitetsbøyle over babyen. Å treffe og dytte borti ting lærer årsak og virkning.',
  },
  {
    week: 17,
    phase: 'Rundt 4 måneder',
    summary:
      'Ved fire måneder er babyen tydelig mer sosial: smiler for å få oppmerksomhet, kurrer i «samtale» med deg og skyver seg opp på underarmene under magetid.',
    focus: ['Smiler for kontakt', 'Kurrer i samtale', 'Skyver opp på underarmene'],
    tip: 'Speil lydene babyen lager og legg til ord. Denne turtakingen er byggesteinene for språk.',
    milestone: {
      label: 'Rundt 4 måneder',
      source: 'CDC – Learn the Signs. Act Early.',
      items: [
        { domain: 'social', text: 'Smiler av seg selv for å få oppmerksomheten din' },
        { domain: 'social', text: 'Humrer/ler når du prøver å få hen til å le' },
        { domain: 'social', text: 'Ser på deg, beveger seg eller lager lyder for å få og holde på oppmerksomheten' },
        { domain: 'sprak', text: 'Lager kurrelyder som «oooo» og «aaah»' },
        { domain: 'sprak', text: 'Svarer med lyder når du snakker til hen' },
        { domain: 'sprak', text: 'Vender hodet mot stemmen din' },
        { domain: 'kognitivt', text: 'Åpner munnen når hen er sulten og ser bryst eller flaske' },
        { domain: 'kognitivt', text: 'Ser på hendene sine med interesse' },
        { domain: 'motorikk', text: 'Holder hodet stødig uten støtte når du holder hen' },
        { domain: 'motorikk', text: 'Holder en leke når du legger den i hånden' },
        { domain: 'motorikk', text: 'Fører hendene til munnen' },
        { domain: 'motorikk', text: 'Skyver seg opp på underarmene når hen ligger på magen' },
      ],
    },
    helsestasjon: '4-månederskonsultasjon, ofte som gruppekonsultasjon med fysioterapeut. Vanlige tema er søvn, sikkerhet og tannhelse.',
  },
  {
    week: 18,
    phase: '4–5 måneder',
    summary:
      'Babyen rekker målrettet etter leker og fører dem til munnen. Noen begynner å vise tegn til å ville rulle.',
    focus: ['Rekker målrettet', 'Fører leker til munnen', 'Viser vilje til å rulle'],
    tip: 'Legg en leke litt utenfor rekkevidde under magetid for å motivere til bevegelse og rulling.',
  },
  {
    week: 19,
    phase: '4–5 måneder',
    summary:
      'Babyen blir flinkere til å holde og flytte ting i hendene, og utforsker tekstur og form gjennom berøring og munn.',
    focus: ['Holder og flytter ting', 'Utforsker tekstur', 'Lager flere lyder'],
    tip: 'Tilby leker i ulike materialer og former – mykt, hardt, ruglete – for å stimulere sansene.',
  },
  {
    week: 20,
    phase: '4–5 måneder',
    summary:
      'Mange babyer mestrer nå å rulle fra mage til rygg. Babbelet blir mer lekende, med pruste- og «raspeberry»-lyder.',
    focus: ['Ruller mage til rygg', 'Lekende babbel', 'Prustelyder'],
    tip: 'Feire rulling med smil og applaus. Positiv respons motiverer til å gjøre det igjen.',
  },
  {
    week: 21,
    phase: '4–5 måneder',
    summary:
      'Babyen sitter med støtte og holder hodet stabilt. Interessen for mat og det dere spiser kan begynne å våkne.',
    focus: ['Sitter med støtte', 'Stabil hodekontroll', 'Nysgjerrig på mat'],
    tip: 'La babyen sitte støttet i fanget under måltider. Å se dere spise vekker nysgjerrighet før fast føde starter.',
  },
  {
    week: 22,
    phase: 'Rundt 5 måneder',
    summary:
      'Babyen er stadig mer aktiv: ruller, skyver opp med strakere armer og griper bestemt etter det hen vil ha.',
    focus: ['Skyver opp med strake armer', 'Bestemt griping', 'Mer aktiv på gulvet'],
    tip: 'Skap trygge muligheter for å rekke, sparke og utforske. Bevegelsesfrihet er den beste treningen.',
    helsestasjon: '5-månederskonsultasjon, vanligvis med vaksine etter barnevaksinasjonsprogrammet.',
  },
  {
    week: 23,
    phase: '5–6 måneder',
    summary:
      'Babyen kjenner tydelig igjen kjente personer og kan reagere annerledes på fremmede. Latteren sitter løst.',
    focus: ['Kjenner igjen kjente', 'Ler ofte', 'Reagerer på fremmede'],
    tip: 'Lek titt-tei. Det er gøy nå – og forbereder forståelsen av at ting finnes selv når de er borte.',
  },
  {
    week: 24,
    phase: '5–6 måneder',
    summary:
      'Babyen begynner å sitte mer selvstendig ved å støtte seg på hendene, og flytter gjerne leker fra hånd til hånd.',
    focus: ['Sitter støttet på hendene', 'Flytter ting mellom hender', 'Veksler lyder med deg'],
    tip: 'Sitt sammen på gulvet og rull en ball fram og tilbake. Det øver både balanse og samspill.',
  },
  {
    week: 25,
    phase: '5–6 måneder',
    summary:
      'Babbelet får flere konsonanter, og babyen «svarer» når du snakker. Mange er nå klare for å utforske smak når fast føde introduseres.',
    focus: ['Babler med konsonanter', 'Svarer i samtale', 'Klar for smaksprøver'],
    tip: 'Sett ord på det babyen ser og gjør gjennom dagen. Et rikt språkmiljø nå legger grunnlaget for ordforrådet.',
  },
  {
    week: 26,
    phase: 'Rundt 6 måneder',
    summary:
      'Halvveis i det første året! Babyen ruller begge veier, putter ting i munnen for å utforske, og blåser morsomme lyder. Mange starter med fast føde rundt nå.',
    focus: ['Ruller begge veier', 'Utforsker med munnen', 'Blåser lyder', 'Smaker på fast føde'],
    tip: 'Når fast føde starter: én ny smak om gangen, i rolig tempo. La babyen utforske mat med hendene.',
    milestone: {
      label: 'Rundt 6 måneder',
      source: 'CDC – Learn the Signs. Act Early.',
      items: [
        { domain: 'social', text: 'Kjenner igjen kjente personer' },
        { domain: 'social', text: 'Liker å se seg selv i speilet' },
        { domain: 'social', text: 'Ler' },
        { domain: 'sprak', text: 'Veksler lyder med deg og tar tur' },
        { domain: 'sprak', text: 'Blåser «raspeberry»-lyder' },
        { domain: 'sprak', text: 'Lager hvine- og pipelyder' },
        { domain: 'kognitivt', text: 'Putter ting i munnen for å utforske dem' },
        { domain: 'kognitivt', text: 'Rekker ut for å gripe en leke hen vil ha' },
        { domain: 'kognitivt', text: 'Lukker leppene for å vise at hen ikke vil ha mer mat' },
        { domain: 'motorikk', text: 'Ruller fra magen over på ryggen' },
        { domain: 'motorikk', text: 'Skyver seg opp med strake armer når hen ligger på magen' },
        { domain: 'motorikk', text: 'Støtter seg på hendene når hen sitter' },
      ],
    },
    helsestasjon: '6-månederskonsultasjon, vanligvis med både helsesykepleier og lege.',
    note: 'Morsmelk eller morsmelkerstatning dekker det meste av behovet de første ~6 månedene; fast føde kommer i tillegg, ikke i stedet.',
  },
  {
    week: 27,
    phase: '6–7 måneder',
    summary:
      'Babyen sitter stadig stødigere, kanskje uten støtte i korte stunder. Hen flytter ting mellom hendene med større kontroll.',
    focus: ['Sitter kort uten støtte', 'Bedre håndkontroll', 'Mer babbel'],
    tip: 'Legg puter rundt babyen mens hen øver på å sitte. Trygge fall gjør at hen tør å prøve mer.',
  },
  {
    week: 28,
    phase: '6–7 måneder',
    summary:
      'Babbelet kan låte som ekte stavelser. Babyen viser tydelig hva hen vil ha og rekker ut etter det.',
    focus: ['Stavelsesbabbel', 'Viser ønsker tydelig', 'Sitter mer stabilt'],
    tip: 'Gjenta stavelsene babyen lager – «ba-ba», «da-da» – som en lek. Det oppmuntrer til mer prat.',
  },
  {
    week: 29,
    phase: '6–7 måneder',
    summary:
      'Noen babyer begynner å åle, gynge på alle fire eller skyve seg bakover. Mobiliteten er på vei.',
    focus: ['Gynger på alle fire', 'Åler eller skyver seg', 'Utforsker rekkevidde'],
    tip: 'Gi gulvplass og plasser en leke litt unna. Lysten til å nå den driver fram krabbingen.',
  },
  {
    week: 30,
    phase: '7 måneder',
    summary:
      'Babyen sitter trygt uten støtte og bruker hendene friere til å leke. Forståelsen av at ting finnes selv om de er skjult, vokser.',
    focus: ['Sitter uten støtte', 'Leker med begge hender', 'Begynnende objektforståelse'],
    tip: 'Gjem en leke delvis under et teppe og la babyen finne den. Det styrker hukommelse og forståelse.',
  },
  {
    week: 31,
    phase: '7–8 måneder',
    summary:
      'Fremmedfrykt og separasjonsangst kan begynne nå – et tegn på sunn tilknytning. Babyen forstår at du er viktig og kan protestere når du går.',
    focus: ['Begynnende fremmedfrykt', 'Sterk tilknytning til deg', 'Liker forutsigbarhet'],
    tip: 'Korte, rolige «ha det» og gjensyn bygger trygghet. Snik deg aldri bort – forutsigbarhet roer separasjonsangst.',
  },
  {
    week: 32,
    phase: '7–8 måneder',
    summary:
      'Babyen banker og rister gjenstander for å utforske lyd og effekt. Pinsettgrepet begynner å øves inn.',
    focus: ['Banker ting sammen', 'Utforsker lyd og effekt', 'Øver finmotorikk'],
    tip: 'Gi trygge ting babyen kan slå sammen. Å lage lyd selv er både gøy og lærerikt.',
  },
  {
    week: 33,
    phase: '7–8 måneder',
    summary:
      'Mange babyer drar seg opp til stående mot møbler. Babbelet inneholder lange rekker av stavelser som «mamama» og «babababa».',
    focus: ['Drar seg opp mot møbler', 'Lange babbelrekker', 'Mer mobil'],
    tip: 'Sjekk at møbler står stødig og at skarpe kanter er sikret – babyen vil snart trekke seg opp overalt.',
  },
  {
    week: 34,
    phase: '8 måneder',
    summary:
      'Babyen kan komme seg til sittende på egen hånd og krabber kanskje rundt. Hen leter aktivt etter ting hen ser deg gjemme.',
    focus: ['Setter seg opp selv', 'Krabber rundt', 'Leter etter skjulte ting'],
    tip: 'Sikre hjemmet: stikkontakter, ledninger, trapper og giftige ting utenfor rekkevidde. En mobil baby kommer overalt.',
  },
  {
    week: 35,
    phase: '8 måneder',
    summary:
      'Babyen utforsker ivrig og flytter seg gjerne selv. Hen viser tydelige følelser og henvender seg til deg for trygghet.',
    focus: ['Selvstendig bevegelse', 'Tydelige følelser', 'Søker trygghet hos deg'],
    tip: 'Sett ord på følelser: «du ble lei deg», «nå er du glad». Det hjelper babyen å forstå sitt eget følelsesliv.',
    helsestasjon: '8-månederskonsultasjon på helsestasjonen, med fokus på utvikling, samspill og bevegelse.',
  },
  {
    week: 36,
    phase: '8–9 måneder',
    summary:
      'Objektpermanens er på plass for mange: babyen leter etter ting som forsvinner ut av syne. Pekefinger og tommel begynner å samarbeide.',
    focus: ['Leter etter skjulte ting', 'Begynnende pinsettgrep', 'Mer presis griping'],
    tip: 'Tilby trygge, små biter av mat babyen kan plukke opp selv. Det trener pinsettgrepet og selvstendighet.',
  },
  {
    week: 37,
    phase: '8–9 måneder',
    summary:
      'Babyen banker to ting sammen med vilje og liker leker som svarer med lyd eller bevegelse. Krabbingen blir raskere.',
    focus: ['Banker ting bevisst', 'Liker leker med respons', 'Rask krabbing'],
    tip: 'Lek borte-titt-tei og «hvor er den?»-leker. De er gull for både glede og kognitiv utvikling nå.',
  },
  {
    week: 38,
    phase: '8–9 måneder',
    summary:
      'Babyen løfter armene for å bli tatt opp og bruker lyder og gester for å kommunisere ønsker. Sosialt er hen mer engasjert enn noen gang.',
    focus: ['Løfter armene for å bli løftet', 'Kommuniserer med gester', 'Engasjert i samspill'],
    tip: 'Svar på gestene babyen lager. Når du tolker og responderer, lærer hen at kommunikasjon virker.',
  },
  {
    week: 39,
    phase: 'Rundt 9 måneder',
    summary:
      'Ved ni måneder er babyen sosialt finstemt: viser flere ansiktsuttrykk, kan være sjenert for fremmede, og leter etter ting du gjemmer. Mange sitter stødig og krabber godt.',
    focus: ['Mange ansiktsuttrykk', 'Sjenert for fremmede', 'Leter etter skjulte ting', 'Sitter og krabber'],
    tip: 'Beskriv det babyen ser på: «rød, rund ball». Konkret språk knyttet til det hen er opptatt av, fester seg best.',
    milestone: {
      label: 'Rundt 9 måneder',
      source: 'CDC – Learn the Signs. Act Early.',
      items: [
        { domain: 'social', text: 'Er sjenert, klengete eller redd for fremmede' },
        { domain: 'social', text: 'Viser flere ansiktsuttrykk (glad, lei seg, sint, overrasket)' },
        { domain: 'social', text: 'Ser opp når du sier navnet hens' },
        { domain: 'social', text: 'Reagerer når du går (ser, rekker ut eller gråter)' },
        { domain: 'social', text: 'Smiler eller ler under titt-tei' },
        { domain: 'sprak', text: 'Lager mange ulike lyder som «mamama» og «babababa»' },
        { domain: 'sprak', text: 'Løfter armene for å bli løftet opp' },
        { domain: 'kognitivt', text: 'Leter etter ting hen ser deg gjemme' },
        { domain: 'kognitivt', text: 'Banker to ting sammen' },
        { domain: 'motorikk', text: 'Setter seg opp til sittende på egen hånd' },
        { domain: 'motorikk', text: 'Flytter ting fra én hånd til den andre' },
        { domain: 'motorikk', text: 'Bruker fingrene til å «rake» mat mot seg' },
      ],
    },
  },
  {
    week: 40,
    phase: '9–10 måneder',
    summary:
      'Babyen krabber stødig og begynner kanskje å cruise – å gå sidelengs mens hen holder seg i møbler. Finmotorikken blir stadig mer presis.',
    focus: ['Stødig krabbing', 'Begynner å cruise', 'Presis griping'],
    tip: 'Skap en trygg «cruise-rute» med stabile møbler i passe avstand, så babyen kan øve på å gå sidelengs.',
  },
  {
    week: 41,
    phase: '9–10 måneder',
    summary:
      'Babyen forstår enkle ord og begynner å knytte lyder til mening. Hen hermer gjerne gester som å vinke eller klappe.',
    focus: ['Forstår enkle ord', 'Hermer gester', 'Vinker eller klapper'],
    tip: 'Lek klappeleker og vink «ha det» konsekvent. Gjentakelse gjør at gestene fester seg.',
  },
  {
    week: 42,
    phase: '9–10 måneder',
    summary:
      'Babyen putter gjerne ting inn i og ut av beholdere – en favorittlek nå – og forstår at ting fortsatt finnes selv om de er skjult.',
    focus: ['Putter ting i beholdere', 'Tømmer og fyller', 'Sterk objektforståelse'],
    tip: 'Gi en boks og noen trygge klosser. Å fylle og tømme trener både finmotorikk og forståelse.',
  },
  {
    week: 43,
    phase: 'Rundt 10 måneder',
    summary:
      'Babyen er mobil og nysgjerrig, drar seg opp til stående og utforsker alt innen rekkevidde. Forståelsen av språk vokser raskt.',
    focus: ['Drar seg opp til stå', 'Utforsker alt', 'Forstår mer språk'],
    tip: 'Les bildebøker sammen hver dag og pek på det dere ser. Det bygger ordforråd og felles oppmerksomhet.',
    helsestasjon: '10-månederskonsultasjon, med fokus på motorikk, språk og samspill.',
  },
  {
    week: 44,
    phase: '10–11 måneder',
    summary:
      'Babyen står med støtte og kanskje noen sekunder alene. De første «ordene» med mening – ofte «mamma» eller «pappa» – kan dukke opp.',
    focus: ['Står med støtte', 'Mulige første ord', 'Pinsettgrep'],
    tip: 'Bekreft forsøk på ord med entusiasme, selv om de er utydelige. Respons motiverer videre prating.',
  },
  {
    week: 45,
    phase: '10–11 måneder',
    summary:
      'Babyen forstår «nei» og enkle beskjeder, og bruker peking for å vise deg ting. Samspillet blir mer gjensidig.',
    focus: ['Forstår «nei»', 'Peker for å vise', 'Gjensidig samspill'],
    tip: 'Følg babyens peking med ord: «Ja, det er en hund!». Felles oppmerksomhet er drivstoff for språk.',
  },
  {
    week: 46,
    phase: '10–11 måneder',
    summary:
      'Babyen blir flinkere til å plukke opp små ting med tommel og pekefinger, og øver på å mate seg selv. Cruisingen blir tryggere.',
    focus: ['Sikkert pinsettgrep', 'Mater seg selv', 'Tryggere cruising'],
    tip: 'La babyen øve på å spise selv, selv om det blir grisete. Det trener både finmotorikk og selvstendighet.',
  },
  {
    week: 47,
    phase: '11 måneder',
    summary:
      'Babyen leker enkle leker med deg, som klappeleker og titt-tei, og kan etterligne det du gjør. Noen tar sine første skritt med støtte.',
    focus: ['Leker enkle leker', 'Hermer handlinger', 'Mulige skritt med støtte'],
    tip: 'Hold babyens hender og «gå» sammen. Det bygger selvtillit og balanse mot de første egne skrittene.',
  },
  {
    week: 48,
    phase: '11 måneder',
    summary:
      'Babyen forstår stadig mer og følger enkle beskjeder. Personligheten kommer tydelig fram i lek, humor og preferanser.',
    focus: ['Følger enkle beskjeder', 'Tydelig personlighet', 'Mer lek og humor'],
    tip: 'Gi enkle valg: «vil du ha eplet eller banan?». Det gir mestringsfølelse og styrker forståelsen.',
  },
  {
    week: 49,
    phase: '11–12 måneder',
    summary:
      'Babyen drar seg opp og går langs møbler med god kontroll. Noen slipper taket og tar et par frittstående skritt.',
    focus: ['Går langs møbler', 'Mulige frittstående skritt', 'God balanse'],
    tip: 'Skap åpne, trygge gulvflater for øving. Barføtter gir best balanse og kjenslen av underlaget.',
  },
  {
    week: 50,
    phase: '11–12 måneder',
    summary:
      'Babyen drikker av kopp når du holder den, og bruker hendene mer presist i lek og spising. Forståelsen av ord og rutiner er sterk.',
    focus: ['Drikker av kopp', 'Presis håndbruk', 'Forstår rutiner'],
    tip: 'Introduser en kopp uten lokk under tilsyn. Søl er en del av læringen.',
  },
  {
    week: 51,
    phase: 'Snart 1 år',
    summary:
      'Babyen kombinerer det hen kan: peker, vinker, babler «ord» og beveger seg målrettet. Forberedelsene til de første ekte skrittene og ordene er i full gang.',
    focus: ['Kombinerer ferdigheter', 'Målrettet bevegelse', 'Mer «ordlignende» babbel'],
    tip: 'Hold fast på lese-, sang- og leserutiner. Forutsigbare ritualer gir trygghet i en fase med mye nytt.',
  },
  {
    week: 52,
    phase: 'Rundt 1 år',
    summary:
      'Gratulerer med det første året! Mange ettåringer drar seg opp, cruiser eller tar sine første skritt, sier et par ord med mening og leker enkle leker med deg. En ny epoke som småbarn begynner nå.',
    focus: ['Drar seg opp og cruiser', 'Mulige første skritt og ord', 'Pinsettgrep', 'Leker med deg'],
    tip: 'Feire året som har gått – og at hvert barn følger sin egen kurve. Det viktigste er jevn framgang, ikke å treffe hver milepæl til punkt og prikke.',
    milestone: {
      label: 'Rundt 12 måneder',
      source: 'CDC – Learn the Signs. Act Early.',
      items: [
        { domain: 'social', text: 'Leker enkle leker med deg, som klappeleker (pat-a-cake)' },
        { domain: 'sprak', text: 'Vinker «ha det»' },
        { domain: 'sprak', text: 'Kaller en forelder «mamma», «pappa» eller et annet spesielt navn' },
        { domain: 'sprak', text: 'Forstår «nei» (stopper kort opp når du sier det)' },
        { domain: 'kognitivt', text: 'Putter ting i en beholder, som en kloss i en kopp' },
        { domain: 'kognitivt', text: 'Leter etter ting hen ser deg gjemme' },
        { domain: 'motorikk', text: 'Drar seg opp til stående' },
        { domain: 'motorikk', text: 'Går mens hen holder seg i møbler (cruiser)' },
        { domain: 'motorikk', text: 'Drikker av kopp uten lokk når du holder den' },
        { domain: 'motorikk', text: 'Plukker opp små ting med tommel og pekefinger' },
      ],
    },
    helsestasjon: '12-månederskonsultasjon med helsesykepleier og lege, vanligvis med vaksine etter barnevaksinasjonsprogrammet.',
  },
];

export function getWeek(week: number): WeekData | undefined {
  return WEEKS.find((w) => w.week === week);
}

export const TOTAL_WEEKS = WEEKS.length;
