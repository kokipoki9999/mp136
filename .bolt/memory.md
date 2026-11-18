# Project memory

## Product intent & audience

- Curated product catalog/affiliate site showcasing home decor and lifestyle items.
- Each product links to Amazon via affiliate links (tag `maisonpacem05-20`).
- Audience: shoppers browsing curated home/decor pieces (e.g., "Ikebana Pebble Vase").

## Brand personality & voice

- Brand name appears to be "Maison Pace" (from affiliate tag `maisonpacem05-20`).
- Curation-oriented; products presented as individual featured items with concise descriptions.

## Visual design & UX direction

- Stack: Vite + React, JSX, Tailwind CSS, shadcn/ui, Lucide React icons.
- Product cards include: product image, description, and an "Amazon Link" button.
- Amazon links open in a new page (`target="_blank"` / new tab).
- Product images stored in `public/` with descriptive filenames (e.g., `ikebana-vase`).
- Catalog supports sorting: "Most Recent" (newest first) and "Oldest" (oldest last).
- New products are appended to the end of the product list and appear first under "Most Recent".

## Decisions, constraints & rationale

- Do not change anything else on the website when adding a product — keep additions isolated.
- Products are numbered sequentially (catalog reached 85 products).
- Use only provided/available images in `public/`; do not install extra UI/icon packages.
- Affiliate link integrity matters: preserve full Amazon URL including tracking params.

## Open questions & assumptions

- Assuming all products follow the same data shape (description, image path, Amazon URL, position).
- Unknown whether product data lives in a single array/file or is split; future edits should locate the canonical product list before modifying.
- Unknown if there's admin tooling or if products are added by editing source only.