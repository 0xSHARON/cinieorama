# 🏛️ CINIEORAMA System Architecture

> **Technical Architecture & Data Flow Guide for Developers & Contributors**

---

## 🌟 Architectural Philosophy

CINIEORAMA is designed around three strict principles:
1. **100% Client-Side Static Architecture:** Operates with zero backend dependencies, build scripts, or databases. Capable of being deployed instantly onto any static host (GitHub Pages, Vercel, Netlify, Cloudflare Pages).
2. **Dynamic Live Cloud Ingestion:** Zero hardcoded movie or show databases. Everything is dynamically fetched in real-time from TMDB REST endpoints and external CDN mirrors.
3. **Privacy-First Zero-Tracking Persistence:** User state (Watch History, Resume Time, and Bookmarks) is persisted strictly within the browser's client-side `localStorage`.

---

## 🏗️ High-Level System Architecture

```mermaid
graph TD
    A[Browser Client / SPA] --> B[TMDB v3 API]
    A --> C[Client-Side Web Storage]
    A --> D[Streaming Server Nodes]
    A --> E[Canvas Color Extractor]

    subgraph TMDB Cloud
        B --> B1[Trending & Discover]
        B --> B2[Multi-Search Engine]
        B --> B3[Watch Providers]
        B --> B4[Official 4K YouTube Trailers]
    end

    subgraph Client State (localStorage)
        C --> C1[cinieorama_watchlist]
        C --> C2[cinieorama_watch_history]
        C --> C3[cinieorama_ambilight]
    end

    subgraph Verified 10-Node Streaming Cluster
        D --> D1[S1: EmbedWave — Default Edge CDN]
        D --> D2[S2: VidLink Pro — 4K Multi-Audio]
        D --> D3[S3: 2Embed CC — Anime Archives]
        D --> D4[S4: 2Embed Skin — Anime HD Player]
        D --> D5[S5: VidSrc PM — VIP Direct Edge]
        D --> D6[S6: AutoEmbed CO — Dubbed Cloud]
        D --> D7[S7: VidSrc DEV — Premium CDN]
        D --> D8[S8: VidSrc SU — Cloud Mirror]
        D --> D9[S9: CineSrc — 4K Ultra HTML5]
        D --> D10[S10: VSEmbed — Global Aggregator]
    end

    subgraph Visual Engines
        E --> E1[Philips OLED Ambilight Simulator]
        E --> E2[Reactive LED Glow Halo]
    end
```

---

## 🧩 Core Modules & Components

### 1. Dynamic Catalog Engine (`renderCatalog`, `buildFilterUrl`)
- Fetches real-time trending titles and platform-specific discover queries without pre-populated JSON databases.
- Supports **composable filtering** between OTT Platforms (`with_watch_providers`) and Regional Languages (`with_original_language`, `with_origin_country`).
- Implements infinite pagination using browser-native `IntersectionObserver` sentinel watching.

### 2. Multi-Tier Streaming Node Failover (`STREAM_SERVERS`)
A verified **10-node** streaming cluster supporting movies, TV series, anime, and cartoons:

```
[User Click] ──> Server 1: EmbedWave  (DEFAULT — Zero-Buffer Edge CDN)
                     │ (Multi-audio / anime detected)
                     ├──> Server 2: VidLink Pro    (4K Multi-Audio, Hindi/Tamil/Telugu/Malayalam/Jpn/Eng)
                     ├──> Server 3: 2Embed CC      (Anime & Cartoon Archives, JPN Original/Dub/Sub)
                     ├──> Server 4: 2Embed Skin    (Cartoon & Anime HD Player w/ Audio UI)
                     ├──> Server 6: AutoEmbed CO   (Dubbed Cloud Discovery)
                     │ (Generic failover)
                     ├──> Server 5: VidSrc PM      (VIP Direct Edge)
                     ├──> Server 7: VidSrc DEV     (Premium Multi-Source CDN)
                     ├──> Server 8: VidSrc SU      (High-Speed Direct Cloud Mirror)
                     ├──> Server 9: CineSrc        (4K Ultra HTML5 Stream)
                     └──> Server 10: VSEmbed       (Global Multi-Server Aggregator)
```

**URL Patterns (verified HTTP 200):**
- Movies: `/embed/movie/{tmdb_id}`
- TV Series: `/embed/tv/{tmdb_id}/{season}/{episode}` *(most nodes)*
- CineSrc TV: `/embed/tv/{id}-{season}-{episode}` *(slug format — param format returns 404)*
- AutoEmbed TV: `/tv/tmdb/{tmdb_id}-{season}-{episode}`

### 3. Cinema Ambilight Engine (`updatePlayerAmbilight`)
- Emulates high-end Philips OLED Ambilight TVs.
- Extracts dominant colors directly from media posters using an offscreen HTML5 `Canvas` element (`getContext('2d', { willReadFrequently: true })`).
- Sets dynamic CSS custom properties (`--ambilight-c1`, `--ambilight-c2`, `--ambilight-c3`) to animate a soft, breathing LED halo around the video player iframe.

### 4. Client-Side Bookmarks & Watch History (`WATCHLIST`, `WATCH_HISTORY`)
- **`WATCHLIST` (`cinieorama_watchlist`):** Stores user bookmarked titles with quick card toggling, live navigation counters, and dedicated grid filtering.
- **`WATCH_HISTORY` (`cinieorama_watch_history`):** Auto-records playback start, tracks season/episode progress, increments watch percentage every 15 seconds, and enables one-click `RESUME (X%)` directly on cards.

---

## 📂 Repository File Structure

```
├── index.html          # Semantic HTML5 shell, player modal, and SVG assets
├── app.js              # Complete SPA logic, TMDB adapter, and streaming engines
├── styles.css          # Neo-brutalist styling, Ambilight glow, and responsive grid
├── server.js           # Lightweight static local dev server (Node.js http)
├── README.md           # Primary user and developer documentation
├── CHANGELOG.md        # Semantic versioning release history
├── ARCHITECTURE.md     # System design and data flow breakdown
├── CONTRIBUTING.md     # Guidelines for community contributors
├── SECURITY.md         # Vulnerability reporting and security architecture
├── DISCLAIMER.md       # Legal, copyright, and non-hosting statements
└── LICENSE.md          # Open-source MIT License
```
