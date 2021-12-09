import api from '../../services/api';
import { types } from '../types/platforms';

//Get plastforms

export const platformsStartLoading = () => {
	return async (dispatch) => {
		try {
			const response = await api.get('/videogames');
			const allPlatformsRaw = [];
			response.data.forEach((game) => {
				game.platforms.forEach((platform) => {
					allPlatformsRaw.push(platform);
				});
			});
			let hash = {};
			const allPlatforms = allPlatformsRaw.filter((o) => (hash[o.id] ? false : (hash[o.id] = true)));

			dispatch(platformsLoaded(allPlatforms))

		} catch (error) {
			console.log(error);
		}
	};
};

const platformsLoaded = (platforms) => ({
	type: types.platformsLoaded,
	payload: platforms,
});
