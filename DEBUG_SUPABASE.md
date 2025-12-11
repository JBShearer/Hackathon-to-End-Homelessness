# Debugging Supabase Configuration

## Issue: "Authentication service is not configured"

This means your Supabase credentials aren't being loaded. Let's fix it!

---

## Step 1: Verify GitHub Secrets

1. **Go to your repository secrets:**
   👉 https://github.com/JBShearer/Hackathon-to-End-Homelessness/settings/secrets/actions

2. **You should see EXACTLY these two secrets:**
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

3. **Check for common issues:**
   - ❌ Wrong names (e.g., `SUPABASE_URL` instead of `VITE_SUPABASE_URL`)
   - ❌ Typos in the names
   - ❌ Extra spaces in the values
   - ❌ Wrong keys (service_role instead of anon key)

---

## Step 2: Get Correct Credentials from Supabase

1. **Go to your Supabase project:**
   👉 https://supabase.com/dashboard/projects

2. **Select your project** (or create one if you haven't)

3. **Go to Settings → API** (gear icon on left, then API section)

4. **Copy these values:**

   **Project URL** (under "Configuration"):
   ```
   https://xxxxxxxxxxxxx.supabase.co
   ```
   ⚠️ Copy the WHOLE URL including `https://`

   **anon public key** (under "Project API keys"):
   ```
   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFz...
   ```
   ⚠️ Copy the ENTIRE key (starts with `eyJ`, can be very long)
   ⚠️ **NOT** the `service_role` key!

---

## Step 3: Add/Update Secrets in GitHub

### If Secrets Don't Exist:

1. Click **"New repository secret"**
2. Add first secret:
   - Name: `VITE_SUPABASE_URL`
   - Value: Your Project URL (e.g., `https://abcdefg.supabase.co`)
   - Click "Add secret"

3. Click **"New repository secret"** again
4. Add second secret:
   - Name: `VITE_SUPABASE_ANON_KEY`
   - Value: Your anon public key (the long `eyJ...` string)
   - Click "Add secret"

### If Secrets Already Exist:

1. For each secret, click the **"Update"** button next to it
2. Paste the correct value
3. Click "Update secret"

---

## Step 4: Trigger New Deployment

After updating secrets, you need to trigger a new build:

**Option A: Make a small change and push**
```bash
# In your terminal (I can do this for you)
echo "# Update" >> README.md
git add README.md
git commit -m "Trigger rebuild with Supabase secrets"
git push origin main
```

**Option B: Manually trigger workflow**
1. Go to: https://github.com/JBShearer/Hackathon-to-End-Homelessness/actions
2. Click "Deploy to GitHub Pages" on the left
3. Click "Run workflow" button (top right)
4. Select "main" branch
5. Click green "Run workflow"

---

## Step 5: Verify It's Working

1. **Wait 3-5 minutes** for deployment to complete

2. **Visit your site:**
   👉 https://hackathontoendhomelessness.org

3. **Open Developer Tools:**
   - Press F12 (Windows) or Cmd+Option+I (Mac)
   - Go to Console tab

4. **Check the console message:**

   **✅ If working, you'll see:**
   ```
   ✅ Supabase client initialized successfully
   ```

   **❌ If not working, you'll see:**
   ```
   ⚠️ Supabase credentials not configured. Some features will be limited.
   ℹ️ Running without Supabase backend
   ```

5. **Visual check:**
   - If working: Green "✅ Connected to Supabase" badge in bottom-right
   - If not: No badge

6. **Try signup again:**
   - Go to: https://hackathontoendhomelessness.org/signup
   - Try creating an account
   - Should work if secrets are correct!

---

## Common Issues & Solutions

### Issue: "I created a Supabase project but it's still not working"

**Solution:** Make sure you:
1. Copied the FULL URL (with `https://`)
2. Copied the `anon public` key, NOT `service_role`
3. Added secrets with EXACT names: `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`
4. Triggered a new deployment after adding secrets

### Issue: "I added the secrets but console still shows warning"

**Solution:**
1. Secrets were added AFTER the last deployment
2. You need to trigger a NEW deployment (see Step 4)
3. Old cached build won't have the secrets

### Issue: "I don't have a Supabase project yet"

**Solution:**
1. Go to https://supabase.com
2. Click "Start your project"
3. Sign in with GitHub
4. Click "New Project"
5. Name: `hackathon-to-end-homelessness`
6. Generate a strong password (save it somewhere safe!)
7. Region: Choose closest to you
8. Click "Create new project"
9. Wait 2-3 minutes for setup
10. Then follow Step 2 above

### Issue: "The secret names are slightly different"

**Problem:** The names MUST be exact. Common mistakes:
- ❌ `SUPABASE_URL` → ✅ `VITE_SUPABASE_URL`
- ❌ `VITE_SUPABASE_KEY` → ✅ `VITE_SUPABASE_ANON_KEY`
- ❌ `SUPABASE_ANON_KEY` → ✅ `VITE_SUPABASE_ANON_KEY`

The `VITE_` prefix is required for Vite to expose them to the frontend!

---

## Quick Checklist

Before triggering a new deployment, verify:

- [ ] Supabase project exists and is active
- [ ] Project URL copied correctly (with https://)
- [ ] Anon public key copied (the long eyJ... string)
- [ ] GitHub secret name: `VITE_SUPABASE_URL` (exact spelling)
- [ ] GitHub secret name: `VITE_SUPABASE_ANON_KEY` (exact spelling)
- [ ] No extra spaces in secret values
- [ ] Both secrets saved successfully
- [ ] New deployment triggered after adding secrets

---

## Need Help?

Let me know:
1. Do you have a Supabase project created?
2. Do you see two secrets in GitHub (what are their names)?
3. What does the browser console say when you visit the site?

I can help troubleshoot based on what you're seeing!
