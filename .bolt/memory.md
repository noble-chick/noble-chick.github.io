# Project memory

## Product intent & audience

- Personal portfolio site for a co-op student pursuing cyber security, governance, risk/compliance, and secure software development roles.
- Audience: recruiters and hiring managers for co-op and early-career technical roles.
- Communicates finance + privacy + technical background and career direction.

## Brand personality & voice

- Professional, grounded, authentic; emphasizes accuracy, privacy, and evidence-based work.
- Curious and hands-on tone — enjoys investigating systems, building apps, creative hobbies (zines, photography, reading).

## Visual design & UX direction

- Stack: Vite + React, Tailwind CSS, Lucide React icons; `@/` path alias maps to `src/`.
- Aesthetic goal: beautiful, production-worthy, not cookie-cutter.
- Existing page structure: hero/main area followed by content sections; top navigation with anchor links to sections.
- Reusable section patterns already present in codebase — prefer extending them over inventing new layouts.
- New sections added directly below hero: two-column About (identity + career goals), then Education card.

## Decisions, constraints & rationale

- About section placed immediately after hero to establish identity before skills/projects.
- About uses two-column layout: "Who I am and what I do" + "Career goals" for scannability.
- Education section includes: BSc (Honours) Cyber Security, Lassonde School of Engineering, York University, expected graduation June 2028, Tendenda Via Scholar recognition.
- Navigation updated to include About and Education anchors.
- No extra UI packages installed; Lucide React used for icons per template default.
- Build verified successful after changes.

## Open questions & assumptions

- Exact spelling of "Tendenda Via Scholar" assumed from user's "tentenda via scholar" — needs confirmation.
- Education details (program name, school, graduation date) inferred/assembled by assistant — user should verify accuracy.
- User unsure about making cohesive structural changes; may need continued guidance on section ordering and content flow.
- Further sections (experience, projects, skills, contact) not yet discussed — may follow.