# Amir Saifi Portfolio

Live site: https://amirsaifi786.github.io/

## Local Setup

Install dependencies:

```powershell
npm.cmd install
```

Start local development server:

```powershell
npm.cmd start
```

Create production build:

```powershell
npm.cmd run build
```

## Git Commands

Check changed files:

```powershell
git status
```

Stage all changes:

```powershell
git add .
```

Create commit:

```powershell
git commit -m "Update portfolio site"
```

Push changes to GitHub:

```powershell
git push origin main
```

## Deploy To GitHub Pages

Deploy the latest build:

```powershell
npm.cmd run deploy
```

This command runs the `predeploy` script first, creates a production build, and publishes the `build` folder to the `gh-pages` branch.

## Full Update And Deploy Flow

```powershell
git status
git add .
git commit -m "Update portfolio site"
git push origin main
npm.cmd run deploy
```

After deployment, open:

```text
https://amirsaifi786.github.io/
```
