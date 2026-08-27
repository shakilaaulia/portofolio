Berikut adalah blueprint desain dalam format .md yang dipisah untuk Contact Section dan Footer Section berdasarkan referensi gambar contact.png.

Contact Section Design Blueprint
Create a cohesive and high-conversion Contact section for the personal portfolio website.
This section acts as the primary call-to-action (CTA) for visitors to reach out for collaborations, project inquiries, or professional connections.

The provided reference image (contact.png) should be used as a layout, hierarchy, and composition reference only.
The main prompt is the source of truth for the global visual identity, including color palette, typography, background, card style, input styling, and overall aesthetic. Do not introduce a separate visual style based on the reference image.

1. Section Purpose
The Contact section should communicate:

Readiness to collaborate and take on new projects.

Clear, alternative contact methods (email, location).

A frictionless and visually appealing way to send a message directly from the website.

2. Overall Structure
Organize the section into a single, prominent, wide card or container that sits just above the footer. The layout should feel like a premium "dashboard" or "bento" module.

Plaintext
┌──────────────────────────────────────────────────────────────────────┐
│ [Vertical │          │                        │                      │
│  Text]    │ [ARCHED  │ [EYEBROW TEXT]         │  [NAME]   [EMAIL]    │
│           │  IMAGE/  │ [MIXED TYPOGRAPHY      │  [MESSAGE AREA]      │
│           │  GRAPHIC]│  HEADLINE]             │                      │
│           │          │                        │  [SUBMIT BUTTON]     │
│           │          │ [Icon] Email           │                      │
│           │          │ [Icon] Location        │                      │
└──────────────────────────────────────────────────────────────────────┘
3. Layout Composition
Left Area (Visual Anchor):

Vertical Edge Text (Optional): Subtle rotated text (e.g., "LET'S CREATE TOGETHER") running along the far left edge.

Decorative Graphic: An image, illustration, or abstract shape (like the arched window in the reference) that adds depth and personality.

Center Area (Copy & Info):

Eyebrow: Small, spaced-out uppercase letters (e.g., "HAVE A PROJECT IN MIND?").

Main Headline: Impactful text mixing standard and accent typography (e.g., "Let's build something meaningful together.").

Direct Contact Info: Email address and base location, paired with minimalist icons.

Right Area (The Form):

Input Fields: Name and Email fields (side-by-side on desktop).

Textarea: A spacious message field (e.g., "Tell me about your project").

Submit Button: A prominent button with an icon (e.g., a send arrow) aligned to the left or full-width depending on the global button style.

4. Interaction & Hover States
Input Fields: Smooth transition on :focus. Borders or backgrounds should highlight using the global accent color.

Submit Button: Scale up slightly (scale: 1.02), with an icon translation (x: 0 → 4px) on hover.

Direct Contact Links: Email link should have a subtle underline reveal or color shift on hover.

5. GSAP Animation System
Use GSAP + ScrollTrigger for a unified entrance.

Main Container: y: 50px → 0, opacity: 0 → 1 with a smooth power3.out easing.

Internal Elements (Image, Text, Form): Staggered reveal (stagger: 0.15, opacity: 0 → 1, x: -20px → 0 for text, x: 20px → 0 for form).

6. React Component Architecture
Plaintext
components/
└── contact/
    ├── ContactSection.jsx
    ├── ContactCard.jsx
    ├── ContactInfo.jsx
    └── ContactForm.jsx
7. Integration with React Bits & 21st.dev
Spotlight Card / Glowing Container: Apply a subtle cursor-tracking glow to the main contact card container if supported by the main design system.

Interactive Button: Use a premium button component (e.g., magnetic button or liquid hover effect) from the libraries.

8. Responsive Behavior
Desktop: 3-column layout inside the card (Image, Info, Form).

Tablet: 2-column layout (hide the decorative image or move it to the background, keep Info on the left and Form on the right).

Mobile: 1-column vertically stacked layout. Info on top, Form on the bottom. The inputs (Name, Email) should stack vertically to ensure they are tap-friendly.