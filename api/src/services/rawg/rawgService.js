const rawgClient = require('./rawgClient');

const getAllGenres = async () => {
	try {
		const genres = await rawgClient.get('/genres');
		return genres.data.results;
	} catch (error) {
		console.log(error);
	}
};

const getAllVideogames = async () => {
	const videoGamePromises = [];
	let totalApiGames = [];

	try {
		for (let i = 1; i < 6; i++) {
			videoGamePromises.push(
				rawgClient.get('/games', {
					params: {
						//page_size:2,
						page: i,
					},
				})
			);
		}

		const gamePrimiseResult = await Promise.all(videoGamePromises);

		gamePrimiseResult.forEach((gameresult) => {
			totalApiGames = totalApiGames.concat(gameresult.data.results);
		});

		return totalApiGames.map((game) => {
			return {
				id: game.id,
				name: game.name,
				released: game.released,
				image: game.background_image,
				rating: game.rating,
				genres: game.genres.map((genre) => {
					return {
						id: genre.id,
						name: genre.name,
					};
				}),
				platforms: game.platforms.map((platform) => {
					return {
						id: platform.platform.id,
						name: platform.platform.name,
					};
				}),
				inDb: false,
			};
		});
	} catch (error) {
		console.log(error);
	}
};

const searchAllGames = async (term) => {
	try {
		const apiGames = await rawgClient.get('/games', {
			params: {
				search: term,
			},
		});
		return apiGames.data.results.map((game) => {
			return {
				id: game.id,
				name: game.name,
				released: game.released,
				image: game.background_image,
				rating: game.rating,
				genres: game.genres.map((genre) => {
					return {
						id: genre.id,
						name: genre.name,
					};
				}),
				platforms: game.platforms.map((platform) => {
					return {
						id: platform.platform.id,
						name: platform.platform.name,
					};
				}),
				inDb: false,
			};
		});
	} catch (error) {
		console.log(error);
	}
};

const getGame = async (gameId) => {
	try {
		const { data: apiGame } = await rawgClient.get(`/games/${gameId}`);

		return {
			id: apiGame.id,
			name: apiGame.name,
			description: apiGame.description,
			released: apiGame.released,
			image: apiGame.background_image,
			rating: apiGame.rating,
			genres: apiGame.genres.map((genre) => {
				return {
					id: genre.id,
					name: genre.name,
				};
			}),
			platforms: apiGame.platforms.map((platform) => {
				return {
					id: platform.platform.id,
					name: platform.platform.name,
				};
			}),
			inDb: false,
		};
	} catch (error) {
		console.log(error);
	}
};

module.exports = { getAllGenres, getAllVideogames, searchAllGames, getGame };
