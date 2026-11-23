# Sewing Creations-GA link page

Static link page (contact, payments, social links) opened from an NFC tag or QR code.

## Deploy (GitHub Pages, Git Bash)

```bash
git init -b main
git add -A
git commit -m "Initial link page"
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```

Then on GitHub: **Settings > Pages > Deploy from a branch > main / (root) > Save**.
The site appears at `https://USERNAME.github.io/REPO/` after a minute or two.
(Name the repo `USERNAME.github.io` for the shorter address `https://USERNAME.github.io/`.)

## Updating

Open the folder in the Claude desktop app and ask for the change. Details live in
`config.js` and `contact.vcf`. See `CLAUDE.md` for the rules Claude follows.

## Rules

- Never rename the repo or change the account after tags are written.
- Public handles only. No passwords or account numbers.
