BRANDING REPLACEMENT PREVIEW

Scope: safe, textual replacements only — UI strings, attributes, and metadata. I WILL NOT rename asset files (SVG/PNG), token tickers (e.g., "NBC"), or external URLs without your confirmation.

Proposed replacements (source -> replacement) and notes:

1) src/components/Nav.jsx
- Already updated: `alt="Web3 Protocol logo"`, `aria-label="Web3 Protocol home"` (no further action).

2) src/components/Counts2.jsx
- Context: `0.00001 NBC` (token ticker). Recommendation: LEAVE AS-IS (ticker symbols should not be renamed without spec).

3) src/components/Build.jsx
- Context: link to `https://github.com/nbc111`. Recommendation: KEEP as-is unless you want to point to a new GitHub account for Web3 Protocol.

4) index.html (root)
- Occurrences found:
  - `<link rel="icon" href="/nbcoin.svg">` (favicon path)
  - `<meta property="og:image" content="/nbcoin.svg">` (OG image path)
  - `<meta name="twitter:image" content="/nbcoin.svg">` (Twitter image path)
  - JSON-LD: `"logo": "/nbcoin.svg"`

  Recommendations:
  - Replace visible textual metadata (title/description) with "Web3 Protocol" (already partially done).
  - KEEP the `/nbcoin.svg` asset path unless you provide a replacement image (e.g., `/web3-protocol.svg`). If you provide a replacement file name now, I will update these paths.

5) src/assets / imports
- Files: `logo2.svg`, `nbcoin.svg`, `Logo2.svg` appear in `src/assets` and `dist` bundles. Recommendation: do not rename built `dist/*` files. If you want to replace the logo file name, we should add a new asset (e.g., `/public/web3-protocol.svg`) and update imports that reference the public asset paths.

6) dist/ files
- Many occurrences inside `dist/` and compiled SVGs. Recommendation: DO NOT EDIT `dist/` — these are build outputs and will be regenerated after source changes.

Summary of safe automated actions I can take now (if you approve):
- Replace any visible labels and metadata in source files referencing "NBFoundation", "nbcoin" as brand text with "Web3 Protocol" (excluding filenames, token tickers, and external handles).
- Update `alt` and `aria-label` attributes (already partially done in `src/components/Nav.jsx`).
- Update `index.html` title/description/meta text to "Web3 Protocol" (if any remain).

Actions that require guidance or are unsafe to do automatically:
- Renaming asset files (SVG/PNG) — provide replacement asset name or approve creation of new asset.
- Changing token ticker `NBC` — confirm if you want a ticker rename and what symbol to use.
- Updating external links (GitHub/Twitter handles) — provide new URLs if desired.

Please reply with one of:
- "APPLY_SAFE" — apply the safe textual replacements now.
- "PREVIEW_MORE" — show exact file diffs I would apply before changing files.
- "SKIP" — do not apply changes; instead tell me which specific files to change.
- Or provide additional instructions (e.g., new logo filename, new GitHub/Twitter URLs, ticker replacement).
