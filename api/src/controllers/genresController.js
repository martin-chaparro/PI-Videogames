const { response } = require('express')
const { getAllGenres } = require('../services/rawg/rawgService');

const Genre = require('../models/Genre');

const getGenres = async (request, response = response) => {

	try {
		const { results: apiGenres } = await getAllGenres();
		apiGenres.forEach(async (genre) => {
			const [genres] = await Genre.findOrCreate({
				where: { name: genre.name },
				defaults:{
					id:genre.id,
					name: genre.name
				}
			});
		});
		const genres = await Genre.findAll({
			attributes:{
				exclude:['createdAt','updatedAt']
			}
		})
		return response.status(200).json(genres)
		
	} catch (error) {
		return response.status(500)
	}




};

module.exports = { getGenres };
