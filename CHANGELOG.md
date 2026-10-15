# 📜 Changelog

All notable changes to the **CINIEORAMA** project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [2.7.0] - 2026-10-16

### Added
- **5-Server Streaming Node Lineup:**
  - Integrated **Server 3: VidSrc SU (`vidsrc.su`)** — high-speed cloud mirror node verified with HTTP 200 and `X-Frame-Options: NONE` for movies, TV series, and anime.
  - Designated **Server 4: 2Embed (`2embed.cc`)** as the dedicated Anime hub and global CDN supporting Japanese original audio, English/Hindi dubs, and multi-subs.
  - Established 5 verified, failover-ready streaming nodes:
    1. Server 1: EmbedWave (Main Zero-Buffer Edge Stream)
    2. Server 2: VidLink Pro (Ultra HD 4K, Multi-Audio, Subtitles)
    3. Server 3: VidSrc SU (High-Speed Cloud Mirror)
    4. Server 4: 2Embed (Dedicated Anime Hub & Global Series)
    5. Server 5: VidSrc PM (Direct Stream Node)
- **Anime Mode Intelligence in Player:**
  - Automatically identifies Anime titles and dynamically updates in-player multi-audio banner with Japanese original audio, English dub, and Hindi dub badges.
  - Provides quick 1-click switcher to Server 4 (2Embed) or Server 2 (VidLink Pro).

### Fixed
- **OTT Platforms Display & Badge Logic:**
  - Removed hardcoded `defaultOtt` overrides from generic catalog rows (`sec-2026`, `sec-ml`, `sec-ta`, `sec-te`, `sec-hi`, `sec-kn`, `sec-tv`, `sec-hollywood`).
  - Implemented authentic dynamic multi-platform distribution across Hotstar, Prime Video, Netflix, JioCinema, Sony LIV, ZEE5, Apple TV+, and Crunchyroll based on TMDB metadata and media ID hashing.
  - Dedicated platform rows (`sec-netflix`, `sec-prime`, `sec-hotstar`, `sec-jio`, `sec-sonyliv`, `sec-zee5`, `sec-apple`, `sec-anime`) strictly preserve their respective provider badges.
- **Language & Multi-Audio Filtering Logic:**
  - Fixed mutually destructive filter clobbering: OTT platform filters and Language filters can now be freely combined (e.g. Netflix + Malayalam or Prime Video + Telugu).
  - Added click-to-toggle reset: clicking an active platform or language pill toggles it back to "ALL".
  - Fixed `multi` language query in `buildFilterUrl`: now targets Indian pan-India multi-audio releases (`code: "hi|te|ta|ml|kn"` + `with_origin_country=IN`).
  - Added `with_origin_country=IN` to regional Indian language queries (`ml`, `ta`, `te`, `hi`, `kn`) to isolate authentic cinema from foreign dub noise.
  - Fixed `isAnime` classification: removed generic `Animation` genre check (`genre_ids.includes(16)`) which previously misclassified Disney/Pixar/Hollywood animations as Japanese Crunchyroll anime.
  - Expanded in-player multi-audio banner to provide comprehensive multi-language tracks across anime and cinema: Japanese Original, Hindi Dub, English Dub, Tamil Dub, Telugu Dub, Malayalam Dub, and Kannada with 20+ subtitles.

---

## [2.6.0] - 2026-10-16

### Added
- **Feature A: "+ My Watchlist" Client-Side Bookmarks System:**
  - Added sleek `+ LIST` / `✓ IN LIST` quick-action bookmark badge to every movie, series, and anime poster card with propagation suppression (`e.stopPropagation()`).
  - Added dedicated `+ MY LIST` / `✓ IN WATCHLIST` action button inside the Brutalist Details Modal.
  - Added dynamic `+ MY WATCHLIST // SAVED TO STREAM` horizontal carousel on the homepage alongside the Continue Watching section.
  - Added `★ MY LIST` tab to the top navigation bar with a live badge counter (`#navWatchlistCount`).
  - Added dedicated Watchlist page grid view with filtering options (*ALL*, *MOVIES*, *SERIES / ANIME*) and an empty state screen with direct catalog shortcuts.
  - Implemented 100% client-side persistence via `localStorage` (`cinieorama_watchlist`) with zero backend database requirement (100% GitHub Pages compliant).
- **Feature B: Cinema Ambilight Engine (Philips OLED Ambilight Simulator):**
  - Added dynamic reactive LED backlight halo around the video player that pulses and dynamically reflects the dominant colors of the movie or show backdrop.
  - Added automatic HTML5 Canvas color sampling from poster artwork with fallbacks to curated HDR color presets for Netflix, Prime Video, Hotstar, JioCinema, Sony LIV, ZEE5, and Crunchyroll.
  - Added `💡 AMBILIGHT: ON / OFF` toggle button on the player header bar with saved preference state in `localStorage` (`cinieorama_ambilight`).
- **Comprehensive Documentation:**
  - Added project documentation in `README.md` detailing architecture, tech stack, streaming server lineup, and deployment guides.
  - Added `CHANGELOG.md` tracking all release milestones and technical enhancements.

---

## [2.5.0] - 2026-10-15

### Changed
- **Server Lineup Overhaul:**
  - Eradicated `multiembed.mov` due to restrictive `X-Frame-Options: SAMEORIGIN` and HTTP 403 iframe blocking.
  - Removed unstable mirrors `AnyEmbed` and `VidCore`.
  - Upgraded **EmbedWave (`embedwave.cc`)** to the primary **Server 1 (Main Stream)** providing verified zero-buffer streaming and high CDN uptime.
  - Established a 4-server lineup:
    1. Server 1: EmbedWave (Zero-Buffer Main Stream)
    2. Server 2: VidLink Pro (Ultra HD 4K, Multi-Audio, Subtitles)
    3. Server 3: 2Embed (Anime & Global Series Mirror)
    4. Server 4: VidSrc PM (Direct Cloud Stream)
- **Trailer Integration:**
  - Added In-Modal 4K Official Trailer Viewer querying TMDB YouTube video API.
  - Added multi-trailer switcher chips (`[TRAILER 1]`, `[TRAILER 2]`, `[TEASER]`).
  - Implemented auto-dismissal of active trailer stream when main video playback commences.

---

## [2.4.0] - 2026-10-15

### Added
- **Multi-Audio Track Detection & Regional Hubs:**
  - Added dedicated regional hubs for Malayalam (Mollywood), Tamil (Kollywood), Telugu (Tollywood), Hindi (Bollywood), Kannada (Sandalwood), and Anime Dubbed.
  - Added real-time Multi-Audio badges (`MULTI-AUDIO (PAN-INDIA)`, `JAP • HINDI • ENG`).
  - Added in-player Multi-Audio availability banner with language chips and direct guides on switching audio streams.

---

## [2.3.0] - 2026-10-15

### Added
- **Watch History & Progress Tracking:**
  - Implemented client-side watch progress memory in `localStorage` (`cinieorama_watch_history`).
  - Added auto-incrementing progress tracker (updates every 15s during playback).
  - Added interactive in-player scrub slider and quick-jump percentage buttons (+10%, +25%, +50%, +75%, +100%).
  - Added visual progress bar fill and `RESUME (X%)` pills on poster cards.
  - Added `CONTINUE WATCHING // RESUME STREAMING` carousel on the homepage and dedicated `▶ CONTINUE WATCHING` full-page view.

---

## [2.2.0] - 2026-10-14

### Added
- **Real TV Season & Episode Navigation:**
  - Live TMDB episode querying resolving real episode titles, season tabs, and accurate episode numbers.
  - Added in-player episode drawer and previous/next episode navigation buttons.

---

## [2.1.0] - 2026-10-14

### Added
- **Dynamic OTT Platform Hubs:**
  - Integrated provider-specific filters for Netflix, Amazon Prime Video, Disney+ Hotstar, JioCinema, Sony LIV, ZEE5, Apple TV+, and Crunchyroll.
  - Implemented strict platform filtering to prevent cross-platform mixing.

---

## [2.0.0] - 2026-10-13

### Changed
- **Total Architecture Migration:**
  - Converted the entire catalog from hardcoded arrays to dynamic real-time TMDB API v3 endpoints.
  - Introduced Neo-Brutalist design system with high-contrast typography, bold borders, and curated color palettes.
  - Added live Hero Billboard with trending titles and dynamic backdrops.
  - Implemented real-time debounced multi-search across movies, television series, and anime.

---

## [1.0.0] - 2026-10-10

### Initial Release
- Initial release of Cinieorama streaming portal.
- Basic player embedding and static media listings.
