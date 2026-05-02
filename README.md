# Apply the Rubric — Week 8 Pair Exercise

An interactive in-class web app for the "Apply the Rubric" pair exercise in **CAPS 619 / IMAPA Techno-Geopolitics, Week 8 — Industrial Policy as National Power**.

## What this is

A 25-minute structured pair exercise that rehearses the core analytic move of the Week 8 take-home assignment (national industrial-policy audit). Students work in pairs to:

1. **Score** (15 min) — Pick one of six contemporary post-2020 industrial-policy cases and score it 1–5 on the GVC/GPN five-criterion rubric, with cited evidence.
2. **Stress-test** (5 min) — Swap a share link with another pair, view their scores, write counter-challenges criterion by criterion.
3. **Report** (5 min) — Each pair gets a one-minute report script anchored on their *weakest* score and the other pair's critique.

The app handles timer, scoring UI, live radar chart, share-via-URL between pairs, side-by-side comparison, and report-script generation. No backend required — pure static HTML/JS, runs on GitHub Pages.

## Six built-in cases

- **Indonesia Nickel Downstreaming** (Jokowi, 2014–) — full export ban, EV battery push, WTO DS592
- **UAE G42 AI Programme** — sovereign AI champion, Microsoft $1.5B deal, China divestment
- **Korea K-Chip Act 2023** — ₩340T Yongin mega-cluster, Chip 4 alliance
- **France 2030 Plan** — €54B sovereignty plan, STMicro-GF Crolles, quantum strand
- **Brazil Mover Programme (2024)** — green-mobility IP, BYD Camaçari, post-Inovar-Auto design
- **Mexico Nearshoring Tax Incentive** — accelerated depreciation, USMCA review uncertainty

Each case sheet includes: policy summary (EN+ZH), goal, budget & instruments, KPIs, key firms, timeline, and 3-4 external commentaries pre-tagged by stance (Pro-IP / Skeptical / Conditional / Multilateralist / Neutral).

## Hosting on GitHub Pages — 3 steps

```bash
# 1. Create a new GitHub repository (e.g., "week8-rubric")
# 2. Push these files to the repo
git init
git add .
git commit -m "Initial Week 8 rubric exercise app"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

```text
# 3. Enable GitHub Pages
GitHub repo → Settings → Pages → Source: "Deploy from a branch"
                              → Branch: "main" / folder: "/ (root)"
                              → Save
```

The site will be live at `https://<your-username>.github.io/<repo-name>/` within ~1 minute.

## Files in this repo

```
Week8_Rubric_Exercise_App/
├── index.html       Single-file app (HTML + CSS + JS)
├── cases.js         Case data — edit this to add/remove/modify cases
├── README.md        This file
└── LICENSE          MIT license
```

The app is a single HTML page with embedded CSS and JS. The only external dependency is **Chart.js** loaded from jsDelivr CDN (for the radar chart) and **Google Fonts** (Inter + Noto Sans TC for bilingual rendering). Both load over HTTPS; no API keys, no analytics, no tracking.

## Editing cases

Open `cases.js` in any editor. Each case follows this structure:

```js
{
  id: "your-case-id",                     // URL-safe slug, used in localStorage keys
  title: "Your Case Title",
  titleZh: "中文標題",
  country: "Country Name · 國家",
  subtitle: "One-line description",
  launched: "Year (administration)",
  summary: "2-3 sentence policy abstract...",
  summaryZh: "中文摘要...",
  goal: "Single-sentence goal.",
  budget: {
    headline: "Budget headline number",
    instruments: ["instrument 1", "instrument 2", ...]
  },
  kpi: ["KPI 1", "KPI 2", ...],
  keyFirms: ["Firm 1 — role", "Firm 2 — role", ...],
  timeline: [
    { year: "2020", event: "What happened" },
    ...
  ],
  commentaries: [
    {
      source: "Author, Outlet (Year)",
      text: "Quote text",
      stance: "Pro-IP" | "Skeptical" | "Conditional" | "Skeptic-Multilateralist" | "Neutral" | "Evidence"
    },
    ...
  ]
}
```

The `stance` field controls the colored border on the commentary block in the UI:
- **Pro-IP** = green
- **Skeptical** / **Skeptic-Multilateralist** = red
- **Conditional** (any variant) = amber
- **Neutral** / **Evidence** = blue

## In-class usage guide

### Before class
1. Confirm GitHub Pages URL is live and accessible from your classroom WiFi.
2. Prepare to project the URL on the room screen for students to type in.
3. (Optional) Print pair-ID labels — though the app auto-generates one.

### During class (25 min)

**Setup (2 min)**
- Tell students: "Open this URL on your laptop. Pair up. Pick **different cases** from each other in the same room." (One pair = one device is best; two laptops per pair lets each side see the page during stress-test.)
- Explain the rubric briefly (it is also displayed in-app).

**Phase 1 — Score (15 min)**
- Click the **Choose Case** tab; click a case card.
- Pair discusses each criterion, picks 1–5, writes 1–2 sentences of evidence.
- Live radar chart updates as scores are entered.
- Average and "justified" counters at the bottom track progress.

**Phase 2 — Stress-test (5 min)**
- Click **Stress-test** tab.
- Each pair clicks **Copy link** and sends their share link to another pair (Slack/LINE/Discord/email).
- Each pair pastes the *other* pair's link in the right input and clicks **Load their scores**.
- Side-by-side comparison appears with a dual radar chart. Pair writes critiques per criterion.

**Phase 3 — Report (5 min)**
- Click **Report** tab.
- Each pair picks (or accepts the auto-suggestion of) their weakest criterion.
- The app generates a one-minute report script — pair takes turns reading it aloud when called.
- 6 pairs × 1 min = 6 min for full-class round; instructor cuts at 5 min.

### Timer controls
- Click the timer in the header to start/pause.
- Right-click to cycle through presets: **15 min → 5 min → 5 min → 15 min**.
- Last 60 seconds flash red.

### Language toggle
- Click **中/EN** in the header to switch between English and Chinese rendering of UI labels and case content.
- Cases include both `summary` (EN) and `summaryZh` (ZH) which are always shown together; toggle changes only the UI chrome.

### Sharing — three methods (any one works)
1. **Copy link** — preferred. Generates a `https://...#share=BASE64` URL that auto-loads on the other pair's page.
2. **Share code** — base64 string, paste into the other pair's "their share link" input.
3. **Export JSON** — downloads a JSON file; other pair clicks **Import file** to load.

The URL-sharing approach uses URL fragments (`#share=`), which never leave the browser. No data is sent to any server.

## Privacy & data

All pair scores, justifications, and critiques live entirely in the user's browser via `localStorage`. Nothing is sent to any server. The only network calls are loading Chart.js from jsDelivr and fonts from Google Fonts (both anonymous, cacheable, GDPR-compliant CDN delivery).

## Browser compatibility

Tested on:
- Chrome / Edge / Brave (latest)
- Firefox (latest)
- Safari 15+

Requires a modern browser with `localStorage` and `Clipboard API` (for copy-link). Falls back gracefully where Clipboard API is missing.

## Customizing for other weeks

Want to use this for a different week's exercise (e.g., Week 9 Green Technopolitics)?
1. Fork or copy this folder.
2. Replace the cases in `cases.js` with new policy cases for that week's topic.
3. Update the `RUBRIC` array in `cases.js` if a different framework is used.
4. Edit `index.html` header text (`<title>`, `<h1>`).
5. Push to GitHub, enable Pages.

The scoring scale (1–5) and the share-link mechanism are framework-agnostic — they will work with any 5-point rubric.

## License

MIT. See `LICENSE`.

## Credits

Built for **CAPS 619 · Globalization Studies · Techno-Geopolitics** at IMAPA, NSYSU.
Course design: Roger Chifeng Liu.
Built collaboratively with Claude.

Suggestions, bug reports, pull requests welcome.
