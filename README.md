# Sloepverhuur Almere - Next.js Demo

A Next.js static clone of sloepverhuuralmere.nl with an integrated Yetti booking module demo.

## Deploy to Vercel (easiest)

1. Push this folder to a new GitHub repo
2. Go to vercel.com → New Project → Import that repo
3. Click Deploy — done!

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Features

- Full homepage clone of sloepverhuuralmere.nl
- Clean sticky header with navigation
- **Yetti booking module** — 3-step booking flow (location, date, time/duration, confirmation)
- Location cards for all 3 pickup points
- Reviews section
- Media mentions section
- Footer with links

## Notes

- Images load from the live sloepverhuuralmere.nl domain
- Booking module is a demo — connects to Yetti/Stripe in production
- `output: 'export'` in next.config.js for static hosting
