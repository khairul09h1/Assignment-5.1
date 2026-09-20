<p align="center">
  <img src="./src/assets/logo-text.png" alt="Dev Stack logo" width="220" />
</p>

<h1 align="center">Dev Stack — Build Your Ideal Development Stack</h1>

<p align="center">
  A single-page React app for browsing frontend, backend, database, and
  tooling technologies, and assembling them into a personal "stack".
</p>

---

## 📖 About the Project

**Dev Stack** is a technology explorer and stack builder. Visitors browse a
grid of curated development technologies — frameworks, languages, databases,
and DevOps tools — and add the ones they like to a running "Your Stack"
panel. Each technology card shows a rating, difficulty level, category, and
a short description, so the goal is to make comparing options at a glance as
easy as possible before committing to a stack for a new project.

## 🛠️ Built With

- **React 19** — component-based UI
- **Vite** — dev server and build tool
- **Tailwind CSS v4** — utility-first styling, themed with a single shared
  gradient (`orange → pink → violet`)
- **React-Toastify** — toast notifications for add/remove/duplicate actions
- **JavaScript (ES6+)** — no TypeScript, fetch API + hooks throughout

## ✨ Features

1. **Live stack builder** — add any technology to "Your Stack" with one
   click; the same technology can't be added twice (a toast warns you if you
   try), and each card's button locks to "✓ Added to Stack" once selected.
2. **Fully responsive layout** — a 3-column technology grid on desktop that
   reflows to 2 columns on tablet and 1 column on mobile, with a
   collapsible hamburger navbar for small screens.
3. **Data-driven & re-themeable** — all technology data is fetched from a
   local JSON file at runtime (nothing is hardcoded in the components), and
   the entire brand gradient is controlled from one set of CSS variables in
   `src/index.css`.

## 🚀 Getting Started

```bash
# install dependencies
npm install

# start the dev server
npm run dev

# build for production
npm run build
```

## 📁 Project Structure

```
src/
├── assets/              # logo & hero illustration
├── components/
│   ├── Navbar.jsx       # sticky navbar + mobile hamburger menu
│   ├── Hero.jsx         # banner / hero section
│   ├── TechGrid.jsx     # responsive grid wrapper
│   ├── TechCard.jsx     # single technology card
│   ├── YourStack.jsx    # sidebar: selected stack + remove/remove-all
│   ├── Loader.jsx       # loading spinner
│   └── Footer.jsx       # site footer
├── App.jsx              # fetch, state, and layout composition
├── index.css            # Tailwind import + gradient theme variables
└── main.jsx             # app entry point

public/
└── technologies.json    # technology data, loaded via fetch()
```

---

## ❓ React Questions

**1. What is JSX, and why is it used in React?**
JSX is a syntax extension that lets you write HTML-like markup directly
inside JavaScript. Under the hood it compiles down to regular
`React.createElement()` calls. It's used because it makes component markup
much easier to read and write than nesting plain function calls, while still
letting you drop into real JavaScript (variables, conditions, loops) right
inside the markup with `{}`.

**2. What is the difference between props and state?**
Props are data passed *into* a component from its parent — a component
can't change its own props, it just reads them (e.g. `TechCard` receives
`tech`, `isAdded`, and `onAdd` as props). State is data a component owns and
manages *internally*, and it can change over time in response to user
actions, which triggers a re-render. In this project, `menuOpen` in
`Navbar` and `stack` in `App` are state; `tech` passed down to `TechCard`
is a prop.

**3. What does the `useState` hook do, and where did you use it in this project?**
`useState` gives a component a piece of state that persists between
re-renders, plus a function to update it. In this project it's used for:
`technologies` and `loading`/`error` (the fetched data and its loading
status) in `App.jsx`, the `stack` array of selected technologies in
`App.jsx`, and `menuOpen` for toggling the mobile hamburger menu in
`Navbar.jsx`.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` runs a side effect after a component renders — things like data
fetching, subscriptions, or timers, which shouldn't happen directly during
render. Fetching `technologies.json` is exactly that kind of side effect: it
needs to happen once when `App` first mounts (not on every render), so it's
wrapped in `useEffect` with an empty dependency array (`[]`), and the
result is stored in state once the fetch resolves.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
React uses the `key` to track which list item is which between renders, so
it can efficiently figure out what was added, removed, or reordered instead
of re-rendering the whole list from scratch. Without a stable, unique key
(here, each technology's `id`), React can mismatch items when the list
changes — for example, mixing up which "Add to Stack" button belongs to
which card.

**6. What is conditional rendering? Show one place you used it (example: the empty stack message).**
Conditional rendering means showing different UI depending on some
condition, using normal JavaScript (`if`, ternaries, or `&&`) inside the
component. One example is in `YourStack.jsx`:

```jsx
{count === 0 ? (
  <div>Your stack is empty.</div>
) : (
  // ...render the list of selected technologies
)}
```

Another example is in `App.jsx`, where the technologies section shows a
`Loader` while `loading` is `true`, an error message if the fetch failed,
and the actual grid otherwise.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
A parent passes data down to a child as props — e.g. `App` passes
`technologies`, `stackIds`, and `onAdd` down to `TechGrid`, which passes
each `tech` down to `TechCard`. For a child to send information back up,
the parent passes a *function* down as a prop, and the child calls that
function (usually with some data as an argument). For example, `TechCard`
calls the `onAdd(tech)` function it received from `App` when its button is
clicked, and `App`'s `handleAdd` function then updates the `stack` state.
