import api from '../../services/api';
import { types } from '../types/genres';

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
