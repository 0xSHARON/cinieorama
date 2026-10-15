# 📲 Cinieorama Installation Guide

Cinieorama is designed as a **Progressive Web App (PWA)** that can be installed on any device (Windows, macOS, Android, iPhone, iPad, Linux, ChromeOS) without requiring App Store downloads, APK side-loading, or admin permissions.

---

## 🌐 Quick Access
- **Official Live Web App:** [https://0xsharon.github.io/cinieorama/](https://0xsharon.github.io/cinieorama/)
- **Local Development URL:** `http://localhost:3000/`

---

## 💻 1. Windows 10 / 11 & macOS Desktop Installation

### Using Google Chrome or Microsoft Edge (Recommended)
1. Open [https://0xsharon.github.io/cinieorama/](https://0xsharon.github.io/cinieorama/) in **Chrome** or **Edge**.
2. Look at the right side of the address bar (URL bar).
3. Click the **Install** button (icon depicting a computer screen with a downward arrow).
4. Alternatively, click the top-right button in Cinieorama: **`[📥 INSTALL APP]`**.
5. When the prompt asks *"Install app: Cinieorama // Cinema & Anime Hub?"*, click **Install**.
6. **Result:**
   - A dedicated desktop shortcut and Windows Start Menu / macOS Launchpad app entry is created.
   - The app launches in a clean, borderless standalone cinema window with full hardware GPU acceleration.

### Using Brave Browser
1. Open the website in Brave.
2. Click the hamburger menu (three horizontal lines) in the top-right corner.
3. Select **"Install Cinieorama..."**.
4. Click **Install**.

---

## 📱 2. Android Mobile & Tablet Installation

### Using Google Chrome or Brave
1. Open [https://0xsharon.github.io/cinieorama/](https://0xsharon.github.io/cinieorama/) on your Android device.
2. Tap the **`[📥 INSTALL APP]`** button in the top navigation bar.
3. If your browser displays an **"Add Cinieorama to Home screen"** prompt at the bottom, tap **Install** or **Add**.
4. **Manual fallback:**
   - Tap the **three vertical dots (⋮)** in the top-right corner of Chrome.
   - Tap **"Install app"** or **"Add to Home screen"**.
   - Tap **Install**.
5. **Result:**
   - Cinieorama appears directly in your Android App Drawer alongside your native apps.
   - Launches in immersive full-screen mode with native status bar theming.

---

## 🍏 3. Apple iPhone & iPad (iOS / iPadOS) Installation

Apple iOS uses Safari's built-in Home Screen web application engine:

1. Open [https://0xsharon.github.io/cinieorama/](https://0xsharon.github.io/cinieorama/) in **Safari** (Chrome on iOS does not support PWA installation due to iOS WebKit constraints).
2. Tap the **Share button** (the square icon with an upward-pointing arrow ⬆️) located at the bottom of the screen on iPhone or top-right on iPad.
3. Scroll down the action sheet and tap **"Add to Home Screen"** (icon with a plus sign ➕).
4. (Optional) Confirm the name **Cinieorama**.
5. Tap **"Add"** in the top-right corner.
6. **Result:**
   - The official Cinieorama cinema icon appears on your iOS Home Screen.
   - Opening it runs without Safari browser tabs, navigation toolbars, or URL address bars.

---

## 🐧 4. Linux & ChromeOS Installation

1. Open [https://0xsharon.github.io/cinieorama/](https://0xsharon.github.io/cinieorama/) in Chromium, Google Chrome, or Microsoft Edge for Linux.
2. Click the install icon in the URL bar or tap **`[📥 INSTALL APP]`**.
3. Confirm installation.
4. An `.desktop` launcher is automatically added to your application launcher (GNOME, KDE Plasma, XFCE, or ChromeOS shelf).

---

## 🛠️ 5. Running Locally (Offline / Self-Hosted)

If you wish to clone and run Cinieorama locally on your own machine:

```bash
# 1. Clone the repository
git clone https://github.com/0xSHARON/cinieorama.git

# 2. Enter the directory
cd cinieorama

# 3. Start the zero-dependency local server
node server.js
```

Then navigate to `http://localhost:3000/` in your browser and click **`[📥 INSTALL APP]`**.

---

## ✨ Why Install as a PWA?

| Feature | Standard Browser Tab | Installed Cinieorama App |
| :--- | :--- | :--- |
| **Window Frame** | Browser tabs & URL bar visible | **Borderless immersive theater mode** |
| **Launch Speed** | Must open browser & type URL | **1-click from Taskbar / Home Screen** |
| **GPU Acceleration** | Throttled by background tabs | **Full GPU stream hardware acceleration** |
| **Privacy & Storage** | Shared browser cookies | **Isolated local localStorage sandbox** |
| **Offline Shell** | Requires active connection | **Service Worker shell cache enabled** |
