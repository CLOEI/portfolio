const contentful = require('contentful');

const client = contentful.createClient({
	space: process.env.SPACE_ID,
	accessToken: process.env.DELIVERY_ACCESS_TOKEN,
});

module.exports = client;
