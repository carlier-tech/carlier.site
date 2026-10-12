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
  { id: 'langchain', name: 'LangChain', description: 'Run LangChain agents, chains, and RAG pipelines on private, isolated hosting.', amount: 4900, lookupKey: 'price_langchain_monthly' },
  { id: 'crewai',    name: 'CrewAI',    description: 'Deploy CrewAI crews on private, isolated hosting for coordinated multi-agent workflows.', amount: 4900, lookupKey: 'price_crewai_monthly' },
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