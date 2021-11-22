const rawgClient = require('./rawgClient');

const getAllGenres = async () => {
	try {
		const genres = await rawgClient.get('/genres');
		return genres.data;
	} catch (error) {
		console.log(error);
	}
};

module.exports = { getAllGenres };
