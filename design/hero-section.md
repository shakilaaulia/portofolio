# Portfolio Hero Section

Create a premium, highly interactive **personal portfolio homepage hero section** based on the provided reference image (hero-section.png) and the overall design direction defined in the **main prompt**.

The main prompt is the **source of truth for the visual style, color palette, typography, design language, mood, and aesthetic direction**.

This section specification defines the **composition, content, structure, components, animations, interactions, and responsive behavior** of the hero section.

Do not introduce visual styles that conflict with the main prompt.

---

# 1. Overall Visual Direction

Design a **fullscreen desktop-first hero section** with a sophisticated and cohesive portfolio aesthetic.

The hero should include:

* A strong editorial or creative composition
* Oversized typography
* A prominent visual or character positioned near the center
* A subtle decorative background
* Floating navigation
* Personal branding
* Supporting introduction content
* Statistics positioned within the composition
* A horizontal skill / keyword marquee
* Strong visual hierarchy
* Generous whitespace where appropriate

All **colors, typography, shadows, gradients, borders, background treatments, visual effects, and overall styling must follow the main prompt**.

Do not hardcode a specific color palette or visual theme in this section.

The result should feel like a **creative, modern, premium personal portfolio**, while remaining consistent with the global design direction.

---

# 2. Header / Navigation

Create a floating navigation bar positioned near the top of the hero.

Navigation items:

* Home
* About
* Projects
* Contact

The navbar should:

* Use the navigation styling defined by the main prompt
* Have an appropriate rounded or floating treatment if consistent with the main visual direction
* Include subtle visual separation from the background
* Use minimal icons where appropriate
* Clearly indicate the active navigation item
* Include smooth hover and transition states

### React Components

Use or adapt:

* 21st.dev **Navbar Menu**
* 21st.dev **Floating Nav**
* 21st.dev **Animated Navigation Tabs**

Choose the component that best fits the visual system defined by the main prompt.

The navigation should remain visually lightweight and should not dominate the hero.

---

# 3. Personal Branding

Top-left:

Display a minimal personal logo or wordmark consisting of:

* An abstract decorative mark or icon
* Personal / portfolio wordmark
* Typography consistent with the main prompt

Top-right:

Display:

* Personal signature or name treatment
* Short introduction paragraph
* Small CTA button

Example copy:

> "Hi, I'm [YOUR NAME]. I bridge the gap between technology, creativity, and user experience to build meaningful digital experiences."

CTA:

> "GET IN TOUCH →"

The exact **color, typography, border, background, icon treatment, and hover styling must follow the main prompt**.

The CTA should include a subtle arrow movement on hover.

---

# 4. Main Hero Typography

Place an oversized typography composition behind or around the main visual.

Primary headline:

> "CREATIVE"

and

> "DEVELOPER"

Use:

* Extremely large typography
* Strong typographic hierarchy
* Uppercase or appropriate casing based on the main prompt
* Outline, filled, or mixed typography treatment depending on the main visual style
* Appropriate opacity and layering
* Tight or expressive letter spacing where appropriate
* Centered or compositionally balanced positioning

The typography should partially interact with or disappear behind the main visual when appropriate, creating a layered depth effect.

Add a secondary oversized decorative word or phrase behind the main typography if it supports the visual composition.

The exact **font, weight, color, stroke, opacity, and typographic treatment must be inherited from the main prompt**.

The typography should feel like an integral part of the composition rather than a conventional HTML heading.

---

# 5. Main Visual / Character

Place a prominent visual, illustration, avatar, character, 3D object, or other hero artwork near the center of the hero.

The exact visual style should be determined by the **main prompt**.

Possible characteristics may include:

* 3D character
* Illustration
* Abstract object
* Product visualization
* Creative artwork
* Photography
* Interactive visual

Do not force a specific character style, clothing color, rendering style, or artistic direction.

The visual should:

* Act as the primary focal point
* Interact visually with the main typography
* Create depth through layering
* Remain visually consistent with the main prompt
* Support subtle floating or parallax interaction where appropriate

On page load:

```text
opacity: 0 → 1
y: 80px → 0
scale: 0.92 → 1
```

Use a smooth, premium easing curve without making the animation excessive.

---

# 6. Left Statistics

Create a vertical statistics section positioned on the left side of the hero.

Example:

```text
3+
YEARS EXPERIENCE

30+
PROJECTS DONE

100%
CREATIVE DRIVE
```

Typography:

* Clear visual hierarchy
* Large primary values
* Smaller supporting labels
* Appropriate spacing
* Styling consistent with the main prompt

Do not specify a fixed color for the numbers or labels.

Use the color hierarchy defined by the main design system.

Animate the numbers when the hero loads.

### React Bits

Use:

* React Bits **Count Up**

Each statistic should animate from its starting value to its final value.

---

# 7. Background Decorative System

Create a subtle background system that supports the hero composition.

The background may include:

* Perspective grid
* Geometric structure
* Abstract shapes
* Gradient
* Noise
* Grid
* Glow
* Shader
* Architectural lines
* Other decorative elements

The exact background treatment must follow the **main prompt**.

Do not force a futuristic grid, specific colors, neon effects, or other stylistic treatments unless they are compatible with the main prompt.

The background should remain secondary to the primary content.

If cursor interaction is appropriate:

* x → subtle horizontal movement
* y → subtle vertical movement

Keep the movement subtle and smooth.

---

# 8. Bottom Skill Marquee

Add a horizontal skill / keyword ticker at the bottom of the hero.

Example content:

```text
FULL STACK DEVELOPER
✦
WEB DESIGNER
✦
ANIMATION SPECIALIST
✦
UI/UX INNOVATION
✦
CREATIVE CODE
✦
```

Use typography and visual treatment consistent with the main prompt.

The ticker may be:

* Horizontal
* Slightly rotated
* Skewed
* Full-width
* Floating
* Integrated into the section

depending on the overall design direction.

The ticker should continuously move horizontally.

Animation:

```text
xPercent: 0 → -50
duration: 20–30 seconds
ease: linear
repeat: -1
```

The movement should be seamless and infinite.

### React Components

Possible implementations:

* React Bits **Scroll Velocity**
* React Bits **Text Loop**
* 21st.dev **Text Marquee**

Use whichever provides the cleanest implementation and best matches the main prompt.

---

# 9. GSAP Animation System

Use GSAP as the primary animation engine.

Create a master hero entrance timeline.

Animation sequence:

### Step 1 — Background

Background decorative elements:

```text
opacity: 0 → 1
duration: 1.2s
```

### Step 2 — Logo

Logo:

```text
opacity: 0 → 1
x: -30 → 0
```

### Step 3 — Navigation

Navbar:

```text
opacity: 0 → 1
y: -30 → 0
scale: 0.95 → 1
```

### Step 4 — Statistics

Stats:

```text
opacity: 0 → 1
x: -40 → 0
stagger: 0.15
```

### Step 5 — Main Typography

Use GSAP SplitText for the main headline.

Animate words or characters:

```text
opacity: 0 → 1
y: 80 → 0
filter: blur(10px) → blur(0)
stagger: 0.04
```

The exact typographic styling must come from the main prompt.

### Step 6 — Main Visual

Main visual:

```text
opacity: 0 → 1
y: 100 → 0
scale: 0.9 → 1
```

Use:

```text
duration: 1.2s
ease: power3.out
```

### Step 7 — Ticker

Bottom ticker:

```text
y: 80 → 0
opacity: 0 → 1
```

Then start the infinite marquee animation.

---

# 10. Mouse Parallax

Add subtle cursor-based parallax where appropriate.

Elements may include:

### Main Visual

Movement:

```text
±12px
```

### Large Background Typography

Movement:

```text
±5px
```

### Background Decorative Elements

Movement:

```text
±8px
```

### Other Decorative Elements

Movement:

```text
±15px
```

Use GSAP `quickTo()` or another lightweight pointer animation.

The effect should feel smooth and premium rather than exaggerated.

Only apply these effects when they are compatible with the main visual direction.

---

# 11. Hover Interactions

### CTA Button

On hover:

```text
scale: 1.03
```

Arrow moves:

```text
4–6px
```

Apply an appropriate visual feedback based on the main prompt.

### Navigation

The active navigation indicator should smoothly transition between navigation items.

Use a shared layout animation or GSAP.

### Ticker

On hover:

```text
pause marquee
```

On mouse leave:

```text
resume marquee
```

### Main Visual

On cursor movement or hover:

```text
rotationX: ±2°
rotationY: ±3°
```

Use only if appropriate for the visual asset.

---

# 12. React Bits Components to Use

Use React Bits wherever they naturally fit.

Recommended:

### Text Animation

* **Split Text** — Main headline entrance
* **Blur Text** — Supporting text reveal
* **Scroll Reveal** — Scroll-based text appearance
* **Count Up** — Statistics
* **Scroll Float** — Decorative typography
* **Text Loop** — Rotating descriptors where appropriate
* **Scroll Velocity** — Skill ticker / marquee

### Background / Visual Effects

* **Grid Motion** — Background movement where appropriate
* **Shape Grid** — Geometric background where appropriate
* **Noise** — Subtle texture where appropriate
* **Spotlight Card** — Interactive CTA/card where appropriate

Do not use every component automatically.

Select only components that support the section requirements and are compatible with the main prompt.

---

# 13. 21st.dev Components to Consider

Use 21st.dev components as structural references or reusable components.

### Navigation

* **Floating Nav**
* **Navbar Menu**
* **Animated Navigation Tabs**

### Hero

* **Animated Hero Section**
* **Hero Parallax**
* **Hero Highlight**
* **Hero Minimalism**

### Background

* **Animated Gradient Background**
* **Hero section with smooth background Shader**
* **Retro Grid**

### Marquee

* **Text Marquee**

Choose components based on compatibility with the main prompt rather than their default appearance.

Adapt their styling to the global design system.

---

# 14. GSAP Features

Use GSAP for:

* Hero entrance timeline
* SplitText headline animation
* Mouse parallax
* Main visual floating
* Background movement
* Number animation if React Bits Count Up is not used
* Marquee
* Navbar indicator
* CTA micro-interactions

Recommended GSAP plugins / APIs:

* GSAP Timeline
* SplitText
* ScrollTrigger
* quickTo()
* Observer if needed

Do not overuse ScrollTrigger in the first viewport.

The hero should load quickly and remain responsive.

---

# 15. Responsive Behavior

### Desktop

Use the complete hero composition with:

* Main visual
* Oversized typography
* Statistics
* Floating navbar
* Introduction content
* Bottom ticker

### Tablet

* Reduce typography scale
* Reposition supporting content where necessary
* Reduce main visual size
* Simplify decorative elements
* Preserve the main visual hierarchy

### Mobile

Use an adapted composition rather than simply shrinking the desktop layout.

Suggested order:

1. Logo
2. Navbar / menu
3. Introduction
4. Headline
5. Main visual
6. Statistics
7. CTA
8. Skill ticker

Do not simply shrink the desktop layout.

Hide, simplify, or replace decorative effects when necessary for usability and performance.

---

# 16. Performance Requirements

Keep the hero smooth and responsive.

Avoid:

* Excessive WebGL
* Multiple continuously animated filters
* Heavy video backgrounds
* Excessive blur effects
* Large DOM animation counts

Use GPU-friendly properties:

```text
transform
opacity
```

Prefer CSS transforms and GSAP transform properties instead of repeatedly animating layout properties.

Lazy-load large visual assets when necessary.

Respect:

```text
prefers-reduced-motion
```

When reduced motion is enabled:

* Disable unnecessary parallax
* Disable continuous decorative movement
* Reduce entrance animations
* Keep all content fully visible
* Preserve functionality

---

# 17. Final Design Goal

The hero should immediately communicate the portfolio owner's professional identity and creative direction.

It should feel:

* Creative
* Premium
* Personal
* Interactive
* Modern
* Technically sophisticated
* Visually memorable

The final visual appearance must be **derived from the main prompt**, while this specification determines the hero's structure, composition, interactions, and animations.

Use the provided reference image as **composition and interaction inspiration**, not as a source for fixed colors, typography, character styling, or branding.

Do not copy the exact person's identity, logo, text, or artwork from the reference.

Use:

**React + Tailwind CSS + GSAP + React Bits + 21st.dev**

where appropriate.

Prioritize:

**Visual hierarchy → Composition → Animation → Interaction → Micro-interactions**

The hero should feel cohesive with the rest of the website and must inherit the visual language established by the main prompt.
