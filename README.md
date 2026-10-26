# 🚀 Kashish Kumari — Modern Portfolio Website (v2)

An interactive, responsive portfolio website for **Kashish Kumari** (Python Developer, Data Analyst, Graphic Designer, and GenAI Builder). Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, Three.js / React Three Fiber, and next-themes.

Matches the design language, layout architecture, and aesthetic of `reference-ui.jpg` with 100% real credentials, verified certifications, interactive 3D elements, and real project showcases.

---

## 📸 Key Features

- **🎨 Reference UI Matching Aesthetic:**
  - Soft ice-blue gradient background (`#F0F8FF` to `#FFFFFF`) with floating translucent ambient bubbles.
  - Dark mode support (`#0B1220`) with smooth `next-themes` transition and local preference persistence.
  - Cyan-to-blue gradient accents (`#06B6D4` / `#0EA5E9` to `#3B82F6`) and custom typography.
- **✨ Floating Pill Navbar:** Frosted glass effect, centered navigation with active scroll spy, brand logo on the left, dark mode toggle on the right, and responsive mobile hamburger drawer.
- **⚡ Hero Section:**
  - Dynamic typewriter heading cycling through *"Python Developer"*, *"Data Analyst"*, *"Graphic Designer"*, *"GenAI Builder"* with cyan highlight underline bar.
  - Dual CTAs: Filled gradient **Download Resume** (downloads PDF) and outlined **Contact Me**.
  - Social profile links: GitHub, LinkedIn, Behance, Email.
  - 3D interactive avatar scene with glowing cyan ring and orbiting tech badges (Python, FastAPI, Pandas, TypeScript, Next.js, Tableau) powered by React Three Fiber / Drei with smooth CSS fallback.
- **🔄 Infinite Tech Marquee:** Seamless auto-scrolling tech pill ribbon (Python, Pandas, FastAPI, Tableau, Excel, Next.js, TypeScript, Groq, Selenium, Photoshop, Illustrator, Canva) that pauses on hover.
- **👩‍💻 About Me:**
  - Oval capsule avatar frame encircled by a rotating dotted orbit ring.
  - Student-voice bio highlighting RAG pipelines, FastAPI, Python automation, and S.M.I.T data science training.
  - Animated stat counters: `3.80 CGPA (GCUH)`, `5+ Projects Completed`, `3 Experiences`, `5+ Certifications`.
  - "Hire Me" CTA button.
- **🛠️ Technical Skills:** 4 categorized white `rounded-2xl` cards with clean chips (Programming & Data, Generative AI & Automation, Web Technologies, Graphic Design).
- **📂 Featured Projects:**
  - 3D tilt cards on hover with glass shine effect.
  - Interactive deep-dive modal detailing **The Problem**, **The Engineering Approach**, and **What I Learned** (closes via Esc key or outside click).
  - Projects included:
    1. **KashishBot** (Python / Groq API / Llama-3)
    2. **WhatsApp Chat Analyzer** (Streamlit / Pandas / Plotly)
    3. **Bulk WhatsApp Automation** (Python / Selenium / Pandas)
    4. **AI Vision Assistant** (Next.js / TypeScript / Vision AI)
    5. **Project Banana** (AR / WebGL / QR Menu Scanning)
  - Visual Portfolio strip showcasing Graphic Design work with a direct link to Behance.
- **💼 Experience (Reference Layout):**
  - Center 3D-styled avatar with `"3 Experiences"` badge below it.
  - 4 white rounded cards positioned symmetrically around the center avatar:
    1. *Volunteer Management Intern* — Alkhidmat Foundation Pakistan
    2. *Generative AI Intern* — Borlo Labs
    3. *BS Information Technology* — Government College University Hyderabad
    4. *Graphic Designer & Computer Operator* — Digital Sindh Institute of Management & Technology
  - Sub-row for additional technical training & diplomas (S.M.I.T, BBSYDP, Govt Vocational Training Center).
- **🏆 Certifications & Achievements:** Verified credential cards for Deloitte Australia Data Analytics Simulation, Pandas, Huawei HCAI AI V4.0, AI for Beginners, Google OS Power User, and IT EXPO / Female Defend Yourself honors.
- **🌐 Languages I Speak:** Animated circular progress rings showing language proficiencies (English, Urdu, Sindhi, Hindi).
- **📬 Contact & CTA Banner:**
  - Pre-footer CTA banner: *"Have an opportunity? Let's talk"*.
  - Validated contact form (Name, Email, Message) with Zod validation, error feedback, loading spinner, and confetti celebration on submit.
  - Direct email, location, and social profile links.
- **📱 Floating Action Buttons:** Persistent floating WhatsApp button and scroll-to-top button.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 14 (App Router)](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics:** [Three.js](https://threejs.org/) + [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/) + [@react-three/drei](https://github.com/pmndrs/drei)
- **Typewriter Effect:** `react-type-animation`
- **Counters:** `react-countup` + `react-intersection-observer`
- **Form Handling:** `react-hook-form` + `zod`
- **Theme:** `next-themes`
- **Icons:** `lucide-react`, `react-icons`, and custom pixel-perfect SVG brand components

---

## 📂 Project Structure

```
├── app/
│   ├── layout.tsx              # Root HTML, ThemeProvider, fonts, metadata & SEO
│   ├── page.tsx                # Single-page layout composing all sections
│   └── globals.css             # Tailwind base, dark mode tokens, scrollbars, glowing effects
├── components/
│   ├── Navbar.tsx              # Floating glass pill navbar with scroll spy & theme switch
│   ├── Hero.tsx                # Hero with dynamic typewriter text & dual CTAs
│   ├── HeroScene3D.tsx         # 3D canvas with orbiting tech badges & fallback
│   ├── TechIcons.tsx           # Custom pixel-perfect SVGs for tech brands
│   ├── TechMarquee.tsx         # Auto-scrolling infinite pill ribbon
│   ├── About.tsx               # Oval frame avatar with rotating dotted orbit & counters
│   ├── Skills.tsx              # Grouped cards with skill chip badges
│   ├── Projects.tsx            # Tilt project cards with modal detail views & Behance strip
│   ├── ProjectCard.tsx         # 3D interactive tilt project card with mouse tracking
│   ├── ProjectModal.tsx        # Project detail modal (problem, approach, learnings)
│   ├── Experience.tsx          # 4 cards around center character layout from reference UI
│   ├── Certifications.tsx      # Verified credentials & honors
│   ├── Languages.tsx           # Animated circular SVG progress rings
│   ├── Contact.tsx             # Validated contact form with confetti & direct info
│   ├── CTABanner.tsx           # Pre-footer CTA banner ("Have an opportunity? Let's talk")
│   ├── FloatingButtons.tsx     # Floating WhatsApp & Back-to-Top buttons
│   ├── Bubbles.tsx             # Ambient floating translucent blue bubbles
│   ├── Footer.tsx              # Footer with copyright and social links
│   └── ThemeProvider.tsx       # next-themes wrapper
├── data/
│   └── content.ts              # Single source of truth for all text, data, links, & stats
└── public/
    ├── avatars/                # 3D character avatars (hero laptop, about standing, experience pose)
    ├── projects/               # Real screenshots & modern mockups for project cards
    └── Kashish_Kumari_CV.pdf   # Resume PDF download
```

---

## 🏃‍♂️ How to Run Locally

### 1. Prerequisites
- **Node.js** v18+ (tested with Node v20 & v24)
- **npm** or **yarn** / **pnpm**

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Create Production Build
```bash
npm run build
npm run start
```

---

## ✏️ How to Edit Content

All text, credentials, projects, certifications, and links live in **one single file**:
👉 [`data/content.ts`](./data/content.ts)

To change any information:
1. **Personal info & Links:** Edit `siteContent.personal` and `siteContent.socials`.
2. **Hero Typing Roles:** Edit `siteContent.hero.typingRoles`.
3. **Stat Numbers:** Update `siteContent.stats` (CGPA, projects, etc.).
4. **Projects & Modals:** Add or edit items in `siteContent.projects`.
5. **Work Experience:** Modify items in `siteContent.experience.items`.
6. **Languages:** Adjust percentages or names in `siteContent.languages`.
7. **Resume PDF:** Replace `public/Kashish_Kumari_CV.pdf` with your updated resume file.

---

## 📧 How to Connect the Contact Form to Email

The contact form is pre-wired with client-side Zod validation. To receive messages in your inbox without needing a custom backend server:

### Option A: Formspree (Recommended & Free)
1. Register for free at [Formspree.io](https://formspree.io).
2. Create a new form and copy your form endpoint (e.g. `https://formspree.io/f/xyzabcde`).
3. In `components/Contact.tsx`, update the `fetch` call inside `onSubmit`:
   ```ts
   const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify(data),
   });
   ```

### Option B: EmailJS
1. Sign up at [emailjs.com](https://www.emailjs.com).
2. Call `emailjs.send(...)` with your service ID and template ID inside `onSubmit`.

---

## 🚀 How to Deploy to Vercel

### Quick 1-Click Deployment:
1. Push this repository to your **GitHub** account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Kashish Kumari Portfolio"
   git branch -M main
   git remote add origin https://github.com/Kashish-coder06/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
3. Click **"Add New Project"** and select your `portfolio` repository.
4. Leave all default settings (Framework preset: Next.js).
5. Click **"Deploy"**.
6. In ~60 seconds, your portfolio will be live at `https://your-portfolio.vercel.app` with full SSL, global CDN, and automated preview deployments!
