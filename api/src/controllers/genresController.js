

const getGenres = (request, response) => {
	response.send({
		msg: 'Get Genres Controller - Works',
	});
};

module.exports = {getGenres}