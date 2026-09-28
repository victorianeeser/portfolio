---
title: "IMPACT: Smart Shin Guards"
summary: "An interactive digital product for the 2026 FIFA World Cup that connects physical soccer experiences with digital interactions to enhance player performance."
role: "UX/UI designer"
timeline: "Spring 2026"
tools: ["Figma", "ChatGPT"]
team: "Solo project"
tags: ["UI", "UX", "Interactive"]
order: 1
featured: true
links:
  - label: "View prototype"
    url: "https://tinyurl.com/3cm92jhp"
  - label: "Watch video"
    url: "https://vimeo.com/1183551036"
cover:
  label: "IMPACT: cover"
  src: "../../assets/projects/impact/product-render.jpg"
  alt: "The IMPACT smart shin guard, black with green accents, resting on grass"
hero:
  label: "IMPACT: hero"
  src: "../../assets/projects/impact/hero-banner.jpg"
  alt: "IMPACT, Measure Every Moment: brand banner with the shin guard over an aerial view of a soccer field"
  ratio: auto
gallery:
  - label: "IMPACT in motion"
    video: "https://vimeo.com/1183551036"
    alt: "IMPACT concept video"
  - label: "Product render"
    src: "../../assets/projects/impact/product-render.jpg"
    alt: "The IMPACT shin guard resting on a soccer pitch"
    ratio: auto
---

## Overview

IMPACT is a smart shin guard and companion app for the 2026 FIFA World Cup. Sensors in the shin guard measure impact, workload and recovery right at the leg, and the app turns that data into insights players can use on practice and match day.

I designed IMPACT as a solo project for IXD 412, Interaction Design 3, at the University of Kansas, from field research and competitive analysis through branding, a design system and a high-fidelity prototype.

![Three core features, each paired with an app card over match photography: Impact Tracking with an overall performance score, Injury Risk Alerts, and Recovery Integration with a recovery score](../../assets/projects/impact/features.jpg)

## Problem

Performance tracking today relies on satellite GPS units worn on the back of the jersey or in a chest strap. They only work outdoors, capture movement rather than technical performance, and players find chest straps restrictive.

The shin guards players already wear don't help either: they absorb sweat and slip, need readjusting during games, and offer no performance feedback.

## Research

### The shift in performance tracking

The future of performance tracking is leg-based IMU (inertial measurement unit) precision. Four insights shaped the product:

- **Leg placement = better data.** Sensors on the shin capture technical performance, not just movement.
- **Indoor advantage.** GPS only works outside; IMU works anywhere, and reliable tracking builds trust.
- **Comfort = adoption.** Performance technology must feel invisible. If athletes feel it, they won't wear it.
- **Motivation vs. mastery.** Gamification attracts users, but actionable insights drive improvement.

![Research board: The Shift in Performance Tracking, with the four insights: leg placement, indoor advantage, comfort equals adoption, and motivation versus mastery](../../assets/projects/impact/research-insights.jpg)

### Field research

I observed 35 athletes at a KU Women's Soccer practice focused on footwork, passing, shooting and using both legs. Shin guards were rarely adjusted in practice, but more often in high-intensity games. I also ran a user study where architecture and design students played warmups, drills and a 7v7 game, to understand player movement, decision-making and physical demands.

The key observation: players rely heavily on their dominant foot.

> "I want to track my left vs. right foot usage and other metrics, without needing to wear another device, such as a VX bra." Faith Johnston, freshman KU soccer player

Players value lightweight, low-profile gear, equipment that doesn't distract during play, performance data that supports improvement, and recovery insights.

![Field research board: observations from KU Women's Soccer practice and a 7v7 user study, with photos of the teams and what players value in their gear](../../assets/projects/impact/field-research.jpg)

### Competitive analysis

I compared one direct and two indirect competitors:

- **Flick** (direct) offers position personalization and a built-in shin guard chip, but its stats are overloaded and the design overwhelming.
- **Playmaker** (indirect) has thoughtful onboarding and technical foot metrics, but locks features behind a purchase.
- **Adidas** shin guards (indirect) are lightweight and trusted, but offer no performance data or feedback loop.

The takeaways: clarity beats complexity, comfort is critical, and the technology must not affect fit.

![Competitive analysis board comparing strengths, weaknesses and takeaways for Flick, Playmaker and Adidas](../../assets/projects/impact/competitive.jpg)

### Persona

Jake Martinez is a 26-year-old professional midfielder for Los Angeles FC. He wants to optimize performance and recovery, prevent injury to extend his career, and track workload imbalance between his left and right legs, without wearing a restrictive chest strap.

> "I wish I could monitor impact and stress on my legs after practices or games, so that I can extend my career."

![Persona board for Jake Martinez: player profile, performance priorities, on-field challenges and two quotes](../../assets/projects/impact/persona.jpg)

## Process

### User flows

I mapped the full journey from sign-up and onboarding through finding a team, pairing the shin guards and granting permissions, including error states such as a device not being found.

![User flow of the onboarding and setup screens: log in, onboarding, create account, find team, connect shin guards, permissions and setup complete](../../assets/projects/impact/flow-onboarding.jpg)

### A/B testing

I compared two versions of four key components with 12 participants to see which layout helped athletes understand their metrics faster. Version A won every test: 75% preferred it for fatigue alerts, 66% for the recovery score, 83% for the areas-for-improvement chart, and 58% for the overall performance card.

![A/B testing results for four interface components, showing version A preferred by 75%, 66%, 83% and 58% of users](../../assets/projects/impact/ab-testing.jpg)

### Real-user feedback

I tested the prototype with 3 users. They found onboarding easy to navigate and the icons consistent, and they always knew where they were in the app. They suggested condensing the colors, simplifying the animations and making primary and secondary buttons easier to tell apart.

![User testing photo of a participant holding the IMPACT prototype, with feedback on what users valued and what could improve](../../assets/projects/impact/user-feedback.jpg)

## Final design

The core app brings everything together: a dashboard to start sessions, insights with a position heat map and 30-day trends, recovery tracking, and a profile with achievements. Error states cover sensors that stop responding, low battery and incomplete data.

![Core app screens: dashboard, insights, recovery, profile, settings, live session and error states](../../assets/projects/impact/flow-core-app.jpg)

Live sessions track distance, speed, ball touches and left vs. right foot usage in real time.

![A player checking a live session on their phone at the edge of a soccer field, with live stats overlaid](../../assets/projects/impact/live-sessions.jpg)

![The shin guard being worn, with an app card showing a position heat map of where the player spent the match](../../assets/projects/impact/product-heatmap.jpg)

### Design system

The brand pairs a dark interface with electric blue (#1A4AFF) for primary actions, green (#00E786) for secondary actions and pink (#FF10AA) for errors and risk. Type is set in Instrument Sans, with Inter for data labels and captions.

![Design system: color palette, typography, buttons, icon library, data visualizations and logo variations](../../assets/projects/impact/design-system.jpg)

## Outcome & impact

[Placeholder: results. Grades, feedback from critique, awards, or what you'd measure if IMPACT launched.]

## Reflection

[Placeholder: what you learned and what you'd do differently next time.]
