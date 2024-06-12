import { ActionTypes } from "../actionTypes";

export const getGenres = () => (dispatch) => {
dispatch({
    type:ActionTypes.GENRES_LOADING,
})
};