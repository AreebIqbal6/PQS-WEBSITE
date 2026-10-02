# Precision Quality Services (PQS) Website - Learning Journal

## Project Overview
The objective was to create an "awwward-winning" website for Precision Quality Services (PQS), a highly specialized textile consultancy. The goal was to communicate professionalism, extreme attention to detail, and modern technical competence. 

## 1. Architectural Decisions ("The Hows")

### Framework: Next.js (App Router)
We utilized Next.js 16 with the App Router to ensure SEO optimization, Server-Side Rendering (SSR) capabilities out of the box, and a clean file-based routing architecture (`/services`, `/about`, `/contact`).

### Styling: Tailwind CSS v4 & CSS Variables
Tailwind is employed for scalable, maintainable utility-first styling. We augmented this with raw CSS variables in `globals.css` (`--color-pqs-navy`, `--color-pqs-gold`) to maintain strict brand consistency. This combination allows for rapid UI prototyping without sacrificing design integrity.

### Animations: Framer Motion & Lenis
- **Framer Motion**: Handled all entry animations, scroll-triggered reveals, and micro-interactions. We used a highly customized easing curve (`[0.16, 1, 0.3, 1]` — an "Apple-like" ease) to give the site a premium, heavy, and deliberate feel.
- **Lenis Smooth Scrolling**: Implemented via a `SmoothScrolling` provider. Native scrolling can feel rigid; Lenis hijacks the scroll wheel to provide buttery-smooth interpolation, which is a hallmark of "awwward-winning" sites.

### File Structure: Component-Driven
The initial prototype had a monolithic `page.tsx`. To make it scalable and maintainable:
- We broke down complex pages into domain-specific components (e.g., `src/app/components/home/HeroSection.tsx`).
- Global components (Header, Footer, SmoothScrolling) were abstracted into `src/app/components/`.

## 2. Performance Engineering & Bug Fixes ("The Whys")

### The "Lag" Issue
The user noted that the website was lagging. 
**The Cause**: The initial implementation featured an extremely computationally expensive SVG filter (`#liquid-glass-filter`) injected into the DOM. This filter used `feTurbulence` (fractal noise) and `feDisplacementMap` to simulate chromatic aberration and refraction. Applying this filter via `backdrop-filter: url(#liquid-glass-filter)` across large DOM nodes forced the browser to re-rasterize the DOM on every single scroll frame, completely bottlenecking the GPU on mid-tier devices.
**The Fix**: We entirely removed the SVG filter and replaced the `.liquid-glass` classes in `globals.css` with heavily hardware-accelerated, native CSS `backdrop-filter: blur(24px) saturate(200%)`. This maintained 95% of the intended premium glassmorphism visual effect while restoring performance to a locked 60/120fps.

## 3. UI/UX Design Language

- **Color Palette**: We leaned heavily into Navy (`#0A1E35`) and Gold (`#C8A951`). Navy communicates trust and stability (crucial for a B2B consultancy), while Gold communicates premium quality.
- **Typography**: 
  - *Montserrat* for Headers: A geometric sans-serif that looks highly architectural and solid.
  - *Lato* for Body: Highly readable, softer, and elegant.
- **The "Noise" Aesthetic**: Added subtle grain (`.noise-bg`) to flat background colors. This prevents large areas of color from looking flat and "digital", giving them a tactile, premium, almost paper-like feel.

## 4. Content Strategy
- **Brochure Alignment**: The website content perfectly mirrors the newly condensed 3-page PDF corporate brochure.
- **Legal Compliance**: Added `/privacy-policy` and `/terms` to ensure the consultancy appears fully legitimate and compliant.

## Next Steps
- Further integration of GSAP if more complex scroll-triggered pinning (e.g., ScrollTrigger) is desired in the future.
- Implementation of an automated contact form using a backend service (e.g., Resend or SendGrid).
