# Benötigte Bilddateien

Alle aktuell eingebauten Bilder sind Platzhalter (SVG mit Beschriftung). Sobald echtes
Material vorliegt, einfach die Datei ersetzen und im HTML den Dateinamen anpassen.

Rechte vorher klären (siehe Briefing Abschnitt 11): eigenes Material ist unproblematisch,
bei Canva- und Depositphotos-Material bitte Lizenzstatus prüfen, bei Kundenlogos das
weiterhin bestehende Einverständnis.

---

## 1. Marke

| Datei | Verwendung | Status |
|---|---|---|
| `assets/img/logo.png` | Header und Footer aller Seiten | Eingebunden (max. 74 px Höhe per CSS) |
| `assets/img/favicon.png` | Browser-Tab | Eingebunden |

---

## 2. Seitenbilder

| Datei | Seite | Motivvorschlag | Format |
|---|---|---|---|
| `assets/img/Akquise-Helfer_Strategische-Akquise-Telefon.png` | Startseite, Hero | Johannes Röder und Gesa Gröning im Büro | Eingebunden (360 × 275 px; für Retina ggf. größere Version nachliefern) |
| `assets/img/platzhalter-hero-telefonakquise.svg` | — | Telefongespräch am Schreibtisch (optional) | Nicht eingebunden – Telefonakquise nutzt textbasiertes Hero ohne Bild |
| `assets/img/Portrait_Johannes_Roeder.png` | Über uns | Portrait Johannes Röder | Eingebunden (825 × 963 px) |
| `assets/img/Portrait_Gesa_Groening.png` | Über uns | Portrait Gesa Gröning | Eingebunden (600 × 700 px) |

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
