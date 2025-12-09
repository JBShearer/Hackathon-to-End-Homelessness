# GitHub Pages Deployment Steps

Your code is ready to deploy! Follow these steps to complete the deployment:

## ✅ Completed Steps
- [x] CNAME file configured with `hackathontoendhomelessness.org`
- [x] GitHub Actions workflow configured for automatic deployment
- [x] Vite config set with correct base path (`/`)
- [x] Git repository initialized and first commit made
- [x] DNS configured and pointing to GitHub Pages

## 🚀 Next Steps

### Step 1: Create GitHub Repository
1. Go to [GitHub](https://github.com/new)
2. Repository name: `Hackathon-to-End-Homelessness`
3. Description: "Educational platform for homelessness awareness through gamification"
4. Make it **Public** (required for GitHub Pages on free plan)
5. **Do NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

### Step 2: Connect and Push to GitHub
After creating the repository, run these commands in your terminal:

```bash
# Add the remote repository
git remote add origin https://github.com/JBShearer/Hackathon-to-End-Homelessness.git

# Push your code
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository settings: `https://github.com/JBShearer/Hackathon-to-End-Homelessness/settings/pages`
2. Under "Build and deployment":
   - Source: **GitHub Actions** (not "Deploy from a branch")
3. Click Save

### Step 4: Add Supabase Secrets (Required for full functionality)
1. Go to: `https://github.com/JBShearer/Hackathon-to-End-Homelessness/settings/secrets/actions`
2. Click "New repository secret" and add:
   - Name: `VITE_SUPABASE_URL`
   - Value: Your Supabase project URL
   
   - Name: `VITE_SUPABASE_ANON_KEY`
   - Value: Your Supabase anonymous key

### Step 5: Trigger Deployment
Once you push the code, the GitHub Actions workflow will automatically:
1. Build your Vite/React application
2. Deploy to GitHub Pages
3. Your site will be live at `https://hackathontoendhomelessness.org` (once DNS propagates)

You can monitor the deployment progress at:
`https://github.com/JBShearer/Hackathon-to-End-Homelessness/actions`

### Step 6: Configure Custom Domain in GitHub
1. Go to: `https://github.com/JBShearer/Hackathon-to-End-Homelessness/settings/pages`
2. Under "Custom domain", enter: `hackathontoendhomelessness.org`
3. Click Save
4. Wait for DNS check to complete (may take a few minutes)
5. Once verified, check "Enforce HTTPS"

## 🔍 Verification Steps

After deployment completes (usually 2-5 minutes):

1. **Check GitHub Actions**: 
   - Visit: `https://github.com/JBShearer/Hackathon-to-End-Homelessness/actions`
   - Verify the workflow completed successfully (green checkmark)

2. **Test GitHub Pages URL**:
   - Visit: `https://jbshearer.github.io/Hackathon-to-End-Homelessness/`
   - The site should load (may redirect to custom domain)

3. **Test Custom Domain**:
   - Visit: `https://hackathontoendhomelessness.org`
   - May take 24-48 hours for DNS to fully propagate

## 🐛 Troubleshooting

### Build Fails
- Check Actions logs for errors
- Verify all npm dependencies are in package.json
- Ensure Supabase secrets are added correctly

### 404 Error
- Confirm GitHub Pages source is set to "GitHub Actions"
- Check that CNAME file is in the `public/` directory
- Verify the workflow uploaded the artifact correctly

### DNS Not Working
- DNS propagation can take 24-48 hours
- Use `dig hackathontoendhomelessness.org` to check DNS records
- Verify A records point to GitHub Pages IPs:
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153

### Custom Domain Not Verified
- Wait a few minutes and try again
- Ensure DNS records are correct
- Try removing and re-adding the custom domain

## 📝 Important Notes

1. **First deployment** may take 5-10 minutes
2. **Subsequent deployments** trigger automatically on every push to `main`
3. **HTTPS** will be enforced after initial domain verification
4. **DNS changes** can take up to 48 hours to propagate globally
5. You can use `https://jbshearer.github.io/Hackathon-to-End-Homelessness/` immediately while DNS propagates

## 🎉 Success Indicators

Your deployment is successful when:
- ✅ GitHub Actions workflow shows green checkmark
- ✅ Site loads at `jbshearer.github.io/Hackathon-to-End-Homelessness/`
- ✅ Custom domain shows as verified in repository settings
- ✅ Site loads at `https://hackathontoendhomelessness.org`
- ✅ HTTPS is enforced (padlock icon in browser)

## 📧 Need Help?

If you encounter issues:
1. Check the Actions logs for specific error messages
2. Review the DNS_SETUP_GUIDE.md for DNS configuration
3. Verify all secrets are added correctly
4. Wait for DNS propagation (can take time)
