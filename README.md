# Michelle Wangari Portfolio

A single-page portfolio dashboard built with React + Vite, featuring nested routing, responsive sidebar navigation, and persistent contact form state.

## 🚀 About

This project is a personal portfolio website showcasing:

- Home landing page with call-to-action and resume download
- About section with bio + skills cards
- Projects spotlight (animal adoption group project)
- Contact form with localStorage persistence

The app is implemented as a dashboard with a sidebar (desktop + mobile), and pages injected through `react-router-dom` `Outlet` from `Dashboard`.

## 🧩 Key Technologies

- React 19
- Vite (bundler)
- React Router DOM v7
- Tailwind utility classes (via @tailwindcss/vite)
- Local state management via `useState`, `useEffect`

## 📁 Project Structure

- `Frontend/src/main.jsx`: app entrypoint + route config
- `Frontend/src/App.jsx`: unused scaffold (empty UI)
- `Frontend/src/components/Dasboard.jsx`: layout, topbar, container + `Outlet`
- `Frontend/src/components/Sidebar.jsx`: responsive side navigation + active link state
- `Frontend/src/pages/Home.jsx`: hero and CTA
- `Frontend/src/pages/About.jsx`: profile plus skill cards
- `Frontend/src/pages/Projects.jsx`: project showcase + links
- `Frontend/src/pages/Contact.jsx`: contact form with localStorage persistence

## 🛠 Setup & Run

1. `cd Frontend`
2. `npm install`
3. `npm run dev`
4. open `http://localhost:5173` (or port reported by Vite)

### Build

- `npm run build`
- `npm run preview`

## 📌 Routing

Routes are defined in `main.jsx`:

- `/` -> index route -> `Home`
- `/home` -> `Home`
- `/about` -> `About`
- `/projects` -> `Projects`
- `/contact` -> `Contact`

`Dashboard` provides `Sidebar` + top bar + `main` content area with `<Outlet />`.

## 🧠 Component Details

### `Dashboard`

- state: `sidebarOpen`
- passes `routes` array to `Sidebar` (path, label, icon path)
- topbar has button to toggle mobile sidebar

### `Sidebar`

- `isOpen` and `onClose` props
- uses `useLocation` to highlight active link
- body scroll lock when modal sidebar open (mobile)
- nav links use `Link` from router

### `Home`

- hero section with name, role, CTA to `About`
- download link to resume asset

### `About`

- `skills` constant array (list of technologies + level)
- displays two columns: profile + skills cards
- download button, back to home link

### `Projects`

- static project card for animal adoption project
- external demo + repo link

### `Contact`

- state: `formData`, `submitted`
- localStorage persistence:
  - load on mount (`useEffect`)
  - save on updates (`useEffect`)
  - clear on submit
- form fields: name, email, phone, message
- success message toggling

## ✅ Notes

- `App.jsx` is currently a placeholder and not used in routing; app starts from `main.jsx` via `RouterProvider`.
- Replace resume `href` paths if file names change.
- Adapt or add validation, API submit endpoint as next improvement.

## 🛡 Next enhancements

- Add form validation with `react-hook-form` (already installed)
- Implement backend submission (`axios`, Flask, etc.)
- Add text transition animations and mobile menu improvements
- Add real project cards dynamically from JSON / API

---

Michelle Muchoki • 2026 • Portfolio Project
