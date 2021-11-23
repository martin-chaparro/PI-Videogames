const { response } = require('express');
const {
	getAllVideogames,
	searchAllGames,
	getGame: getApiGame,
	getAllGenres
} = require('../services/rawg/rawgService');

const Videogame = require('../models/Videogame');

const getGames = async (request, response) => {
	const { name } = request.query;

	if (!name) {
		const allApiGames = await getAllVideogames();
		return response.status(200).json(allApiGames);
	}

	const searchApiGames = await searchAllGames(name);

	return response.json(searchApiGames);
};

const getGame = async (request, response) => {
	const { gameId } = request.params;

	const apiGame = await getApiGame(gameId);
	//console.log(apiGame)
	response.send(apiGame);
};

const createGame = async (request, response) => {
	const { name, description, released, rating, platforms, genres } =
		request.body;

	const CreatedGame = await Videogame.create({
		name,
		description,
		released,
		rating,
		platforms,
	});

	const game = await CreatedGame.setGenres(genres)

	response.send(CreatedGame);

	

};

module.exports = { getGames, getGame, createGame };
