# Ankit Kushwaha -- 3D Creator Portfolio

A single-page portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Editing content later

Everything you're likely to want to change -- your name, tagline, about text,
services, project images/names, and the marquee GIFs -- lives in one file:

```
src/data/siteData.ts
```

Open that file, edit the text/URLs, save, and the site updates. You do not
need to touch any component files for normal content edits.

To change your name in the giant "Hi, i'm ___" heading, edit `firstName` in
`siteInfo` at the top of `siteData.ts`.

## Local development

```bash
npm install
npm run dev
```

This starts a dev server (default http://localhost:5173) with hot reload.

## Building for production

```bash
npm run build
```

This produces a static build in the `dist/` folder -- plain HTML/CSS/JS that
can be uploaded to any static host or server.

## Deploying via GitHub Pages (recommended, free)

This project already includes a GitHub Actions workflow
(`.github/workflows/deploy.yml`) that builds and publishes the site
automatically every time you push to `main`.

1. Create a new repo on GitHub (e.g. `ankit-portfolio`) and push this project to it:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. If you're deploying to `https://<your-username>.github.io/<repo-name>/`
   (a project page, which is the default for a repo that isn't named
   `<your-username>.github.io`), open `vite.config.ts` and set:
   ```ts
   base: '/<repo-name>/',
   ```
   replacing `<repo-name>` with your actual repo name. If you're using a
   custom domain or a `<your-username>.github.io` user repo, leave `base: '/'`.
3. On GitHub, go to your repo's **Settings -> Pages** and set **Source** to
   **GitHub Actions**.
4. Push again (or re-run the workflow from the **Actions** tab). After it
   finishes, your site will be live at the URL shown in the workflow run
   (also visible under **Settings -> Pages**).

From then on, every `git push` to `main` rebuilds and redeploys the site
automatically -- no manual build/upload needed.

### Using a custom domain with GitHub Pages
Add a `CNAME` file containing just your domain (e.g. `ankitkushwaha.com`) to
the `public/` folder so it's included in the build, then point your domain's
DNS at GitHub Pages following [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Deploying to your own server (alternative)

The `dist/` folder is a completely static site, so it can be deployed to
almost anything:

- **Any web server (Nginx/Apache):** copy the contents of `dist/` to your
  server's web root (e.g. `/var/www/html`) and point the server at
  `index.html`.
- **Vercel / Netlify:** connect the repo (or drag-and-drop the `dist` folder)
  -- build command `npm run build`, output directory `dist`.
- **GitHub Pages / any static host:** upload the contents of `dist/` directly.

### Simple Nginx example

```nginx
server {
  listen 80;
  server_name yourdomain.com;
  root /var/www/ankit-portfolio/dist;
  index index.html;
  location / {
    try_files $uri $uri/ /index.html;
  }
}
```

## Project structure

```
src/
  data/siteData.ts       <- all editable content
  components/            <- reusable pieces (buttons, FadeIn, Magnet, AnimatedText)
  sections/               <- the 5 page sections (Hero, Marquee, About, Services, Projects)
  App.tsx                 <- assembles the sections in order
  index.css               <- global styles, Kanit font, gradient heading class
```
