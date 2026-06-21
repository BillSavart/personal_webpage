# Kai-Hung (Bill) Wang Portfolio

This is a bilingual personal portfolio website for job and research
opportunities. It is built with React, TypeScript, Vite, and Bootstrap, and is
configured for GitHub Pages deployment.

The website focuses on HCI, XR, embodied interaction, Gaussian Splatting,
Gaussian Avatar, embedded interaction prototyping with Raspberry Pi / STM32,
and shipped product / cloud-native systems work.

The default language is English. Visitors can switch the main site content to
Traditional Chinese from the navigation bar.

## Tech Stack

- React
- TypeScript
- Vite
- Bootstrap 5
- Bootstrap Icons
- GitHub Pages
- GitHub Actions

## Current Site Features

- First Bank-inspired green and gold visual palette
- English / Traditional Chinese language toggle
- Profile highlight cards for HCI, XR, Gaussian Avatar, embedded prototyping,
  and bilingual communication
- Grouped project presentation:
  - `Research / XR` for immersive interaction and research prototypes
  - `Product & Systems` for shipped side projects and course systems
- External links for the live public-bank interview prep site and the
  NTU CloudNative course project repository

## Project Structure

```text
.
├── .github/workflows/deploy.yml  # GitHub Pages deployment workflow
├── public/
│   ├── README.md                 # Notes for public assets
│   └── resume.pdf                # Resume opened by the Resume button
├── src/
│   ├── App.tsx                   # Bilingual portfolio content and layout
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

- `profile`: name, email, GitHub, LinkedIn, resume link
- `content.en`: English navigation, hero, profile cards, projects, timeline,
  and contact copy
- `content.zh`: Traditional Chinese navigation, hero, profile cards, projects,
  timeline, and contact copy
- `projectGroups`: selected work cards grouped into research and engineering
  sections inside each language block
- `timeline`: education, research, and work experience inside each language
  block

Main styling and animation lives in:

```text
src/styles.css
```

The language toggle is implemented with local React state in `src/App.tsx`.
Because content is re-rendered when the language changes, the reveal animation
observer is also re-attached after language switches.

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
