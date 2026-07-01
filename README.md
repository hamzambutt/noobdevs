# 🖥️ Noobdevs Website & OS Emulator

Welcome to the **Noobdevs** repository! This project features a unique **Dual-Mode Web Experience** blending a modern, PostHog-inspired SaaS website with a retro, interactive Windows XP-inspired OS Desktop emulator.

---

## 🚀 Experience the Dual Modes

### ⚡ Mode 1: Modern SaaS Website
A state-of-the-art SaaS presentation page inspired by clean, developer-centric aesthetics. Features include:
*   **Vibrant Dark Mode UI**: A curated color palette combining dark tones with neon accent gradients (purple & green).
*   **Rich Interactive Sections**: Sections detailing **Services**, **Pricing**, **Core Projects**, and a **Tech Stack** grid.
*   **Fully Responsive Navigation**: Dynamically stacks and wraps elements beautifully on mobile screens.

### 🖥️ Mode 2: NoobDev OS (PostHog Desktop)
Switch modes to enter a fully interactive operating system emulator that mimics the classic Windows XP Bliss desktop:
*   **XP Boot Screen**: A boot sequence simulation with vintage-style loader bars.
*   **Interactive Windows**: Custom-styled windows with classic title bar controls (Minimize, Maximize, Close).
*   **Desktop Utilities**: Virtual web browser, interactive project portfolios, start menu, and system tray clock.
*   **Mobile-Safe Rendering**: Fixed layout logic ensuring windows never render off-screen on small viewports.

---

## 🛠️ Tech Stack & Technologies

*   **Framework**: [React 19](https://react.dev/) (Hooks-based modular architecture)
*   **Bundler & Dev Server**: [Vite 8](https://vite.dev/) (Ultra-fast Hot Module Replacement)
*   **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) & Vanilla CSS custom styles (supporting retro 3D frames and premium glassmorphism overlays)
*   **Linter**: [Oxlint](https://oxc.rs/) (Extremely fast JavaScript/React linter)

---

## 📁 Repository Structure

Here's an overview of the key files and directories:

```text
noobdevs/
├── .github/workflows/       # CI/CD deployment configuration
│   └── deploy.yml           # Auto-deploy workflow for GitHub Pages
├── src/
│   ├── components/          # Reusable UI components & CSS
│   │   ├── BootScreen.jsx   # Boot screen emulator
│   │   ├── SiteContent.jsx  # SaaS website main view
│   │   ├── XPDesktop.jsx    # OS desktop shell, taskbar, start menu
│   │   ├── XPWindow.jsx     # Draggable & minimizable OS window component
│   │   └── ...              # Modals and styling stylesheets (.css)
│   ├── App.jsx              # Main App wrapper & Mode toggle router
│   ├── App.css              # Global styles
│   └── main.jsx             # React DOM entry point
├── package.json             # NPM dependencies and scripts
└── vite.config.js           # Vite bundler options
```

---

## ⚙️ Quick Start

Follow these steps to run the application locally:

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### 2. Install Dependencies
Clone the repository and run:
```bash
npm install
```

### 3. Run Development Server
Start the local server with hot reload:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 4. Build for Production
To bundle the project into optimized static assets (`/dist` directory):
```bash
npm run build
```

---

## 📱 Mobile Responsiveness

The application features responsive viewport auto-detection:
1.  **Auto-Routing**: Users visiting on viewports narrower than `768px` are routed directly to the responsive **SaaS Website Mode** by default.
2.  **Adaptive CSS Layouts**: Overridden positioning transforms prevent Windows from rendering off-screen in desktop mode, maintaining full usability on touch displays.

---

## 🚢 CI/CD Deployment

A Github Action workflow is pre-configured in `.github/workflows/deploy.yml`. When changes are pushed to the `main` branch, the workflow automatically builds the project and deploys it to your production host.
