# AI Usage Log — ABTalks

This file documents the prompts used during the AI-assisted (vibe-coded) development of the ABTalks platform UI.  
Tool: **Google Antigravity (Gemini)**

---

## Session Overview

**Project:** ABTalks — 60-Day Coding Challenge Platform  
**Stack:** Next.js 15, Vanilla CSS (CSS Modules), SVG  
**Screens built:** Landing Page (`/`), Student Dashboard (`/dashboard`), Challenge Day (`/day`), Leaderboard, Profile, Login, Register

---

## Prompts (Chronological)

1. **Initial build**  
   > "Design and build the following three screens: Landing Page (/), Student Dashboard (/dashboard), Challenge Day — show enough trust, clarity, and motivation that students are willing to commit to a 60-day challenge."

2. **Card carousel + personalization**  
   > "Rotate 20 cards instead of taking up the entire screen (only on PC) and add pfp to make it feel personal."

3. **Glow removal + How it Works section**  
   > "Remove all glow effects and add a section where you explain how ABTalks works. [Product context: ABTalks runs a 60-day coding challenge for Indian college students. Students pick a track, build something every day, and maintain a public learning streak by submitting a GitHub commit and a LinkedIn post.]"

4. **Fade removal**  
   > "Remove the fade."

5. **Collapsible track cards + route security**  
   > "Clicking on any of these sends to a profile. Add security so that no profile is accessed after logging out and this must not lead to anything else. Make these cards collapsible so instead of getting that into a new tab, you can collapse the information. Add placeholder assumed information related to the topic there and align the 3 collapsibles aesthetically."

6. **Push to GitHub**  
   > "Push it."

7. **Security fix for protected paths**  
   > "The collapsible still leads to protected paths, fix it."

8. **Constellation designs**  
   > "Add constellation designs and scatter that across the site."

9. **Track collapsible link fix**  
   > "The tracks collapsible still leads to dashboard, remove its link to dashboard and make it collapsible."

10. **Constellation repositioning**  
    > "Separate that constellation from the text, put it on the side with more scattered constellations."

11. **More section constellations**  
    > "Add constellations scattered here." *(on How-it-Works and Tracks sections)*

12. **Real logo integration**  
    > "This is the ABTalks logo and name font, add this instead." *(uploaded logo PNG + icon mark)*

13. **Final push**  
    > "Push everything."

---

## Notes

- All code was generated and iterated using AI prompts with manual review after each step.
- Route security (`/dashboard`, `/day`, `/leaderboard`, `/profile`) enforced via `ClientSecurityProvider.js` reading `localStorage`.
- No third-party UI libraries used — all components are hand-crafted in Vanilla CSS Modules.
