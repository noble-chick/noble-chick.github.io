# Tehreem Asad | Portfolio

A personal portfolio for Tehreem Asad, BSc (Honours) Cyber Security student at York University. Built with React, TypeScript, Vite, and Tailwind CSS.

## Sections

- Hero with introduction and links to GitHub, LinkedIn, and projects
- Projects with descriptions, technologies, and GitHub links
- Experience, including the Ontario Public Service co-op role
- Skills, organized by category
- Contact with email, LinkedIn, and GitHub

## Run locally

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages

The repository includes a workflow at `.github/workflows/deploy.yml` that builds the site and publishes it on every push to `main`.

1. Push this project to a GitHub repository whose default branch is `main`.
2. In the repository, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push to `main` (or run the **Deploy to GitHub Pages** workflow from the **Actions** tab).

The site will be available at `https://<your-username>.github.io/<repository-name>/`, or at `https://<your-username>.github.io/` if the repository is named `<your-username>.github.io`. The build uses relative asset paths, so it works under either address.

## Editing content

All text, project links, experience, and skills live in `src/data/portfolio.ts`. The artifacts, future goals, and resume settings live in `src/data/journey.ts`.

To turn on the resume download, copy your PDF into `public/assets/documents/` and set `resumeFile` in `src/data/journey.ts` to its path, for example `'assets/documents/Resume.pdf'`.
