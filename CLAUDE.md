# Sewing Creations-GA link page - instructions for Claude

This repo is Alesia's link page (like a dot.band profile). It is a static site hosted on
GitHub Pages. People reach it by tapping an NFC tag or scanning a QR code, so the
**page URL must never change**. Alesia works with you in the Claude desktop app; she is
not a programmer. Do the edits for her and explain results in plain words.

## Files

| File | Purpose | You may edit |
|---|---|---|
| `config.js` | All her details: name, tagline, phone, email, handles, skin | Yes, most requests only touch this |
| `contact.vcf` | The "Save my contact" card | Yes, keep it in sync with `config.js` |
| `index.html` | Page layout and the three color skins | Only for design changes she asks for |
| `logo.png` | Her logo (header) | Replace only if she gives a new file |
| `bg.jpg` | Gingham background (Logo skin only) | Only if she asks for a new look |
| `README.md` | Deploy notes for Mark | No |

Do not rename or move `index.html`, `contact.vcf`, `logo.png`, `bg.jpg` or `config.js`.

## First job: replace the sample details

`config.js` currently holds sample data. Ask her (one short list, not many questions):

1. Business name and the tagline she wants under the logo
2. Phone number and email she is happy to make **public**
3. PayPal, Venmo and Cash App handles (public handles or links only)
4. Facebook, Instagram, TikTok handles
5. Website or shop address
6. The final public page URL (goes in `siteUrl`)

Then: fill `config.js`, update `contact.vcf` to match, and set `previewNote` to `""`.
An empty `handle` hides that button, and a section with no buttons hides itself.

## Rules

- Payment and social entries are **public handles only**. Never store passwords, card or
  bank numbers, API keys or tokens anywhere in this repo.
- Check with her before publishing a phone number, email or address; the page is public.
- Keep `contact.vcf` and `config.js` in sync: name, phone, email, website.
  - `TEL` uses the `+1` digits-only form from `phoneRaw`.
- Handle formats: PayPal `paypal.me/NAME`, Venmo `venmo.com/u/NAME`, Cash App `cash.app/$NAME`.
  Instagram and TikTok handles may include the leading `@`.
- Keep the page readable on a phone (one narrow column). Check the result after each change.
- Do not add trackers, ad scripts or anything that loads from third-party sites.
- Keep the logo as is. Do not redraw or alter her logo.

## After every change

1. Show her a plain-language list of what changed (old value, new value).
2. Open `index.html` in a browser (or preview it) and confirm the page loads, the buttons
   show, and nothing is missing.
3. Only after she says to publish, commit and push:
   ```bash
   git add -A
   git commit -m "Update link page: <short description>"
   git push
   ```
   If git needs a login you do not have, tell her and give her the same three commands
   to run herself in Git Bash or GitHub Desktop. Never guess at credentials.
4. After pushing, wait about a minute, then check the live page:
   ```bash
   curl -sI <siteUrl> | head -1
   curl -sI <siteUrl>contact.vcf | head -1
   ```
   Both should say `200`.

## Do not

- Change the repo name or GitHub account (it would break every printed tag and QR code).
- Delete `contact.vcf` or `logo.png`.
- Add a login, a form that collects visitors' data, or a payment form. Buttons only link out.
