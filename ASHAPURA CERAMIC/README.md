# Ashapura Ceramic Website

A premium, responsive static showroom website built with HTML5, CSS3 and vanilla JavaScript.

## Run locally

Open `index.html` directly in a browser, or use VS Code's Live Server extension. No build step or package installation is required.

## First things to replace

1. Open `js/script.js` and update the clearly marked `CONFIG` values: `phone`, `whatsapp`, `address`, `email`, `googleMaps` and `instagram`.
2. Replace the curated image URLs in the `IMAGE_URLS` object in `js/script.js` with your approved showroom, product and project photography, or replace the local SVG fallbacks in `images/hero`, `images/products`, `images/gallery` and `images/about`. Keep the filenames, or update the matching paths in `js/script.js` and `index.html`.
3. Add your real logo by replacing the brand mark in `index.html` or adding a logo image in `images/logo`.

## Notes

- WhatsApp links use `CONFIG.whatsapp` as country code plus digits only, such as `919876543210`.
- The contact form opens a validated, pre-filled WhatsApp message and does not send data to a backend.
- Product cards and category cards are data-driven in `js/script.js` for easy editing.
- Product quick view, gallery lightbox, ESC close, material switching, scroll reveal and reduced-motion support are included without a build step.
- Placeholder artwork is custom local SVG artwork so the project has no broken asset paths and does not rely on unlicensed stock imagery.
- The current remote references use curated Unsplash architectural photography with responsive crop widths; local SVG artwork remains the offline fallback.
