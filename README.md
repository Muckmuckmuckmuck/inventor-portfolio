# Jay Reddy · Inventor Portfolio

A static website that documents original inventions for review and academic transfer consideration.
Each invention is written up with a problem statement, a full design, labeled schematics, a feasibility
analysis, and a prototyping plan. The site is built to grow toward fifty entries without losing depth.

Live structure:

```
inventor-portfolio/
├── index.html                  Landing page: hero, inventor profile, catalog grid
├── 404.html                    Friendly not-found page
├── .nojekyll                   Tells GitHub Pages to serve files as-is
├── assets/
│   ├── css/styles.css          One stylesheet for the whole site
│   ├── js/main.js              Mobile nav, scroll reveal, active table of contents
│   └── img/                    Image assets (currently empty, icons are inline SVG)
└── inventions/
    ├── visiongrip.html         001 · Context aware neural prosthetic
    ├── productivityflows.html  002 · Enterprise vision platform
    └── _template.html          Copy this to add invention 003 and beyond
```

No build step, no framework, no dependencies. It is plain HTML, CSS, and a small amount of vanilla
JavaScript, which is the most reliable thing to host on GitHub Pages.

---

## View it locally

From inside this folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in a browser. Any static file server works.

---

## Publish to GitHub Pages

You need a GitHub account. These steps use the website, so no extra tools are required.

### 1. Create a new repository
- Go to https://github.com/new
- Name it. Two good options:
  - `inventor-portfolio` gives you a URL like `https://YOURNAME.github.io/inventor-portfolio/`
  - `YOURNAME.github.io` gives you a clean URL like `https://YOURNAME.github.io/`
- Leave it public. Do not add a README, the one in this folder will be used.

### 2. Push this folder
Run these commands from inside `inventor-portfolio` (replace the URL with your new repo):

```bash
git init
git add .
git commit -m "Inventor portfolio: VisionGrip and ProductivityFlows"
git branch -M main
git remote add origin https://github.com/YOURNAME/REPO.git
git push -u origin main
```

### 3. Turn on Pages
- In the repository, open **Settings → Pages**
- Under **Build and deployment**, set **Source** to **Deploy from a branch**
- Choose branch **main** and folder **/ (root)**, then **Save**
- Wait a minute, then refresh. GitHub shows the live URL at the top of that page.

That is it. Every time you push to `main`, the site updates.

---

## Add a new invention

1. Copy the template:
   ```bash
   cp inventions/_template.html inventions/your-invention.html
   ```
2. Open the new file and replace every `{{PLACEHOLDER}}`.
3. Replace the schematic SVG in section 04 with your own drawing. Reuse the `bp-` CSS classes
   (`bp-fill`, `bp-stroke`, `bp-label`, `bp-tag`) to keep the blueprint look consistent.
4. Add a card to the catalog on `index.html`. Copy one of the existing `<a class="inv-card">` blocks,
   update the number, title, summary, and link, and drop in a small thumbnail SVG.
5. Commit and push.

The shared stylesheet and script handle the rest, including the sticky table of contents and the
scroll animations.

---

## Notes on the writing

The pages are written to be read by a person who wants to understand or challenge the engineering, not
to sell. Each invention is honest about what is proven, what is risky, and what is still unknown. The
ProductivityFlows page in particular treats privacy, consent, and labor law as core design requirements,
because a worker monitoring system is only defensible if it does.

The dates listed on each invention page (in the header meta block) are the recorded dates of conception.
Update them in the HTML if your records differ.

© Jay Reddy. All concepts, writing, and drawings are the work of the inventor.
