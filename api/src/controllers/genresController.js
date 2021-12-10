const { response } = require('express')//TODO:NO es necesario Eliminar

const Genre = require('../models/Genre');

const getGenres = async (request, response = response) => {

	try {
		const genres = await Genre.findAll({
			attributes:{
				exclude:['createdAt','updatedAt']
			}
		})

		if (genres.length > 0) {
			return response.status(200).json(genres)
		}
		return response.status(404).json({msg:'No se encuentran generos'})
		
	} catch (error) {
		return response.status(500)
	}




};

module.exports = { getGenres };
