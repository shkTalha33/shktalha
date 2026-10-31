# Lumio Personal Portfolio - Next.js Architecture & Technical Documentation

## 1. Project Overview

**Lumio** is a responsive, high-performance personal portfolio web application built with **Next.js (App Router)**.

All sections—**Hero**, **About & Services & Testimonials**, **Resume & Skills**, **Portfolio & Stats**, **Blog**, and **Contact**—are presented in a seamless, continuous single-page scrolling layout on the main page. All menu interactions, GSAP screen transition wipe animations, active section scroll-spy highlighting, skill bar animations on scroll, live counter triggers, interactive portfolio filtering, and rotating headlines remain 100% active and functional.

---

## 2. Next.js Directory & Component Structure

```
Personal portfolio/
│
├── public/                            # Static assets served at root
│   ├── assets/
│   │   ├── fonts/                     # Boxicons font suite (eot, ttf, woff, woff2, svg)
│   │   └── img/                       # Images (avatar, hero, logo, blog, portfolio, testimonial)
│   └── cv.txt                         # Downloadable resume placeholder
│
├── src/
│   ├── app/
│   │   ├── layout.jsx                 # Next.js Root Layout (metadata, global CSS imports)
│   │   └── page.jsx                   # Home Page Controller (manages active section state & routing)
│   │
│   ├── components/
│   │   ├── CustomCursor.jsx           # Hardware-accelerated mouse follower & hover enlargement
│   │   ├── Preloader.jsx              # Initial site loading screen with animated line
│   │   ├── Navigation.jsx             # Drawer menu, responsive hamburger, & GSAP overlay transitions
│   │   ├── ParticlesBackground.jsx    # Pure Canvas interactive particle network (matching particles.js)
│   │   ├── HeroSection.jsx            # Hero banner, clip-animated rotating role headline & social links
│   │   ├── AboutSection.jsx           # Biography, quick facts, services grid, & testimonial slider
│   │   ├── TestimonialSlider.jsx      # Touch/click testimonial carousel with active dot navigation
│   │   ├── ResumeSection.jsx          # Education & experience timeline, animated skill bars (99% - 78%)
│   │   ├── PortfolioSection.jsx       # Category-filtered project gallery & live stat counters (100+, 80+, etc.)
│   │   ├── BlogSection.jsx            # Latest news & blog publication cards with calendar badges
│   │   └── ContactSection.jsx         # Interactive contact form with state validation & info list
│   │
│   └── styles/
│       ├── bootstrap.min.css          # Bootstrap v5.3.3 grid system
│       ├── boxicons.min.css           # Boxicons font definitions (pointing to /assets/fonts/)
│       ├── animated-headline.css      # Headline animation keyframes & display rules
│       ├── owl.carousel.min.css       # Slider base styles
│       ├── owl.theme.default.min.css  # Slider default styling
│       ├── main.css                   # Core styling, dark theme colors, animations & buttons
│       └── globals.css                # Next.js global layout resets
│
├── jsconfig.json                      # Path alias configuration (`@/*` -> `./src/*`)
├── next.config.js                     # Next.js configuration
├── package.json                       # Project scripts and dependencies
└── PROJECT_STRUCTURE.md               # Architecture documentation
```

---

## 3. Component Breakdown & Responsibilities

| Component | Path | Function & Highlights |
| :--- | :--- | :--- |
| **`RootLayout`** | [`src/app/layout.jsx`](file:///d:/projects/portfolios/Personal%20portfoilio/src/app/layout.jsx) | Handles SEO metadata, favicon link, and centralized import of all style sheets in strict dependency order. |
| **`Home`** | [`src/app/page.jsx`](file:///d:/projects/portfolios/Personal%20portfoilio/src/app/page.jsx) | Acts as the state conductor (`activeSection`), dynamically rendering visible sections with smooth transitions. |
| **`CustomCursor`** | [`src/components/CustomCursor.jsx`](file:///d:/projects/portfolios/Personal%20portfoilio/src/components/CustomCursor.jsx) | Smooth 2-layer cursor follower (pointer + trailing ring) with hover detection on interactive elements. Disables on touch devices. |
| **`Preloader`** | [`src/components/Preloader.jsx`](file:///d:/projects/portfolios/Personal%20portfoilio/src/components/Preloader.jsx) | Displays the signature glowing line loader and gracefully fades out on load. |
| **`Navigation`** | [`src/components/Navigation.jsx`](file:///d:/projects/portfolios/Personal%20portfoilio/src/components/Navigation.jsx) | Full-screen responsive menu toggle with GSAP diagonal wipe effect (`.overlay-effect`) across page switches. |
| **`ParticlesBackground`** | [`src/components/ParticlesBackground.jsx`](file:///d:/projects/portfolios/Personal%20portfoilio/src/components/ParticlesBackground.jsx) | 60-particle canvas network with dynamic proximity linking, mouse repulse, click push, and resize handling. |
| **`HeroSection`** | [`src/components/HeroSection.jsx`](file:///d:/projects/portfolios/Personal%20portfoilio/src/components/HeroSection.jsx) | Headline rotating roles (`Developer` → `Designer` → `Freelancer`) with clip transition, brand logo, and social links. |
| **`AboutSection`** | [`src/components/AboutSection.jsx`](file:///d:/projects/portfolios/Personal%20portfoilio/src/components/AboutSection.jsx) | Personal intro, metrics table, direct CV download, 6 service cards with hover borders, and testimonials. |
| **`TestimonialSlider`** | [`src/components/TestimonialSlider.jsx`](file:///d:/projects/portfolios/Personal%20portfoilio/src/components/TestimonialSlider.jsx) | Autoplaying review slider with dot indicator controls matching the original Owl Carousel presentation. |
| **`ResumeSection`** | [`src/components/ResumeSection.jsx`](file:///d:/projects/portfolios/Personal%20portfoilio/src/components/ResumeSection.jsx) | Multi-column educational & professional milestone cards plus animated skill progress bars. |
| **`PortfolioSection`** | [`src/components/PortfolioSection.jsx`](file:///d:/projects/portfolios/Personal%20portfoilio/src/components/PortfolioSection.jsx) | Interactive category filtering (`All`, `Web Design`, `Graphic Design`, `Development`) and easing count-up numbers. |
| **`BlogSection`** | [`src/components/BlogSection.jsx`](file:///d:/projects/portfolios/Personal%20portfoilio/src/components/BlogSection.jsx) | Responsive grid of article cards with dates, excerpts, and hover-triggered action buttons. |
| **`ContactSection`** | [`src/components/ContactSection.jsx`](file:///d:/projects/portfolios/Personal%20portfoilio/src/components/ContactSection.jsx) | Validated contact form with interactive success state feedback and contact details (address, phone, email). |

---

## 4. Design, Colors & Typography Retention

- **Background Palette:** Primary `#080808`, Secondary `#121212`
- **Typography:**
  - Headings & Primary Body: `Poppins`, sans-serif (`300`, `400`, `500`, `600`, `700`, `800`)
  - Secondary/Supporting: `Roboto`, sans-serif
- **Iconography:** Boxicons v2.x with local font suite in `public/assets/fonts/` (no external CDN dependency).
- **Interactive Button Accents:** Pure white border with expanding radial background fill on hover (`.button`).

---

## 5. Development & Production Commands

Run the application using standard npm commands:

```bash
# Start local development server
npm run dev

# Compile optimized production build
npm run build

# Start production server
npm start
```
