import api from '../../components/services/api';
import { types } from '../types/videogames';

//Get Video Games

export const videoGameStartLoading = () => {
	return async (dispatch) => {
		try {
			const response = await api.get('/videogames');
			if (response.status === 200) {
				dispatch(videogamesLoaded(response.data));
			}
		} catch (error) {
			console.log(error);
		}
	};
};

const videogamesLoaded = (videogames) => ({
	type: types.videogameLoaded,
	payload: videogames,
});

/////Get Genres

export const genresStartLoading = () => {
	return async (distpach) => {
		try {
			const response = await api.get('/genres');
			if (response.status === 200) {
				distpach(genresLoaded(response.data));
			}
		} catch (error) {
			console.log(error);
		}
	};
};

const genresLoaded = (genres) => ({
	type: types.genresLoaded,
	payload: genres,
});

///Get Search
export const gamesStartingSearch = (term) => {
	return async (dispatch) => {
		try {
			const response = await api.get('/videogames', {
				params: {
					name: term,
				},
			});
			if (response.status === 200) {
				dispatch(gamesSearchLoaded(response.data));
			}
		} catch (error) {
			//TODO: Validar error 500
			console.log(error.response.data);
		}
	};
};

const gamesSearchLoaded = (videogames) => ({
	type: types.videogameSearchLoaded,
	payload: videogames,
});

//Filter Genre
export const gamesFilterGenre = (genreId) => ({
	type: types.videogameFilterGenre,
	payload: genreId,
});

//Filter created
export const gamesFilterCreated = (created) => ({
	type: types.videogameFilterCreated,
	payload: created,
});

//Filter platforms
export const gamesFilterPlatforms = (platformId) => ({
	type: types.videogameFilterPlatform,
	payload: platformId,
});

//Order by Name
export const gamesOrderByName = (order) => ({
	type: types.videogameOrderByName,
	payload: order,
});

//Order by Rating
export const gamesOrderByRating = (order) => ({
	type: types.videogameOrderByRating,
	payload: order,
});



