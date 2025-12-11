# How to Add GitHub Secrets for Supabase

**Important:** This guide is about adding secrets to **GitHub** (not Supabase). You get the values FROM Supabase, then add them TO GitHub.

---

## Overview

Your GitHub Actions workflow needs two secrets to connect to Supabase:
1. `VITE_SUPABASE_URL` - Your Supabase project URL
2. `VITE_SUPABASE_ANON_KEY` - Your Supabase anonymous/public key

---

## Step 1: Get Credentials from Supabase

### 1.1 Create Supabase Project (if not done)
1. Go to https://supabase.com
2. Sign in or create account
3. Click "New Project"
4. Fill in project details
5. Wait 2-3 minutes for provisioning

### 1.2 Get Your Credentials
1. **In Supabase Dashboard:**
   - Click on your project
   - Look for **Project Settings** (gear icon) in the left sidebar
   - Click on **API** section
   
2. **Copy These Two Values:**
   
   **Project URL:** (under "Project URL" or "Configuration" section)
   ```
   https://xxxxxxxxxxxxx.supabase.co
   ```
   
   **Publishable key (anon):** (under "Project API keys" section)
   ```
   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFz...
   ```
   
   ⚠️ **Important:** 
   - Copy the **`publishable key`** (safe for frontend use - previously called "anon public")
   - DO NOT copy the **`secret key`** (admin/service role key - keep private!)

---

## Step 2: Add Secrets to GitHub Repository

### 2.1 Navigate to Repository Settings

**Option A - Direct Link:**
Go to: https://github.com/JBShearer/Hackathon-to-End-Homelessness/settings/secrets/actions

**Option B - Manual Navigation:**
1. Go to your GitHub repository: https://github.com/JBShearer/Hackathon-to-End-Homelessness
2. Click the **Settings** tab (top right, near Code/Issues/Pull requests)
3. In the left sidebar, click **Secrets and variables**
4. Click **Actions** (dropdown item under "Secrets and variables")

### 2.2 Add First Secret (Supabase URL)

1. Click the green **"New repository secret"** button
2. Fill in:
   - **Name:** `VITE_SUPABASE_URL`
   - **Secret:** Paste your Supabase project URL (from Step 1.2)
     - Example: `https://abcdefghijklm.supabase.co`
3. Click **"Add secret"**

### 2.3 Add Second Secret (Supabase Publishable Key)

1. Click **"New repository secret"** again
2. Fill in:
   - **Name:** `VITE_SUPABASE_ANON_KEY`
   - **Secret:** Paste your Supabase **publishable key** (from Step 1.2)
     - Example: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` (very long string)
3. Click **"Add secret"**

**Note:** The GitHub secret is still called `VITE_SUPABASE_ANON_KEY` for compatibility, even though Supabase now calls it "publishable key."

### 2.4 Verify Secrets Are Added

You should now see two secrets listed:
- ✅ `VITE_SUPABASE_URL`
- ✅ `VITE_SUPABASE_ANON_KEY`

**Note:** GitHub won't show you the secret values (for security), but you can see the names and update them if needed.

---

## Step 3: Trigger Deployment

Your secrets are now configured! Trigger a new deployment:

**Option A - Make a Small Change:**
1. Edit any file (e.g., add a comment to README.md)
2. Commit and push
3. GitHub Actions will automatically run

**Option B - Manual Trigger:**
1. Go to: https://github.com/JBShearer/Hackathon-to-End-Homelessness/actions
2. Click on "Deploy to GitHub Pages" workflow
3. Click "Run workflow" button
4. Click the green "Run workflow" button in the dropdown

---

## Step 4: Verify It Works

### 4.1 Check Deployment Status
1. Go to: https://github.com/JBShearer/Hackathon-to-End-Homelessness/actions
2. Wait for the workflow to complete (3-5 minutes)
3. Look for green checkmark ✅

### 4.2 Check Your Live Site
1. Visit: https://hackathontoendhomelessness.org
2. Open Browser DevTools (F12 or Cmd+Option+I)
3. Go to **Console** tab
4. Look for: `✅ Supabase client initialized successfully`

### 4.3 Test Signup
1. Go to: https://hackathontoendhomelessness.org/signup
2. Fill out the signup form
3. Click "Sign Up"
4. You should see success message (or specific error if database isn't set up yet)

---

## Common Issues & Troubleshooting

### Issue: "Supabase credentials not configured"

**Possible Causes:**
1. Secrets not added to GitHub
2. Secret names are wrong (case-sensitive!)
3. Secret values have extra spaces or are incomplete

**Solution:**
1. Go to GitHub secrets page (see Step 2.1)
2. Verify both secrets exist:
   - `VITE_SUPABASE_URL` (exactly this name)
   - `VITE_SUPABASE_ANON_KEY` (exactly this name)
3. If names are wrong, delete and recreate
4. Make sure you copied the full values from Supabase
5. Trigger new deployment

### Issue: Build fails in GitHub Actions

**Solution:**
1. Go to Actions tab: https://github.com/JBShearer/Hackathon-to-End-Homelessness/actions
2. Click on the failed workflow run
3. Click on "build" job
4. Look for error messages
5. Common fix: Check secret names match exactly in `.github/workflows/deploy.yml`

### Issue: Console shows "placeholder.supabase.co"

**Cause:** Secrets not being passed to build, or wrong values

**Solution:**
1. Verify secrets in GitHub (Step 2.4)
2. Check workflow file references secrets correctly:
   ```yaml
   env:
     VITE_SUPABASE_URL: ${{ secrets.VITE_SUPABASE_URL }}
     VITE_SUPABASE_ANON_KEY: ${{ secrets.VITE_SUPABASE_ANON_KEY }}
   ```
3. Trigger new deployment

---

## Security Best Practices

### ✅ Do's
- ✅ Use the **`publishable key`** from Supabase (safe for frontend - previously called "anon")
- ✅ Keep secrets in GitHub repository secrets (never commit)
- ✅ Use environment variables with `VITE_` prefix
- ✅ Implement Row Level Security (RLS) in Supabase database

### ❌ Don'ts
- ❌ Never commit `.env` or `.env.local` files
- ❌ Never use the **`secret key`** in frontend code (this is the admin/service role key)
- ❌ Never expose secrets in client-side code or logs
- ❌ Never share your Supabase `secret key` publicly

---

## Quick Reference

### GitHub Secrets Page
https://github.com/JBShearer/Hackathon-to-End-Homelessness/settings/secrets/actions

### GitHub Actions Workflows
https://github.com/JBShearer/Hackathon-to-End-Homelessness/actions

### Supabase Dashboard
https://supabase.com/dashboard/project/_

### Your Live Site
https://hackathontoendhomelessness.org

---

## Visual Guide

```
┌─────────────────────────────────────────────────────────────┐
│ STEP 1: Supabase Dashboard                                  │
│ https://supabase.com                                         │
│                                                              │
│ Project Settings → API                                       │
│                                                              │
│ Copy these values:                                           │
│ • Project URL                                                │
│ • Publishable key (anon)                                     │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ STEP 2: GitHub Repository                                   │
│ https://github.com/YourName/YourRepo                         │
│                                                              │
│ Settings → Secrets and variables → Actions                  │
│                                                              │
│ Add secrets:                                                 │
│ • VITE_SUPABASE_URL                                          │
│ • VITE_SUPABASE_ANON_KEY                                     │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ STEP 3: GitHub Actions                                      │
│ Automatic deployment triggered                              │
│                                                              │
│ Workflow uses secrets during build:                         │
│ npm run build                                                │
│   ↓                                                          │
│ Vite reads VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY     │
│   ↓                                                          │
│ Builds site with Supabase configured                        │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ STEP 4: Live Site                                           │
│ https://hackathontoendhomelessness.org                       │
│                                                              │
│ ✅ Supabase client initialized successfully                  │
│ Ready to use authentication and database                     │
└─────────────────────────────────────────────────────────────┘
```

---

## Summary

**Two Platforms, Two Steps:**

1. **Supabase** = Get credentials
   - Project URL
   - Publishable key (anon)

2. **GitHub** = Add credentials as secrets
   - Repository Settings → Secrets and variables → Actions
   - Add `VITE_SUPABASE_URL`
   - Add `VITE_SUPABASE_ANON_KEY`

**Then:** GitHub Actions automatically uses these secrets during deployment!

---

**Questions?** Check the troubleshooting section or review other documentation files in this repository.
