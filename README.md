<div align="center">

# AB TALKS

### Build in Public. Get Noticed.

*A 60-day coding challenge platform for Indian college students.*

[![Live Demo](https://img.shields.io/badge/Live%20Demo-ab--talks--ruddy.vercel.app-fcd34d?style=for-the-badge&logo=vercel&logoColor=black)](https://ab-talks-ruddy.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)

</div>

---

## 🚀 Try it now

> No sign-up needed. Use a mock account to explore the full experience.

| Email | Password | Name |
|---|---|---|
| `demo@abtalks.dev` | `demo123` | Demo User |
| `arjun@abtalks.dev` | `build60` | Arjun Mehta |
| `samritha@abtalks.dev` | `abtalks` | Samritha S |

**→ [Open Live Demo](https://ab-talks-ruddy.vercel.app)**

---

## 📍 Route Map

```
/
/dashboard
/day/12
```

> All three routes are mobile-first at 390px viewport width.

---

## 📱 Screens

| Route | Screen | Description |
|---|---|---|
| `/` | Landing Page | First impression for a student who's never heard of ABTalks |
| `/dashboard` | Student Dashboard | Streak, today's task, progress, standing, achievements |
| `/day/12` | Challenge Day | Full day experience — task, build guide, proof submission |
| `/leaderboard` | Leaderboard | Top builders ranked by streak and consistency |
| `/profile` | Profile | Student card with streak history and public build log |

---

## 🔐 Security

Protected routes (`/dashboard`, `/day/*`, `/leaderboard`, `/profile`) redirect to `/login` if no session is found.

Sessions are managed via `localStorage` — set on login, cleared on sign-out. No real authentication or backend involved.

---

## 🎯 Edge Cases Handled

| Case | How it's handled |
|---|---|
| **First day, no streak** | `isFirstDay: true` in mock data → shows "Day 1 starts today" card |
| **Missed yesterday** | `missedYesterday: true` → shows streak-reset warning banner |
| **Unauthenticated access** | `ClientSecurityProvider` redirects to `/login` |
| **Track collapsibles** | Accordion-style, no hard links to protected pages when logged out |

---

## ✨ Design Decisions

- **Mobile-first** — hero fills 100dvh on phone; all cards sized for one-thumb use
- **Constellation backgrounds** — scattered SVG star clusters across every page, `pointer-events: none`
- **No glows** — deliberately removed all glow effects for a cleaner, premium feel
- **Real logo** — AB TALKS brush-style wordmark used across navbar, footer, and login
- **Animated streak counter** — number counts up on mount for emotional impact

---

## 🛠 Stack

```
Framework     Next.js 15 (App Router)
Styling       Vanilla CSS Modules
Data          Mocked JSON (data/mockData.js)
Auth          localStorage session (client-side only)
Deployment    Vercel
AI Tool       Google Antigravity (Gemini)
```

---

## 🤖 AI Usage Log

All prompts used to build this project are documented in **[PROMPTS.md](./PROMPTS.md)**.

> This project was fully vibe-coded using Google Antigravity.

---

## 🏃 Run Locally

```bash
git clone https://github.com/Samritha-S/ABTalks.git
cd ABTalks
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

<div align="center">

Built for the **ABTalks Vibe Coding Hackathon** · 2026

</div>
