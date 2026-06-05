# Webbplats

Statisk single-page webbplats för Kazozabyrå AB, byggd i ren HTML/CSS/JS.

---

## Kom igång – cPanel

1. Logga in på cPanel
2. Gå till **Filhanteraren** → `public_html/`
3. Ladda upp filerna
4. Klart – sajten är live på din domän

---

## ⚠️ Obligatorisk inställning innan lansering

### Kontaktformulär (Web3Forms)

Formuläret skickar e-post via [web3forms.com](https://web3forms.com) (gratis, 250 meddelanden/mån).

- Inloggning finns Websites map

---

## Sektioner

| Sektion          | Beskrivning                                             |
| ---------------- | ------------------------------------------------------- |
| **Navbar**       | Logotyp + navigering + mobil hamburger-meny             |
| **Hero**         | Rubrik, ingress, checkpunkter, CTA-knappar + bild       |
| **Tjänster**     | 4 tjänstekort – Redovisning, Löner, Rådgivning, Interim |
| **Om oss**       | Bild + text + styrkepunkter                             |
| **Rikstäckning** | Mörk sektion – digital/distans-budskap + Sverige        |
| **Kontakt**      | Kontaktinfo + formulär (Web3Forms)                      |
| **Nyhetsbrev**   | E-postinsamling via mailto                              |
| **Footer**       | Länkar, kontaktinfo, copyright                          |

---

## Bilder

| Plats        | URL           |
| ------------ | ------------- |
| Hero         | `1Agnes.png`  |
| Om oss       | `aboutus.jpg` |
| Rikstäckning | `so1.jpg`     |
| Kontakt      | `contact.jpg` |

---

## Logotyp

- Plats: `logo.png`
- Sök efter `alt="Kazozabyrå logotyp"` i filen

---

## Typsnitt

Laddas från Google Fonts (kräver internet):

- **Playfair Display** – rubriker (serif)
- **Inter** – brödtext (sans-serif)

**Vill du köra offline:** Ladda ner typsnitten från [fonts.google.com](https://fonts.google.com) och lägg dem i en `fonts/`-mapp.

---

## Kontaktformulär – teknisk info

- **Tjänst:** Web3Forms (gratis upp till 250 meddelanden/mån)
- **Metod:** `fetch()` POST till `https://api.web3forms.com/submit`
- **Fält:** Namn, e-post, telefon, företag, tjänst, meddelande, GDPR
- **Vid fel:** Visar felmeddelande i rött direkt i formuläret
- **Vid success:** Formuläret nollställs, visar bekräftelse i grönt

---

## Mobilanpassning

| Brytpunkt | Beteende                              |
| --------- | ------------------------------------- |
| `> 960px` | Full desktop-layout, hero med bild    |
| `≤ 960px` | Hero-bild döljs, hamburger-meny visas |
| `≤ 580px` | Formuläret staplas, en kolumn         |

---

## Ändra kontaktuppgifter

Sök i filen efter följande och byt till era riktiga uppgifter:

| Vad        | Sök efter                    |
| ---------- | ---------------------------- |
| Telefon    | `------`                     |
| E-post     | `info@kazoza.se`             |
| Öppettider | `Måndag–Fredag, 09:00–17:00` |

---

## Ändra färger

Alla färger styrs av CSS-variabler i `<style>`-blocket, under `:root { ... }`:

```css
--blue-900: #0b1f3a; /* Marinblå – navbar, knappar, footer */
--blue-800: #0f2d54; /* Hover-färg */
--blue-500: #2563eb; /* Länkfärg, fokusring */
--blue-100: #dbeafe; /* Badge-bakgrund */
--gray-100: #f3f4f6; /* Ljus sektionsbakgrund */
--green-500: #22c55e; /* Checkmark-färg */
```

---

## Framtida förbättringar (förslag)

- [ ] Google Analytics – lägg till spårningskod i `<head>`
- [ ] Cookie-banner (GDPR krav)
- [ ] Bloggsida för SEO-innehåll

---

## Support

| Kanal        | Info                                                 |
| ------------ | ---------------------------------------------------- |
| Web3Forms    | [docs.web3forms.com](https://docs.web3forms.com)     |
| Unsplash     | [unsplash.com](https://unsplash.com) – gratis bilder |
| Google Fonts | [fonts.google.com](https://fonts.google.com)         |
| cPanel guide | [docs.cpanel.net](https://docs.cpanel.net)           |

---

_Senast uppdaterad: Juni 2026_
