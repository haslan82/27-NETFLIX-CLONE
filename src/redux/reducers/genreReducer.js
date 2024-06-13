import { ActionTypes } from "../actionTypes";

const initialState = {
  isLoading: false,
  error: null,
  genres: [],
};
const genreReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GENRES_LOADING:
      // console.log(type)
      return { ...state, isLoading: true };

    case ActionTypes.GENRES_ERROR:

      
      return {...state, isLoading: false, error: null, genres: payload}
// console.log(type);
//       console.log(payload);
    case ActionTypes.GENRES_SUCCESS:
      //console.log(payload)
      return { ...state, isloading: false, error: null, genres: payload };
  }
  return state;
};

export default genreReducer;