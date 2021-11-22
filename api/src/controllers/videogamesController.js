const getGames = (request, response) => {
	const { name } = request.query;

	if (name) {
		return response.send({
			msg: 'Get Games Controller - Search - Works',
			search: name,
		});
	}

	return response.send({
		msg: 'Get Games Controller - Works',
	});
};

const getGame = (request, response) => {
	const { gameId } = request.params;

	response.send({
		msg: 'Get Game Controller - Works',
		gameId,
	});
};

const createGame = (request, response) => {
	const { name } = request.body;
	response.send({
		msg: 'create Game Controller - Works',
		name
	});
};

module.exports = { getGames, getGame, createGame };
