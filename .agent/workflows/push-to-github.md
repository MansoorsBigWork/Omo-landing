---
description: How to push the current project to GitHub
---

Follow these steps to push your local project to a new GitHub repository:

1. **Create a new repository on GitHub**:
   - Go to [github.com/new](https://github.com/new)
   - Name your repository (e.g., `omo-landing-page`)
   - Click **Create repository** (Keep it public or private as you prefer)
   - Copy the repository URL (it will look like `https://github.com/YOUR_USERNAME/omo-landing-page.git`)

2. **Initialize Git locally**:
   - Open your terminal in the project root (`c:\Users\Professional\Documents\omo`)
   - Run: `git init`

3. **Stage and commit your files**:
   - Run: `git add .`
   - Run: `git commit -m "initial commit: OMO landing page implementation"`

4. **Link to GitHub and Push**:
   - Replace `YOUR_REPOSITORY_URL` with the link you copied:
   - Run: `git remote add origin YOUR_REPOSITORY_URL`
   - Run: `git branch -M main`
   - Run: `git push -u origin main`
