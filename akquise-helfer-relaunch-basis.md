# Akquise-Helfer Relaunch – Basisdatei (Struktur, Content, SEO/GEO)

> Scope dieser Datei: Informationsarchitektur, Seiteninhalte, SEO- und GEO-Anforderungen, Fakten/Textbausteine.
> Nicht enthalten: Design, Bildauswahl, Layout, Farben, UI-Komponenten – das wird in Cursor entschieden (siehe Abschnitt 11 für Ausgangspunkte).
>
> **Version 3** – ergänzt um die Partnermarken-Strategie (Power BI / Video-Produktion), löst die offene Frage zu Corporate TV aus Version 2 final auf.

---

## 1. Projektziel & Positionierung

Relaunch der bestehenden WordPress/Elementor-Seite akquise-helfer.de mit dem Ziel: massive Vereinfachung der Struktur (aktuell 9 Hauptmenüpunkte, 20 Unterseiten, viele davon dünn/verwaist/doppelt).

**Neue Positionierungslogik:**

1. **Kernprodukt zuerst:** Telefonakquise/Kundenakquise ist laut Angebotsdaten die meistnachgefragte Leistung → bekommt die ausführlichste, eigenständige Seite (Pillar-Page).
2. **Weitere Kompetenzen als Ergänzung, nicht als gleichrangige Alternative:** Strategie & Analyse, Workshops, Content/Ads werden kompakt auf einer gemeinsamen Übersicht dargestellt statt als einzelne Hauptmenüpunkte.
3. **Fördermittel als Trust-Signal, das überall mitläuft** ("bis zu 90% der Beratung staatlich förderfähig"), zusätzlich zu einer eigenen Landingpage für die eigene Suchintention.
4. **Spezialthemen Power BI/Datenanalyse und Videoproduktion/Corporate TV werden nicht selbst erklärt, sondern angeteasert und an die beiden eigenständigen Partnermarken verlinkt** (siehe Abschnitt 3a, Entscheidung 5 final, und Abschnitt 6.3b).
5. **Ziel:** Klicktiefe max. 2, Hauptnavigation von 9 auf 5 Punkte reduzieren.
6. **Content-Grundsatz:** Konkret statt allgemein. Jede Leistungsseite muss beantworten "was passiert genau, wenn ich das buche" statt generischer Definitions-Absätze. Beweise (Kundenzitate, Zahlen, Beispiele) werden gezielt der passenden Seite zugeordnet statt alle auf der Startseite gebündelt.
7. **Vorteilskommunikation/Problemlösung (NEU):** Nicht nur zeigen, was Akquise-Helfer kann, sondern welches Problem/Bedarf gelöst wird. Kernbotschaft: kein finanzielles Risiko (keine Provision, keine Mindestlaufzeit), volle Kontrolle und Transparenz, echter Erkenntnisgewinn für den Kunden statt reiner Abarbeitung. Details und Formulierungsvorschläge siehe Abschnitt 6.2, Abschnitt 1/1b.

---

## 2. Unternehmensdaten (NAP – für Schema Markup & Konsistenz)

**Firmierung:** Akquise-Helfer (Johannes Mario Röder)

**Team:**
- **Johannes Röder** – Diplom-Betriebswirt (Schwerpunkt Unternehmensführung/Marketing), Online Marketing Manager (IHK), BAFA-gelisteter Berater, Erfahrung: Aufbau Radiosender Antenne Sylt, Key Account/Media-Beratung klassisch & digital, freiberuflicher Journalist/Texter. Zusätzlich Gründer/Berater bei der Partnermarke BETTER DECISIONS FASTER (Power BI/Datenanalyse, siehe Abschnitt 6.3b).
- **Gesa Gröning** – Werbekauffrau (IHK), Studium Moderationstechnik/Medienpräsentation, Volontariat TV-Redakteurin, Ausbilderin (AEVO), Prüferin DIHK Veranstaltungsfachwirte (Akquise/Marketing), Aufbau IMMO TV & Antenne Sylt. Zusätzlich Inhaberin der Partnermarke Medien für Sie / Moderatorin Gesa Gröning (Video-Produktion, Moderation, Corporate TV, siehe Abschnitt 6.3b).

**Standorte:**

| Ort | Adresse | Telefon |
|---|---|---|
| Hofbieber (Hauptsitz) | Mühlenweg 8, 36145 Hofbieber | 06657/4819973 |
| Halstenbek | Gustavstraße 19, 25469 Halstenbek | 04101/8548919 |
| Düsseldorf | Düsselthaler Str. 8, 40211 Düsseldorf | 0211/13959692 |

**E-Mail:** kontakt@akquise-helfer.de (allgemein), roeder@akquise-helfer.de, groening@akquise-helfer.de

**Social Media:** LinkedIn (linkedin.com/company/akquise-helfer), Instagram (@akquise_helfer), Facebook

**Rechtsform-Hinweis Impressum:** Johannes Mario Röder, Einzelunternehmer, Mühlenweg 8, 36145 Hofbieber

---

## 3. Audit der bestehenden Seite (Kurzfassung)

**Bestehende Hauptnavigation:** Startseite, Leistungen (Dropdown: Ausgangssituation analysieren, Strategie entwickeln, Kundenakquise, Workshops, Content/Ads), Digitaler Vertrieb, Corporate TV, Über uns, Fördermittel, Publikationen.

**Technische/SEO-Probleme:**
- Duplicate Title + Meta-Description: Corporate TV kopiert 1:1 von Strategie-Seite.
- Duplicate Meta-Description: Publikationen kopiert von Fördermittel-Seite.
- Fehlende H1: Content/Ads-Seite, Kontaktseite.
- Doppelte H1: Strategie-Seite (2×), Fördermittel-Seite (4× statt H2 für Unterabschnitte).
- Kein Seiten-H1: Publikationen (nur 2× H1 für Unterpublikationen).
- Generische, nicht keywordoptimierte Titles: Workshops, Content/Ads, Über uns, Fördermittel, Publikationen, Kontaktseite, FAQ.
- Verwaiste/tote Seiten, noch indexiert: `/faq/` (leer), `/vertrieb-optimieren/` (Duplikat-Inhalt zu Kundenakquise), `/ueber-uns-alt/` (alte Version von "Über uns"), `/nrw-digitalzuschuss-handel/` (tote Kampagne, Frist 2022 abgelaufen).
- Kein Blog/Content-Hub vorhanden (keine Posts-Sitemap).
- CMS: WordPress + Elementor + Yoast SEO (wird beim Relaunch vermutlich abgelöst).

---

## 3a. Inhaltliche Kritik & Entscheidungen

**Grunddiagnose:** Die Seite erklärt zu viel und verkauft zu wenig. Viele Seiten bestehen aus generischen Definitions-Absätzen statt konkreter, buchbarer Leistungen.

**Entscheidung 1 – "Digitaler Vertrieb" wird als eigenständige Seite aufgelöst.**
Sechs Einzelthemen ohne gemeinsamen Nenner, bereits an anderer Stelle konkreter behandelt (Content/Ads, Strategie & Analyse, Workshops, Telefonakquise). Die zwei starken Kennzahlen (7–12 Kontakte bis zum Kunden, 90% Online-Recherche vor Kauf) wandern als Argumentationshilfe in die Telefonakquise-Seite.

**Entscheidung 2 – "Ausgangssituation analysieren" + "Strategie entwickeln" werden zu einer Seite verschmolzen.**
Beide beschrieben denselben Prozessschritt (erst Analyse, dann Strategie) – kein zweigeteiltes Produkt, sondern eine Leistung.

**Entscheidung 3 – Power BI/Dashboards: keine eigene Erklärung mehr auf akquise-helfer.de.**
Ursprünglich dreifach erwähnt (Startseite-Kachel, Ausgangssituation-Seite, Kundenakquise-Seite), aber nirgends erklärt, was ein Kunde davon konkret sieht – reines Buzzword ohne Beweiskraft. **Final gelöst (siehe unten, Entscheidung 5-Update):** Thema wird nicht mehr selbst erklärt, sondern an die Partnermarke BETTER DECISIONS FASTER angeteasert, die Power-BI-Beratung als Kerngeschäft betreibt.

**Entscheidung 4 – Content/Ads verliert den Corporate-TV-Unterpunkt, verlinkt stattdessen nur.**
Vermeidet Doppelung, da Corporate TV/Video-Produktion jetzt vollständig bei der Partnermarke verortet ist (siehe Entscheidung 5).

**Entscheidung 5 – FINAL (vorher offene Frage): Power BI und Corporate TV werden beide als Partnermarken-Teaser behandelt, nicht als eigene Akquise-Helfer-Leistungsseiten.**

Hintergrund: Johannes betreibt mit BETTER DECISIONS FASTER (betterdecisionsfaster.de) eine eigenständige, inhaltlich bereits sehr ausgereifte Marke für Power-BI-Beratung. Gesa betreibt mit Medien für Sie / gesagroening.de eine eigenständige Marke für Moderation und Video-Produktion/Corporate TV. Beide Seiten sind selbst umfangreiche Fachseiten mit eigenem FAQ, eigenen Case Studies und eigener Kundenansprache.

**Konsequenz für akquise-helfer.de:**
- Keine tiefen Inhalte zu Power BI oder Videoproduktion mehr auf der Akquise-Helfer-Seite selbst – das würde zu Keyword-Kannibalisierung zwischen den eigenen Marken führen (beide Seiten konkurrieren sonst um dieselben Rankings).
- Stattdessen: eine kompakte "Netzwerk"-Sektion mit zwei Teaser-Karten, die kurz auf die Kompetenz hinweisen und zur jeweiligen Partnermarke verlinken (siehe Abschnitt 6.3b für vollständige Ausarbeitung).
- Corporate TV als eigener Hauptmenüpunkt/eigene Unterseite entfällt vollständig. Die bisherige `/corporate-tv/`-Seite wird durch die Teaser-Karte ersetzt.
- Die einzige verbleibende Power-BI-Erwähnung auf der Strategie & Analyse-Seite wird zu einem kurzen Teaser-Satz mit Link statt einer Erklärung.

**Entscheidung 6 – Testimonials werden auf die jeweils passende Leistungsseite verteilt statt alle auf der Startseite zu bündeln.**
Zuordnung siehe Abschnitt 9.

**Entscheidung 7 – Vorteilskommunikation/Problemlösung wird als eigenes Content-Prinzip ergänzt (NEU).**
Bisher lag der Fokus auf "was können wir" (Leistungsaufzählung). Ergänzt wird nun explizit die Frage "welches Problem/Bedarf wird dadurch gelöst" – siehe die konkrete Ausarbeitung in Abschnitt 6.2 (Abschnitt 1 und 1b der Telefonakquise-Seite). Vier zentrale Differenzierungsmerkmale (keine Provision, keine feste Vertragslaufzeit, Verlängerung jederzeit möglich, volle Kontrolle über Kontakte/Ergebnisse) werden prominent und wiederholt kommuniziert, nicht nur einmal beiläufig erwähnt.

---

## 4. Neue Informationsarchitektur (Sitemap-Vorschlag)

```
/ (Startseite)
├── /telefonakquise/ (Kernprodukt, Pillar-Page – ersetzt bisherige "Kundenakquise"-Seite)
├── /leistungen/ (Übersichtsseite "Weitere Kompetenzen")
│   ├── #strategie (fusioniert: Ausgangssituation + Strategie, inkl. Power-BI-Teaser)
│   ├── #workshops
│   ├── #content-ads (ohne Corporate-TV-Duplikat, nur Verlinkung ins Netzwerk)
│   └── #netzwerk (NEU: Teaser-Karten BETTER DECISIONS FASTER + Medien für Sie/Gesa Gröning)
├── /foerdermittel/ (bleibt eigene Seite, eigene Suchintention)
├── /ueber-uns/ (inkl. Referenzen/Publikationen als Vertrauens-Sektion)
├── /faq/ (neu befüllt, wichtig für GEO)
├── /kontakt/ (Terminbuchung)
└── Footer: /agb/ /datenschutz/ /impressum/ /cookie-richtlinie/
```

**Entfällt komplett:** eigenständige Seite/Punkt "Digitaler Vertrieb" (Entscheidung 1) und eigenständige Seite "Corporate TV" (Entscheidung 5) – Letztere wird zur externen Verlinkung im Netzwerk-Bereich.

**Entscheidung offen (für Cursor-Phase):** Ob "Weitere Kompetenzen" als eine Seite mit Ankern oder als schlanke Unterseiten unter `/leistungen/xyz/` umgesetzt wird. Empfehlung: schlanke Unterseiten für Strategie, Workshops, Content/Ads (eigene Suchintention je Thema) – der Netzwerk-Bereich bleibt aber bewusst nur ein Abschnitt, keine eigene indexierbare Themenseite, da er nicht rankingrelevant sein soll (das übernehmen die Partnerseiten selbst).

---

## 5. URL-Mapping (alt → neu, für 301-Redirects)

| Alte URL | Neue URL | Aktion |
|---|---|---|
| `/kundenakquise/` | `/telefonakquise/` | Redirect + Content-Erweiterung um Angebots-Prozess |
| `/ausgangssituation-analysieren/` | `/leistungen/strategie/` | Redirect, Inhalt zusammenführen |
| `/strategie-kundengewinnung-entwickeln/` | `/leistungen/strategie/` | Redirect, Inhalt zusammenführen |
| `/workshops-zu-vertrieb-und-marketing/` | `/leistungen/workshops/` | Redirect |
| `/content-beratung-und-erstellung-text-video-und-mehr/` | `/leistungen/content-ads/` | Redirect, Corporate-TV-Unterpunkt entfernen |
| `/digitaler-vertrieb/` | `/telefonakquise/` | Redirect (Seite aufgelöst, Kernstatistiken wandern dorthin) |
| `/corporate-tv/` | `/leistungen/#netzwerk` | Redirect (Seite aufgelöst, wird zur externen Verlinkung, siehe Entscheidung 5) |
| `/foerdermittel/` | `/foerdermittel/` | bleibt |
| `/wer-wir-sind/` | `/ueber-uns/` | Redirect |
| `/publikationen/` | `/ueber-uns/#referenzen` | Redirect, Inhalt integrieren |
| `/kontaktseite-fuer-termine/` | `/kontakt/` | Redirect |
| `/faq/` | `/faq/` | bleibt, aber neu befüllt |
| `/vertrieb-optimieren/` | `/telefonakquise/` | Redirect (Duplikat auflösen) |
| `/ueber-uns-alt/` | `/ueber-uns/` | Redirect |
| `/nrw-digitalzuschuss-handel/` | `/foerdermittel/` | Redirect (Kampagne tot) |
| `/download-kdlr-whitepaper-om/` | `/ueber-uns/#referenzen` | Redirect |
| `/download-kdlr-whitepaper-dv/` | `/ueber-uns/#referenzen` | Redirect |

---

## 6. Seiten-Detailspezifikation

### 6.1 Startseite (`/`)

**H1:** Kundengewinnung mit strategischer Akquise (oder Neufassung mit Fokus auf Telefonakquise als Kernangebot)

**Kerninhalte (aus bestehender Seite übernehmen/straffen):**
- Hero mit klarer Kernbotschaft: Telefonakquise/Kundenakquise als Hauptleistung, CTA "Kostenfreies Erstgespräch buchen"
- Kurzer Verweis auf weitere Kompetenzen (Kacheln, verlinken auf `/leistungen/`)
- Fördermittel-Trust-Badge ("bis zu 90% Ihrer Beratung förderfähig")
- Kontaktformular – **nur optisch/UI übernehmen, noch ohne Versand-Funktion.** Das bestehende Formular (Felder: Firma, Telefonnummer, Vorname/Nachname, E-Mail, Einwilligungs-Checkbox) wird 1:1 im Design nachgebaut, die technische Anbindung (Versand, Speicherung, Bestätigungsmail) erfolgt nachgelagert außerhalb dieses Relaunch-Schritts.
- Kundenlogos (Liste siehe Abschnitt 9)
- **Badge-/Kennzahlenleiste mit den vier Differenzierungsmerkmalen** (siehe Abschnitt 6.2, Abschnitt 1): Keine Provision · Keine feste Vertragslaufzeit · Verlängerung jederzeit möglich · Volle Kontrolle über Kontakte & Ergebnisse – gehört auf die Startseite direkt unter/neben den Hero-CTA, nicht nur auf die Telefonakquise-Seite
- Nur 1–2 sehr allgemeine, starke Zitate, der Rest wandert gezielt auf die passenden Leistungsseiten (siehe Abschnitt 9)
- **3 Standorte als eingebettete Google-Maps-Karte** (nicht nur Adress-Text) – eine Karte mit drei Pins (Hofbieber, Halstenbek, Düsseldorf), sichtbar direkt auf der Seite, siehe Abschnitt 6.6 für Details
- Optional: dezenter Hinweis "Teil eines Netzwerks aus Spezialist:innen" mit Kurzverweis auf `/leistungen/#netzwerk` (nicht zu prominent, siehe Abschnitt 6.3b)

**Header/Topbar-Bereinigung (NEU):**
- "Newsletter"-Anmelde-Button/-Link entfällt vollständig (aktuell im Header verlinkt auf akquise-helfer.de/newsletter)
- Verbleiben im Header: E-Mail, Telefon, "Termin"-Link (siehe Terminfunktion unten), Social-Media-Icons

**Meta Title (Vorschlag):** Akquise-Helfer | Telefonakquise & Kundengewinnung für KMU
**Meta Description (Vorschlag):** Strategische Telefonakquise statt Callcenter. Beratung und operative Unterstützung bei Kundengewinnung – flexibel, transparent, ohne Mindestlaufzeit.

---

### 6.2 Telefonakquise (`/telefonakquise/`) – Pillar-Page, Kernseite

**H1:** Neukunden gewinnen ist kein Zufall – sondern unser System (oder Neufassung)

**Abschnitt 1 – Problem, das wir lösen, und Einleitung/USP:**

*Das Problem beim Einstieg in Akquise:* Unternehmen wollen Kundengewinnung ausprobieren, ohne sich in teure Agenturverträge mit Mindestlaufzeit oder Provisionsmodelle zu binden, bevor überhaupt klar ist, ob und wie es für sie funktioniert.

*Unsere Antwort:* Keine Callcenter-Ansprache, sondern strategische, persönliche, hochwertige Kundenansprache. Individuelle Vorbereitung statt Massenabfertigung, echte Gesprächsbeziehungen, Partnerschaft statt reiner Dienstleistung.

**Vier Differenzierungsmerkmale – prominent und wiederholt platzieren (z.B. als Badge-/Kennzahlenleiste direkt im Hero-Bereich):**
- **Keine Provision**
- **Keine feste Vertragslaufzeit**
- **Verlängerung jederzeit möglich**
- **Volle Kontrolle über angerufene Kontakte und Ergebnisse**

Ergänzend: keine hochpreisigen Pakete – dadurch kann der Kunde das Projekt jederzeit stoppen oder pausieren, ohne das finanzielle Risiko eines Fehlkaufs.

**Abschnitt 1b – Zwei weitere Alleinstellungsmerkmale (am Markt unüblich, unbedingt hervorheben):**

1. *Vollständige Adress-Übergabe inklusive Kommentare & Erkenntnisse.* Anders als bei vielen Anbietern behalten wir die recherchierten und bearbeiteten Adressen nicht für uns, sondern übergeben sie dem Kunden vollständig – inklusive Gesprächsnotizen, Reaktionen und Erkenntnissen je Kontakt. Der Kunde kann damit eigene Akquise-Kampagnen ausprobieren, eigene Erkenntnisse sammeln und interne Prozesse verbessern, statt am Ende des Projekts bei null anzufangen.
2. *Engmaschiges Feedback deckt Lücken in der Kundenansprache auf.* Durch die laufende Rückmeldung wird sichtbar, was in Unterlagen, Argumentation oder Angebot noch fehlt oder nicht überzeugt. Der Kunde kann das Projekt dafür pausieren, gezielt nachbessern (z.B. USP schärfen, Unterlagen anpassen) und danach nahtlos fortsetzen – echter Erkenntnisgewinn statt nur eine abgearbeitete Telefonliste.

**Abschnitt 2 – Warum reicht "einfach anrufen" nicht?:**
- Es braucht im Schnitt 7–12 Kontakte, bis aus einem potenziellen ein tatsächlicher Kunde wird
- Rund 90% aller Empfehlungen werden vor dem Kauf online nachrecherchiert – Telefonakquise wirkt am besten in Kombination mit einem stimmigen Online-Auftritt (Verweis auf Content/Ads-Seite)

**Abschnitt 3 – Leistungsumfang (aus Bestandsseite):**
Telefonakquise und Adressrecherche, Kaltakquise und Kontaktaufnahme (Neu-/Bestandskunden, persönlich/digital), Identifikation passender Ansprechpartner, Lead-Qualifizierung, Social Selling, Erstellung von Akquise-Unterlagen, Interims-Vertrieb, Vertriebs- und Akquise-Videos, PR-Arbeit, Software-Beratung für Akquise-/Kundendaten.

**Abschnitt 4 – Ablauf/Prozess (aus Angebotsdaten, neutralisiert):**

*Phase A – Onboarding (einmalig, Projektstart):*
- Strategie- und Set-up-Workshop: optimale Akquise-Ansprache, Einwandbehandlung, USP-Definition, Workflow-Festlegung
- Basisabstimmung: Anrufliste definieren, Dokumentationsart festlegen, Alleinstellungsmerkmal herausarbeiten, mögliche Einwände/Besonderheiten klären
- Optional: Einrichtung von Arbeitsumgebung/IT-Zugängen (E-Mail-Postfach, Signatur, Zugriff auf Akquise-Materialien, Telefonnummer, Anrufbeantworter, Weiterleitungen)
- Test von E-Mail-/Anruf-Funktionen und weiteren technischen/organisatorischen Abläufen
- Prüfung der vom Auftraggeber gelieferten Informationen
- Optional: erste gemeinsame Testtelefonate (simuliert oder live)

*Phase B – laufende Telefon-Kaltakquise:*
- Flexible Ansprache Montag–Freitag, individuelle Wünsche werden berücksichtigt
- Ziele: neue Termine, aktuelle Daten, Erinnerung, klare Ergebniskategorisierung je Kontakt (Interesse, Meldung zu späterem Zeitpunkt, Unterlagenwunsch, Termin, Rückrufbitte, Angebot versenden, Auftrag)
- Versand von Unterlagen/Terminbestätigungen nach Absprache
- Erneutes Nachfassen bei Kontakten mit zugesendeten Unterlagen
- Ergebniserfassung standardmäßig transparent dokumentiert (z.B. geteilte Liste), alternativ in kundeneigener Software
- Regelmäßige Abstimmung/Feedback zur Projektsteuerung, laufende Anpassung von Materialien/Gesprächsleitfäden
- Zwischenfazit nach den ersten Arbeitsstunden

**Abschnitt 5 – Abrechnungslogik (strukturell, ohne konkrete Beträge):**
Transparente, stundenbasierte Abrechnung im 15-Minuten-Takt, ergänzt um eine einmalige Onboarding-Pauschale. Keine Mindestabnahme, keine Vertragsbindung, jederzeit stopp-/pausierbar, saubere Übergabe möglich bei Eigenfortführung durch den Kunden. (Preisdetails bleiben individuell/auf Anfrage – nicht öffentlich auf der Website.)

**Abschnitt 6 – Beweis statt Behauptung (gezielte Testimonials):**
- Stefan Sacher, Sacher Immobilien-Management GmbH: "unerwartet hohe Abschlussquote"
- Corina Piepereit-Wester, AWO Hamburg Reinigung & Service gGmbH: "sehr gut umgesetzt, transparente Arbeitsweise, hohe Abschlussquote"
- Markus Krochmann, Sinus Audio Tonstudio: "sehr schnell und professionell geholfen, Akquise auf das nächste Level gebracht"
- André Marescaux, Marescaux Immobilien GmbH: telefonische Akquise von Immobilieneigentümern, "zuverlässig und transparent"
- Tim Rücker, Bytediver GmbH: Akquise "sehr gut unterstützt und ausgeweitet"

**Abschnitt 7 – Rechtlicher Exkurs (kompakt, Details in FAQ):**
UWG (Gesetz gegen unlauteren Wettbewerb) regelt zulässige Akquise; bei Privatpersonen limitierte Ansprachemöglichkeiten, im B2B-Bereich mehr Spielraum. Ausführliche Antwort in FAQ (siehe 6.7).

**Meta Title (Vorschlag):** Telefonakquise für Unternehmen – Neukundengewinnung ohne Callcenter | Akquise-Helfer
**Meta Description (Vorschlag):** Strategische Telefonakquise statt Callcenter-Abtelefonieren. Transparenter Ablauf von Onboarding bis laufender Kaltakquise, keine Mindestlaufzeit.

---

### 6.3 Leistungen-Übersicht (`/leistungen/`) + Unterthemen

Kompakte Kachel-Übersicht mit Verlinkung auf schlanke Unterseiten. Je Unterthema: 1 klare H1, kurzer Nutzenversprechen-Absatz, Bullet-Liste der Kernleistungen, ein gezieltes Kundenzitat, CTA. **Keine allgemeinen Definitions-Absätze** – stattdessen konkrete Beispiele/Beweise.

**a) Strategie & Analyse** (`/leistungen/strategie/`, fusioniert "Ausgangssituation analysieren" + "Strategie entwickeln"):
- Zielgruppen-/Wettbewerbsanalyse, SWOT, digitaler Präsenzcheck
- Strategieentwicklung: Kundensegmentierung, Vertriebswege, Kommunikationswege, smarte Ziele, Controlling/Erfolgskontrolle
- **Power-BI-Teaser (statt eigener Erklärung):** ein Satz + Link, z.B. "Für tiefergehende Datenanalyse und Power-BI-Dashboards arbeiten wir mit unserer Partnermarke BETTER DECISIONS FASTER zusammen." → Link betterdecisionsfaster.de (Details siehe 6.3b)
- Testimonial: Stefanie Felsch, Keimfarben GmbH: "Positionierung gestärkt, Marktanteil ausgebaut"

**b) Workshops & Schulungen** (`/leistungen/workshops/`):
- Zwei Kernformate: "Online-Marketing mit KI" und "Telefonakquise" (je 20 Std./8 Termine, Kleingruppen ab 3 Personen, Zertifikat)
- Förderfähig (90% Zuschuss für Selbstständige über KOMPASS)
- Individuell konzipierbar für Unternehmen (Workshop-Themen-Liste aus Bestandsseite übernehmen)
- Testimonials: Christiane Laakmann, TZ Media GmbH: "wesentliche Impulse, die schon in mehr Umsatz umgewandelt werden konnten"; Martina Lauterjung, Form-Finder: "praxistaugliche Tipps, großer Erfahrungsschatz"

**c) Content & Ads** (`/leistungen/content-ads/`):
- Texte (SEO-Website, Blog, Pressemitteilungen), Video/Foto (einfache Formate, z.B. Social-Content – für aufwändige Produktionen Verweis ins Netzwerk), Akquise-Unterlagen (Print/Digital), Anzeigen (Online/Print/Google/Social Ads), Social Media (Profilcheck, -erstellung, Posts), Management automatisch generierter Profile (Google My Business & Co.)
- **Kein Corporate-TV-Unterpunkt mehr** – stattdessen ein Satz plus Link ins Netzwerk (siehe 6.3b)
- Testimonials: Wendy Bader, Royal Aware NL: Social-Media-Strategie/Konzeption; Katrin Kinne, VHS Halstenbek gGmbH: Marketing Außenwerbung & Social Media; Katrin Heidbreder, Digibox GmbH: "Websitestruktur für die Suchmaschine"

---

### 6.3b Netzwerk / Partnermarken (`/leistungen/#netzwerk`) – NEU, ersetzt "Corporate TV" als eigene Seite

Zweck: kurz zeigen, dass zusätzliche Tiefe verfügbar ist, ohne die Akquise-Helfer-Positionierung zu verwässern oder mit den eigenen Partnermarken um Rankings zu konkurrieren. Kein Fließtext, zwei kompakte Karten:

**Karte 1 – BETTER DECISIONS FASTER (Power BI & Datenanalyse)**
- Betreiber: Johannes Röder (mit Andreas Törpel)
- URL: [betterdecisionsfaster.de](https://www.betterdecisionsfaster.de)
- Kernangebot laut Partnerseite: Power BI Quickstart (erste Live-Dashboards in Wochen), BI-Assessment (Reifegrad/Roadmap), Coaching & Team-Enablement, KI & digitale Transformation
- Teaser-Text (Vorschlag): "Sie brauchen mehr als ein Vertriebs-Dashboard – eine vollständige Power-BI- und Datenstrategie? Unsere Partnermarke BETTER DECISIONS FASTER liefert Power-BI-Beratung und -Umsetzung aus einer Hand."
- CTA: "Zu BETTER DECISIONS FASTER" (externer Link, neuer Tab)

**Karte 2 – Medien für Sie / Gesa Gröning (Moderation & Video-Produktion/Corporate TV)**
- Betreiberin: Gesa Gröning
- URL: [medien-fuer-sie.de](https://www.medien-fuer-sie.de) (aktuell technisch weiterleitend auf gesagroening.de)
- Kernangebot laut Partnerseite: Moderation für Messen/Events/Kongresse, moderierte Videos/UGC-Content/Web-TV, Kameratrainings, Aufbau von Corporate TV/Web-TV-Strategien
- Teaser-Text (Vorschlag): "Sie wollen eine eigene Videostrategie oder Corporate TV aufbauen? Unsere Partnermarke Medien für Sie – Gesa Gröning bringt über 1.000 Moderationen und 20 Jahre Kameraerfahrung mit."
- CTA: "Zu Medien für Sie" (externer Link, neuer Tab)

**Wichtig für Cursor-Umsetzung:** Diese Sektion bewusst kurz halten (max. 2–3 Sätze pro Karte + Logo + Link), keine eigene Unterseite, kein eigenes ausführliches SEO-Ziel – die Rankingarbeit für "Power BI Beratung" bzw. "Corporate TV Agentur" übernehmen die Partnerseiten selbst.

---

### 6.4 Fördermittel (`/foerdermittel/`)

Bleibt inhaltlich weitgehend wie bisher, aber mit eigener (nicht kopierter) Meta-Description:
- KOMPASS-Förderung (90% für Weiterbildung, Solo-Selbstständige/Freiberufler)
- BAFA-Förderung (bis 80% Zuschuss zum Beraterhonorar, Johannes Röder als gelisteter BAFA-Berater)
- Gründungsberatung (ggf. kostenfrei unter bestimmten Voraussetzungen)
- "Fit für die Zukunft" NRW (bis 80%, bis 12.924€)
- Hinweis: weitere Förderprogramme auf Anfrage recherchierbar

**Wichtig für Cross-Selling:** Kurzer Fördermittel-Hinweis/Badge auch auf Telefonakquise- und Workshop-Seite einbauen.

---

### 6.5 Über uns (`/ueber-uns/`)

- Team-Bios (siehe Abschnitt 2), inkl. Qualifikationslisten und Hinweis auf die jeweilige Partnermarke pro Person
- Referenzen/Kundenlogos (siehe Abschnitt 9)
- Verbleibende, nicht themenspezifisch zugeordnete Testimonials (siehe Abschnitt 9)
- Publikationen/Presse: 2 KDLR-Whitepaper (Digitaler Vertrieb, Online-Marketing/Keywords), IHK-Magazin-Presseartikel Mai 2023
- *Hinweis: Titel der KDLR-Publikation "Digitaler Vertrieb" bleibt als Dokumententitel bestehen (historisch), auch wenn der Website-Menüpunkt "Digitaler Vertrieb" entfällt.*

---

### 6.6 Kontakt (`/kontakt/`)

- **Terminfunktion – nur optisch/UI übernehmen, noch ohne echte Buchungs-Funktion.** Aktuell bindet die Bestandsseite einen Outlook-Bookings-Kalender ein; für den Relaunch wird die Optik/das UI dieser Terminauswahl nachgebaut, die eigentliche Kalender-/Buchungsanbindung erfolgt nachgelagert (technische Anbindung, z.B. wieder Outlook Bookings oder ein anderes System, ist noch offen, siehe Abschnitt 12).
- **Kontaktformular – ebenfalls nur optisch/UI, noch ohne Versand-Funktion** (siehe Hinweis in 6.1)
- **Google-Maps-Einbindung mit allen 3 Standorten:** eine sichtbare, interaktive Karte (kein reines Standbild) mit Pins für Hofbieber (Mühlenweg 8, 36145 Hofbieber), Halstenbek (Gustavstraße 19, 25469 Halstenbek) und Düsseldorf (Düsselthaler Str. 8, 40211 Düsseldorf) – jeweils mit Adresse/Telefon als Infofenster beim Klick auf den Pin
- Alle 3 Standorte zusätzlich als Textblock mit Adresse/Telefon (für Barrierefreiheit/SEO, da Kartendienste oft nicht crawlbar/zugänglich sind)
- E-Mail kontakt@akquise-helfer.de
- **Kein Newsletter-Anmelde-Button** (siehe Header-Hinweis in 6.1)
- **Wichtig:** eigene Meta Description ergänzen (fehlt aktuell komplett)

---

### 6.7 FAQ (`/faq/`) – zentral für GEO

Aktuell leer – das ist die größte ungenutzte Chance für GEO (siehe Abschnitt 8). Vorschlag für Startinhalte:

1. **Was kostet Telefonakquise?** → transparente, stundenbasierte Abrechnung, keine Mindestlaufzeit, individuelles Angebot nach Erstgespräch
2. **Wie läuft ein Telefonakquise-Projekt ab?** → Onboarding-Phase, dann laufende Kaltakquise (siehe 6.2)
3. **Ist Kaltakquise in Deutschland erlaubt?** → UWG regelt Rahmen, B2B mehr Spielraum als B2C, Empfehlung Rechtstext/Fachanwalt bei Unsicherheit
4. **Gibt es eine Mindestlaufzeit?** → Nein, jederzeit pausierbar/kündbar
5. **Welche Fördermittel gibt es für Vertriebs-/Marketingberatung?** → BAFA (bis 80%), KOMPASS (bis 90%), Fit für die Zukunft NRW (bis 80%)
6. **Arbeitet ihr wie ein Callcenter?** → Nein, strategische persönliche Ansprache statt Skript-Abtelefonieren
7. **Für welche Unternehmensgrößen eignet sich das Angebot?** → kleine und mittelgroße Unternehmen (KMU)
8. **Was unterscheidet euch von einer klassischen Online-Marketing-/Digitalagentur?** → Kerngeschäft ist die persönliche, telefonische Kundenansprache, nicht Kampagnen-Media-Buying; Content/Ads, Strategie und Workshops sind Ergänzungen um die Akquise herum, keine losgelöste Agenturleistung.
9. **Bietet ihr auch Power-BI-Beratung/Datenanalyse oder Videoproduktion/Corporate TV an?** → Ja, über unsere spezialisierten Partnermarken BETTER DECISIONS FASTER (Power BI/Datenanalyse) und Medien für Sie – Gesa Gröning (Moderation/Video/Corporate TV), mit denen wir eng zusammenarbeiten.
10. **Was passiert mit den von euch recherchierten Adressen nach dem Projekt? (NEU)** → Sie erhalten alle bearbeiteten Adressen vollständig, inklusive unserer Kommentare und Erkenntnisse aus den Gesprächen – nutzbar für eigene weitere Kampagnen, auch nach Projektende.
11. **Muss ich mich langfristig binden oder ein teures Paket buchen? (NEU)** → Nein. Keine Provision, keine feste Vertragslaufzeit, Verlängerung jederzeit möglich, Sie können jederzeit stoppen oder pausieren.

---

### 6.8 Rechtliches – AGB, Datenschutz, Impressum, Cookie-Richtlinie (Footer-Seiten)

**Inhalt: 1:1 aus dem Bestand übernehmen, keine Textänderung.** Diese Texte sind bereits über eine Rechtsvorlage (e-recht24, via Yoast) erstellt bzw. juristisch abgestimmt – eine inhaltliche Überarbeitung ist nicht Teil dieses Relaunchs und sollte nicht eigenmächtig in Cursor erfolgen. Alle vier Texte liegen vollständig aus dem Seiten-Audit vor (Impressum, Datenschutz, AGB, Cookie-Richtlinie).

**Layout: saubere Neustrukturierung, ohne den Inhalt zu verändern:**
- Klare Zwischenüberschriften als echte H2/H3 statt reiner Fettungen im Fließtext (betrifft besonders Datenschutz: aktuell ca. 22 Minuten Lesezeit mit vielen Unterabschnitten wie Hosting, Cookies, Google Analytics, YouTube, Instagram, Userlike-Chat)
- Für die Datenschutzerklärung: Inhaltsverzeichnis/Sprungmarken am Seitenanfang, ggf. Akkordeon/Collapsible-Elemente pro Themenblock, damit die Seite nicht als eine lange, unstrukturierte Textwand wirkt
- AGB: nummerierte Paragraphen (liegen bereits nummeriert vor, 1–13) als klar abgesetzte Blöcke statt Fließtext
- Impressum: übersichtliche Abschnitte (Angaben gemäß § 5 DDG, Kontakt, Bildnachweis, Streitschlichtung, Haftung, Urheberrecht) – kurz und gut scannbar, da diese Seite oft nur schnell überflogen wird
- Cookie-Richtlinie: bestehenden Inhalt übernehmen, ins gleiche saubere Layout-Schema einbetten
- `noindex, nofollow` bleibt für alle vier Seiten bestehen (siehe Abschnitt 7)

---

## 7. SEO-Anforderungen (Checkliste für Umsetzung in Cursor)

- Jede Seite: genau **eine H1**, danach hierarchische H2/H3 (keine Sprünge, keine Mehrfach-H1)
- Jede Seite: einzigartiger Title-Tag (50–60 Zeichen) mit Kernkeyword, kein Duplicate zwischen Seiten
- Jede Seite: einzigartige Meta Description (140–160 Zeichen), konkreter Nutzenversprechen-Satz
- Saubere, sprechende URL-Slugs (kurz, Keyword-tragend, siehe Abschnitt 5)
- Alle Redirects aus Abschnitt 5 als 301 implementieren
- `noindex, nofollow` weiterhin für AGB/Datenschutz/Impressum/Cookie-Richtlinie
- Canonical-Tags konsistent (self-referencing)
- Seitenspezifische OG-Bilder statt eines generischen Bildes für alle Seiten (Design-Phase, aber technisch vorbereiten)
- XML-Sitemap nur mit den finalen, echten Seiten (keine verwaisten/alten URLs mehr, kein "Digitaler Vertrieb", keine eigene "Corporate TV"-Seite)
- Externe Links zu den Partnermarken mit `rel="noopener"` (nicht `nofollow` – eigene Partnermarken, Linkjuice darf fließen), neuer Tab
- Ladezeit/Core Web Vitals im Blick behalten (Wechsel weg von Elementor kann hier großes Potenzial heben)
- Jede Leistungsseite: mindestens ein konkretes Beweis-Element (Zitat, Zahl, Beispiel) statt nur beschreibender Absätze

---

## 8. GEO-Anforderungen (Sichtbarkeit in ChatGPT, Perplexity, Google AI Overviews)

1. **Strukturierte Daten (Schema.org) implementieren:**
   - `LocalBusiness` bzw. `ProfessionalService` je Standort (Name, Adresse, Telefon, Öffnungszeiten, Geo-Koordinaten)
   - `Service` für Telefonakquise, Strategie & Analyse, Workshops, Content/Ads *(kein eigenes Service-Objekt mehr für Power BI oder Corporate TV – das gehört auf die Partnerseiten)*
   - `FAQPage` für die FAQ-Seite (siehe 6.7)
   - `Person` für Team-Mitglieder (Gesa Gröning, Johannes Röder) mit Qualifikationen und `affiliation` zu beiden Marken (Akquise-Helfer + jeweilige Partnermarke) – das hilft KI-Systemen, das gesamte Kompetenz-Netzwerk einer Person zuzuordnen
   - `Organization` mit `sameAs`-Links zu LinkedIn/Instagram/Facebook **und** zu betterdecisionsfaster.de sowie medien-fuer-sie.de/gesagroening.de als verbundene Marken
   - `Review`/`AggregateRating`-Markup für die den Seiten zugeordneten Testimonials (siehe Abschnitt 9), sofern rechtlich zulässig eingeholt

2. **Content-Format:** Kurze, eigenständige Absätze, die auch ohne umgebenden Kontext eine konkrete Frage beantworten. Vermeiden: lange, vage Marketing-Sätze ohne konkrete Aussage.

3. **Konsistenz der Fakten (NAP) über alle Seiten, Schema-Markup und Verzeichniseinträge hinweg.**

4. **Klare Definitionen einbauen** ("Telefonakquise ist...", "Ein Onboarding bei Akquise-Helfer umfasst...").

5. **FAQ-Seite aktiv pflegen und erweitern** – wirksamster GEO-Hebel dieser Seite.

6. **Partnermarken-Verlinkung als Entity-Netzwerk-Signal:** Das gegenseitige Verlinken (idealerweise auch von betterdecisionsfaster.de und medien-fuer-sie.de zurück auf akquise-helfer.de) hilft KI-Systemen, das Gesamtbild der Personen Johannes Röder und Gesa Gröning über alle drei Marken hinweg korrekt zu erfassen, ohne die einzelnen Markenprofile zu vermischen.

---

## 9. Wiederverwendbare Content-Bausteine

**Kundenlogos/Referenzen (Bestandsliste, für Startseite/Über uns):** SCS, FACO Metalltechnik, Keimfarben, Deli Genuss, Aware Tapas (Royal Aware, NL), Fachverband Agile Coaching, Antenne Sylt, HWL, VHS Halstenbek, Ferihan Steiner Consulting, Digibox, Jakobs Druckerei, Hallmann Messebau, Bytediver, AWO Reinigung Hamburg, TZ Media, Form-Finder, Sinus Audio Tonstudio, Marescaux Immobilien, Sacher Immobilien-Management

**Testimonial-Zuordnung nach Zielseite:**

| Testimonial-Geber | Kernaussage | Ziel-Seite |
|---|---|---|
| Stefan Sacher, Sacher Immobilien-Management | unerwartet hohe Abschlussquote | Telefonakquise |
| Corina Piepereit-Wester, AWO Hamburg Reinigung & Service | transparente Arbeitsweise, hohe Abschlussquote | Telefonakquise |
| Markus Krochmann, Sinus Audio Tonstudio | Akquise auf nächstes Level gebracht | Telefonakquise |
| André Marescaux, Marescaux Immobilien | zuverlässige, transparente Telefonakquise | Telefonakquise |
| Tim Rücker, Bytediver | Akquise gut unterstützt und ausgeweitet | Telefonakquise |
| Stefanie Felsch, Keimfarben | Positionierung gestärkt, Marktanteil ausgebaut | Strategie & Analyse |
| Christiane Laakmann, TZ Media | Workshop-Impulse führten zu mehr Umsatz | Workshops |
| Martina Lauterjung, Form-Finder | praxistaugliche Tipps, Telefontrainings | Workshops |
| Wendy Bader, Royal Aware NL | Social-Media-Strategie/Konzeption | Content/Ads |
| Katrin Kinne, VHS Halstenbek | Marketing Außenwerbung & Social Media | Content/Ads |
| Katrin Heidbreder, Digibox | Websitestruktur für Suchmaschine optimiert | Content/Ads |
| André Fahl, FACO/SCS | schnelle, kompetente Unterstützung Marketing/Ansprache | Über uns (allgemein) |
| Branka Törpel, Extrawurst Franchisezentrale (liegt auf BDF-Seite vor) | zentrale Kennzahlensicht, tägliche Daten | nur auf betterdecisionsfaster.de, nicht auf Akquise-Helfer übernehmen |

(Volle Original-Zitate sind im bestehenden Seiten-Audit vorhanden und können bei Bedarf nachgeliefert werden.)

---

## 10. Partnermarken – Referenzdaten

**BETTER DECISIONS FASTER**
- URL: https://www.betterdecisionsfaster.de
- Betreiber: Johannes Röder & Andreas Törpel
- Kontakt: 0177/2881222, kontakt@betterdecisionsfaster.de
- Positionierung: "Daten sichtbar machen. Entscheidungen beschleunigen." – Microsoft-Power-BI-Beratung & Umsetzung aus einer Hand
- Leistungen: Power BI Quickstart, BI-Assessment (Light/Advanced), Coaching & Team-Enablement, KI & digitale Transformation

**Medien für Sie / Gesa Gröning**
- URL: https://www.medien-fuer-sie.de (leitet aktuell technisch auf gesagroening.de weiter – für den Cursor-Build den finalen Ziel-Link mit Gesa/Johannes abstimmen)
- Betreiberin: Gesa Gröning
- Kontakt: 0211 13959692, groening@medien-fuer-sie.de
- Positionierung: Moderatorin für Messen, Events, TV-Projekte; Video-Produktion, Web-TV/Corporate TV, Kameratrainings
- Leistungen: Moderation Online/Event, Moderierte Videos/UGC-Content/Web-TV, Digital überzeugen (Kameratrainings)

---

## 11. Bild-/Logo-Wiederverwendung, Markenfarbe & Design-Vorgehen (für Cursor-Phase)

- **Bestehende Bilder/Logos der Akquise-Helfer-Seite:** können, soweit möglich, für den Relaunch übernommen werden. Laut Impressum-Bildnachweis stammt Material aus drei Quellen: eigenes Material (uneingeschränkt weiterverwendbar), Canva.com und Depositphotos (bei diesen beiden vor Übernahme kurz Lizenzstatus/Nutzungsdauer prüfen, insbesondere falls sich der Nutzungszweck durch den Relaunch ändert).
- **Kundenlogos:** dürfen in der Regel nur mit weiterhin bestehendem Einverständnis der jeweiligen Kunden gezeigt werden – bei sehr alten Referenzen (mehrere Jahre) kurzer Check, ob die Zusammenarbeit/das Einverständnis noch aktuell ist.
- **Logos der Partnermarken** (BETTER DECISIONS FASTER, Medien für Sie) für die Netzwerk-Sektion (6.3b) direkt von den jeweiligen Markenseiten übernehmen – unkompliziert, da beide im eigenen Einflussbereich (Johannes/Gesa) liegen.
- **Stockbilder:** Wo eigenes Bildmaterial fehlt oder nicht passt, können bei Bedarf zusätzlich Stockbilder (z.B. über lizenzierte Stock-Plattformen) genutzt werden – muss nicht ausschließlich eigenes/Bestandsmaterial sein.
- **Markenfarbe:** Blau ist die bestehende Akquise-Helfer-Farbe und kann direkt im neuen Design weiterverwendet werden – kein Neu-Branding der Farbwelt nötig, das schafft Kontinuität für Bestandskunden.
- **Layout & Stil:** Bewusst nicht in dieser Datei festgelegt. Vor Beginn der eigentlichen Gestaltung in Cursor sollte eine kurze Abfrage/ein Fragebogen zu Stilpräferenzen erfolgen (z.B. gewünschte Bildsprache, Vorbild-Websites, Typografie-Richtung, Ton der Sprache). Zielvorgabe: **frisches, modernes Layout** – ausdrücklich kein 1:1-Nachbau des bestehenden Elementor-Designs.

---

## 12. Offene Punkte für die Cursor-Phase

- Visuelles Design, Farben-Feinabstimmung (Blau bleibt Basis), Typografie, Bildsprache – nach Stil-Abfrage (siehe Abschnitt 11)
- Konkrete Bildauswahl/-erstellung
- Technischer Unterbau (Framework, Hosting, ob WordPress abgelöst wird)
- Finales Copywriting/Wortlaut (diese Datei liefert Inhalte/Struktur, keine fertigen Marketingtexte)
- **Technische Anbindung von Kontaktformular und Terminfunktion** – im ersten Relaunch-Schritt nur optisch/UI umgesetzt (siehe 6.1/6.6), Versand-Logik, Kalenderanbindung (aktuell Outlook Bookings) und Datenverarbeitung folgen in einem nachgelagerten Schritt
- Google-Maps-API-Key/Einbindungsart für die 3-Standorte-Karte (siehe 6.6) technisch festlegen
- Entscheidung: Leistungen als Ankerseite vs. schlanke Unterseiten (siehe Abschnitt 4)
- Endgültige Ziel-URL für "Medien für Sie"-Verlinkung mit Gesa abstimmen (medien-fuer-sie.de vs. gesagroening.de)
- Rechteklärung Bestandsbilder/Kundenlogos (siehe Abschnitt 11)
