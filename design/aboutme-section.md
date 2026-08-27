# About Me Section

Create a cohesive and interactive **About Me section** for the personal portfolio website.

This section should combine three related parts into one unified experience:

1. **About Me / Personal Introduction**
2. **Education**
3. **Services & Tools**

The section should feel like a natural continuation of the Hero section and maintain the same visual identity, interaction language, spacing system, typography, and aesthetic defined by the **main prompt**.

The main prompt is the **source of truth for all visual styling**.

This specification defines the **content structure, layout, components, interactions, animations, and responsive behavior**.

Do not introduce a separate visual style for this section.

---

# 1. Section Purpose

The About section should answer three questions quickly:

> **Who am I?**

> **What is my background?**

> **What can I do and what tools do I use?**

The section should communicate the portfolio owner's:

* Personal identity
* Academic background
* Professional interests
* Technical capabilities
* Services / areas of expertise
* Technology and tools
* Approach to problem solving
* Personal value proposition

The section should feel personal rather than like a generic corporate "About Us" section.

---

# 2. Overall Composition

Create one cohesive About Me experience containing three visual areas.

Recommended structure:

```text
ABOUT ME
│
├── Personal Introduction
│   ├── Main description
│   ├── Personal statement
│   ├── Supporting CTA / interaction
│   └── Personal visual
│
├── Education
│   ├── Education heading
│   ├── Institution
│   ├── Degree / Program
│   ├── Academic information
│   └── Supporting description
│
└── Services & Tools
    ├── Services / Capabilities
    ├── Service descriptions
    └── Tools / Technologies
```

The three areas should feel like parts of **one continuous visual story**, not three unrelated cards.

Use visual rhythm, spacing, alignment, and transitions to connect them.

---

# 3. Personal Introduction / About Me

Create the primary About Me area as the introduction to the person behind the portfolio.

## Content

Use a clear heading such as:

> ABOUT ME

Possible personal introduction:

> "I’m a Computer Science student at Universitas Pendidikan Indonesia with a strong interest in technology and digital product development. I enjoy exploring how software, data, and design can work together to create useful and meaningful digital experiences."

Supporting content should communicate:

* Current academic background
* Interest in technology
* Areas of technical focus
* Interest in product development
* Interest in data and intelligent systems
* Ability to work across different parts of the technology stack

The copy should remain concise and readable.

Avoid turning the section into a long biography.

---

# 4. Personal Value Statement

Add a short statement that communicates the person's mindset or working philosophy.

Example:

> "I enjoy turning ideas into practical digital solutions while continuously learning new technologies and exploring better ways to solve problems."

This statement should visually stand out from the main paragraph.

The exact typography and visual treatment must follow the main prompt.

---

# 5. Personal Visual

Include a supporting personal visual in the About section.

Possible visual types:

* Personal portrait
* Stylized portrait
* 3D avatar
* Illustration
* Abstract visual
* Creative profile image

The visual style must be inherited from the main prompt.

Do not force a specific:

* Character style
* Clothing
* Color
* Rendering style
* Illustration style
* Photography style

The visual should complement the content and help establish personal identity.

---

# 6. About Me Layout

Use an asymmetric or editorial composition where appropriate.

Recommended desktop structure:

```text
┌─────────────────────────────────────────────┐
│                                             │
│  ABOUT ME                  PERSONAL VISUAL  │
│                                             │
│  Introduction                               │
│  Description                                │
│                                             │
│  Value Statement                            │
│                                             │
└─────────────────────────────────────────────┘
```

The visual can overlap or extend beyond its container if this fits the global design language.

The composition should create depth without sacrificing readability.

---

# 7. About Me Interaction

Add subtle interaction to the personal visual.

Possible interaction:

* Mouse parallax
* Subtle tilt
* Floating movement
* Cursor-following effect
* Image reveal
* Hover transformation

If using cursor interaction:

```text
Main visual:
movement ±10–15px
```

Keep the movement subtle.

The interaction should enhance personality without becoming distracting.

---

# 8. About Me Animation

Use GSAP as the primary animation system.

On section entrance:

### Heading

```text
opacity: 0 → 1
y: 40px → 0
```

### Description

```text
opacity: 0 → 1
y: 30px → 0
```

### Value Statement

```text
opacity: 0 → 1
y: 20px → 0
```

### Personal Visual

```text
opacity: 0 → 1
scale: 0.95 → 1
```

Use staggered timing to create a natural reading sequence.

Recommended order:

```text
Heading
↓
Description
↓
Value statement
↓
Visual
```

Use `ScrollTrigger` so the animation begins when the section enters the viewport.

---

# 9. Education

Create an Education subsection that presents the academic background in a clear and visually engaging format.

## Heading

> EDUCATION

## Content

Display:

* Institution
* Degree / Study program
* Academic period
* Relevant academic information
* Academic achievement or GPA if applicable
* Short supporting description

Example:

```text
Pendidikan
Universitas Pendidikan Indonesia

Program Studi:
Ilmu Komputer

Academic Period:
[START YEAR – PRESENT]

GPA:
[OPTIONAL]
```

Only display academic information that is actually available.

Do not invent academic achievements.

---

# 10. Education Card

Create a dedicated Education component.

The component may contain:

```text
[Education Icon]

EDUCATION

[University / Institution]

[Degree / Program]

[Academic Period]    [GPA / Achievement]

[Short Description]
```

The card should have a clear visual hierarchy.

The education information should be easy to scan within a few seconds.

The exact card styling must follow the main prompt.

Do not hardcode the styling from the reference image.

---

# 11. Education Supporting Description

Add a short description beneath the main academic information.

Example:

> "Developing a strong foundation in software development, data analysis, artificial intelligence, and modern computing systems through academic projects and practical experience."

Keep the description concise.

It should provide context rather than repeat the degree title.

---

# 12. Education Interaction

Possible interactions:

* Card reveal
* Hover elevation
* Icon animation
* Timeline indicator
* Subtle highlight
* Expandable academic details

Use only interactions that fit the global design language.

Avoid excessive card effects.

---

# 13. Education Animation

When the Education section enters the viewport:

```text
Card:
opacity: 0 → 1
y: 50px → 0
```

Academic details:

```text
opacity: 0 → 1
x: -20px → 0
```

Optional icon:

```text
scale: 0.8 → 1
rotation: subtle
```

Use staggered animation where appropriate.

---

# 14. Services & Capabilities

Create a Services area that communicates the types of work or solutions the portfolio owner can provide.

Use a heading such as:

> SERVICES

or:

> WHAT I CAN DO

The services should represent actual capabilities rather than generic agency services.

Recommended categories:

### Software / Application Development

Build functional digital applications and software solutions using modern development technologies.

### UI / UX & Product Design

Design interfaces and digital experiences with emphasis on usability, clarity, and user needs.

### Data Analysis

Transform data into useful insights through data processing, analysis, visualization, and interpretation.

### AI / Machine Learning

Explore and implement machine learning solutions for data-driven applications and intelligent systems.

### System / Backend Development

Develop backend systems, APIs, databases, and supporting infrastructure for digital applications.

Adjust the final service list to the actual capabilities described in the portfolio content.

---

# 15. Service Layout

Use a structured service grid.

Recommended:

```text
┌─────────────────────────────────────────────────────┐
│ SERVICES                                             │
│                                                     │
│ End-to-end solutions                                │
│ tailored to specific needs                          │
│                                                     │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌─────────┐ │
│ │ Service  │ │ Service  │ │ Service  │ │ Service │ │
│ │    01    │ │    02    │ │    03    │ │   04    │ │
│ └──────────┘ └──────────┘ └──────────┘ └─────────┘ │
│                                                     │
└─────────────────────────────────────────────────────┘
```

Each service should contain:

* Service number or icon
* Service name
* Short description
* Optional interaction

Do not make descriptions too long.

---

# 16. Service Interaction

Service cards may support:

* Hover movement
* Icon animation
* Border / background transition
* Cursor-following highlight
* Expandable description
* Subtle elevation

When hovering a service:

```text
scale: 1.01–1.03
```

or use another subtle interaction appropriate to the main prompt.

Avoid excessive movement.

---

# 17. Tools & Technologies

Integrate a Tools / Technologies area directly into the Services section.

Use a heading such as:

> TOOLS I USE

or:

> TECHNOLOGIES

Organize tools into logical groups where appropriate.

Example:

### Programming

* Python
* Java
* C++
* JavaScript

### Web / Application

* Vue
* Node.js
* Flask
* FastAPI / other relevant frameworks

### Database

* MySQL
* MariaDB
* SQL / NoSQL technologies

### Data / AI

* Python data ecosystem
* Machine Learning tools
* Data visualization tools

### DevOps / Infrastructure

* Docker
* Kubernetes
* Git
* CI/CD tools

Only include tools that are actually relevant to the portfolio owner's experience.

---

# 18. Tools Visualization

Tools should not appear as a plain list.

Use a visually engaging system such as:

* Tool icons
* Logo grid
* Floating icons
* Categorized chips
* Interactive tool cards
* Horizontal marquee
* Icon cloud
* Minimal technology badges

The visual treatment must follow the main prompt.

Do not hardcode a specific tool-card color scheme.

---

# 19. Tools Interaction

Possible interactions:

### Hover

Display:

* Tool name
* Category
* Short description if useful

### Cursor

Allow subtle cursor-following highlight if compatible with the design.

### Marquee

Tools may move horizontally in a continuous loop if appropriate.

If using marquee:

```text
duration: 20–30 seconds
ease: linear
repeat: -1
```

Pause on hover if appropriate.

---

# 20. React Bits Components

Use React Bits only where they naturally fit.

Recommended possibilities:

### About

* Blur Text
* Split Text
* Scroll Reveal
* Scroll Float

### Education

* Animated List
* Scroll Reveal
* Count Up if academic statistics are available

### Services

* Spotlight Card
* Tilted Card
* Animated List

### Tools

* Infinite Scroll
* Scroll Velocity
* Logo Loop
* Marquee-style components

Do not use all components automatically.

Select the components that provide the best implementation for the required behavior.

---

# 21. 21st.dev Components

Use 21st.dev components as reusable building blocks or implementation references where appropriate.

Possible categories:

### About

* Profile Card
* Bento-style Card
* Interactive Card

### Education

* Timeline
* Card
* Feature Card

### Services

* Bento Grid
* Feature Grid
* Spotlight Card
* Animated Card

### Tools

* Logo Cloud
* Logo Carousel
* Marquee
* Technology Grid

Adapt all components to the **global visual system defined by the main prompt**.

Do not allow their default styling to override the website's design language.

---

# 22. GSAP Animation System

Use GSAP to orchestrate the section animations.

Recommended sequence:

```text
About heading
↓
About description
↓
Personal visual
↓
Education
↓
Services
↓
Tools
```

Use:

* GSAP Timeline
* ScrollTrigger
* SplitText
* stagger
* quickTo()
* appropriate easing

Avoid animating every element independently.

Create a coherent visual rhythm across the entire section.

---

# 23. Section Transition

The transition from Hero → About should feel intentional.

When the Hero ends and About begins:

* Maintain consistent spacing
* Use related visual elements
* Avoid an abrupt style change
* Allow the About section to visually "continue" the Hero

The About section should feel like:

> **Hero: This is who I am**

followed by:

> **About: Here is my story, background, and what I can do**

---

# 24. Responsive Behavior

## Desktop

Use a rich editorial composition.

Recommended:

```text
About:
Two-column composition

Education:
Wide horizontal card

Services:
Multi-column grid

Tools:
Integrated technology showcase
```

## Tablet

* Reduce visual scale
* Adjust column proportions
* Allow services to wrap
* Reduce decorative animation
* Preserve content hierarchy

## Mobile

Recompose the section vertically:

```text
ABOUT ME
↓
Personal Visual
↓
Introduction
↓
Value Statement
↓
EDUCATION
↓
Education Card
↓
SERVICES
↓
Service Cards
↓
TOOLS
↓
Technology List / Logo Grid
```

Do not simply shrink the desktop layout.

---

# 25. Performance & Accessibility

Keep the section smooth and lightweight.

Avoid:

* Excessive WebGL
* Too many continuously animated elements
* Heavy visual effects
* Large numbers of simultaneous DOM animations
* Unnecessary animation libraries

Prefer:

* CSS transforms
* opacity
* GPU-friendly animations
* lazy-loaded images
* optimized assets
* reusable components

Respect:

```text
prefers-reduced-motion
```

When reduced motion is enabled:

* Disable unnecessary parallax
* Reduce entrance animations
* Stop decorative continuous movement
* Keep all information accessible
* Preserve functionality

All content must remain readable and accessible without animation.

---

# 26. Content & Data Rules

Use actual portfolio information where available.

Do not invent:

* GPA
* Awards
* Years of experience
* Client numbers
* Project numbers
* Certifications
* Professional claims
* Tools that have not been used

Use placeholders when information is unavailable:

```text
[UNIVERSITY]
[DEGREE]
[ACADEMIC PERIOD]
[GPA]
[SERVICE]
[TOOL]
```

Keep content easy to edit by storing repeated data in structured JavaScript / JSON data objects where appropriate.

---

# 27. Final Design Goal

The final About section should feel like one cohesive visual narrative.

It should communicate:

### ABOUT ME

**Who I am**

↓

### EDUCATION

**Where I come from academically**

↓

### SERVICES

**What I can do**

↓

### TOOLS

**What I use to do it**

The section should feel:

* Personal
* Credible
* Creative
* Technically capable
* Modern
* Interactive
* Consistent
* Visually memorable

Most importantly:

**Do not copy the visual styling of the provided reference images literally.**

Use the references only to understand:

* Information hierarchy
* Card composition
* Content grouping
* Visual storytelling
* Spatial relationships
* Interaction ideas

All colors, typography, borders, shadows, backgrounds, illustrations, icons, and other visual treatments must be inherited from the **main prompt**.

The About section should look as though it was designed as part of the **same website and design system as the Hero section**, not as a separate template.

---

# Implementation Priority

Follow this order:

1. Personal Introduction
2. Personal Visual
3. Education
4. Services
5. Tools / Technologies
6. Responsive Layout
7. GSAP Animations
8. Interactions
9. Performance Optimization
10. Final visual consistency review

Prioritize:

**Content hierarchy → Composition → Consistency → Animation → Interaction → Micro-interactions**
