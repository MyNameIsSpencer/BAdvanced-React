// const stripe = require('stripe');
// const config = stripe(process.env.STRIPE_SECRET);
// module.exports = config;
//  ^^^^^  alternative way of doing this

module.exports = require('stripe')(process.env.STRIPE_SECRET);
