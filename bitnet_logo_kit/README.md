# Bitnet Logo Kit

Production-ready logo assets, all on transparent backgrounds.

## Brand colors
- **Primary blue** — `#36abe9`
- **Navy** — `#011932`

## What's in this kit

```
kit/
├── README.md                       — this file
├── reference_sheet.png             — visual overview of all variants
│
├── svg/                            — vector masters (use these whenever possible)
│   ├── bitnet_logo_color.svg       — primary brand blue on transparent
│   ├── bitnet_logo_navy.svg        — dark navy on transparent (use on light bg)
│   ├── bitnet_logo_white.svg       — white on transparent (use on dark bg)
│   └── bitnet_logo_black.svg       — pure black on transparent (mono)
│
├── png/                            — rasterized PNGs at every size, transparent
│   ├── bitnet_logo_<variant>_<size>w.png      — aspect-preserving (logo shape)
│   └── square_padded/                          — centred in a square canvas
│       └── bitnet_logo_<variant>_<size>x<size>.png
│
└── favicon/                        — drop-in web favicon set
    ├── favicon.ico                 — multi-res ICO (16, 32, 48, 64, 128, 256)
    ├── favicon-16x16.png
    ├── favicon-32x32.png
    ├── favicon-48x48.png
    ├── favicon-96x96.png
    ├── favicon-192x192.png
    ├── favicon-512x512.png
    ├── apple-touch-icon.png        — 180×180, required by iOS
    ├── android-chrome-192x192.png  — standard PWA manifest icon
    └── android-chrome-512x512.png  — standard PWA manifest icon
```

## Sizes generated (per variant)

8, 12, 16, 24, 32, 48, 64, 96, 128, 144, 152, 167, 180, 192, 256, 384, 512, 768, 1024, 1536, 2048, 3072, 4096

Each size exists in:
- 4 color variants (color, navy, white, black)
- 2 layouts (aspect-preserving and square-padded)

That's **184 raster PNGs + 9 favicon assets + 4 SVG masters + 1 ICO = 198 files**.

## Usage notes

**Sub-16px sizes (8, 12).** Generated as requested, but the BN mark with the pixelated dissolve effect on the N is genuinely unreadable below ~16px. For UI use cases at those sizes (very small list items, status indicators, etc.), consider using just the "B" or a simplified mark instead.

**SVG vs PNG.** Use the SVG masters wherever the rendering target supports them (web, modern docs, design tools). They scale perfectly and have a smaller file size at large dimensions. Use the PNGs only when SVG isn't supported.

**Favicons.** For a standard web setup, drop the `favicon/` folder contents at your site root and add to `<head>`:
```html
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" type="image/svg+xml" href="/bitnet_logo_color.svg">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
```

**Square-padded variants.** Use these for app icons, social media profile images, and anywhere the logo needs to sit in a square frame with breathing room (~7.5% margin on each side).

## What changed from the source

The uploaded SVG was a vectorizer trace of a raster logo. It contained:
- A dark navy background rectangle (removed)
- 11 separate color groups representing anti-aliasing artefacts (consolidated into the single brand blue)
- Translucent shadow effects under the N (cleaned up — they only made sense against the navy background)

The cleaned master was re-vectorized from a high-resolution clean render so the SVG is a true scalable vector, not an embedded raster.
