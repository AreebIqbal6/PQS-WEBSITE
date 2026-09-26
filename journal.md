# PQS Website Project - Learning & Architecture Journal

## 1. Project Goal
The goal is to build a high-performance, polished, and beautifully animated website for **Precision Quality Services (PQS)**, a textile consultancy. The design takes structural inspiration from `usbcertification.com` (as requested) but is elevated to a much higher standard of modern web design, inspired by top-tier agencies and the `skillora` reference.

## 2. Tech Stack Choices & "The Whys"

### **Next.js (App Router)**
- **Why?** We chose Next.js to provide a fast, SEO-friendly React framework. App Router allows us to mix Server Components (for fast page loads) and Client Components (for animations).

### **Tailwind CSS v4**
- **Why?** Tailwind allows for extremely rapid, utility-first styling. We used custom CSS variables (`--color-pqs-navy`, `--color-pqs-gold`) to enforce strict brand consistency without hardcoding hex codes everywhere.

### **Lenis (Smooth Scrolling)**
- **Why?** The user specifically pointed to high-end reference websites. Standard browser scrolling feels jumpy and mechanical. `Lenis` intercepts the scroll wheel and applies a mathematical easing function (inertia), giving the page an "Apple-like", buttery-smooth feel as users navigate through the service cards.

### **Framer Motion**
- **Why?** For entering animations, scroll-triggered reveals, and parallax effects.
- **How?** 
  - *Staggered Fade-Ins*: We use `variants` (`staggerContainer` and `fadeIn`) so that when a section enters the viewport (`whileInView`), its children animate one by one, creating a cascading, polished effect.
  - *Parallax Hero*: We use `useScroll` and `useTransform` to slightly move the background image of the Hero section as the user scrolls down, creating an illusion of depth.
  - *Easing Curves*: We use custom easing `[0.16, 1, 0.3, 1]` heavily inspired by Emil Kowalski's guidelines for physically-based, highly refined spring-like motion.

## 3. UI/UX Decisions
- **Color Palette**: Deep Navy (`#0A1E35`) represents trust, authority, and professionalism (crucial for an auditing/consultancy firm). The Gold (`#C8A951`) acts as a premium accent color, guiding the user's eye to call-to-actions.
- **Typography**: `Montserrat` (Headers) provides a bold, structured geometric look. `Lato` (Body) provides excellent readability for longer paragraphs.
- **Cards**: The service cards use large, overlapping drop-shadows (`shadow-[0_30px_60px_rgba(...)]`) and hover-transforms to feel physical and tactile.

## 4. Current State
- The foundational layout, smooth scrolling, and scroll-linked animations are fully integrated.
- The PQS branding is systematically applied.
