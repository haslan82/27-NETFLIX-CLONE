import { applyMiddleware, combineReducers, createStore } from "redux";
import genreReducer from "./reducers/genreReducer";
import movieReducer from "./reducers/MovieReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  genres: genreReducer,
  movies: movieReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));