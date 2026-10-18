# REX Group site

The live site is `index.html` (plus `assets/`). It is **generated** — edit the
files in `src/`, then rebuild:

```
node tools/build.mjs
```

| File | What it holds |
|---|---|
| `src/config.js` | **The one place** for phone, email, Instagram and form delivery. Every world reads from here. |
| `src/app.js` | Pages and content for REX, ADOL’S PRODUCTION, SLASH, APERIO, REX Campaigns |
| `src/styles.css` | All styles |
| `src/vendor.js` | React runtime (do not edit) |
| `src/template.html` | Page shell (fonts, meta) |

## Contact forms
All forms (every world + the “ارسم لنا فكرتك” sheet) send to
`REX_CONFIG.form.endpoint` (FormSubmit → rexgroup44@gmail.com), with the
attachment and the drawing as files. **First submission sends an activation
email to rexgroup44@gmail.com — open it and click Activate once.** Until then
the form tells the visitor it could not confirm delivery and offers email/phone.

## Adding work
- SLASH work / locations: put files in `assets/slash/…` and list them in
  `works: []` / `locations: []` inside the SLASH content (`U = Rr({` in `src/app.js`).
- ADOL films: put files in `assets/adol/…` and list them in `videos: []`
  inside the ADOL content (`P = Rr({`). Add a `poster` image per film.

Galleries and their nav links stay hidden until they have items.
