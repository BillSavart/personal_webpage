# Kai-Hung (Bill) Wang Portfolio

This is a personal portfolio website for job and research opportunities. It is
built with React, TypeScript, Vite, and Bootstrap, and is configured for GitHub
Pages deployment.

The website focuses on HCI, XR, embodied interaction, Gaussian Splatting, and
research-driven prototype work.

## Tech Stack

- React
- TypeScript
- Vite
- Bootstrap 5
- Bootstrap Icons
- GitHub Pages
- GitHub Actions

## Project Structure

```text
.
├── .github/workflows/deploy.yml  # GitHub Pages deployment workflow
├── public/
│   ├── README.md                 # Notes for public assets
│   └── resume.pdf                # Resume opened by the Resume button
├── src/
│   ├── App.tsx                   # Main portfolio content and layout
│   ├── styles.css                # Site styling and animation
│   ├── main.tsx                  # React entry point
│   └── assets/portrait.svg       # Hero illustration
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Local Development

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

The local URL is usually:

```text
http://127.0.0.1:5173/personal_webpage/
```

## Build

Run the production build:

```bash
npm run build
```

The output is generated in:

```text
dist/
```

## Resume PDF

The Resume button opens:

```text
public/resume.pdf
```

After deployment, the PDF is available at:

```text
https://BillSavart.github.io/personal_webpage/resume.pdf
```

To update the resume, replace the file at:

```text
public/resume.pdf
```

Keep the filename the same unless the link in `src/App.tsx` is also updated.

## Editing Content

Most website content lives in:

```text
src/App.tsx
```

Useful sections to edit:

- `profile`: name, role, email, GitHub, LinkedIn, resume link
- `strengths`: profile highlight cards
- `projects`: selected work cards
- `timeline`: education, research, and work experience

Main styling and animation lives in:

```text
src/styles.css
```

## Deployment

The Vite base path is configured in `vite.config.ts`:

```ts
base: "/personal_webpage/"
```

This matches the GitHub Pages URL:

```text
https://BillSavart.github.io/personal_webpage/
```

GitHub Pages deployment is handled by:

```text
.github/workflows/deploy.yml
```

The workflow runs automatically whenever changes are pushed to the `main`
branch.

## GitHub Pages Setup

In the GitHub repository:

1. Go to `Settings`.
2. Open `Pages`.
3. Under `Build and deployment`, set `Source` to `GitHub Actions`.
4. Push changes to `main`.
5. Check the `Actions` tab for the `Deploy to GitHub Pages` workflow.

## Typical Update Flow

After editing content or styles:

```bash
npm run build
git add .
git commit -m "update portfolio"
git push
```

GitHub Actions will build and deploy the latest version automatically.

## Notes

- `node_modules/` and `dist/` are ignored by Git.
- The deployed site is built from source by GitHub Actions.
- Public assets in `public/` are copied directly into the deployed site.
