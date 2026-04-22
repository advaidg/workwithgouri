# workwithgouri.com

Personal portfolio for **Gouri Gireesan** — Reels Creator & Content Specialist based in Kochi, Kerala.

## Stack

- Vite + React 18
- Vanilla CSS (design tokens + CSS modules-style component files)
- Custom cursor, scroll-reveal, animated counter, marquee
- Deployed to GitHub Pages

## Development

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # static output in dist/
npm run preview   # preview the build
```

## Content locations

| What              | File                                    |
| ----------------- | --------------------------------------- |
| Hero name / intro | `src/components/Hero.jsx`               |
| About bio & chips | `src/components/About.jsx`              |
| Stats numbers     | `src/components/Stats.jsx`              |
| Services          | `src/components/Services.jsx`           |
| Portfolio works   | `src/components/Works.jsx`              |
| Tools             | `src/components/Tools.jsx`              |
| Process steps     | `src/components/Process.jsx`            |
| Contact links     | `src/components/Contact.jsx`            |
| Design tokens     | `src/styles/tokens.css`                 |

### Adding a real portrait

Drop the image into `public/assets/portrait.jpg` and replace the
placeholder `.ph` div in `src/components/Hero.jsx` with an `<img>`.

## Deployment

- Every push to `main` builds and deploys via `.github/workflows/deploy.yml`.
- Custom domain is set via `public/CNAME` (→ `workwithgouri.com`).
- In the GitHub repo: **Settings → Pages → Source: "GitHub Actions"**.
- DNS records (at your registrar):
  - `A` → `185.199.108.153`
  - `A` → `185.199.109.153`
  - `A` → `185.199.110.153`
  - `A` → `185.199.111.153`
  - `CNAME` for `www` → `<github-username>.github.io`
