# Akquise-Helfer – Website-Relaunch

Statische Website auf Basis von `akquise-helfer-relaunch-basis.md` (Version 3).
Kein Build-Prozess, kein Framework, keine externen Requests – reines HTML, CSS und etwas JavaScript.

---

## Vorschau starten

Auf diesem Rechner sind weder Node.js noch Python installiert. Deshalb liegt ein
kleiner Vorschau-Server auf PowerShell-Basis bei:

1. Doppelklick auf **`Vorschau-starten.cmd`**
2. Der Browser öffnet automatisch `http://localhost:8080/`
3. Beenden mit `Strg + C` im schwarzen Fenster

Anderer Port, falls 8080 belegt ist:

```powershell
.\vorschau.ps1 -Port 8090
```

> Ein Doppelklick direkt auf `index.html` funktioniert nur eingeschränkt, weil die
> Seiten saubere Verzeichnis-URLs (`/telefonakquise/`) verwenden. Bitte den Vorschau-Server nutzen.

---

## Ordnerstruktur

```
akquise-helfer-website/
├── index.html                      Startseite
├── telefonakquise/                 Pillar-Page, Kernprodukt
├── leistungen/                     Übersicht + #netzwerk (Partnermarken)
│   ├── strategie/                  Strategie & Analyse
│   ├── workshops/                  Workshops & Schulungen
│   └── content-ads/                Content & Ads
├── foerdermittel/                  BAFA, KOMPASS, Fit für die Zukunft NRW
├── ueber-uns/                      Team, #referenzen
├── faq/                            11 Fragen inkl. FAQPage-Schema
├── kontakt/                        Terminauswahl-UI, Formular-UI, Karte
├── impressum/  datenschutz/  agb/  cookie-richtlinie/    (noindex, Textgerüste)
├── 404.html
├── assets/
│   ├── css/style.css               komplettes Design-System
│   ├── js/main.js                  Navigation, Akkordeon, Karte, Formular-Attrappen
│   └── img/                        Logo, Favicon, Bildplatzhalter
│       └── logos/                  Partner- und Kundenlogos
├── sitemap.xml   robots.txt
├── .htaccess                       301-Redirects für Apache
├── _redirects                      301-Redirects für Netlify/Cloudflare Pages
├── BILDER-BENOETIGT.md             Liste der noch fehlenden Bilddateien
└── vorschau.ps1 / Vorschau-starten.cmd
```

Hauptnavigation: 5 Punkte (Telefonakquise, Leistungen, Fördermittel, Über uns, Kontakt)
plus CTA-Button. FAQ ist über Footer und Querverweise erreichbar. Klicktiefe maximal 2.

---

## Was bewusst noch nicht funktioniert

Diese Punkte sind laut Briefing (Abschnitte 6.1, 6.6 und 12) im ersten Relaunch-Schritt
absichtlich nur optisch umgesetzt:

| Element | Stand | Nächster Schritt |
|---|---|---|
| Kontaktformular (Startseite, Kontakt) | Nur UI, kein Versand | Formular-Backend oder Dienst anbinden, Bestätigungsmail, Speicherung |
| Terminauswahl (Kontakt) | Nur UI, Beispielmonat | Outlook Bookings oder Alternative einbinden |
| Google Maps | Lädt erst nach Klick, einzelne Standorte über Tabs | Für eine Karte mit drei Pins gleichzeitig: Google My Maps anlegen und Embed-URL eintragen, oder Maps JavaScript API mit Key |
| Kundenlogos | Als Textliste dargestellt | Logodateien nach `assets/img/logos/` legen, Einverständnis prüfen, Liste durch `.logo-wall` ersetzen |
| Rechtstexte | Layout-Gerüst mit Platzhaltern | Originaltexte 1:1 aus dem Bestand einsetzen (nicht neu formulieren) |
| Whitepaper-Downloads (alte URLs) | Redirect auf `/ueber-uns/#referenzen` | PDFs bei Bedarf separat bereitstellen |

Die Stellen sind im Quelltext mit HTML-Kommentaren und auf der Seite selbst mit
gelben Hinweisboxen bzw. gestrichelten Platzhalter-Kästen markiert.

---

## Design-System

Alle Design-Entscheidungen liegen als CSS-Variablen in `assets/css/style.css`,
Abschnitt „Tokens“:

- **Markenfarbe Blau** in mehreren Abstufungen (`--brand-900` bis `--brand-050`),
  Basiston `--brand-700: #0a4e9b`. Sollte der exakte Blauton der Bestandsseite
  bekannt sein, genügt es, diese Werte anzupassen.
- **Typografie** über System-Schriften (Segoe UI und Fallbacks). Bewusst keine
  Google Fonts: spart einen externen Request und vermeidet die DSGVO-Diskussion.
- **Fluide Schriftgrößen** über `clamp()`, dadurch keine Breakpoint-Sprünge.
- **Abstände und Radien** ebenfalls als Variablen, damit sich der Look zentral verändern lässt.

Wiederverwendbare Bausteine: `.btn`, `.card`, `.badges`, `.checklist`, `.quote`,
`.steps`, `.phase`, `.panel`, `.cta-band`, `.accordion`, `.partner-card`, `.map-frame`.

---

## SEO- und GEO-Umsetzung

Umgesetzt gemäß Abschnitt 7 und 8 des Briefings:

- Genau eine `h1` pro Seite, danach hierarchische `h2`/`h3` ohne Sprünge
- Eigener Title und eigene Meta-Description je Seite, keine Duplikate
- Self-referencing Canonical auf jeder Seite
- `noindex, nofollow` auf allen vier Rechtsseiten, zusätzlich in `robots.txt`
- Sprechende Slugs entsprechend dem URL-Mapping
- Alle 301-Redirects aus Abschnitt 5 in `.htaccess` und `_redirects`
- `sitemap.xml` nur mit den zehn finalen Seiten
- Open-Graph- und Twitter-Card-Tags je Seite (aktuell noch mit gemeinsamem
  Platzhalterbild, seitenspezifische Bilder siehe `BILDER-BENOETIGT.md`)
- Externe Links zu den Partnermarken mit `rel="noopener"` und `target="_blank"`,
  bewusst **ohne** `nofollow`
- Strukturierte Daten: `Organization` mit `sameAs` zu Social Media und beiden
  Partnermarken, `WebSite`, drei `ProfessionalService`-Objekte (ein Standort je Objekt),
  `Service` für Telefonakquise, Strategie, Workshops und Content/Ads, `FAQPage`
  mit allen 11 Fragen, `Person` für Johannes Röder und Gesa Gröning inklusive
  `affiliation` zu beiden Marken, `BreadcrumbList` auf allen Unterseiten

Noch offen: `Review`- bzw. `AggregateRating`-Markup. Das wurde bewusst weggelassen,
weil dafür die vollständigen Original-Zitate und eine dokumentierte Einwilligung der
Kundinnen und Kunden vorliegen müssen. Auf den Seiten stehen derzeit gekürzte
Zitate aus dem Seiten-Audit, im Quelltext jeweils als solche kommentiert.

Vor dem Livegang zu prüfen:

1. Geokoordinaten in den `ProfessionalService`-Objekten ergänzen
2. Öffnungszeiten bestätigen (derzeit Mo–Fr 9–17 Uhr als Annahme hinterlegt)
3. Facebook-URL verifizieren (im Briefing nur „Facebook“ ohne konkrete Adresse)
4. Ziel-URL für „Medien für Sie“ mit Gesa abstimmen (`medien-fuer-sie.de` oder `gesagroening.de`)
5. `lastmod` in der Sitemap auf das Veröffentlichungsdatum setzen

---

## Deployment

Die Seite ist statisch und läuft auf jedem Webspace.

**Apache / klassisches Hosting:** Ordnerinhalt ins Webroot hochladen, `.htaccess` wird
automatisch berücksichtigt. Vorher in der `.htaccess` die auskommentierten Blöcke für
HTTPS- und www-Erzwingung aktivieren, sobald die Domain umgestellt ist.

**Netlify / Cloudflare Pages:** Ordner verbinden, kein Build-Command, Publish-Directory
ist der Ordner selbst. `_redirects` wird automatisch gelesen, `.htaccess` ignoriert.

**Nach dem Livegang:**

- In der Google Search Console neue Sitemap einreichen
- Alte URLs auf korrekte 301-Weiterleitung prüfen
- Alte, verwaiste URLs (`/faq/` alt, `/vertrieb-optimieren/`, `/ueber-uns-alt/`,
  `/nrw-digitalzuschuss-handel/`) aus dem Index entfernen lassen
- Core Web Vitals messen – ohne Elementor sollte hier deutlich Luft nach oben entstanden sein
