# Run Commands

Commands to set up and run the Netflix-style portfolio app locally.

---

## Prerequisites

Use Node.js 18 (see [.nvmrc](.nvmrc)). With nvm:

```bash
nvm install 18
nvm use 18
```

Install dependencies:

```bash
npm install
```

If you upgraded Node or hit dependency issues:

```bash
rm -rf node_modules
npm cache clean --force
npm install
```

**Optional:** Create a `.env` file with your DatoCMS API token and other config so dynamic content (projects, skills, etc.) loads correctly.

---

## Run the app (development)

Start the development server:

```bash
npm start
```

Then open in your browser:

**http://localhost:3000**

The app will hot-reload when you change the code.

---

## Build for production

Create an optimized production build (output goes to the `build/` folder):

```bash
npm run build
```

---

## Serve the production build locally

After running `npm run build`, you can serve the built files locally:

```bash
npx serve -s build
```

Then open the URL shown in the terminal (e.g. **http://localhost:3000** or another port if 3000 is in use).

---

## Run tests

```bash
npm test
```

---

## Quick reference

| Goal                    | Command           |
|-------------------------|-------------------|
| Install dependencies    | `npm install`     |
| Run dev server          | `npm start`       |
| Build for production    | `npm run build`   |
| Serve production build  | `npx serve -s build` |
| Run tests               | `npm test`        |
