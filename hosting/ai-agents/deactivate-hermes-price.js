// Deactivates the existing Hermes price so setup-stripe can create a new one at $49.
require('dotenv').config();
const Stripe = require('stripe');

if (!process.env.STRIPE_SECRET_KEY) {
  console.error('Missing STRIPE_SECRET_KEY in .env');
  process.exit(1);
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

(async () => {
  try {
    const existing = await stripe.prices.list({
      lookup_keys: ['price_hermes_monthly'],
      active: true,
      limit: 1,
    });

    if (existing.data.length === 0) {
      console.log('No active Hermes price found — nothing to deactivate.');
      return;
    }

    const price = existing.data[0];
    console.log(`Found active Hermes price: ${price.id} at $${(price.unit_amount / 100).toFixed(2)}/mo`);

    await stripe.prices.update(price.id, { active: false });
    console.log(`Deactivated price ${price.id}. Run "npm run setup-stripe" to create the new $49 price.`);
  } catch (err) {
    console.error('Failed:', err.message);
    process.exit(1);
  }
})();

