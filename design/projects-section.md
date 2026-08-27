Featured Projects / Case Studies Section Design Blueprint
Create a cohesive and high-impact Projects (or Featured Case Studies) section for the personal portfolio website.
This section showcases the portfolio owner's most significant software engineering, web development, or design projects.

The provided reference image (projects.png) should be used as a layout, hierarchy, typography composition, and interaction reference only.
The main prompt is the source of truth for the global visual identity, including color palette, typography families, background, card style, border treatment, radiuses, and overall aesthetic. Do not introduce a separate visual style based on the reference image.

1. Section Purpose
The Projects section should communicate:

The portfolio owner's ability to build meaningful, impactful solutions.

The technical stack and core competencies applied in real-world scenarios.

A premium, case-study-level presentation of major projects rather than just a simple list of repositories.

2. Overall Structure
Organize the section with a highly typographic header area, followed by a prominently featured card grid or horizontal scrolling layout.

Plaintext
SECTION HEADER AREA
├── Eyebrow Text (e.g., "FEATURED CASE STUDIES")
├── Main Headline (Mixed typography: Standard + Accent/Italic)
└── Call to Action (e.g., "VIEW ALL PROJECTS ➔") aligned right (desktop)

PROJECTS GRID / CAROUSEL
├── Project Card 1
├── Project Card 2
└── Project Card 3
3. Header Composition
The header must replicate the typographic contrast seen in the reference:

Eyebrow: Small, spaced-out uppercase letters tracking the category.

Main Headline: Large, impactful text. It must include a mix of standard font weight and an accent style (e.g., italicized or a secondary font from the main prompt) to emphasize a specific word (like "meaningful" in the reference).

"View All" Link: Positioned opposite the headline on desktop, transitioning to a bottom link or hidden underneath the headline on mobile.

4. Card Layout & Composition
Each project card should be a large, premium "Bento-style" or feature card with a strong emphasis on visual mockups.

Plaintext
┌────────────────────────────────────────┐
│                                        │
│          [PROJECT MOCKUP / IMAGE]      │
│                                        │
├────────────────────────────────────────┤
│ [INDEX / NUMBER, e.g., "01"]           │
│                                        │
│ [PROJECT TITLE]                        │
│ [Short Description / Category]         │
│                                        │
│ [Tag 1]  [Tag 2]  [Tag 3]         [➔]  │
└────────────────────────────────────────┘
Required information per card:

Mockup Image: A high-quality visual of the project taking up the top ~60-70% of the card. It should fade seamlessly into the bottom content area using a gradient overlay or sharp structural divide (depending on the main prompt's design system).

Index Number: A subtle two-digit number (01, 02, etc.) indicating order.

Project Title: Bold, prominent heading (e.g., uppercase).

Subtitle/Category: Brief descriptive text (e.g., "Web Application", "Fullstack Development").

Tech Stack / Role Tags: Small pill-shaped chips indicating the technologies used (e.g., TypeScript, Vue.js, Node.js) or the roles assumed (Frontend, Backend).

Action Button: A circular arrow icon button in the bottom right corner for navigating to the detailed case study or live project.

5. Interaction & Hover States
Interactions should feel fluid and premium.
On card hover:

Image Behavior: The mockup image should slightly scale up (scale: 1.00 → 1.05) with smooth easing (ease: "power3.out", duration: 0.6s).

Action Button: The arrow in the bottom right circular button should translate slightly to the right (x: 0 → 4px) or the button's background should change according to the main prompt's accent color.

Card Background: If using a spotlight or glassmorphism effect (from React Bits/21st.dev), the glow should follow the cursor or intensify.

6. GSAP Animation System
Use GSAP + ScrollTrigger for the entrance animations.

Header Area:

Eyebrow & View All Link: Fade in (opacity: 0 → 1).

Main Headline: Use GSAP SplitText to reveal lines or words individually moving up from a mask (y: 40 → 0, opacity: 0 → 1, stagger: 0.05).

Project Cards:

Cards should enter with a staggered upward motion: y: 60px → 0, opacity: 0 → 1, stagger: 0.15.

Ensure the trigger starts when the section header hits ~80% of the viewport.

7. React Component Architecture
Use modular React components to keep the layout manageable.

Plaintext
components/
└── projects/
    ├── FeaturedProjectsSection.jsx
    ├── ProjectsHeader.jsx
    ├── ProjectGrid.jsx (or ProjectCarousel.jsx)
    └── ProjectCard.jsx
        ├── ProjectMockup.jsx
        └── ProjectDetails.jsx
8. Integration with React Bits & 21st.dev
Utilize community components to enhance the premium feel, ensuring their CSS variables map to the main prompt's design system.

Spotlight Card (React Bits / 21st.dev): Perfect for the project cards to give them a subtle cursor-tracking glow or border highlight.

Carousel / Smooth Scroll: If the projects exceed 3, implement a drag-to-scroll horizontal layout.

Text Split/Reveal: Use animated text components for the main headline if not implementing custom GSAP SplitText.

Chip/Tag Component: For the technology stack indicators at the bottom left of the cards.

9. Data Structure
Store the project data systematically to populate the UI.

JavaScript
const featuredProjects = [
  {
    id: "01",
    title: "PROJECT ALPHA",
    category: "Fullstack Web Application",
    image: "/images/projects/alpha-mockup.png",
    tags: ["TypeScript", "Vue.js", "Tailwind"],
    link: "/case-studies/project-alpha"
  },
  {
    id: "02",
    title: "PROJECT BETA",
    category: "Interactive Dashboard",
    image: "/images/projects/beta-mockup.png",
    tags: ["React", "GSAP", "Node.js"],
    link: "/case-studies/project-beta"
  }
];
10. Responsive Behavior
Desktop: 3-column grid, or a horizontal layout showing 3 cards perfectly balanced. The "View All" link sits in the top right.

Tablet: 2-column grid. The 3rd project drops to the next row, or use a horizontal scrolling container.

Mobile: 1-column layout. Cards stack vertically. The mockup image height should be adjusted to prevent the card from taking up more than 1.5x the viewport height. The "View All" link moves to the bottom of the section.

11. Final Implementation Rule
The reference image dictates the information architecture and composition (Image taking up the top area, Index, Title, Subtitle, Tags, and circular Arrow at the bottom).
The main prompt dictates the aesthetics (Exact spacing units, font families, dark/light mode colors, border radiuses, and shadow intensities).
Ensure all typography mixtures (italic/regular) and hover effects align with the global interactive identity of the portfolio.