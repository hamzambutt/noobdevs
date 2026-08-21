# 🖥️ Noobdevs Website

Welcome to the **Noobdevs** repository! This project is the official portfolio and agency website for Noobdevs, built with a unique hand-drawn aesthetic and smooth scrolling experiences.

---

## ✨ Features & Sections

*   **Hand-drawn Aesthetic**: A custom, creative visual style utilizing hand-drawn backgrounds and page scroll lines.
*   **Smooth Scrolling**: Powered by [Lenis](https://lenis.studiofreight.com/) for a fluid user experience.
*   **Rich Animations**: Advanced animations and interactions powered by [Framer Motion](https://www.framer.com/motion/) and [GSAP](https://gsap.com/).
*   **Modern Sections**:
    *   **Hero**: Engaging introduction.
    *   **Marquee**: Dynamic scrolling text.
    *   **About**: Who we are.
    *   **Capabilities**: What we do and our expertise.
    *   **Projects**: Our portfolio of work.
    *   **Team**: Meet the Noobdevs team.
    *   **Contact**: Get in touch.

---

## 🛠️ Tech Stack & Technologies

*   **Framework**: [Next.js (App Router)](https://nextjs.org/)
*   **UI Library**: [React 19](https://react.dev/)
*   **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://gsap.com/)
*   **Scrolling**: [Lenis](https://lenis.studiofreight.com/)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)

---

## ⚙️ Quick Start

The website codebase is located inside the `noobdevs` directory. Follow these steps to run the application locally:

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed.

### 2. Install Dependencies
Clone the repository, navigate to the project directory, and install dependencies:
```bash
cd noobdevs
npm install
```

### 3. Run Development Server
Start the local server with hot reload:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000`.

### 4. Build for Production
To build the project for production:
```bash
npm run build
```

---

## 🚢 CI/CD Deployment

A GitHub Action workflow is pre-configured in `.github/workflows/deploy.yml`. When changes are pushed to the `main` branch, the workflow automatically builds the project and deploys it to the production host.
