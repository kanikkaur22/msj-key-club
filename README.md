# MSJ Key Club Website

Website for Mission San Jose High School Key Club (Division 12 East, CNH District).

Plain HTML/CSS/JS — no build step.

## Pages
- `index.html` — Home (upcoming events, why join)
- `events.html` — All events with category filters + "Add to calendar"
- `impact.html` — Service stats, hour goal progress bar, causes
- `about.html` — About us, Key Club pledge, MRP, contact
- `join.html` — How to join + interest form

## Updating content
Edit **`data.js`** — events, meeting time, contact email/socials, links, impact numbers, MRP text.
The header and footer live in `main.js`; styles in `styles.css`.

## Run locally
Open `index.html` in a browser, or in VS Code use the **Live Server** extension, or:

```bash
python3 -m http.server 5180
```
