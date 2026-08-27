Footer Section Design Blueprint
Create a clean, structured, and informative Footer section for the personal portfolio website.
This section acts as the final navigational safety net and the hub for professional social links.

The provided reference image (contact.png) should be used as a layout and hierarchy reference only. Do not copy the specific styling, colors, or fonts unless dictated by the main prompt.

1. Section Purpose
The Footer should provide:

Brand reinforcement (Logo and short tagline).

Secondary navigation to all major pages/sections.

Easy access to professional networks (LinkedIn, GitHub, etc.).

Required legal or copyright text.

2. Overall Structure
Organize the footer into a two-tier layout: a main content row and a bottom legal/copyright row.

Plaintext
────────────────────────────────────────────────────────────────────────
[LOGO] & [BRAND NAME]        EXPLORE                LET'S CONNECT
[Short tagline/description]  Home     About         [IN] [GH] [X] [IG]
                             Projects Services      
                             Resume   Contact       [Decorative Graphic]

────────────────────────────────────────────────────────────────────────
© 2026 [Your Name]. All rights reserved.            Privacy Policy  Terms
3. Layout Composition
Top Tier (Main Content):

Brand Column: Portfolio owner's logo or stylized name, followed by a brief, 1-2 sentence mission statement or tagline.

Navigation Column(s): A clean grid or list of internal site links (e.g., Home, About, Work, Services).

Social Column: Circular or minimalist icons linking to active professional networks (LinkedIn, GitHub, Behance/Dribbble, etc.).

(Optional) Decorative Mark: A subtle geometric shape or monogram on the far right to balance the visual weight.

Bottom Tier (Legal):

A subtle horizontal divider (1px solid opacity-10).

Left: Copyright year and name.

Right: Links to basic policies (if applicable) or a simple "Built with React & GSAP" credit.

4. Interaction & Hover States
Navigation Links: Underline reveal (animating from left to right) or text color shift to the main accent color.

Social Icons:

Slight upward movement (y: -3px).

Background or icon color changes to the specific brand color of the platform (or sticks to the global accent color for uniformity).

Scale increase (scale: 1.1).

5. GSAP Animation System
Since the footer is at the absolute bottom, animations should be quick and subtle so the user isn't waiting for navigation links to appear.

Footer Container: opacity: 0 → 1 when 10% of the footer enters the viewport.

Content Columns: Staggered fade up (y: 20px → 0, opacity: 0 → 1, stagger: 0.1).

6. React Component Architecture
Plaintext
components/
└── footer/
    ├── Footer.jsx
    ├── FooterBrand.jsx
    ├── FooterNav.jsx
    └── SocialLinks.jsx
7. Responsive Behavior
Desktop: 4-column flex layout (Brand, Nav 1, Nav 2, Socials).

Tablet: 2x2 grid. Brand and Socials on top row, Navigation links on the bottom row.

Mobile: 1-column vertically stacked layout. Everything centered.

Brand Info (Center aligned)

Social Links (Row, Center aligned)

Navigation (2-column grid, Center aligned)

Divider

Copyright (Center aligned)