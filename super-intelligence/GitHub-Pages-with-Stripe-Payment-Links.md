

## Project: SU Agents on GitHub Pages with Stripe Payment Links

**What it does:** A one-time local script creates your Stripe products, monthly prices, and Payment Links, then saves the URLs to `payment-links.json`. The static page reads that file and sends buyers to the right checkout link. No server is needed, and your secret key never leaves your computer.

## TODO checklist

**A. Stripe account**

- [ ] Create a Stripe account and stay in **test mode**
- [ ] Copy your secret key (Dashboard → Developers → API keys), starting with `sk_test_`

**B. Local setup**

- [ ] Install Node.js (v18 or newer)
- [ ] Put these files in your repo folder: `package.json`, `.gitignore`, `create-stripe-products.js`, `script.js`
- [ ] Create `.env` (below) with your key and your GitHub Pages URL
- [ ] Run `npm install`
- [ ] Run `npm run setup-stripe`, which creates `payment-links.json`

**C. Clean up `index.html`**

- [ ] Make sure each button's `data-price-id` matches a `lookupKey` in the script (it already does)

**D. Publish and test**

- [ ] Commit and push: `index.html`, `style.css`, `script.js`, `payment-links.json`, `package.json`, `.gitignore`. **Never commit `.env`.**
- [ ] Enable GitHub Pages (Settings → Pages)
- [ ] Test a purchase with card `4242 4242 4242 4242`, any future expiry, any CVC
- [ ] Confirm you land back on your site with the success message

**E. Before going live**

- [ ] Activate your Stripe account (business details, bank account)
- [ ] Enable the Customer Portal (Settings → Billing → Customer portal) and put its link in the FAQ for cancellations
- [ ] Put the `sk_live_` key in `.env`, run `npm run setup-stripe` again, then commit the new `payment-links.json`
- [ ] Decide how you'll handle the 7-day refund (manual in the dashboard)

**F. Later (needed for "automatic deployment")**

- [ ] Add a serverless webhook (Cloudflare Workers, Netlify, or Vercel) for `checkout.session.completed` that provisions the agent. GitHub Pages can't receive webhooks.

## Files

```json
{
  "name": "su-agents",
  "version": "1.0.0",
  "private": true,
  "description": "SU Agents marketplace with Stripe Payment Links (static site)",
  "scripts": {
    "setup-stripe": "node create-stripe-products.js"
  },
  "dependencies": {
    "dotenv": "^16.4.5",
    "stripe": "^16.0.0"
  }
}
# Local only, never commit.
# sk_test_... while testing, sk_live_... for real payments
STRIPE_SECRET_KEY=sk_test_replace_me

# Your public site URL on GitHub Pages (buyers return here after paying)
SITE_URL=https://YOUR-USERNAME.github.io/YOUR-REPO/
node_modules/
.env
// Creates products, monthly prices, and Payment Links in Stripe,
// then writes payment-links.json for the static site to use.
// Safe to re-run: existing products/prices are reused, and links already
// saved in payment-links.json (same Stripe mode) are skipped.
// Run with: npm run setup-stripe
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const Stripe = require('stripe');

if (!process.env.STRIPE_SECRET_KEY) {
  console.error('Missing STRIPE_SECRET_KEY in .env');
  process.exit(1);
}
if (!process.env.SITE_URL) {
  console.error('Missing SITE_URL in .env (e.g. https://username.github.io/repo/)');
  process.exit(1);
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const MODE = process.env.STRIPE_SECRET_KEY.startsWith('sk_live') ? 'live' : 'test';
const OUTPUT_FILE = path.join(__dirname, 'payment-links.json');

// Make sure the site URL ends with a single slash
const SITE_URL = process.env.SITE_URL.replace(/\/+$/, '') + '/';

const CODING_DESC =
  'Writes, tests, and ships production code. Opens PRs, reviews diffs, and fixes bugs while you sleep.';

// lookupKey MUST match the data-price-id attribute in index.html
const PRODUCTS = [
  { id: 'openclaw',  name: 'OpenCLaw',  description: CODING_DESC, amount: 4900,  lookupKey: 'price_openclaw_monthly' },
  { id: 'hermes',    name: 'Hermes',    description: 'Searches, reads, and synthesizes hundreds of sources into cited reports. Your on-demand analyst.', amount: 7900, lookupKey: 'price_hermes_monthly' },
  { id: 'nanobot',   name: 'NanoBot',   description: CODING_DESC, amount: 4900,  lookupKey: 'price_nanobot_monthly' },
  { id: 'nanoclaw',  name: 'NanoClaw',  description: CODING_DESC, amount: 4900,  lookupKey: 'price_nanoclaw_monthly' },
  { id: 'paperclip', name: 'PaperClip', description: CODING_DESC, amount: 4900,  lookupKey: 'price_paperclip_monthly' },
  { id: 'picoclaw',  name: 'PicoClaw',  description: CODING_DESC, amount: 4900,  lookupKey: 'price_picoclaw_monthly' },
  { id: 'zeroclaw',  name: 'ZeroClaw',  description: CODING_DESC, amount: 4900,  lookupKey: 'price_zeroclaw_monthly' },
  { id: 'openfang',  name: 'OpenFang',  description: CODING_DESC, amount: 4900,  lookupKey: 'price_openfang_monthly' },
  { id: 'ironclaw',  name: 'IronClaw',  description: CODING_DESC, amount: 4900,  lookupKey: 'price_ironclaw_monthly' },
  { id: 'nullclaw',  name: 'NullClaw',  description: CODING_DESC, amount: 4900,  lookupKey: 'price_nullclaw_monthly' },
  { id: 'fleet',     name: 'SU Fleet',  description: 'Run OpenCLaw, Hermes, and more as a coordinated fleet with shared memory and priority compute.', amount: 19900, lookupKey: 'price_fleet_monthly' },
];

async function ensureProduct(p) {
  try {
    return await stripe.products.retrieve(p.id);
  } catch (err) {
    if (err.code !== 'resource_missing') throw err;
    return stripe.products.create({
      id: p.id, // custom ID so re-runs reuse the same product
      name: p.name,
      description: p.description,
      metadata: { agent: p.id },
    });
  }
}

async function ensurePrice(product, p) {
  const existing = await stripe.prices.list({
    lookup_keys: [p.lookupKey],
    active: true,
    limit: 1,
  });
  if (existing.data.length > 0) return existing.data[0];

  return stripe.prices.create({
    product: product.id,
    unit_amount: p.amount,
    currency: 'usd',
    recurring: { interval: 'month' },
    lookup_key: p.lookupKey,
    transfer_lookup_key: true,
  });
}

function loadExistingLinks() {
  try {
    const saved = JSON.parse(fs.readFileSync(OUTPUT_FILE, 'utf8'));
    // Test and live links are different, so never mix them
    if (saved.mode === MODE && saved.links) return saved.links;
  } catch (err) {
    // No file yet, or unreadable: start fresh
  }
  return {};
}

(async () => {
  try {
    console.log(`Setting up Stripe in ${MODE.toUpperCase()} mode...\n`);

    const links = loadExistingLinks();

    for (const p of PRODUCTS) {
      const product = await ensureProduct(p);
      const price = await ensurePrice(product, p);

      if (links[p.lookupKey]) {
        console.log(`${p.name.padEnd(10)} link already exists, skipping`);
        continue;
      }

      const link = await stripe.paymentLinks.create({
        line_items: [{ price: price.id, quantity: 1 }],
        allow_promotion_codes: true,
        after_completion: {
          type: 'redirect',
          redirect: { url: `${SITE_URL}?checkout=success` },
        },
        metadata: { agent: p.id },
      });

      links[p.lookupKey] = link.url;
      console.log(`${p.name.padEnd(10)} $${(p.amount / 100).toFixed(2)}/mo  ${link.url}`);
    }

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify({ mode: MODE, links }, null, 2) + '\n');
    console.log(`\nSaved ${Object.keys(links).length} links to payment-links.json`);
    console.log('Commit and push payment-links.json to GitHub.');
  } catch (err) {
    console.error('Setup failed:', err.message);
    process.exit(1);
  }
})();
// Front-end behavior for SU Agents (static site):
// mobile nav, toast messages, and redirect to Stripe Payment Links.

(function () {
  const toast = document.getElementById('toast');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  function showToast(message, ms) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(function () {
      toast.classList.remove('show');
    }, ms || 3500);
  }

  // Mobile menu
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
    navLinks.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') navLinks.classList.remove('open');
    });
  }

  // Message after returning from Stripe
  const params = new URLSearchParams(window.location.search);
  if (params.get('checkout') === 'success') {
    showToast('Payment successful! Check your email for dashboard access.', 6000);
  }

  // Load the Payment Link URLs generated by create-stripe-products.js
  let paymentLinks = {};
  const linksReady = fetch('payment-links.json', { cache: 'no-cache' })
    .then(function (response) {
      if (!response.ok) throw new Error('payment-links.json not found');
      return response.json();
    })
    .then(function (data) {
      paymentLinks = data.links || {};
    })
    .catch(function (err) {
      console.error('Could not load payment links:', err);
    });

  // Buy buttons
  document.querySelectorAll('.buy-btn').forEach(function (btn) {
    btn.addEventListener('click', async function () {
      const priceKey = btn.dataset.priceId;
      const originalText = btn.textContent;

      btn.disabled = true;
      btn.textContent = 'Redirecting...';

      await linksReady;
      const url = paymentLinks[priceKey];

      if (!url) {
        showToast('This plan is not available right now. Please try again later.');
        btn.disabled = false;
        btn.textContent = originalText;
        return;
      }

      window.location.href = url;
    });
  });
})();
```

## Starter prompt for the new chat

> I have a static GitHub Pages site (`index.html`, `style.css`, `script.js`) selling AI agent subscriptions through Stripe Payment Links. Products, prices, and links are created by a local Node script and stored in `payment-links.json`. I now want to add a serverless webhook (Cloudflare Workers / Netlify / Vercel) that handles `checkout.session.completed` to provision the agent automatically. Please give me complete files and step-by-step instructions.

Attach your `index.html` there too, so the new chat can see your exact markup.