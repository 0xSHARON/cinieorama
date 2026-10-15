# 🔒 Privacy Policy & Data Handling

**Effective Date:** October 16, 2026  
**Last Updated:** October 16, 2026

At **CINIEORAMA**, we believe privacy is a fundamental human right. This Privacy Policy explains our zero-telemetry, client-side data handling practices and how your information is handled when using the Service.

---

## 1. Zero Personal Data Collection

CINIEORAMA does not collect, harvest, store, or sell any personal data:
- **No User Accounts:** You are never asked to register, sign in, or provide an email address, name, or phone number.
- **No Backend Databases:** There are no backend database servers storing user IP addresses, viewing histories, or identities.
- **No Analytics Trackers:** We do not embed Google Analytics, Meta Pixel, or third-party behavioral fingerprinting trackers on our pages.

---

## 2. Client-Side Local Storage (`localStorage`)

To provide convenience features without server-side tracking, CINIEORAMA stores data **strictly locally on your device** using your browser's Web Storage API (`localStorage`):

| Storage Key | Purpose | Storage Duration |
|---|---|---|
| `cinieorama_watchlist` | Stores movies, series, and anime bookmarked via "+ LIST". | Until manually cleared by the user. |
| `cinieorama_watch_history` | Stores recently streamed titles and episode/percentage progress. | Until manually cleared by the user. |
| `cinieorama_ambilight` | Saves your preference for the Cinema Ambilight LED glow effect (`true`/`false`). | Persistent until cleared. |

**You are always in complete control of your data:**
- You can clear your watch history anytime by clicking `CLEAR HISTORY ✕` on the homepage or history tab.
- You can clear your bookmarks anytime by clicking `CLEAR LIST ✕` in the Watchlist tab.
- You can clear all data instantly via your browser settings (`Clear Site Data` / `Cookies and Local Storage`).

---

## 3. Third-Party Network Requests

When you use CINIEORAMA, your browser makes external network requests directly to the following third-party services:
1. **The Movie Database (TMDB) API:**
   - Queries metadata, posters, backdrops, and trailer keys.
   - Handled in accordance with [TMDB's Privacy Policy](https://www.themoviedb.org/privacy-policy).
2. **Third-Party Video Streaming Nodes (`<iframe>`):**
   - When you launch a video player, your browser connects directly to the selected streaming CDN (such as EmbedWave, VidLink Pro, VidSrc SU, 2Embed, or VidSrc PM).
   - These external web servers may log your IP address, browser headers, or set their own cookies in accordance with their respective privacy policies.
   - CINIEORAMA does not share any of your `localStorage` data with these external servers.

---

## 4. Children's Privacy

CINIEORAMA does not knowingly collect any information from children under the age of 13. Because our service requires zero registration and collects no personal data, no personal data from minors is retained.

---

## 5. Security & Browser Sandboxing

- CINIEORAMA uses HTTPS encryption for all external metadata endpoints.
- Embedded streaming players are sandboxed within isolated browser contexts to prevent cross-frame script execution and unauthorized access to your local site data.
- We strongly recommend using browser ad-blocking extensions (e.g. uBlock Origin) to prevent unwanted tracking from third-party advertising networks on external player domains.

---

## 6. Updates to This Policy

We may periodically update this Privacy Policy. Any updates will be committed to this document with a revised effective date.

---

## 7. Contact Us

If you have questions about this Privacy Policy or our client-side storage architecture, please check [SECURITY.md](SECURITY.md) or open an inquiry on our official GitHub repository.
