# Benötigte Bilddateien

Alle aktuell eingebauten Bilder sind Platzhalter (SVG mit Beschriftung). Sobald echtes
Material vorliegt, einfach die Datei ersetzen und im HTML den Dateinamen anpassen.

Rechte vorher klären (siehe Briefing Abschnitt 11): eigenes Material ist unproblematisch,
bei Canva- und Depositphotos-Material bitte Lizenzstatus prüfen, bei Kundenlogos das
weiterhin bestehende Einverständnis.

---

## 1. Marke

| Datei | Verwendung | Empfehlung |
|---|---|---|
| `assets/img/logo.svg` | Header und Footer aller Seiten | Original-Logo als SVG, quadratisch oder mit angepasster Breite im CSS |
| `assets/img/favicon.svg` | Browser-Tab | SVG genügt; zusätzlich `favicon.ico` (32×32) für ältere Browser sinnvoll |

Der aktuelle Platzhalter ist ein schlichtes „A“-Zeichen im Markenblau – kein Ersatz
für das echte Logo.

---

## 2. Seitenbilder

| Datei | Seite | Motivvorschlag | Format |
|---|---|---|---|
| `assets/img/platzhalter-hero-start.svg` | Startseite, Hero | Beratungssituation oder Team am Arbeitsplatz, freundlich und unaufgeregt | 1600 × 1200 px, JPG oder WebP |
| `assets/img/platzhalter-hero-telefonakquise.svg` | Telefonakquise, Hero | Telefongespräch am Schreibtisch, Notizen sichtbar | 1600 × 1200 px, JPG oder WebP |
| `assets/img/platzhalter-portrait-johannes-roeder.svg` | Über uns | Portrait Johannes Röder | 1200 × 1400 px, hochkant |
| `assets/img/platzhalter-portrait-gesa-groening.svg` | Über uns | Portrait Gesa Gröning | 1200 × 1400 px, hochkant |

Optional zusätzlich sinnvoll, aber im aktuellen Layout nicht zwingend:
je ein Motiv für Strategie, Workshops und Content/Ads.

---

## 3. Partnerlogos (Netzwerk-Sektion)

| Datei | Quelle |
|---|---|
| `assets/img/logos/platzhalter-better-decisions-faster.svg` | Original von betterdecisionsfaster.de |
| `assets/img/logos/platzhalter-medien-fuer-sie.svg` | Original von medien-fuer-sie.de bzw. gesagroening.de |

Beide liegen im eigenen Einflussbereich, sind also unkompliziert zu beschaffen.
Ideal als SVG oder PNG mit transparentem Hintergrund, Höhe mindestens 88 px.

---

## 4. Kundenlogos

Aktuell werden die 20 Referenzen auf Startseite und Über-uns-Seite als Textliste
dargestellt. Sobald Logodateien vorliegen, in `assets/img/logos/` ablegen und die
`<ul class="logos">` durch folgende Struktur ersetzen:

```html
<ul class="logo-wall">
  <li><img src="assets/img/logos/keimfarben.svg" alt="Keimfarben" loading="lazy"></li>
  <li><img src="assets/img/logos/faco.svg" alt="FACO Metalltechnik" loading="lazy"></li>
</ul>
```

Die Klasse `.logo-wall` ist im Stylesheet bereits vorbereitet (Graustufen-Darstellung,
Farbe beim Hover, responsives Raster).

Referenzliste: SCS, FACO Metalltechnik, Keimfarben, Deli Genuss, Aware Tapas
(Royal Aware NL), Fachverband Agile Coaching, Antenne Sylt, HWL, VHS Halstenbek,
Ferihan Steiner Consulting, Digibox, Jakobs Druckerei, Hallmann Messebau, Bytediver,
AWO Reinigung Hamburg, TZ Media, Form-Finder, Sinus Audio Tonstudio,
Marescaux Immobilien, Sacher Immobilien-Management.

---

## 5. Open-Graph-Bilder

`assets/img/og-default.svg` ist derzeit auf allen Seiten als Vorschaubild hinterlegt.
Zwei Punkte dazu:

1. Facebook, LinkedIn und WhatsApp rendern **kein SVG**. Für den Livegang wird
   mindestens ein JPG oder PNG mit 1200 × 630 px benötigt.
2. Das Briefing fordert seitenspezifische OG-Bilder. Die Meta-Tags sind pro Seite
   bereits einzeln gesetzt, es muss also nur der Dateiname getauscht werden.

Empfohlener Satz:

- `og-start.jpg`, `og-telefonakquise.jpg`, `og-leistungen.jpg`, `og-strategie.jpg`,
  `og-workshops.jpg`, `og-content-ads.jpg`, `og-foerdermittel.jpg`, `og-ueber-uns.jpg`,
  `og-faq.jpg`, `og-kontakt.jpg`
