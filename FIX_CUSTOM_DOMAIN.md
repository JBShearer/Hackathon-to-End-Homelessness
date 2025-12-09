# Fix Custom Domain - Point to Correct Repository

## Problem
Your domain `hackathontoendhomelessness.org` is currently pointing to the **Loot-Locker** repository, but it should point to the **Hackathon-to-End-Homelessness** repository.

## Solution - 2 Steps

### Step 1: Remove Custom Domain from Loot-Locker Repository

1. **Go to Loot-Locker Pages settings:**
   👉 https://github.com/JBShearer/Loot-Locker/settings/pages

2. **Scroll down to "Custom domain" section**

3. **Delete the domain:**
   - You should see `hackathontoendhomelessness.org` in the text field
   - **Delete it** (clear the field completely)
   - Click **"Save"**

4. **Confirm:** The field should now be empty

### Step 2: Add Custom Domain to Hackathon-to-End-Homelessness

1. **Go to Hackathon-to-End-Homelessness Pages settings:**
   👉 https://github.com/JBShearer/Hackathon-to-End-Homelessness/settings/pages

2. **Make sure GitHub Pages is enabled:**
   - Under "Build and deployment" → Source should be: **"GitHub Actions"**
   - If not, select "GitHub Actions" from the dropdown first

3. **Scroll down to "Custom domain" section**

4. **Enter your domain:**
   - Type: `hackathontoendhomelessness.org`
   - Click **"Save"**

5. **Wait for DNS check:**
   - It will show "DNS check in progress..." 
   - After 1-10 minutes, it should show: ✅ **"DNS check successful"**

6. **Enable HTTPS:**
   - Once DNS check is successful, check the box: ☑️ **"Enforce HTTPS"**
   - Click Save

## Verification

After completing both steps, test your URLs:

**✅ Correct Repository (Hackathon):**
- https://jbshearer.github.io/Hackathon-to-End-Homelessness/
- https://hackathontoendhomelessness.org

Both should now load your Hackathon to End Homelessness website!

**🚫 Old Repository (Loot-Locker):**
- https://jbshearer.github.io/Loot-Locker/

This should still work at its default URL, but NOT with the custom domain.

## Important Notes

1. **Only ONE repository** can use a custom domain at a time
2. **DNS propagation** may take a few minutes after making the switch
3. **Clear your browser cache** if you still see the old site
4. The **CNAME file** in your Hackathon repository's `public/` folder is already correct (`hackathontoendhomelessness.org`)

## Troubleshooting

### "DNS check is failing"
- Make sure you removed the domain from Loot-Locker first
- Wait 5-10 minutes and try again
- Clear browser cache and try in an incognito window

### "Still seeing Loot-Locker content"
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Try in an incognito/private window
- Wait a few more minutes for DNS to update

### "Custom domain field is disabled"
- Make sure GitHub Pages is enabled first (Source: GitHub Actions)
- Check that deployment has completed (green checkmark in Actions tab)

## Quick Reference Links

**Loot-Locker Pages Settings:**
https://github.com/JBShearer/Loot-Locker/settings/pages

**Hackathon Pages Settings:**
https://github.com/JBShearer/Hackathon-to-End-Homelessness/settings/pages

**Check Deployment Status:**
https://github.com/JBShearer/Hackathon-to-End-Homelessness/actions

---

Once you complete these steps, your domain will correctly point to the Hackathon to End Homelessness website! 🎉
