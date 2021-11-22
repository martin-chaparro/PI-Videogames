const axios = require('axios');

const rawgClient = axios.create({
	baseURL: process.env.RAWG_URL,
	params: {
		key: process.env.RAWG_API_KEY,
	},
});

module.exports = rawgClient;
