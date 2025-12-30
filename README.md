# ∞² Infinity Squared Technologies Website

Official website for Infinity Squared Technologies - delivering AR/VR development, AI/ML solutions, and web services.

## 🌐 Live Website

[https://infinitysquaredtech.com](https://infinitysquaredtech.com)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Development](#development)
- [Build](#build)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)

## 🎯 Overview

Infinity Squared Technologies website showcases innovative AR/VR experiences, AI/ML solutions, and web development services. The site features interactive 3D models, immersive portfolio demos, and comprehensive service offerings.

## ✨ Features

- **Interactive 3D Models** - Three.js powered 3D visualizations
- **AR/VR Demos** - Image tracking and portal experiences
- **Virtual Tours** - 360° interactive property tours
- **Responsive Design** - Mobile-first responsive layout
- **Fast Loading** - Optimized assets and minified code
- **SEO Optimized** - Comprehensive meta tags and sitemap

## 📁 Project Structure

```
.
├── app.min.js              # Main application entry point
├── index.html              # Main HTML file
├── package.json            # Project dependencies and scripts
├── styles.min.css          # Main stylesheet
├── tail.min.css            # Tailwind CSS output
├── components/             # React/JS components (source)
│   ├── About.min.js
│   ├── Clients.min.js
│   ├── Contact.min.js
│   ├── Footer.min.js
│   ├── Header.min.js
│   ├── Hero.min.js
│   ├── PortfolioScroller.min.js
│   ├── ScrollToTop.min.js
│   ├── Services.min.js
│   └── ThreeModel.min.js
├── pages/                  # Page components (source)
│   ├── AIMLPage.min.js
│   ├── ARVRPage.min.js
│   └── WebDevPage.min.js
├── utils/                  # Utility functions (source)
│   ├── dragHandler.min.js
│   └── router.min.js
├── lib/                    # Compiled/built files (generated)
│   ├── app.min.js
│   ├── components/
│   ├── pages/
│   └── utils/
├── asset/                  # Static assets
│   ├── clients/
│   ├── images/
│   ├── logos/
│   └── video/
├── tours/                  # Virtual tour projects
│   ├── ambit/
│   ├── demo/
│   └── rajshree/
└── webar-demos/            # WebAR demonstration projects
    ├── multi-img/
    ├── portal-img/
    └── single-img/
```

## 🔧 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14.x or higher)
- **npm** (v6.x or higher) or **yarn**
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Git (for version control)

### Check Your Installations

```bash
node --version
npm --version
```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/infinitysquaredtech/infinitysquaredtech.github.io.git
cd infinitysquaredtech.github.io
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required dependencies including:
- Babel (for JS transpilation)
- Tailwind CSS (for styling)
- npm-run-all (for parallel script execution)

### 3. Start Development

```bash
npm run watch
```

This command will:
- Watch for changes in source files
- Automatically rebuild on file changes
- Compile JavaScript with Babel
- Generate Tailwind CSS
- Output files to the `lib/` directory

### 4. Open the Website

Open `index.html` in your web browser or use a local development server:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (http-server)
npx http-server -p 8000
```

Then navigate to: `http://localhost:8000`

## 💻 Development

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run watch` | Start development mode with file watching |
| `npm run build` | Build all components for production |
| `npm run clean` | Remove all built files |
| `npm run build:app` | Build main application file |
| `npm run build:components` | Build all components |
| `npm run build:pages` | Build all page components |
| `npm run build:utils` | Build utility functions |
| `npm run build:tailwind` | Build Tailwind CSS |
| `npm run watch:*` | Watch individual parts of the project |

### Development Workflow

1. **Make Changes** - Edit files in `components/`, `pages/`, `utils/`, or `app.min.js`
2. **Watch Rebuild** - The watch script automatically rebuilds changed files
3. **Refresh Browser** - Reload your browser to see changes
4. **Test** - Verify functionality across different browsers

### File Organization

- **Source Files**: Edit files in root-level `components/`, `pages/`, and `utils/` directories
- **Built Files**: Generated files are in the `lib/` directory (do not edit directly)
- **Styles**: Main styles in `styles.min.css`, Tailwind output in `tail.min.css`
- **Assets**: Static files in `asset/` directory

## 🏗️ Build

### Production Build

To create an optimized production build:

```bash
npm run build
```

This will:
- Transpile and minify all JavaScript files
- Generate optimized Tailwind CSS
- Output production-ready files to `lib/`

### Clean Build

To start fresh:

```bash
npm run clean
npm run build
```

## 🚢 Deployment

### GitHub Pages

This project is configured for GitHub Pages deployment:

1. Push changes to the `main` branch
2. GitHub Pages automatically serves the site
3. Custom domain configured via `CNAME` file

### Manual Deployment

For other hosting platforms:

1. Run production build: `npm run build`
2. Upload all files to your web server
3. Ensure `.html`, `.js`, `.css`, and `asset/` files are accessible
4. Configure your server to serve `index.html` as the default document

## 🛠️ Technologies Used

- **Babel** - JavaScript transpilation and minification
- **Tailwind CSS** - Utility-first CSS framework
- **Three.js** - 3D graphics library (via components)
- **React/JSX** - Component-based UI (transpiled)
- **WebAR** - AR.js / MindAR for augmented reality
- **360° Tours** - Virtual tour rendering engine

## 📝 License

See [LICENSE.md](LICENSE.md) for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📧 Contact

Infinity Squared Technologies - [https://infinitysquaredtech.com](https://infinitysquaredtech.com)

---

**Note**: The source JavaScript files (`.min.js`) are actually JSX/React code that gets transpiled by Babel. The `.min.js` extension is used for organizational purposes, not as an indicator of pre-minified code.
