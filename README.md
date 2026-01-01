# Nihal Jani – Personal Portfolio

A premium, single-page personal brand site for Nihal Jani built with plain HTML, CSS, and vanilla JavaScript. The site is mobile-first, dark-themed, and optimized for fast, accessible browsing.

## Quickstart (local)
1. Clone the repository and move into it:
   ```bash
   git clone <repo-url> nihal-portfolio
   cd nihal-portfolio
   ```
2. Open `index.html` directly in your browser, or serve the folder with a simple static server for best results:
   ```bash
   python3 -m http.server 8000
   ```
3. Visit `http://localhost:8000/index.html` in your browser (if you see a 404, ensure the server is running and you’re in the project root).

## Deploying to GitHub Pages
1. Push this repository to GitHub.
2. In your GitHub repo, go to **Settings → Pages**.
3. Under **Source**, select **Deploy from a branch**.
4. Choose the branch (e.g., `main`) and select `/ (root)` as the folder.
5. Save. Your site will be served at `https://<username>.github.io/<repo-name>/` once the build completes.

> Tip: If you hit a 404 on GitHub Pages, wait a minute for the build to finish or use `https://<username>.github.io/<repo-name>/index.html` directly. A `404.html` redirect is included to help route back to the homepage.

## Contents
- `index.html` – Main HTML document with structured sections and SEO tags.
- `styles.css` – Global styles for the premium dark theme, responsive layout, and micro-interactions.
- `script.js` – Navigation toggle, smooth scrolling, floating CTA behavior, and visibility animations.
