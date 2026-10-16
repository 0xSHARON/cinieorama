# 🤝 Contributing to CINIEORAMA

Thank you for your interest in contributing to **CINIEORAMA**! As an open-source, client-side cinema discovery and streaming interface, we welcome enhancements, bug fixes, UI/UX polish, and streaming server optimizations from the community.

---

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Streaming Nodes](#suggesting-streaming-nodes)
  - [Pull Requests](#pull-requests)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Testing Guidelines](#testing-guidelines)
- [License](#license)

---

## 📜 Code of Conduct

All contributors and participants are expected to adhere to our [Code of Conduct](CODE_OF_CONDUCT.md). Please maintain a respectful, welcoming, and inclusive tone in all interactions.

---

## 💡 How Can I Contribute?

### 1. Reporting Bugs
Before filing an issue, please verify:
- The bug is reproducible on the latest `main` branch.
- You have tested on multiple modern browsers (Chrome, Firefox, Safari, Edge).
- Provide steps to reproduce, device details, and console error logs.

### 2. Suggesting Streaming Nodes
If you are submitting a new streaming provider or player node:
- **Zero Iframe Restrictions:** The provider MUST NOT emit `X-Frame-Options: SAMEORIGIN` or `X-Frame-Options: DENY`.
- **Public TMDB/IMDb IDs:** Must support standard TMDB or IMDb IDs for Movies (`/movie/{id}`) and TV Series (`/tv/{id}/{season}/{episode}`).
- **Zero Injected Malicious Redirects:** Must be tested to ensure no rogue top-level window redirects that hijack user sessions.
- **HTTPS:** Must provide a valid, secure SSL/TLS certificate.

### 3. Pull Requests
1. Fork the repository and create your branch from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Keep your changes focused. Do not mix unrelated refactors with bug fixes.
3. Test locally with zero console errors.
4. Submit the PR with a clear description and screenshots/recordings demonstrating the change.

---

## 🛠️ Development Workflow

CINIEORAMA is built with **zero build steps** — pure Vanilla JavaScript, CSS3, and HTML5:

1. **Clone your fork:**
   ```bash
   git clone https://github.com/your-username/cinieorama.git
   cd cinieorama
   ```

2. **Launch a local server:**
   ```bash
   # Using the bundled Node HTTP server:
   node server.js

   # Or using npx:
   npx serve .
   ```

3. **Open in browser:**
   Navigate to `http://localhost:3000/`.

---

## 📐 Coding Standards

- **Vanilla Standards:** Do not introduce heavy runtime frameworks (React, Vue, jQuery) or bundlers unless discussed in an issue first. The application must run standalone on GitHub Pages.
- **Naming Conventions:**
  - Constants: `UPPER_SNAKE_CASE` (e.g. `STREAM_SERVERS`, `OTT_PROVIDERS`)
  - Functions: `camelCase` (e.g. `openPlayer`, `adaptTmdbItem`)
  - CSS Classes: `kebab-case` with neo-brutalist naming conventions (e.g. `.brutal-btn`, `.media-card`)
- **Storage Compatibility:** User features must store state via `localStorage` safely wrapped in `try/catch` blocks to prevent exceptions in incognito/private browsing modes.

---

## 🧪 Testing Guidelines

Always validate JavaScript syntax and server responses before submitting PRs:

```bash
# Validate JavaScript syntax
node -c app.js

# Test all 10 active stream nodes for HTTP 200 and X-Frame-Options
node -e "
const https = require('https');
const nodes = [
  'https://embedwave.cc/embed/movie/550',
  'https://vidlink.pro/movie/550',
  'https://2embed.stream/embed/movie/550',
  'https://2embed.skin/embed/movie/550',
  'https://vidsrc.pm/embed/movie/550',
  'https://autoembed.co/movie/tmdb/550',
  'https://vidsrc.dev/embed/movie/550',
  'https://vidsrc.su/embed/movie/550',
  'https://cinesrc.st/embed/movie/550',
  'https://vsembed.com/embed/movie?tmdb=550'
];
nodes.forEach(url => {
  https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
    const xfo = res.headers['x-frame-options'] || 'NONE';
    const ok = res.statusCode === 200 && xfo === 'NONE';
    console.log(ok ? '[OK ]' : '[FAIL]', res.statusCode, xfo, url);
  }).on('error', e => console.log('[ERR]', e.message, url));
});
"
```

> **Note on CineSrc TV URL format:** Use slug format `/embed/tv/{id}-{season}-{episode}`, NOT `?id=...&s=...&e=...`. The param format returns 404.

---

## 📄 License

By contributing to CINIEORAMA, you agree that your contributions will be licensed under the project's [MIT License](LICENSE.md).
