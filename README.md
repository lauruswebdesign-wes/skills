# Skills Explorer Dashboard

- Live Demo: https://skills-two.vercel.app/

## Overview

The project originated from an initiative proposed by my former department chair, who wanted our department to better understand emerging workforce and technology skills captured through the Lightcast labor market data platform. The goal was to help ensure our curriculum remained aligned with current global industry trends and evolving employer demands across disciplines such as Web Design, Animation, Video Production, Information Systems, Business, and Medical pathways.

After our department obtained educational API access through Lightcast, I volunteered to design and build a frontend application around the API while continuing to teach my regular course load. The project became both a practical educational technology tool for curriculum exploration and a significant personal learning experience in modern frontend engineering, API integration, scalable search-driven UI systems, and React performance optimization.
---

## Goals of the Project

This project was created to:

- Explore real-world API integration using the Lightcast workforce skills API
- Help our department better understand current workforce and technology skill trends
- Build scalable search-driven UI systems for educational and curriculum exploration
- Create reusable department-based routing structures
- Improve frontend performance during live search interactions
- Practice advanced React optimization patterns such as `useCallback`, debouncing, and `useMemo`
- Explore UI/UX challenges involving large API result sets, including pagination vs. “load more” interaction patterns
- Build a practical educational technology tool for department chairs and instructors
- Prototype workforce-aligned educational dashboards for future LMS integration

---

## Key Features

- Department-based routing with React Router
- Dynamic workforce skills search
- Live API-driven skill population
- Search refinement UI
- Loading and error state handling
- Responsive card-based grid layout
- External resource linking for skill exploration
- Tailwind-powered responsive design
- Reusable page and component architecture

---

## Technical Concepts Explored

This project became a major learning experience in advanced frontend engineering concepts, particularly around search performance and responsive user interaction patterns.

Key React concepts explored include:

- `useCallback`
- Debouncing search requests
- `useMemo`
- Async API fetching
- Dynamic route parameters
- Conditional rendering
- State-driven UI architecture
- Reusable component design

The search system required careful optimization because broad queries could generate dozens of dynamically rendered skill cards simultaneously, degrading the UX. Handling search-query performance efficiently was important so users could search fluidly without excessive API calls, laggy UI updates, or unnecessary component re-renders. 

---

## Tech Stack

| Tool | Purpose |
|------|------|
| **React** | Frontend UI framework |
| **Vite** | Development/build tooling |
| **React Router** | Dynamic routing |
| **Tailwind CSS** | Responsive UI styling |
| **Lightcast API** | Workforce skills data |
| **React Hooks** | State and lifecycle management |

---

## Architecture Notes

The application uses a reusable `SkillsPage` architecture driven by URL parameters:

```txt
/skills/web
/skills/animation
/skills/video
```

Rather than building separate pages for each department, the application dynamically updates search queries and API requests based on route parameters.

The UI was intentionally designed around reusable card components and centralized fetch utilities to keep business logic separated from presentation layers.

---

## Educational & Institutional Context

This project was built as part of ongoing experimentation in educational technology and workforce-aligned curriculum tooling.

The larger goal was to explore how APIs and frontend systems could help educators and department leadership better understand industry skill trends and align academic pathways with workforce demand.

Although the current version remains unfinished, the project successfully demonstrates practical API integration, scalable frontend architecture, dynamic search interfaces, and modern React optimization patterns.

Planned future improvements include pagination, virtualization for large datasets, and expanded filtering systems.

---

## AI-Assisted Development Workflow

This project incorporated AI-assisted development workflows using tools such as ChatGPT and Perplexity AI to accelerate research, debug implementation challenges, and refine frontend architecture decisions during rapid prototyping.

The application was designed, implemented, and integrated manually, while AI tools were used as collaborative assistants for brainstorming, code refinement, troubleshooting, and architectural exploration.

This workflow allowed the project to move from concept to working prototype in approximately 10 days while still emphasizing frontend engineering principles, reusable architecture, and UI/UX design practices.

---

## Future Improvements

- Add pagination for large search result sets
- Implement virtualization for rendering performance
- Add advanced filtering controls
- Improve mobile responsiveness
- Add saved search functionality
- Add authentication and role-based access
- Expand department categories
- Integrate deeper workforce analytics

---

## Local Development

Clone the repository:

```bash
git clone https://github.com/your-username/skills-app.git
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

## Author

Built by Wesley Nimmo as part of ongoing educational department tool to stay current on global labor trends in tech.