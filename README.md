# Victoria Contreras — website

Website for the painter Victoria Contreras and Victoria Art Gallery, Rua da Louça 35, Coimbra.

It is a static site with no build step and no dependencies. It is served by GitHub Pages from the root of the `main` branch. The `.nojekyll` file makes Pages serve the files as they are.

## Preview locally

    python3 -m http.server 8765
    # then open http://localhost:8765

## Editing

| To change… | Edit |
| --- | --- |
| Works (titles, sizes, media, notes, order, rooms) | `works.js` |
| Interface text in English, Portuguese, Spanish | `i18n.js` |
| How a medium is translated | `MEDIA` at the bottom of `i18n.js` |
| Layout, colours, type | `styles.css` |

Untitled works have `title: null`. Give them a title and it appears everywhere, in every language (titles are never translated).

To add a work, save the image as `assets/works/<id>-800.webp` (800px on the long side). For sharp photos, add a `-1800.webp` too and set `large: true`. Then add an entry to `works.js` with the image's pixel `w` and `h` and its real size in cm.

After changing CSS or JS, bump the `?v=` numbers in `index.html` so returning visitors get the new files.

## Language

EN / PT / ES. The first visit follows the browser's language, and the choice is remembered after that. You can share a link in a given language with `?lang=pt` or `?lang=es`, and a single work with `#work/<id>`.
