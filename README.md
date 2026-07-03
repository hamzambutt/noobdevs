# 🖥️ NoobDev — Dual-Mode Web Experience & OS Emulator

Welcome to **NoobDev**! This project features a unique **Dual-Mode Web Experience** that blends a modern, PostHog-inspired SaaS website with a retro, interactive Windows XP-inspired OS Desktop emulator.

---

## 🚀 Experience the Dual Modes

### ⚡ Mode 1: Modern SaaS Website
A state-of-the-art SaaS presentation page inspired by clean, developer-centric aesthetics. Features include:

- **Vibrant Dark Mode UI** — A curated color palette combining dark tones with neon accent gradients (purple & green).
- **Rich Interactive Sections:**
  - 🏠 **Hero** — Eye-catching landing section
  - 📋 **Services** — Detailed service offerings
  - 💰 **Pricing** — Pricing tiers and plans
  - 👥 **Team / Customers** — Team members and customer testimonials
  - 🔬 **Core Projects** — Showcase of internal projects
  - 🛠️ **Tech Stack** — Interactive technology grid
  - 📊 **Process** — Workflow/development process overview
  - 💻 **XP Desktop Preview** — Embedded OS desktop preview section
  - 📱 **Mobile Apps** — Mobile application showcase
  - 🔎 **OSINT Pipeline** — OSINT pipeline details
  - 🚀 **CTA (Call-to-Action)** — Conversion-focused call to action
  - 📝 **Classified / About** — Company/about section
  - ℹ️ **About** — About the team and mission
  - 🦔 **Why NoobDev?** — Unique value proposition
  - 📜 **Footer** — Site footer with links and info
- **Fully Responsive Navigation** — Dynamically stacks and wraps elements beautifully on mobile screens.

### 🖥️ Mode 2: NoobDev OS (PostHog Desktop)
Switch modes to enter a fully interactive operating system emulator that mimics the classic Windows XP Bliss desktop:

- **XP Boot Screen** — A boot sequence simulation with vintage-style loader bars and loading animation.
- **Interactive Windows** — Custom-styled windows with classic title bar controls (Minimize, Maximize, Close). Each window is draggable and fully manageable.
- **Desktop Utilities:**
  - 📄 `home.mdx` — Main home/content window
  - 📋 Services window
  - 📁 Pricing window
  - 📝 customers.mdx window
  - 🎬 demo.mov preview
  - 📚 Docs viewer
  - 🦔 Why NoobDev? section
  - 🔔 Changelog viewer
  - 📖 Company handbook
  - 🗑️ Trash / Recycle Bin
- **Taskbar** — Full taskbar with window switching, minimize/maximize controls, and system tray clock.
- **Start Menu** — Classic start menu functionality.
- **Desktop Icons** — Clickable desktop icons that open corresponding content windows.
- **Mode Toggle** — Switch seamlessly between OS mode and Website mode at any time.
- **Mobile-Safe Rendering** — Fixed layout logic ensuring windows never render off-screen on small viewports.

---

## 🛠️ Tech Stack & Technologies

| Category | Technology |
|----------|------------|
| **Framework** | [React 19](https://react.dev/) (Hooks-based modular architecture) |
| **Bundler** | [Vite 8](https://vite.dev/) (Ultra-fast Hot Module Replacement) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) & Vanilla CSS (retro 3D frames, glassmorphism overlays) |
| **CSS Framework** | `@tailwindcss/vite` (Vite-native Tailwind integration) |
| **Linter** | [Oxlint](https://oxc.rs/) (Extremely fast JavaScript/React linter) |
| **Deployment** | GitHub Pages (automated via Actions) |

---

## 📁 Repository Structure

```
noobdevs/
├── .github/workflows/           # CI/CD deployment configuration
│   └── deploy.yml               # Auto-deploy to GitHub Pages on main branch push
├── noobdevs/                    # Main application source code
│   ├── public/                  # Static assets
│   │   ├── favicon.svg          # Site favicon
│   │   └── icons.svg            # SVG sprite icons
│   ├── src/
│   │   ├── components/          # Reusable UI components & CSS
│   │   │   ├── About.jsx/css           # About section
│   │   │   ├── BootScreen.jsx/css      # XP boot screen emulator
│   │   │   ├── Classified.jsx/css      # Classified/about page
│   │   │   ├── CoreProjects.jsx/css    # Core projects showcase
│   │   │   ├── CTA.jsx/css             # Call-to-action section
│   │   │   ├── Footer.jsx/css          # Site footer component
│   │   │   ├── Hero.jsx/css            # Landing hero section
│   │   │   ├── MDXWindow.jsx/css       # Draggable OS window container
│   │   │   ├── MobileApps.jsx/css      # Mobile apps showcase
│   │   │   ├── Navbar.jsx/css          # Navigation bar (shared across modes)
│   │   │   ├── OSINTPipeline.jsx/css   # OSINT pipeline section
│   │   │   ├── PosthogTaskbar.jsx/css  # XP-style taskbar with system tray
│   │   │   ├── Pricing.jsx/css         # Pricing tiers component
│   │   │   ├── Process.jsx/css         # Development process overview
│   │   │   ├── Projects.jsx/css        # Projects showcase
│   │   │   ├── ProjectsWindow.jsx/css  # OS projects window
│   │   │   ├── Services.jsx/css        # Services section
│   │   │   ├── SiteContent.jsx/css     # Main website content wrapper
│   │   │   ├── Team.jsx/css            # Team members component
│   │   │   ├── TechStack.jsx/css       # Technology stack grid
│   │   │   ├── XPDesktop.jsx/css       # Full OS desktop shell
│   │   │   ├── XPWindow.jsx/css        # Draggable/minimizable OS window
│   │   │   └── BrowserWindow.jsx/css   # Virtual browser window
│   │   ├── App.jsx/css            # Main app router & mode toggle logic
│   │   ├── main.jsx               # React DOM entry point
│   │   ├── index.css              # Global CSS imports
│   │   └── assets/                # Static assets (images, etc.)
│   ├── index.html                 # HTML entry point
│   ├── package.json               # NPM dependencies and scripts
│   ├── vite.config.js             # Vite bundler configuration
│   └── .oxlintrc.json             # Oxlint configuration
├── .gitignore                     # Git ignore rules
└── README.md                      # This file
```

---

## ⚙️ Quick Start

Follow these steps to run the application locally:

### 1. Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### 2. Install Dependencies

Clone the repository and install dependencies:

```bash
cd noobdevs/noobdevs
npm install
```

### 3. Run Development Server

Start the local development server with hot-reload:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173`.

### 4. Build for Production

Build optimized static assets for deployment:

```bash
npm run build
```

Output will be in the `dist/` directory, ready for any static hosting service.

### 5. Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### 6. Lint Code

Run the fast Oxlint checker:

```bash
npm run lint
```

---

## 📱 Mobile Responsiveness

The application features responsive viewport auto-detection:

1. **Auto-Routing** — Viewports narrower than `768px` default to the responsive SaaS Website Mode.
2. **Adaptive CSS Layouts** — Desktop mode adjusts window positioning on smaller screens so content remains fully visible and interactive.
3. **Touch-Friendly Controls** — All windows, taskbar, and navigation elements are optimized for touch interaction.

---

## 🚢 CI/CD Deployment

A GitHub Actions workflow is configured in `.github/workflows/deploy.yml`. On every push to the `main` branch:

1. Checks out the code
2. Sets up Node.js (v24)
3. Installs all dependencies
4. Builds the project
5. Deploys to **GitHub Pages** automatically

To enable GitHub Pages, go to your repository **Settings → Pages** and select **GitHub Actions** as the source.

---

## 📄 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite development server with hot-reload |
| `npm run build` | Build for production (optimized static assets) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint to check for code issues |

---

## 🤝 Contributing

As a collaborator, you can:

1. Create a new branch for your feature or fix: `git checkout -b feat/your-feature`
2. Make your changes and commit them: `git commit -m "feat: add your feature"`
3. Push to the branch: `git push origin feat/your-feature`
4. Open a **Pull Request** from your fork/branch targeting `main`

---

## 📄 License

This project is proprietary to NoobDev. All rights reserved.