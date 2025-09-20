# Project Plan: The Architect's Blueprint Overhaul

This document outlines the implementation plan for the complete creative and technical overhaul of the portfolio, transitioning from the "Data Stream" concept to the new "Architect's Blueprint" vision.

## Core Concept: "The Architect of Clarity"

The new theme positions the professional as an architect who designs and constructs elegant, high-performance data solutions from chaotic raw materials. The entire site will feel like an interactive, living blueprint—clean, precise, and humming with vibrant energy.

---

## Implementation Status

*   **Phase 1: Foundational Redesign:** `[Not Started]`
*   **Phase 2: Core Component & Animation Overhaul:** `[Not Started]`
*   **Phase 3: Content & Data Visualization Redesign:** `[Not Started]`
*   **Phase 4: Final Polish & Review:** `[Not Started]`

---

## Phase 1: Foundational Redesign (Aesthetics & Environment)

This phase focuses on establishing the core visual language and the new immersive background.

### 🎨 Theme 1: "Blueprint & Neon" Color Palette
- [ ] **Update CSS Variables:** In `index.html`, replace the entire `:root` color variable set with the new palette.
    - `Primary Background:` #0A192F
    - `Blueprint "Ink":` #64FFDA
    - `"Live Data" Energy:` #E02997
    - `Annotations & Icons:` #FFD700
    - `Body Text:` #CCD6F6

### ✨ Theme 2: "The Living Grid" Background Effect
- [ ] **Overhaul `GenerativeBackground.tsx`:** Rearchitect the component to replace the particle system with the new grid-based effects.
    - [ ] **Static Foundation:** Render a persistent, static background grid of thin cyan lines. This can be achieved with a repeating CSS gradient or a canvas pattern for better performance control.
    - [ ] **Interactive Sonar Pulse:** On mouse movement, render a soft, circular "sonar pulse" of magenta energy from the cursor using the canvas. It should expand and fade.
    - [ ] **Scroll-Based Architectural Markings:** As the user scrolls, animate the appearance and disappearance of faint architectural symbols (dimension lines, dashed circles) in the canvas background.

---

## Phase 2: Core Component & Animation Overhaul

This phase re-imagines all major animations and component interactions to align with the "Construct & Deconstruct" theme.

### 🎬 Theme 3: "Construct & Deconstruct" Animations
- [ ] **Section Reveals:** Update the section reveal animation in `App.tsx` and `index.html` from `fade-in-scale-up` to a new "draw" animation. The borders of section containers should animate as if being drawn, followed by the content fading in.
- [ ] **Problem/Solution Cards (`ProblemSolution.tsx`):** Replace the 3D flip animation.
    - [ ] The "Problem" card's elements should animate into fine lines and fade out.
    - [ ] Simultaneously, the "Solution" card's elements should animate into place from lines.
- [ ] **Scrambling Headings (`useTextScramble.ts`):** Modify the `chars` constant in the hook to use a set of architectural and mathematical symbols (`⌀`, `∆`, `∫`, `±`, `Σ`).
- [ ] **"About Me" Timeline (`About.tsx`):** Redesign the timeline component.
    - [ ] Replace the shimmering bar with a clean, static "measurement line."
    - [ ] On hover, the pop-up card should appear as a "callout box" connected to the milestone point by a thin, animated, glowing line.

---

## Phase 3: Content & Data Visualization Redesign

This phase updates the actual content and data visuals to be "holographic" and more impactful.

### 📊 Theme 4: "Holographic & Minimalist" Dashboards
- [ ] **Case Study Charts (`CaseStudies.tsx`):** Rework the `recharts` bar chart styling.
    - [ ] The "Before" bar should be a hollow outline in the magenta accent color.
    - [ ] The "After" bar should be a solid, glowing bar in the same magenta color.
- [ ] **Update Case Study Metrics (`data/content.ts`):** Change the data points to tell a more compelling story.
    - [ ] **Logistics Study:** Metric to "Manual Dispatch Errors / week", numbers from `120` to `5`.
    - [ ] **Manufacturing Study:** Metric to "Production Line Downtime (hours/month)", numbers from `50` to `8`.
- [ ] **Toolkit Dashboard Images (`data/content.ts`):** Replace the placeholder `picsum.photos` URLs with newly designed, minimalist dashboard images that use the new color palette.
- [ ] **Clarity Sandbox (`ClaritySandbox.tsx`):** Update the animation logic.
    - [ ] The initial chaotic elements should be a field of scattered architectural symbols instead of dots.
    - [ ] When a filter is applied, the symbols should first animate to form blueprint-like construction lines before snapping into their final, organized pattern.

---

## Phase 4: Final Polish & Review

This phase ensures consistency, performance, and accessibility across the newly redesigned site.

- [ ] **Consistency Audit:** Review every component to ensure all colors, fonts, and animations adhere strictly to the "Architect's Blueprint" theme.
- [ ] **Performance Testing:** Profile the new canvas background and component animations, especially on lower-powered devices, and optimize where necessary.
- [ ] **Accessibility Review:** Ensure all new hover-based animations have equivalent focus states for keyboard navigation. Check color contrast ratios with the new palette.
