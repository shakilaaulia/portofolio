# Awards & Certifications Section Design Blueprint

Create a cohesive and interactive Awards & Certifications section for the personal portfolio website.
This section highlights the portfolio owner's achievements, competitive programming/academic success, and continuous learning credentials.

The provided reference image (awards-certifications.png) should be used as a layout, hierarchy, and composition reference only.
The main prompt is the source of truth for the global visual identity, including color palette, typography, background, card style, input styling, and overall aesthetic. Do not introduce a separate visual style based on the reference image.

### 1. Section Purpose

The Awards & Certifications section should communicate:

* Recognition of the portfolio owner's skills and dedication.
* Academic and non-academic achievements (e.g., competitions, scholarships).
* Continuous learning and professional verification (certifications).
The section should feel credible, proud, and visually engaging without overwhelming the user.

### 2. Overall Structure

Organize the section using a unified visual grid or a horizontal carousel, headed by a distinct section title:

AWARDS & CERTIFICATIONS
│
└── CREDENTIAL GRID / CAROUSEL
├── Featured Award / Certificate Card
├── Featured Award / Certificate Card
├── Featured Award / Certificate Card
└── Featured Award / Certificate Card

Use a consistent spacing rhythm, typography hierarchy, and animation behavior that matches the rest of the portfolio.

### 3. Card Layout & Composition

Each card should follow a "Media-Top, Details-Bottom" layout as seen in the reference, ensuring the photographic or documentary evidence of the achievement is front and center.

```text
┌─────────────────────────────┐
│                             │
│        [COVER IMAGE]        │
│                             │
├─────────────────────────────┤
│ [DATE / PERIOD]             │
│                             │
│ [ACHIEVEMENT TITLE]         │
│                             │
│ [ISSUER / EVENT / ORG]      │
└─────────────────────────────┘

```

**Required information per card:**

* **Cover Image:** A photograph of the event/award ceremony, or a clean thumbnail of the certificate.
* **Date/Period:** The month and year, or duration (e.g., "August 2024 - Present"). This should use an accent typographic treatment.
* **Achievement Title:** Bold, prominent heading (e.g., "3rd Winner at Data Analysis Competition").
* **Issuer / Event:** Subdued subtitle indicating where it was achieved or who issued it (e.g., "COSION (Computer Science Competition)").
* *(Optional)* **Action Area:** An external link icon appearing on hover to view the credential/certificate PDF.

### 4. Interaction & Hover States

Keep interactions engaging but refined, deferring to the global design system.
On hover:

* **Image Behavior:** Subtle zoom (e.g., `scale: 1.00 → 1.04`) with smooth easing.
* **Card Elevation:** Subtle shadow increase or slight upward translation (e.g., `y: -4px`).
* **Action Reveal:** If there is an external link to verify the certificate, fade in a "Verify" or "External Link" icon.

### 5. GSAP Animation System

Use GSAP + ScrollTrigger for the entrance animations.
When the section enters the viewport:

**Section Header:**

* `opacity: 0 → 1`
* `x: -30px → 0` (or matching the global header entrance)
* Decorative line: `width: 0 → 100%`

**Cards (Grid or Carousel items):**

* `opacity: 0 → 1`
* `y: 40px → 0`
* `stagger: 0.15`
Use a smooth easing curve (e.g., `power3.out`). Avoid creating independent timelines for every single card; use a batch or staggered approach.

### 6. React Component Architecture

Use reusable React components for maintainability.

```text
components/
└── awards/
    ├── AwardsSection.jsx
    ├── CredentialGrid.jsx (or CredentialCarousel.jsx)
    └── CredentialCard.jsx

```

**Hierarchy:**

* `AwardsSection`: Manages layout context and ScrollTrigger boundaries.
* `SectionHeader`: Reused from the global design system.
* `CredentialGrid`: Maps the data to the cards.
* `CredentialCard`: The individual interactive UI element.

### 7. Integration with React Bits & 21st.dev

Use components from these libraries only when they naturally support the required interaction. Do not allow their default styling to override the main prompt's design system.

**Potential UI Components:**

* **Carousel / Horizontal Scroll:** If utilizing a scrollable row instead of a grid, implement a smooth drag-to-scroll component.
* **Tilted Card / 3D Hover:** From `reactbits` or `21st.dev` for a subtle dynamic depth effect on mousemove (keep the tilt subtle, e.g., max 5-10 degrees).
* **Spotlight Card:** To create a soft glow effect that follows the cursor over the card's border or background.
* **Animated List:** For the staggered entrance if not writing custom GSAP.

### 8. Data Structure

Store information as structured data.

```javascript
const awardsAndCertifications = [
  {
    id: 1,
    title: "3rd Winner at Data Analysis Competition",
    issuer: "IFest Unpad 2024",
    date: "August 2024",
    image: "/images/awards/ifest-2024.jpg",
    link: "https://link-to-credential.com",
    category: "Award"
  },
  {
    id: 2,
    title: "Scholarship Awardee",
    issuer: "Yayasan Karya Salemba Empat",
    date: "August 2024 - Present",
    image: "/images/awards/kse-scholarship.jpg",
    link: null,
    category: "Award"
  }
];

```

### 9. Responsive Behavior

* **Desktop:** 3-column grid, or a horizontal carousel showing 2.5 to 3 cards to indicate scrollability.
* **Tablet:** 2-column grid, or a horizontal carousel showing 1.5 to 2 cards.
* **Mobile:** 1-column layout (stacked vertical grid) or a snap-scrolling horizontal list showing 1 card at a time with peek-a-boo edges. Ensure touch interactions (swipe) work smoothly if using a carousel.

### 10. Content & Accessibility Rules

* Use actual portfolio data. Do not invent achievements.
* Images must have descriptive `alt` text (e.g., `alt="Receiving 3rd place award at IFest Unpad 2024"`).
* Ensure sufficient color contrast for the date, title, and issuer text against the card background.
* Respect `prefers-reduced-motion`: disable card tilt effects and simplify GSAP entrances to opacity fades if enabled.

### 11. Final Implementation Rule

The reference image dictates the architecture: Image on top, Date accent, Bold Title, Subdued Issuer.
The main prompt dictates the aesthetics: Card radiuses, typography families, exact color hexes, and border styles.
Ensure the components built with `reactbits` and `21st.dev` are stripped of opinionated default colors to inherit seamlessly from the master portfolio theme.