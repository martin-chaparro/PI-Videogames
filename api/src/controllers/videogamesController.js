const { response } = require('express'); //TODO:NO es necesario Eliminar
const { Op } = require('sequelize');
const {
	getAllVideogames,
	searchAllGames,
	getGame: getApiGame,
	getAllGenres,
} = require('../services/rawg/rawgService');

const Videogame = require('../models/Videogame');
const Genre = require('../models/Genre');

const { validationResult } = require('express-validator');

const getGames = async (request, response) => {
	const { name } = request.query;

	if (!name) {
		try {
			const allDbGamesPromese = Videogame.findAll({
				attributes: {
					exclude: ['createdAt', 'updatedAt', 'description'],
				},
				include: {
					model: Genre,
					as: 'genres',
					attributes: ['id', 'name'],
					through: { attributes: [] },
				},
			});
			const allApiGamesPromese = getAllVideogames();

			const [allDbGames, allApiGames] = await Promise.all([
				allDbGamesPromese,
				allApiGamesPromese,
			]);

			const totalGames = allDbGames.concat(allApiGames);

			return response.status(200).json(totalGames);
		} catch (error) {
			const err = JSON.parse(error.message);
			return response.status(500).json({ msg: 'Server Error', error: err });
		}
	}

	try {
		const searchDbGamesPromese = Videogame.findAll({
			where: { name: { [Op.iLike]: `%${name}%` } },
			attributes: { exclude: ['createdAt', 'updatedAt', 'description'] },
			include: {
				model: Genre,
				as: 'genres',
				attributes: ['id', 'name'],
				through: { attributes: [] },
			},
		});

		const searchApiGamesPromese = searchAllGames(name);

		const [searchDbGames, searchApiGames] = await Promise.all([
			searchDbGamesPromese,
			searchApiGamesPromese,
		]);

		const totalSearchGames = searchDbGames.concat(searchApiGames);

		if (totalSearchGames.length > 0) {
			return response.status(200).json(totalSearchGames.slice(0, 15));
		} else {
			return response.status(404).json({ msg: 'No se encontraron resultados' });
		}
	} catch (error) {
		const err = JSON.parse(error.message);
		return response.status(500).json({ msg: 'Server Error', error: err });
	}
};

const getGame = async (request, response) => {
	const { gameId } = request.params;

	if (
		/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(
			gameId
		)
	) {
		try {
			const game = await Videogame.findByPk(gameId, {
				attributes: {
					exclude: ['createdAt', 'updatedAt'],
				},
				include: {
					model: Genre,
					as: 'genres',
					attributes: ['id', 'name'],
					through: { attributes: [] },
				},
			});
			return response.status(200).json(game);
		} catch (error) {
			console.log(error);
			return response.status(404).json({ msg: 'Videogame not found' });
		}
	}

	try {
		const apiGame = await getApiGame(gameId);
		return response.send(apiGame);
	} catch (error) {
		const err = JSON.parse(error.message);
		return response.status(500).json({ msg: 'Server Error', error: err });
	}
};

const createGame = async (request, response) => {
	const {
		name,
		description,
		released,
		rating,
		background_image,
		platforms,
		genres,
	} = request.body;

	const errors = validationResult(request);

	if (!errors.isEmpty()) {
		return response.status(400).json({ errors: errors.array() });
	}

	try {
		const CreatedGame = await Videogame.create({
			name,
			description,
			released,
			rating,
			background_image,
			platforms,
		});
		const game = await CreatedGame.setGenres(genres);
		return response.send(CreatedGame);
	} catch (error) {
		console.log(error);
		return response.status(500).json({ msg: 'Videogame not created' });
	}
};

module.exports = { getGames, getGame, createGame };
