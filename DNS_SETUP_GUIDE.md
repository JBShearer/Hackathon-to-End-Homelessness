# DNS Setup Guide for hackathontoendhomelessness.org

## Overview
This guide will walk you through configuring your domain's DNS settings to point to GitHub Pages. This typically takes 24-48 hours to fully propagate.

---

## Step 1: Determine Your Domain Registrar

Your domain **hackathontoendhomelessness.org** was purchased from a domain registrar. Common registrars include:
- GoDaddy
- Namecheap
- Google Domains (now Squarespace)
- Cloudflare
- Hover
- Domain.com

**Action:** Log into the website where you purchased the domain.

---

## Step 2: Access DNS Management

### For GoDaddy:
1. Log in to [GoDaddy](https://www.godaddy.com)
2. Click on your profile icon → "My Products"
3. Find "hackathontoendhomelessness.org" in your domain list
4. Click the three dots (⋯) or "Manage" button
5. Click "Manage DNS" or "DNS"

### For Namecheap:
1. Log in to [Namecheap](https://www.namecheap.com)
2. Click "Domain List" in the left sidebar
3. Click "Manage" next to hackathontoendhomelessness.org
4. Go to the "Advanced DNS" tab

### For Google Domains / Squarespace:
1. Log in to [Squarespace Domains](https://domains.squarespace.com)
2. Select hackathontoendhomelessness.org
3. Click "DNS Settings" or "Advanced Settings"

### For Cloudflare:
1. Log in to [Cloudflare](https://dash.cloudflare.com)
2. Select hackathontoendhomelessness.org from your domain list
3. Click the "DNS" tab

---

## Step 3: Add A Records for GitHub Pages

You need to add **4 A records** that point to GitHub's servers.

### What to Add:

| Type | Name/Host | Value/Points to | TTL |
|------|-----------|----------------|-----|
| A | @ | 185.199.108.153 | Automatic or 3600 |
| A | @ | 185.199.109.153 | Automatic or 3600 |
| A | @ | 185.199.110.153 | Automatic or 3600 |
| A | @ | 185.199.111.153 | Automatic or 3600 |

### Explanation:
- **Type**: Always "A" (stands for Address)
- **Name/Host**: Use `@` which represents the root domain
- **Value/Points to**: The GitHub Pages IP addresses
- **TTL**: Time To Live - use "Automatic" or "3600" (1 hour)

### Visual Guide:

```
┌─────────────────────────────────────────────────┐
│  Add A Record                                    │
├─────────────────────────────────────────────────┤
│  Type:     [A - Address Record ▼]               │
│  Host:     [@                  ]                 │
│  Points to: [185.199.108.153  ]                 │
│  TTL:      [Automatic ▼       ]                 │
│                                                  │
│            [Cancel]  [Save Record]              │
└─────────────────────────────────────────────────┘
```

### Step-by-Step:
1. Click "Add Record" or "Add New Record"
2. Select "A" as the record type
3. Enter `@` in the Name/Host field
4. Enter `185.199.108.153` in the Value/Points to field
5. Click "Save" or "Add Record"
6. **Repeat 3 more times** for the other 3 IP addresses

---

## Step 4: Add CNAME Record for WWW Subdomain

This allows `www.hackathontoendhomelessness.org` to redirect to your main domain.

### What to Add:

| Type | Name/Host | Value/Points to | TTL |
|------|-----------|----------------|-----|
| CNAME | www | hackathontoendhomelessness.org | Automatic or 3600 |

### Alternative (if the above doesn't work):
| Type | Name/Host | Value/Points to | TTL |
|------|-----------|----------------|-----|
| CNAME | www | yourusername.github.io | Automatic or 3600 |

Replace `yourusername` with your GitHub username.

### Step-by-Step:
1. Click "Add Record"
2. Select "CNAME" as the record type
3. Enter `www` in the Name/Host field
4. Enter `hackathontoendhomelessness.org` (or `yourusername.github.io`)
5. Click "Save"

---

## Step 5: Remove Conflicting Records (Important!)

Before your new records work, you need to remove any existing conflicting records:

### Records to Delete:
- Any existing **A records** pointing to other IP addresses
- Any **CNAME record** on `@` (root domain)
- Any **URL redirect** or **forwarding** rules
- Any **parking page** settings

### How to Check:
Look through your DNS records list and delete any records that:
- Have Type "A" but different IP addresses
- Have Type "CNAME" with Host "@"
- Are labeled as "Forwarding" or "Parking"

---

## Step 6: Verify Your DNS Configuration

After adding the records, they should look like this:

```
Type    Host    Value                   TTL
────────────────────────────────────────────────
A       @       185.199.108.153        Automatic
A       @       185.199.109.153        Automatic
A       @       185.199.110.153        Automatic
A       @       185.199.111.153        Automatic
CNAME   www     hackathontoendhomelessness.org  Automatic
```

---

## Step 7: Configure GitHub Repository

Once DNS is set up, configure your GitHub repository:

### 7.1: Create GitHub Repository
1. Go to [GitHub](https://github.com)
2. Click the "+" icon → "New repository"
3. Name it: `hackathon-to-end-homelessness`
4. Make it **Public**
5. Don't initialize with README (you already have one)
6. Click "Create repository"

### 7.2: Push Your Code
```bash
cd "/Users/I530341/Documents/Hackathon to End Homelessness"

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Hackathon to End Homelessness website"

# Add GitHub as remote (replace 'yourusername')
git remote add origin https://github.com/yourusername/hackathon-to-end-homelessness.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 7.3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Build and deployment":
   - Source: "GitHub Actions" (preferred) or "Deploy from a branch"
   - If using branch: Select "gh-pages" branch and "/ (root)" folder
5. Custom domain: Enter `hackathontoendhomelessness.org`
6. Check "Enforce HTTPS" (after DNS propagates)
7. Click "Save"

---

## Step 8: Wait for DNS Propagation

### Timeline:
- **Immediate**: Changes saved in your registrar
- **15-60 minutes**: Changes may start working for some users
- **24-48 hours**: Full global propagation

### Check Propagation Status:

1. **Online Tools:**
   - [WhatsMyDNS.net](https://www.whatsmydns.net/)
     - Enter: `hackathontoendhomelessness.org`
     - Type: `A`
     - Click "Search"
     - Should show the 4 GitHub IPs globally

   - [DNSChecker.org](https://dnschecker.org/)
     - Enter your domain
     - Check for green checkmarks worldwide

2. **Command Line (Mac/Linux):**
   ```bash
   # Check A records
   dig hackathontoendhomelessness.org
   
   # Should see:
   # hackathontoendhomelessness.org. 3600 IN A 185.199.108.153
   # hackathontoendhomelessness.org. 3600 IN A 185.199.109.153
   # etc.
   
   # Check CNAME
   dig www.hackathontoendhomelessness.org
   ```

3. **Command Line (Windows):**
   ```cmd
   nslookup hackathontoendhomelessness.org
   
   # Should show the 4 GitHub IPs
   ```

---

## Step 9: Test Your Website

Once DNS propagates:

1. **Visit your domain:**
   - Open browser to `https://hackathontoendhomelessness.org`
   - Should show your landing page

2. **Test WWW subdomain:**
   - Visit `https://www.hackathontoendhomelessness.org`
   - Should redirect to main domain

3. **Check HTTPS:**
   - Look for padlock icon in browser
   - GitHub automatically provides SSL certificate

---

## Troubleshooting

### Problem: DNS Not Propagating After 48 Hours

**Solution:**
1. Verify all 4 A records are correct
2. Make sure you deleted old records
3. Try flushing your local DNS cache:
   ```bash
   # Mac
   sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
   
   # Windows
   ipconfig /flushdns
   ```

### Problem: "404 - There isn't a GitHub Pages site here"

**Solutions:**
1. Make sure `CNAME` file exists in `public/` folder (✅ Already created)
2. Check GitHub Pages settings - custom domain should show `hackathontoendhomelessness.org`
3. Wait for the GitHub Actions workflow to complete
4. Make sure repository is public

### Problem: Website Shows Different Content

**Solution:**
- Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Try incognito/private browsing mode

### Problem: "DNS_PROBE_FINISHED_NXDOMAIN"

**Solution:**
- DNS hasn't propagated yet - wait longer
- Check DNS records are correct in registrar
- Try a different network or use mobile data

---

## DNS Record Examples by Registrar

### GoDaddy Format:
```
Type: A
Name: @
Value: 185.199.108.153
TTL: 1 Hour
```

### Namecheap Format:
```
Type: A Record
Host: @
Value: 185.199.108.153
TTL: Automatic
```

### Cloudflare Format:
```
Type: A
Name: @
IPv4 address: 185.199.108.153
Proxy status: DNS only (gray cloud)
TTL: Auto
```

⚠️ **Cloudflare Note:** Make sure proxy is OFF (gray cloud, not orange) initially.

---

## Quick Reference Card

### ✅ DNS Records Checklist

```
[ ] 4 A records added (@, pointing to GitHub IPs)
[ ] 1 CNAME record added (www → domain)
[ ] Old/conflicting records deleted
[ ] Changes saved in registrar
[ ] GitHub repository created
[ ] Code pushed to GitHub
[ ] GitHub Pages enabled
[ ] Custom domain configured in GitHub
[ ] DNS propagation verified
[ ] Website tested and working
```

---

## Security: HTTPS Setup

Once DNS propagates and GitHub Pages is configured:

1. GitHub automatically requests an SSL certificate from Let's Encrypt
2. This process takes 5-15 minutes
3. The "Enforce HTTPS" option will become available
4. Check the box to redirect all HTTP traffic to HTTPS

**Note:** HTTPS won't work until DNS fully propagates.

---

## Need Help?

### If You're Stuck:
1. Check the DNS status using online tools
2. Verify your registrar's specific DNS settings format
3. Contact your domain registrar's support if records won't save
4. Double-check all IP addresses are entered correctly

### Common Registrar Support Links:
- **GoDaddy:** https://www.godaddy.com/help
- **Namecheap:** https://www.namecheap.com/support/
- **Cloudflare:** https://developers.cloudflare.com/pages/

---

## Summary

1. ✅ Add 4 A records pointing to GitHub Pages IPs
2. ✅ Add CNAME record for www subdomain
3. ✅ Delete conflicting records
4. ✅ Push code to GitHub
5. ✅ Enable GitHub Pages with custom domain
6. ✅ Wait 24-48 hours for propagation
7. ✅ Test your website!

**Your domain:** hackathontoendhomelessness.org  
**GitHub IPs:** 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153

Good luck with your launch! 🚀
