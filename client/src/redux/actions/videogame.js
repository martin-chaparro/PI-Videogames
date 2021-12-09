import api from '../../services/api';
import { types } from '../types/videogame';

export const videogameStartLoading = (id) => {
    return async (dispatch)=>{
        try {
            const response = await api.get(`/videogame/${id}`)
            dispatch(videogameLoaded(response.data))
            
        } catch (error) {
            console.log(error);
        }

    }
};

const videogameLoaded = (videogame)=>({
    type:types.videogameLoaded,
    payload:videogame
})
