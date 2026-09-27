# Aura Studio website — your guide

Everything you need to update the site yourself and put it online. You only ever edit plain text files. Any free code editor works, such as **VS Code**, or **Notepad** on Windows.

> **Golden rule:** edit only the files in `data/`, plus `index.html` for headings and paragraphs. Leave `js/` alone.

---

## 1. What's in the folder

| Folder / file | What it is |
|---|---|
| `index.html` | Homepage |
| `portfolio.html` | Full portfolio with filters and lightbox |
| `data/` | **All the content you'll edit**: contact details, designs, services, packages |
| `css/tokens.css` | Colours and fonts |
| `images/portfolio/` | Your designs: `full/` (about 2000 px) and `thumb/` (about 800 px) |
| `images/typesetting/` | Preview pages from typesetting documents |
| `images/logo/` | Your logo kit and app icons |

---

## 2. Add a new design to the portfolio

1. **Export the design** from Canva or Photoshop as **JPG**, about **2000 px** on the long side.
2. **Name the file** in lowercase with dashes and no spaces, for example `al-biology-2027-launch.jpg`.
3. **Put it in** `images/portfolio/full/`.
4. *(Optional)* Put an 800 px copy with the same name in `images/portfolio/thumb/`. It makes the grid load faster.
5. **Open** `data/portfolio-data.js`, copy one block, and paste it where you want the design to appear. The first block shows first.

```js
  {
    id: "al-biology-2027-launch",
    title: "A/L Biology 2027 class launch",
    categories: ["social", "education"],
    size: "Social media post",
    image: "images/portfolio/full/al-biology-2027-launch.jpg",
    thumb: "images/portfolio/thumb/al-biology-2027-launch.jpg",
    description: "Launch post for a new A/L Biology class, with the weekly schedule.",
    year: "2026",
    featured: false,
    visible: true
  },
```

**Categories you can use:** `social`, `flyers`, `banners`, `education`, `business`. The typesetting filter comes from its own file (see section 3).

**Useful switches:**
- `featured: true` also shows the design on the homepage. Keep about 8 featured.
- `visible: false` hides a design without deleting it.
- `gallery: ["images/portfolio/full/my-design-2.jpg"]` adds extra images to the same project, such as another size or layout.
- If you leave out `thumb`, the full image is used.

**Share one design with a client:** open it on the website and tap **Share this design**. The link opens that exact design.

---

## 3. Add a typesetting sample

1. Export **2–3 pages** of the PDF as images, about **1240 px wide**. Never upload the whole paper.
2. Put them in `images/typesetting/full/`, for example `al-biology-tute-p01.jpg`.
3. In `data/typesetting-data.js`, copy a block and edit it:

```js
  {
    id: "sm-biology-cell-tute",
    title: "Cell biology tute",
    medium: "Sinhala",            // "Sinhala" or "English"
    level: "A/L",                 // "A/L", "O/L" or "Campus"
    subject: "Biology",
    type: "Tute",
    pageCount: 12,                // pages in the real document
    features: ["Diagrams", "Tables"],
    pages: ["images/typesetting/full/al-biology-tute-p01.jpg", "images/typesetting/full/al-biology-tute-p02.jpg"],
    thumbs: [],
    visible: true
  },
```

Sinhala samples show under the **Sinhala** switch on the homepage, and English samples under **English**.

---

## 4. Add or change a service

Open `data/services-data.js`. Each line is one service card. The contact form's "Service required" list also comes from here.

```js
  { symbol: "Lg", title: "Logo Design", text: "Simple, memorable logos for local businesses.", examples: "business" },
```

- `symbol` is one or two characters shown in the tile. Sinhala works too, like `"අA"`.
- `examples` links the card to a portfolio filter. Leave it out, and the card shows **Ask about this**, which opens WhatsApp with the service name.
- On phones, the first 6 services show, followed by a **Show all** button. Put your most important services first.

---

## 5. Change the phone number or WhatsApp number

Open `data/site-config.js`:

```js
  phoneDisplay: "074 367 9781",     // how it's written on the site
  phoneLink: "+94743679781",        // for tap-to-call
  whatsapp: "94743679781",          // 94 + number without the first 0, no spaces
```

Every WhatsApp button, the contact form, the phone link and the footer update automatically.

**One extra place:** in `index.html`, search for `"telephone"` in the *Business details for Google* block and change it there too.

---

## 6. Add Facebook, TikTok and Instagram links

In `data/site-config.js`:

```js
  facebook: "https://www.facebook.com/share/1GofyBR9v7/?mibextid=wwXIfr",
  tiktok: "https://www.tiktok.com/@yourpage",
  instagram: "https://www.instagram.com/yourpage"
```

TikTok and Instagram stay hidden until you add a link. Once you do, they appear in the contact section and the footer.

**Tip:** if your Facebook page has a permanent address, like `facebook.com/aurastudiolk`, use that instead of the share link. Update it in `index.html` too: search for `"sameAs"`.

---

## 7. Change colours

Open `css/tokens.css`. All colours are at the top:

```css
  --ink:#11143A;     /* Aura Ink: text, dark sections */
  --uv:#6C4BFF;      /* Ultraviolet: the main button */
  --mist:#EEF0F6;    /* Mist: light backgrounds */
```

Change a value and it changes everywhere. Your brand guide's rule is to use Ultraviolet **once per screen**, on the main button.

---

## 8. Change text

| Text | Where |
|---|---|
| Hero headline and buttons | `index.html`, section `2. HERO` |
| About paragraph and focus list | `index.html`, section `3. ABOUT` |
| Why choose us, process steps | `index.html`, sections `WHY CHOOSE` and `OUR PROCESS` |
| Call to action, contact titles | `index.html`, sections `11` and `12` |
| Service cards | `data/services-data.js` |
| Portfolio titles and descriptions | `data/portfolio-data.js` |
| Page title in Google and link previews | `<title>` and `description` at the top of `index.html` |

Each section in `index.html` starts with a comment like `<!-- 3. ABOUT -->`, so use your editor's search to find it. Change only the words between the tags.

**Sinhala text:** always type Sinhala in **Unicode** (Iskoola Pota style), never FM fonts. FM text shows as broken letters on phones.

---

## 9. Fill in your social media packages

Open `data/packages-data.js`. Anything in **[square brackets]** is hidden from visitors until you replace it:

```js
    includes: ["12 post designs each month", "4 TikTok videos each month", "Captions and hashtags"],
```

While a package still has bracketed lines, visitors see *"Ask us on WhatsApp for the full details"*. No prices are shown anywhere.

---

## 10. Preview on your computer

Double-click `index.html` to open it in Chrome. Everything works except **Share this design**, which needs the site to be online.

---

## 11. Put the website online

### Option A: Netlify Drop (easiest, free)

1. Unzip `aura-studio-website.zip`. You'll get a folder named `aura-studio-website`.
2. On a computer, go to **app.netlify.com/drop**.
3. Drag the **`aura-studio-website` folder** onto the page. In a few seconds you'll get a live address ending in `.netlify.app`.
4. **Sign up for a free account and claim the site.** Sites that aren't claimed expire.
5. In the site settings, change the name, for example `aurastudio.netlify.app`.

**To update later:** edit your files, then open your site's dashboard on Netlify and drag the folder into the **Production deploys** drop area.

### Option B: Your own hosting (Hostinger, cPanel and similar)

1. Open the **File Manager** and go into `public_html`.
2. Upload `aura-studio-website.zip` and **Extract** it.
3. Move everything *inside* the folder into `public_html`, so `index.html` sits directly in `public_html`.

### Your own domain

Buy a domain, such as a `.lk` from the LK Domain Registry or a `.com` from any registrar. Then follow your host's "add custom domain" steps. On Netlify: **Domain management → Add a domain**.

---

## 12. After it's online: checklist

- [ ] **Link previews.** In `index.html` and `portfolio.html`, change `og:url` and `og:image` to full addresses, for example
      `https://www.yourdomain.lk/images/og/aura-studio-og.jpg`. Upload again.
- [ ] Paste your address into **Facebook's Sharing Debugger** (developers.facebook.com/tools/debug) and click **Scrape Again**, so Facebook shows the new preview.
- [ ] On your phone, send a test message through the contact form.
- [ ] Tap a few designs and try **Ask for something similar**.
- [ ] Confirm your clients are happy for their designs to be shown.

---

## 13. If something goes wrong

| Problem | Fix |
|---|---|
| A new image doesn't show | Check the file name matches exactly. Online, `Poster.JPG` and `poster.jpg` are different. |
| The portfolio or services are empty after an edit | A comma or quote is missing in a data file. Every block ends with `},` and every line inside ends with `,` except the last. Undo your last change and try again. |
| The contact form doesn't open WhatsApp | Check the `whatsapp` number in `site-config.js`: `94` plus the number with no spaces and no first `0`. |
| The Facebook preview shows an old picture | Use the Sharing Debugger's **Scrape Again** (see section 12). |
| Sinhala looks like random letters | The text was typed in an FM font. Retype it in Unicode Sinhala. |

---

*Built with plain HTML, CSS and JavaScript. There's nothing to install and no build step.*
