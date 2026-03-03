## Ayush Thakur's Netflix-inspired Portfolio

A personal portfolio that showcases work experience, skills, and contact info in a Netflix-style UI. It runs **out of the box** with static resume data—no CMS required. You can optionally connect [DatoCMS](https://www.datocms.com) for dynamic content.

---

## Features

- **Static or dynamic content**: Uses resume data from the repo by default; set `REACT_APP_DATOCMS_TOKEN` to use DatoCMS instead.
- **Fast and responsive**: React and modern tooling.
- **Sections**: Profile banner, work and education timeline, skills, projects, contact, blogs, recommendations.

---

## Tech Stack

- **React** (TypeScript)
- **DatoCMS** (optional, for content management)
- Styling via CSS; deploy anywhere (e.g. AWS S3/CloudFront, Vercel, Netlify).

---

## Getting Started

1. **Clone and install**

```bash
nvm install 18
nvm use 18
npm install
```

2. **Run locally** (uses static resume data; no env vars required)

```bash
npm start
```

3. **Optional: use DatoCMS**  
   Create a `.env` file and set:

- `REACT_APP_DATOCMS_TOKEN` – your DatoCMS API token (for your project and hostname).

4. **Production build**

```bash
npm run build
```

The `build` folder is ready to deploy.

---

## Contact

- Email: [tayush30@gmail.com](mailto:tayush30@gmail.com)
- LinkedIn: [Ayush Thakur](https://www.linkedin.com/in/ayush-thakur)

---

## License

MIT License.
