# Shubham Kumar Singh: Portfolio Website

Portfolio of **Shubham Kumar Singh**, a frontend and e-commerce developer from New Delhi.
I build Shopify and WordPress stores, design product pages and creatives, and run Google Ads.

Built with plain **HTML**, **CSS** and **JavaScript**. There is no framework and nothing to install.

---

## What's on the page

- **Hero:** introduction, photo, key numbers, and a strip of all five live stores
- **Brands:** a logo wall of 9 brands I've worked with
- **About me** and **Skills**
- **My projects:** Aapka Saman (featured), Nestura, DealsBucket, Just Buy It and PERIUS, each opening the live store in a new tab, plus links to DreamyHome, Himveda and Underscape
- **Google Ads results:** ₹16.9 lakh spend, 5,700+ conversions, 2.13 crore impressions and 4.85 lakh clicks across 3 accounts, with dashboard screenshots
- **How I launch a product**, **Experience**, **Education** and **Contact**

---

## Folder structure

```
portfolio-website/
├── index.html                  ← page content
├── css/style.css               ← design: colours, fonts, layout, mobile
├── js/main.js                  ← mobile menu, active menu link, live previews
├── assets/
│   ├── Shubham-Kumar-Singh-Resume.pdf
│   └── images/
│       ├── shubham.jpg          ← my photo
│       ├── favicon.svg          ← browser tab icon
│       ├── brands/              ← brand logos (transparent PNG)
│       ├── projects/            ← store screenshots
│       └── results/             ← Google Ads dashboard screenshots
├── .gitignore
└── README.md
```

---

## Run it on your computer

1. Open VS Code, then **File › Open Folder** and choose `portfolio-website`.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click `index.html` and choose **Open with Live Server**.

You can also double-click `index.html` to open it in any browser.

---

## Publish it free on GitHub Pages

1. Sign in to GitHub and click **+ › New repository**.
2. Name it exactly `YOUR-USERNAME.github.io` (your GitHub username, all lowercase), set it to **Public**, and click **Create repository**.
3. On the new repository page, click **uploading an existing file**.
4. Open the `portfolio-website` folder on your computer, select **everything inside it** (not the folder itself), and drag it into the browser.
5. Wait until every file has uploaded, then click **Commit changes**.
6. Go to **Settings › Pages**. Under **Build and deployment**, choose **Deploy from a branch**, pick **main** and **/ (root)**, then click **Save**.
7. After 1 to 2 minutes your site is live at `https://YOUR-USERNAME.github.io`.

To update the site later, upload the changed files the same way. They replace the old ones.

---

## Edit guide: where to change what

Open the folder in VS Code. Use **Ctrl + F** to search for the text in the "Search for" column.

| I want to change... | File | Search for |
| --- | --- | --- |
| Any text, name, numbers, links | `index.html` | the text itself, for example `₹16.9 lakh` |
| A whole section | `index.html` | `<!-- ================= SECTION NAME` (HERO, PROJECTS, GOOGLE ADS RESULTS...) |
| My photo | `assets/images/shubham.jpg` | replace the file, same name, portrait shape |
| Photo size and position | `css/style.css` | `.photo-frame` (`left`, `right`, `bottom`) |
| Name card on the photo | `css/style.css` | `.name-card` (`bottom` moves it up or down) |
| Store preview next to the photo | `css/style.css` | `.float-site` (`top` moves it up or down, `width` changes size) |
| Google Ads card under the photo | `css/style.css` | `.float-ads` (`width` changes size) |
| Yellow "Shopify + WordPress" tag | `css/style.css` | `.sticker` |
| Phone layout of the photo area | `css/style.css` | `/* Phones */`, then the rules below it |
| Brand logos | `index.html` | `logo-grid` (add a PNG to `assets/images/brands/` and copy one `<li>`) |
| Logo size | `css/style.css` | `.logo-tile img` (`max-height`) |
| Main colour (violet) | `css/style.css` | `--accent` |

Tips:
- To **hide** something without deleting it, wrap it in `<!--` and `-->` in `index.html`.
- Save the file, then refresh the browser to see the change. With Live Server it refreshes by itself.
- If something breaks, press **Ctrl + Z** to undo, or copy the file again from the zip.

---

## Easy changes

- **Colours:** change `--accent: #5B3DF5;` at the top of `css/style.css`.
- **Store screenshots:** replace the files in `assets/images/projects/`, keeping the same names. Nestura has no screenshot yet, so it shows a live preview. Add `nestura.jpg` (1280 × 800) to replace it.
- **Résumé:** replace `assets/Shubham-Kumar-Singh-Resume.pdf` with a new file of the same name.
- **Add a project:** copy one `<article class="project-card">` block in the **PROJECTS** part of `index.html` and change the link, name, text and image.
