import { types } from '../types/videogames';

const initialState = {
	Allvideogames: [],
	videogames: [],
	genres: [],
};

export const videogamesReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.videogameLoaded:
			return {
				...state,
				Allvideogames: action.payload,
				videogames: action.payload,
			};
		case types.genresLoaded:
			return {
				...state,
				genres: action.payload,
			};
		case types.videogameSearchLoaded:
			return {
				...state,
				videogames: action.payload,
			};
		case types.videogameFilterGenre:
			let filteredGenre = [...state.Allvideogames];

			if (action.payload !== 'all') {
				filteredGenre = filteredGenre.filter((game) =>
					game.genres.find((genre) => {
						return parseInt(genre.id) === parseInt(action.payload);
					})
				);

				return {
					...state,
					videogames:
						filteredGenre.length > 0
							? filteredGenre
							: [{ msg: 'No se encontraron resultados' }],
				};
			}
			return { ...state, videogames: [...state.Allvideogames] };

		case types.videogameFilterCreated:
			let FilteredCreated = [...state.Allvideogames];

			switch (action.payload) {
				case 'all':
					return {
						...state,
						videogames: [...state.Allvideogames],
					};
				case 'db':
					return {
						...state,
						videogames:
							FilteredCreated.filter((game) => game.inDb === true).length > 0
								? FilteredCreated.filter((game) => game.inDb === true)
								: [{ msg: 'No se encontraron resultados' }],
					};
				case 'api':
					return {
						...state,
						videogames:
							FilteredCreated.filter((game) => game.inDb === false).length > 0
								? FilteredCreated.filter((game) => game.inDb === false)
								: [{ msg: 'No se encontraron resultados' }],
					};

				default:
					return {
						...state,
					};
			}

		case types.videogameFilterPlatform:
			let filteredPlatforms = [...state.Allvideogames];
			if (action.payload !== 'all') {
				filteredPlatforms = filteredPlatforms.filter((game) =>
					game.platforms.find((platform) => {
						return parseInt(platform.id) === parseInt(action.payload);
					})
				);

				return {
					...state,
					videogames: filteredPlatforms,
				};
			}
			return { ...state, videogames: [...state.Allvideogames] };

		case types.videogameOrderByName:
			let orderByName = [...state.Allvideogames];

			switch (action.payload) {
				case 'asc':
					return {
						...state,
						videogames: orderByName.sort((prevGame, nextGame) => {
							if (prevGame.name > nextGame.name) return 1;
							if (prevGame.name < nextGame.name) return -1;
							return 0;
						}),
					};

				case 'desc':
					return {
						...state,
						videogames: orderByName.sort((prevGame, nextGame) => {
							if (prevGame.name > nextGame.name) return -1;
							if (prevGame.name < nextGame.name) return 1;
							return 0;
						}),
					};
				case 'none':
					return {
						...state,
						videogames: [...state.Allvideogames],
					};

				default:
					return {
						...state,
					};
			}

		case types.videogameOrderByRating:
			let orderByRating = [...state.Allvideogames];

			switch (action.payload) {
				case 'asc':
					return {
						...state,
						videogames: orderByRating.sort((prevGame, nextGame) => {
							if (prevGame.rating > nextGame.rating) return 1;
							if (prevGame.rating < nextGame.rating) return -1;
							return 0;
						}),
					};

				case 'desc':
					return {
						...state,
						videogames: orderByRating.sort((prevGame, nextGame) => {
							if (prevGame.rating > nextGame.rating) return -1;
							if (prevGame.rating < nextGame.rating) return 1;
							return 0;
						}),
					};
				case 'none':
					return {
						...state,
						videogames: [...state.Allvideogames],
					};

				default:
					return {
						...state,
					};
			}

		default:
			return state;
	}
};
