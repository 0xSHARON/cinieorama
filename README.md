<p align="center">
  <img src="icon.svg" alt="Cinieorama Logo" width="128" height="128" />
</p>

<h1 align="center">CINIEORAMA // CINEMA &amp; ANIME HUB</h1>

<p align="center">
  <strong>Ultra-Fast, Zero-Registration Streaming Engine with Multi-Audio Regional Cinema, OTT Hubs, Cinema Ambilight, Episode Thumbnails &amp; Progressive Web App (PWA).</strong><br>
  <em>100% Client-Side Static Architecture — Hosted live on GitHub Pages: <a href="https://0xsharon.github.io/cinieorama/">0xsharon.github.io/cinieorama</a></em>
</p>

<p align="center">
  <a href="https://0xsharon.github.io/cinieorama/"><img src="https://img.shields.io/badge/Live_Site-GitHub_Pages-E50914?style=for-the-badge&logo=github" alt="Live Site" /></a>
  <a href="INSTALL.md"><img src="https://img.shields.io/badge/PWA-Installable-FFCC00?style=for-the-badge&logo=pwa&logoColor=black" alt="PWA Installable" /></a>
  <a href="LICENSE.md"><img src="https://img.shields.io/badge/License-MIT-00E676?style=for-the-badge" alt="MIT License" /></a>
</p>

---

## 🌟 Overview

**CINIEORAMA** is a high-performance, dark-mode cinema streaming web application built with a **Neo-Brutalist + Netflix** aesthetic. It brings together content from major OTT platforms, regional Indian cinema hubs (Malayalam, Tamil, Telugu, Hindi, Kannada), Hollywood blockbusters, and Anime into a unified, lightning-fast streaming interface.

All media indexing is queried dynamically from TMDB and public CDN endpoints with **zero hardcoded database entries**. User data (Watchlist and Continue Watching history) is stored 100% client-side in `localStorage`, eliminating the need for server-side databases or user authentication.

---

## 🚀 Key Features

### 1. 💡 Cinema Ambilight Engine (Philips OLED Simulator)
- **Reactive LED Backlight Halo:** Surrounds the video player in dark viewing sessions with a soft, breathing ambient aura that dynamically matches the dominant colors of the movie or show.
- **Dynamic Color Extraction:** Samples colors directly from high-resolution poster artwork via HTML5 Canvas, falling back to curated platform-specific HDR palettes (Netflix Crimson, Prime Azure, Hotstar Deep Cyan, Jio Magenta, Crunchyroll Amber).
- **One-Click Toggle:** Toggle Ambilight on or off via the `💡 AMBILIGHT: ON / OFF` button in the player control bar. User preference persists in `localStorage`.

### 2. ★ "+ My Watchlist" Bookmarks System
- **Quick Poster Bookmark Badge:** Every poster card features a sleek, high-contrast `+ LIST` badge. Click to instantly bookmark or remove titles without interrupting browsing.
- **In-Modal Watchlist Button:** Seamlessly add or remove titles from the full movie/show details modal.
- **Homepage Watchlist Slider:** A dedicated `+ MY WATCHLIST // SAVED TO STREAM` horizontal carousel appears right alongside Continue Watching whenever titles are saved.
- **Top Navigation "★ MY LIST" Tab:** A dedicated navigation tab with a real-time badge count (`★ MY LIST (N)`) that opens a full-page grid view with filter chips (*All*, *Movies*, *Series/Anime*) and empty-state guidance.
- **100% Client-Side:** Persists via `localStorage` under `cinieorama_watchlist` — no accounts, passwords, or tracking cookies.

### 3. 🌐 Verified 10-Server Streaming Infrastructure (Movies, Shows & Anime)
Cinieorama features a verified **10-node cloud streaming cluster** that prioritizes reliable, zero-buffer playback with `X-Frame-Options: NONE` on all nodes. Servers 2, 3, 4 & 6 are recommended for anime and cartoons.

| # | Server | Domain | Best For |
|---|--------|--------|----------|
| ★ 1 | **EmbedWave** `[DEFAULT]` | `embedwave.cc` | All content — primary zero-buffer edge CDN |
| 2 | **VidLink Pro** `[ANIME/CARTOON]` | `vidlink.pro` | 4K Multi-Audio: Hindi/Tamil/Telugu/Malayalam/Japanese/English + subtitles |
| 3 | **2Embed CC** `[ANIME/CARTOON]` | `2embed.stream` | Anime & cartoon archives, Japanese original + dubs |
| 4 | **2Embed Skin** `[ANIME/CARTOON]` | `2embed.skin` | Cartoon & anime HD with audio/subtitle selector UI |
| 5 | **VidSrc PM** | `vidsrc.pm` | VIP direct edge cloud — movies, anime & shows |
| 6 | **AutoEmbed CO** `[ANIME/CARTOON]` | `autoembed.co` | Cartoon & dubbed cloud source discovery |
| 7 | **VidSrc DEV** | `vidsrc.dev` | Premium multi-source CDN for movies, animation & TV |
| 8 | **VidSrc SU** | `vidsrc.su` | High-speed direct cloud mirror for fast failover |
| 9 | **CineSrc** | `cinesrc.st` | Modern 4K ultra HTML5 stream, zero frame-blocking |
| 10 | **VSEmbed** | `vsembed.com` | Global multi-server aggregator with cloud mirrors |

### 4. 🌴 Regional Indian Cinema & Composable Multi-Audio Hubs
- **Mollywood (Malayalam):** Dedicated Malayalam cinema hub streaming blockbusters, crime thrillers, and indie films (`with_origin_country=IN`).
- **Kollywood (Tamil):** High-octane Tamil action, drama, and regional releases.
- **Tollywood (Telugu):** Mass Telugu commercial cinema and spectacles.
- **Bollywood (Hindi):** Latest Hindi theatrical releases and streaming originals.
- **Sandalwood (Kannada):** Kannada cinema hits.
- **Multi-Audio Pan-India (`multi`):** Filter specifically for pan-India multi-audio titles spanning Hindi, Telugu, Tamil, Malayalam, and Kannada.
- **Composable Filtering:** Combine OTT platform and regional language filters freely (e.g. Netflix + Malayalam or Prime Video + Telugu) without one filter clobbering the other. Click any active filter pill again to toggle it off.

### 5. 📺 Authentic OTT Platform Direct Hubs
Filtered discovery for major streaming platforms with authentic dynamic platform mapping and zero forced overrides:
- **Netflix Originals**
- **Amazon Prime Video Exclusives**
- **Disney+ Hotstar Specials & Marvel**
- **JioCinema Blockbusters & HBO**
- **Sony LIV Crime Thrillers**
- **ZEE5 Regional Cinema**
- **Apple TV+ Award Winners & Sci-Fi**
- **Crunchyroll Dubbed & Subbed Anime**

### 6. 🔥 Reality TV & Shows Hub (Bigg Boss, Shark Tank & Entertainment)
- **Top Indian & Global Reality Shows:** Dedicated catalog row and navigation tab for unscripted entertainment: *Bigg Boss* (Hindi, Malayalam, Tamil, Telugu, Kannada, Marathi), *The Great Indian Kapil Show*, *Shark Tank India*, *Fear Factor: Khatron Ke Khiladi*, *MTV Splitsvilla*, *MTV Roadies*, and more.
- **Full Season & Episode Browser:** Reality shows are treated with full TV series multi-season indexing, letting viewers browse seasons, episode numbers, and high-resolution 16:9 episode still thumbnails.
- **Language-Composable Discovery:** Filter reality TV with regional language pills (e.g. Reality + Malayalam for *Bigg Boss Malayalam*, or Reality + Hindi for *Bigg Boss Hindi*, *The Great Indian Kapil Show*, and *Shark Tank India*).

### 7. ▶ In-Modal 4K Official Trailer Viewer
- Live TMDB YouTube API integration providing official 4K trailers directly inside the details modal.
- Multi-trailer switcher chips (`[TRAILER 1]`, `[TRAILER 2]`, `[TEASER]`).
- Auto-dismisses trailer stream upon starting movie playback or closing modal.

### 7. ⏱️ Continue Watching & Watch Progress Tracking
- Automatically records stream start and increments progress every 15 seconds.
- Interactive progress bar and scrub slider inside the player modal with quick jump shortcuts (+10%, +25%, +50%, +75%, +100%).
- Card visual progress bar and `RESUME (X%)` buttons.
- Dedicated `▶ CONTINUE WATCHING` page and homepage slider.

### 8. 🔍 Real-Time Global Search
- Debounced real-time search across 10,000+ movies, web series, and anime.
- Dual-source querying combining TMDB Multi-Search and IMDb Public Suggestion API.

### 9. 🎬 Real Episode Thumbnails & Navigation
- **High-Resolution Episode Artwork:** Pulls authentic 16:9 episode thumbnails (`still_path`) live from TMDB for every season and episode.
- **Rich Episode Metadata:** Shows episode duration (`⏱ 45m`), rating (`★ 8.5`), air date, full episode title, and synopsis clamp.
- **Watch Progress on Episodes:** Highlights currently active episode and displays `✓ WATCHED` badge or progress indicator if previously streamed.
- **In-Player Episode Drawer:** Seamless slide-out drawer during playback allowing instant episode hopping with thumbnail previews without reloading the player.

### 10. 📲 Progressive Web App (PWA) & 1-Click Install
- **Install on Any Device:** Installable on Windows, macOS, Android, iPhone/iPad, Linux, and ChromeOS as a standalone desktop or mobile application.
- **No App Store Needed:** Uses native browser PWA engines (`manifest.json` and `sw.js` Service Worker).
- **Dedicated Guide:** Complete step-by-step installation instructions available in [INSTALL.md](INSTALL.md) and inside the in-app `[📥 INSTALL APP]` modal.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technology |
|---|---|
| **Structure** | Semantic HTML5 |
| **Styling** | Vanilla CSS3 (Custom Design Tokens, Neo-Brutalist Layouts, Ambilight Glow, Glassmorphism) |
| **Logic** | Vanilla Modern JavaScript (ES6+, Async/Await, IntersectionObserver, Canvas API) |
| **PWA & Offline** | Web App Manifest v1.0, Service Worker Shell Cache (`sw.js`) |
| **Data Source** | TMDB REST API v3 (Live Discover, Search, Videos, Watch Providers) |
| **Storage** | Client-Side Web Storage API (`localStorage`) |
| **Deployment** | 100% Static (GitHub Pages: [0xsharon.github.io/cinieorama](https://0xsharon.github.io/cinieorama/)) |

---

## 💻 Local Development & Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/0xSHARON/cinieorama.git
   cd cinieorama
   ```

2. **Serve with Any Static HTTP Server:**
   ```bash
   # Using Node.js (included server.js):
   node server.js

   # Or using npx serve:
   npx serve .

   # Or using Python:
   python -m http.server 3000
   ```

3. **Open in Browser:**
   Navigate to `http://localhost:3000/`.

---

## 🚀 GitHub Pages Deployment

Because Cinieorama is 100% static client-side JavaScript, it runs flawlessly on GitHub Pages:

1. Push your repository to GitHub.
2. Go to **Settings > Pages**.
3. Under **Build and deployment > Source**, choose **Deploy from a branch**.
4. Select `main` branch and `/ (root)` folder, then click **Save**.
5. Your streaming portal will be live at `https://<username>.github.io/<repo-name>/`.

---

## ⌨️ Keyboard Shortcuts & Controls

- **`Esc`**: Instantly close movie details modal or streaming video player.
- **`‹ / ›`**: Scroll horizontal movie carousels left or right.
- **`Popout`**: Open stream in an isolated, borderless window.

---

## 📚 Documentation & Project Guides

- **[System Architecture](ARCHITECTURE.md):** Complete data flow, TMDB ingestion engine, and streaming node failover details.
- **[Changelog](CHANGELOG.md):** Release notes and version history.
- **[Terms of Service](TERMS.md):** Terms of use, permitted activities, and legal conditions.
- **[Privacy Policy](POLICY.md):** Zero-telemetry guarantee and client-side data handling.
- **[Contributing Guidelines](CONTRIBUTING.md):** How to run locally, test stream nodes, and open pull requests.
- **[Security Policy](SECURITY.md):** Security practices, iframe isolation, and vulnerability reporting.
- **[Code of Conduct](CODE_OF_CONDUCT.md):** Community engagement standards and pledge.
- **[Content Disclaimer](DISCLAIMER.md):** Non-hosting policy, copyright, and DMCA notice.

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE.md](LICENSE.md) file for details.

**Disclaimer:** Cinieorama does not host, upload, or store any video media files on its servers. All media content is indexed from public third-party CDN streaming nodes. All trademarks, posters, and video properties belong to their respective owners.
