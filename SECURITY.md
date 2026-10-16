# 🛡️ Security Policy

## Supported Versions

Only the latest version of **CINIEORAMA** on the `main` branch receives active security updates and node verifications.

| Version | Supported          |
| ------- | ------------------ |
| 2.8.x   | :white_check_mark: |
| < 2.8   | :x:                |

---

## 🔒 Security Architecture & Guarantees

CINIEORAMA is architected as a **100% client-side, zero-database static web application**:
- **No User Credentials Stored:** There are no backend authentication servers, SQL databases, or session cookies.
- **Client-Side Storage Only:** Watchlists and watch progress are stored entirely within the user's browser `localStorage`.
- **Iframe Sandboxing & Isolation:** Third-party streaming frames operate in isolated contexts to protect users against session hijacking.
- **No Telemetry or Tracking:** The project does not collect, log, or sell any personal identifying information or browsing habits.

---

## 🚨 Reporting a Vulnerability

If you discover a security vulnerability or a rogue streaming node performing unauthorized redirects, please report it responsibly:

1. **Do not open a public issue.**
2. Send an email to the repository maintainers or file a confidential security advisory via GitHub Security tab.
3. Include:
   - Nature of the vulnerability (e.g. malicious redirect, XSS vector, broken dependency).
   - Steps or proof-of-concept to reproduce.
   - Impact assessment.

We take security reports seriously and aim to review and address verified issues within 48 hours.

---

## ⚠️ Third-Party Embed Warning

CINIEORAMA embeds publicly available video players hosted on third-party servers. We strongly encourage users to use modern ad-blocking extensions (such as uBlock Origin or Brave Shields) when browsing the web to shield against aggressive third-party popups.
