# Portfolio Deployment Guide

This guide will help you deploy your portfolio website to GitHub Pages.

## Before You Deploy

### 1. Update Your Personal Information

Edit the following files to add your actual information:

#### Hero.tsx (`/src/app/components/Hero.tsx`)
- Update GitHub, LinkedIn, and Email links
- Update contact email

#### Contact.tsx (`/src/app/components/Contact.tsx`)
- Update email address
- Update GitHub and LinkedIn URLs
- Verify phone number is correct

#### Projects.tsx (`/src/app/components/Projects.tsx`)
- Replace placeholder project titles and descriptions with your actual projects
- Update GitHub repository links
- Update live demo links
- Add your actual technology tags

### 2. Add Your CV Download Link

Create a PDF of your CV and either:
- Host it in the `/public` folder (create this folder if it doesn't exist)
- Host it externally and update the link in Hero.tsx

## Deployment to GitHub Pages

### Option 1: Using GitHub Actions (Recommended)

1. **Create a new repository on GitHub**
   - Go to github.com and create a new repository
   - Name it: `your-username.github.io` (replace `your-username` with your GitHub username)
   - Don't initialize with README

2. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   git branch -M main
   git remote add origin https://github.com/your-username/your-username.github.io.git
   git push -u origin main
   ```

3. **Create GitHub Actions workflow**
   
   Create a file `.github/workflows/deploy.yml`:
   
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]
     workflow_dispatch:

   permissions:
     contents: read
     pages: write
     id-token: write

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         
         - name: Setup Node
           uses: actions/setup-node@v3
           with:
             node-version: '18'
             
         - name: Install pnpm
           uses: pnpm/action-setup@v2
           with:
             version: 8
             
         - name: Install dependencies
           run: pnpm install
           
         - name: Build
           run: pnpm run build
           
         - name: Setup Pages
           uses: actions/configure-pages@v3
           
         - name: Upload artifact
           uses: actions/upload-pages-artifact@v2
           with:
             path: './dist'
             
     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       runs-on: ubuntu-latest
       needs: build
       steps:
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v2
   ```

4. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Source", select "GitHub Actions"

5. **Push the workflow**
   ```bash
   git add .github/workflows/deploy.yml
   git commit -m "Add GitHub Actions deployment workflow"
   git push
   ```

6. **Wait for deployment**
   - Go to the "Actions" tab in your repository
   - Wait for the workflow to complete
   - Your site will be available at: `https://your-username.github.io`

### Option 2: Manual Deployment

1. **Build your site**
   ```bash
   npm run build
   ```

2. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add deployment scripts to package.json**
   ```json
   "scripts": {
     "build": "vite build",
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

## Updating Your Site

Whenever you make changes:

```bash
git add .
git commit -m "Description of changes"
git push
```

If using GitHub Actions, the site will automatically redeploy. If using manual deployment, run `npm run deploy` after building.

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `/public` folder with your domain name
2. Configure your domain's DNS settings to point to GitHub Pages
3. Enable custom domain in GitHub repository settings

## Troubleshooting

### Build Fails
- Check that all dependencies are installed: `pnpm install`
- Verify Node.js version is 18 or higher
- Check for any console errors during build

### Site Not Updating
- Clear browser cache
- Wait a few minutes for GitHub Pages to update
- Check GitHub Actions logs for errors

### Links Not Working
- Ensure all internal links use hash navigation (#about, #skills, etc.)
- Verify external links include https://

## Environment Variables

If you need to add API keys or other secrets:

1. Add them as GitHub Secrets in repository settings
2. Reference them in the GitHub Actions workflow
3. Never commit API keys directly to the repository

## Need Help?

- Check GitHub Actions logs for detailed error messages
- Review GitHub Pages documentation: https://pages.github.com
- Ensure all personal information is updated before sharing the link
