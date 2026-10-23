# Joseph Waweru: Software Developer & AI Engineer

Personal portfolio for Joseph Waweru, a software developer and AI engineer based in Dar es Salaam, Tanzania.

A fast, static, single-page site built with plain HTML, CSS, and JavaScript (ES modules). There's no build step, no framework, and no backend, so it deploys to Vercel as-is.

## Project structure

```
joseph-waweru-portfolio/
├── index.html            Main page (entry point)
├── style.css             All styles
├── script.js             Rendering and interactions
├── data/
│   └── content.js        Profile, skills, projects, approach: edit content here
├── assets/
│   └── images/
│       ├── joseph-waweru.jpg   Profile photo
│       └── og-image.jpg        Social sharing preview (1200x630)
├── favicon.svg
├── 404.html              Custom "page not found" page (Vercel serves it automatically)
├── robots.txt
├── sitemap.xml
├── README.md
└── .gitignore
```

## Editing content

Almost everything you'll want to change is in **`data/content.js`**:

- **Education:** the Bachelor of Mathematics and Computer Science is listed in About. Add the university name and years in the `education` list; empty fields stay hidden.
- **Degree foundations:** the computer science and mathematics subjects shown under Skills are in the `foundations` list. They're the core subjects of a Mathematics and Computer Science degree, so remove any you didn't study and add any that are missing.
- **Skills:** remove any technology you haven't used, or move it between groups. No percentages are used anywhere.
- **Projects:** the six projects are **concepts** and are labelled as such on the site. When you build one, change its `status` to `"Live"` or `"Shipped"`, and add real `repo` and `demo` URLs. GitHub and Live demo buttons only appear when a real URL is set.
- **CV:** add your PDF to `assets/` (for example `assets/Joseph_Waweru_CV.pdf`), then set `cvPath: "assets/Joseph_Waweru_CV.pdf"`. The Download CV button appears automatically.
- **GitHub and LinkedIn:** paste your profile URLs into `links.github` and `links.linkedin`. Their buttons stay hidden while empty.

Text in the hero, About, and Contact sections is in `index.html`.

### After you know your final web address

The site assumes the address `https://joseph-waweru.vercel.app/`. If yours is different (for example `joseph-waweru-abc.vercel.app` or a custom domain), find and replace that address in:

- `index.html` (canonical link, Open Graph and Twitter tags, structured data)
- `robots.txt`
- `sitemap.xml`

## Run it locally (optional)

Because the site uses JavaScript modules, open it through a small local server rather than double-clicking the file:

```bash
# from the project folder
python3 -m http.server 8000
# then visit http://localhost:8000
```

or `npx serve .` if you have Node.js.

---

## Upload to GitHub

### From a computer (no command line)

1. Sign in at **github.com** and click **New** (or **+ → New repository**).
2. Name it `joseph-waweru-portfolio`, keep it **Public**, and don't add a README (this project has one). Click **Create repository**.
3. On the new repository page, click **uploading an existing file**.
4. Unzip the project, open the folder, select **everything inside it** (including the `data` and `assets` folders) and drag it into the browser.
5. Click **Commit changes**.

> Tip: `.gitignore` starts with a dot and may be hidden. It's optional, so it's fine if it doesn't upload.

### From a computer (Git command line)

```bash
cd joseph-waweru-portfolio
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/joseph-waweru-portfolio.git
git push -u origin main
```

### From a phone

1. Unzip the file with your phone's Files app.
2. Open **github.com** in your browser (desktop mode helps), create the repository as above, then tap **uploading an existing file**.
3. Upload the files. Phone browsers often can't upload whole folders, so if `data/` and `assets/images/` don't come through:
   - Tap **Add file → Create new file** and type `data/content.js` as the name (typing `/` creates the folder), paste the file's contents, and commit.
   - For the images, open the `assets/images` path the same way and use **Add file → Upload files** inside it.

## Deploy on Vercel

1. Go to **vercel.com** and sign up with your GitHub account.
2. Click **Add New → Project** and **Import** `joseph-waweru-portfolio`.
3. Settings:
   - **Framework Preset:** Other
   - **Build Command:** leave empty
   - **Output Directory:** leave empty (the project root)
   - **Install Command:** leave empty
4. Click **Deploy**. In under a minute you'll get a live URL.

No `vercel.json` is needed: Vercel serves `index.html` and the custom `404.html` automatically.

Every time you change a file on GitHub, Vercel redeploys the site on its own.

## Testing checklist (on the live site)

- [ ] Page loads on a phone and on a computer, with no sideways scrolling.
- [ ] The menu button opens and closes on mobile, and each link jumps to the right section.
- [ ] **View my projects** and **Contact me** scroll to the correct sections.
- [ ] Each project's **View details** opens and closes (also with the Escape key).
- [ ] **Email me** opens an email to josekariiz2018@gmail.com.
- [ ] **Call me** dials +255 744 976 150 on a phone.
- [ ] **Copy email** shows a "Copied" confirmation.
- [ ] No Download CV, GitHub, or LinkedIn buttons appear until real links are configured.
- [ ] Visiting a made-up address such as `/abc` shows the custom 404 page.
- [ ] Sharing the link in WhatsApp or LinkedIn shows the preview image (may take a few minutes to refresh).
- [ ] The site still reads clearly with **Reduce motion** turned on in your device settings.

## Adding a custom domain later

1. Buy a domain (for example from Namecheap, Cloudflare, or a Tanzanian `.co.tz` registrar).
2. In Vercel, open the project, then **Settings → Domains → Add**, and enter your domain.
3. Vercel shows the DNS records to add (usually an **A** record for the root domain and a **CNAME** for `www`). Add them at your registrar.
4. Wait for DNS to update (minutes to a few hours). Vercel issues HTTPS automatically.
5. Update the web address in `index.html`, `robots.txt`, and `sitemap.xml` as described above.

## Credits

- Icons: [Lucide](https://lucide.dev) (ISC licence), loaded from a CDN. The page remains fully readable if icons fail to load.
- Fonts: Sora, IBM Plex Sans, and JetBrains Mono from Google Fonts, with system-font fallbacks.
