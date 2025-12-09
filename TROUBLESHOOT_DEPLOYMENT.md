# Troubleshooting - Site Still Shows Old Content

## Problem Identified
✅ Your deployment succeeded (green checkmark in Actions)
❌ But the site still shows Loot-Locker content instead of Hackathon content

This means **GitHub Pages isn't configured to use the GitHub Actions deployment**.

## Solution - Configure GitHub Pages Properly

### Step 1: Check Current Pages Configuration

1. **Go to Pages Settings:**
   👉 https://github.com/JBShearer/Hackathon-to-End-Homelessness/settings/pages

2. **Look at the "Build and deployment" section**

3. **Check what "Source" is currently set to:**
   - If it says **"Deploy from a branch"** → This is WRONG for our setup
   - It should say **"GitHub Actions"**

### Step 2: Change to GitHub Actions

1. **Click the "Source" dropdown**

2. **Select: "GitHub Actions"**
   - You should see this option in the dropdown

3. **Click Save** (if there's a save button)

4. **You should see a message like:**
   - "Your site is ready to be published at..."
   - Or "Your GitHub Pages site is currently being built from the GitHub Actions workflow."

### Step 3: Verify Deployment Environment

1. **Go to repository Settings → Environments:**
   👉 https://github.com/JBShearer/Hackathon-to-End-Homelessness/settings/environments

2. **You should see an environment called "github-pages"**
   - If you don't see it, that's part of the problem

3. **Click on "github-pages" if it exists**
   - Check the deployment history
   - Should show recent deployments

### Step 4: Manually Trigger a New Deployment

After changing the source to GitHub Actions:

1. **Go to Actions tab:**
   👉 https://github.com/JBShearer/Hackathon-to-End-Homelessness/actions

2. **Click on "Deploy to GitHub Pages" workflow** (on the left sidebar)

3. **Click the "Run workflow" button** (top right, above the workflow list)

4. **Select "main" branch**

5. **Click green "Run workflow" button**

6. **Wait 3-5 minutes** for deployment to complete

7. **Test the URL again:** https://jbshearer.github.io/Hackathon-to-End-Homelessness/

## Alternative: Check if Pages is Enabled at All

If you don't see the Pages settings:

1. **Go to Settings → Pages**
2. **If you see "GitHub Pages is currently disabled"**
3. **You need to enable it first by selecting a source**
4. **Choose "GitHub Actions" as the source**

## What Should Happen

After properly configuring GitHub Pages with GitHub Actions source:

1. The deployment workflow uploads artifacts to Pages
2. Pages serves those artifacts at your URL
3. You should see the Hackathon to End Homelessness website
4. Not the Loot-Locker content

## Verification Steps

After making the changes:

1. **Check the GitHub Pages URL:**
   ```
   https://jbshearer.github.io/Hackathon-to-End-Homelessness/
   ```
   Should show: "Hackathon to End Homelessness" title

2. **Check the custom domain:**
   ```
   https://hackathontoendhomelessness.org
   ```
   Should redirect to the correct site

3. **If still wrong:**
   - Clear browser cache completely
   - Try incognito/private window
   - Try a different browser
   - Wait 5-10 more minutes

## Common Issues

### "I don't see GitHub Actions option in Source dropdown"

**Possible causes:**
1. Repository is Private (must be Public for free accounts)
2. No workflow file detected (but we have one)
3. Need to trigger a workflow run first

**Solution:**
1. Make sure repository is Public: Settings → General → Danger Zone → Change visibility
2. Trigger workflow manually (see Step 4 above)
3. Refresh the Pages settings page

### "Deployment succeeds but site doesn't update"

**Possible causes:**
1. Source is still set to "Deploy from a branch"
2. Old gh-pages branch exists and is conflicting
3. Browser cache

**Solution:**
1. Change source to "GitHub Actions"
2. Delete gh-pages branch if it exists:
   - Go to: https://github.com/JBShearer/Hackathon-to-End-Homelessness/branches
   - Delete "gh-pages" branch if you see it
3. Clear browser cache, use incognito

### "GitHub Pages URL works but custom domain doesn't"

**Separate issue - DNS related:**
1. Make sure custom domain is added in Pages settings
2. Wait for DNS propagation (can take hours)
3. Check DNS records are correct

## Quick Checklist

Run through this checklist:

- [ ] Repository is **Public** (not Private)
- [ ] Pages Settings → Source = **"GitHub Actions"** (not "Deploy from a branch")
- [ ] Latest workflow run has **green checkmark**
- [ ] Workflow was triggered **after** changing source to GitHub Actions
- [ ] No conflicting **gh-pages branch** exists
- [ ] Browser cache **cleared** / using incognito window
- [ ] Waited **5-10 minutes** after deployment

## Still Not Working?

If after all these steps it still shows Loot-Locker:

1. **Delete the gh-pages branch** (if it exists)
2. **Disable Pages temporarily:**
   - Settings → Pages → Change source to "None"
   - Save
3. **Re-enable with GitHub Actions:**
   - Change source back to "GitHub Actions"
   - Save
4. **Trigger a new deployment**
5. **Wait 10 minutes**
6. **Test in incognito window**

## Need to See What You're Seeing?

If still stuck, check:
1. Take a screenshot of Settings → Pages
2. Take a screenshot of Actions tab
3. This will help identify what's configured wrong

---

**The key issue:** GitHub Pages needs to be told to use the GitHub Actions workflow output. Just having a successful workflow isn't enough - Pages needs to be configured to serve that content!
