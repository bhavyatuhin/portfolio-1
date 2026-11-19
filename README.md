# Bhavya Portfolio — clean Vercel-ready baseline

This is a rebuilt Vite + React + TypeScript portfolio starter with:
- Vercel SPA rewrite configuration (`vercel.json`) for React Router.
- Correct Vite build/output settings.
- A React error boundary so rendering errors show a useful message instead of a silent blank page.
- Responsive editorial layout in deep wine, blush, and ivory.
- Separate About, Projects, Recognition, Creative, and Contact pages.
- Content separated into `src/content.ts` for easier editing.

## Run locally

Open a terminal in this exact folder (the folder containing `package.json`):

```powershell
npm.cmd install
npm.cmd run dev
```

Open the local URL Vite prints, usually `http://localhost:5173`.

## Test the production build before deployment

```powershell
npm.cmd run build
npm.cmd run preview
```

The build should create a `dist` folder. If this command fails, fix the reported TypeScript/build error before deploying.

## Deploy to Vercel

Import the repository into Vercel and use:

- Framework preset: Vite
- Root directory: `./` if this folder's contents are at the repository root
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

If you put this whole folder inside a larger repository, set Root Directory to `Bhavya_Portfolio_Fixed` (or rename it to the folder you actually use).

`vercel.json` is in the same folder as `package.json`. Keep it there.

## Update content

Edit `src/content.ts`. Replace draft project contribution text with Bhavya's verified work. Add only approved public email/social links. Add an approved portrait in a later content pass; do not publish personal contact numbers or private identifiers.

## Important scope note

This is the corrected frontend baseline. It does **not** yet include the private Supabase CMS/login. That should be integrated as a separate tested phase, after this baseline builds and deploys successfully.
