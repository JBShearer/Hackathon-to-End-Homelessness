# GitHub Pages Setup - Final Steps

✅ **Your code is now on GitHub!**
Repository: https://github.com/JBShearer/Hackathon-to-End-Homelessness

## 🚀 Complete These Steps to Deploy

### Step 1: Enable GitHub Pages (REQUIRED)

The GitHub Actions workflow has started automatically, but you need to enable Pages first:

1. **Go to your repository Settings:**
   👉 https://github.com/JBShearer/Hackathon-to-End-Homelessness/settings/pages

2. **Look for "Build and deployment" section** (it's the main section on the Pages settings page)

3. **Under "Source", select:**
   - Change from "Deploy from a branch" 
   - TO: **"GitHub Actions"**
   
   ![It should show a dropdown that says "GitHub Actions"]

4. **That's it!** GitHub will now use your workflow file to build and deploy.

### Step 2: Check Deployment Status

1. **Go to the Actions tab:**
   👉 https://github.com/JBShearer/Hackathon-to-End-Homelessness/actions

2. **You should see a workflow running** called "Deploy to GitHub Pages"
   - 🟡 Yellow circle = Running
   - ✅ Green checkmark = Success
   - ❌ Red X = Failed (see Step 3 for Supabase secrets)

3. **Wait 3-5 minutes** for the first deployment to complete

### Step 3: Add Supabase Secrets (OPTIONAL - but recommended for full features)

**Why:** Your app uses Supabase for backend features. Without these secrets, the build will fail or features won't work.

**Where to find Supabase credentials:**
1. Go to your Supabase project: https://supabase.com/dashboard/project/_
2. Click on your project
3. Go to **Settings** (gear icon on left sidebar)
4. Click **API** section
5. You'll see:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **Project API keys** → Copy the `anon` `public` key

**How to add secrets to GitHub:**
1. Go to repository Settings → Secrets and variables → Actions:
   👉 https://github.com/JBShearer/Hackathon-to-End-Homelessness/settings/secrets/actions

2. Click **"New repository secret"** button (green button on the right)

3. Add first secret:
   - **Name:** `VITE_SUPABASE_URL`
   - **Secret:** Paste your Supabase Project URL
   - Click "Add secret"

4. Click **"New repository secret"** again

5. Add second secret:
   - **Name:** `VITE_SUPABASE_ANON_KEY`
   - **Secret:** Paste your Supabase anon/public key
   - Click "Add secret"

6. **Trigger a new deployment:**
   - Go to Actions tab
   - Click "Deploy to GitHub Pages" workflow
   - Click "Run workflow" button
   - Select "main" branch
   - Click green "Run workflow" button

### Step 4: Configure Custom Domain

1. **Go to Pages settings:**
   👉 https://github.com/JBShearer/Hackathon-to-End-Homelessness/settings/pages

2. **Scroll down to "Custom domain" section**

3. **Enter:** `hackathontoendhomelessness.org`

4. **Click "Save"**

5. **Wait for DNS check** (shows "DNS check in progress...")
   - This can take 1-10 minutes
   - Once it shows ✅ DNS check successful
   - Check the box **"Enforce HTTPS"**

### Step 5: Test Your Site! 🎉

**GitHub Pages URL (works immediately):**
👉 https://jbshearer.github.io/Hackathon-to-End-Homelessness/

**Custom Domain (may take 24-48 hours for full DNS propagation):**
👉 https://hackathontoendhomelessness.org

## 🐛 Troubleshooting

### "I don't see 'Build and deployment' section"
- Make sure you're on the **Pages** settings page (not general Settings)
- URL should be: `/settings/pages` at the end

### "GitHub Actions option is not showing"
- Make sure your repository is **Public** (not Private)
- Free GitHub accounts need public repos for GitHub Actions deployment
- To check: Settings → General → Look for repository visibility

### "Build is failing"
**Most common cause:** Missing Supabase secrets

**Solution:**
1. Check the error in Actions tab
2. If it mentions Supabase or environment variables, add the secrets (Step 3)
3. You can also temporarily remove Supabase by creating a simple fallback, but it's better to add the secrets

### "I can't find my Supabase project"
If you haven't set up Supabase yet:
1. Go to https://supabase.com
2. Sign up/Sign in
3. Create a new project
4. Follow Step 3 above to get credentials

**OR** you can deploy without Supabase for now:
- The site will still work
- Some interactive features won't function
- You can add Supabase later

### "Custom domain shows error"
- Make sure DNS is configured correctly (you mentioned you got this working!)
- Wait up to 48 hours for full DNS propagation
- You can still use the GitHub Pages URL in the meantime

## ✅ Success Checklist

- [ ] Pages Settings → Source set to "GitHub Actions"
- [ ] Actions tab shows green checkmark for deployment
- [ ] Site loads at: https://jbshearer.github.io/Hackathon-to-End-Homelessness/
- [ ] Supabase secrets added (optional but recommended)
- [ ] Custom domain added: hackathontoendhomelessness.org
- [ ] DNS check successful
- [ ] HTTPS enforced
- [ ] Site loads at: https://hackathontoendhomelessness.org

## 📸 Visual Guide

**Where is "Build and deployment"?**
When you go to Settings → Pages, you'll see a page with a heading "GitHub Pages" at the top. Below that is a section titled "Build and deployment" with a "Source" dropdown. That's where you select "GitHub Actions".

**Where are Secrets?**
Settings → (scroll down left sidebar) → Secrets and variables → Actions → Green button "New repository secret"

## 🎯 Priority Order

1. **MUST DO:** Enable GitHub Pages (Step 1)
2. **MUST DO:** Check deployment worked (Step 2)
3. **RECOMMENDED:** Add Supabase secrets (Step 3)
4. **NICE TO HAVE:** Configure custom domain (Step 4)
5. **CELEBRATE:** Test your site! (Step 5)

## Need Help?

If you're still stuck, let me know:
1. Which step you're on
2. What you see on the screen
3. Any error messages

The site should work even without Supabase - you'll just need to enable GitHub Pages as the source!
