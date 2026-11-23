# Masters FC website

A responsive, green-branded static club website for Masters FC. It currently uses plain HTML, CSS and JavaScript so it can be hosted on GitHub Pages or another static host without a build step.

## Run locally

1. Download or clone this repository.
2. Open `index.html` in a browser, or serve the folder with a local static server (for example `python -m http.server 8000`).
3. Add the provided image files to the project root and update their names in `data.js`.

## Update the content

Edit `data.js` to change the club details, results, fixtures, squad, sponsors, news, statistics and image filenames. Keep values as JavaScript strings/arrays/objects. Use HTTPS addresses for externally hosted images and news sources. Replace placeholder contact details, approximate dates and unverified club history with club-confirmed information before publication.

Photo slots let a visitor preview an image from their own device. The preview is temporary: it is not uploaded, saved, or visible to other visitors.

## Important functional limits

This version is a **static website**, not the previously discussed Next.js/Supabase application. It has no database, admin login, API, persistent content management, or working contact submission. The contact form intentionally does not transmit or store personal information. A production contact form or admin CMS requires a trusted server/API, authentication, server-side validation, abuse protection and secure secret management. Do not put database credentials or private keys in browser JavaScript.

## Security and accessibility notes

- Dynamic content is HTML-escaped before rendering; image and link addresses are restricted to HTTPS or same-origin relative URLs.
- External news links use `rel="noopener noreferrer"`.
- Temporary image previews are limited to image MIME types up to 5 MB and are never uploaded.
- The site includes semantic landmarks, keyboard-visible focus, a skip link, accessible navigation and tabs, reduced-motion support, and dialog-based news details.
- A static page cannot set all recommended HTTP security headers itself. Configure the hosting provider to serve HTTPS and headers such as `Content-Security-Policy`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, and an appropriate `Permissions-Policy`. Tailor CSP to the deployed host and Google Fonts usage; do not copy a policy without testing it.

## Files

- `index.html` — document shell and asset loading
- `styles.css` — responsive visual system
- `app.js` — client-side navigation, rendering and interactions
- `data.js` — editable site content
- `crest.js` — club crest SVG artwork

## Verification

No build system or automated tests are configured because this is a no-build static site. Review the content and test navigation, news dialogs, search, responsive layouts and image previews in current desktop and mobile browsers before launch.
