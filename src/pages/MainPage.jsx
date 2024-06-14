// import React, { useEffect } from "react";
// import Hero from "../components/Hero";
// import { useDispatch, useSelector } from "react-redux";
// import { getPopular } from "../redux/actions/movieActions";
// import { getGenres } from "../redux/actions/genreActions";
// import Loader from "../components/Loader";
// import Error from "../components/Error";
// import MovieList from "../components/MovieList";


// const MainPage = () => {
//   const dispatch = useDispatch();

//   //const store = useSelector((store) =>store.genres );
//   //console.log(store)
  

// const {isLoading, error, genres} = useSelector ((store) => store.genres);


// // console.log(isLoading);
// //   console.log(error);
// //   console.log(genres);



//   useEffect(() => {
//     dispatch(getPopular());
//     dispatch(getGenres());
//   }, []);
//   return (
//     <div>
//       <Hero />
//      {

// isLoading ? (<Loader />) : error ? (<Error />) : (
//   genres.map((genre) => <MovieList key={genre.id} genre = {genre} /> )

// )}
//     </div>
//   );
// };

// export default MainPage;





import React, { useEffect } from "react";
import Hero from "../components/Hero";
import { useDispatch, useSelector } from "react-redux";
import { getPopular } from "../redux/actions/movieActions";
import { getGenres } from "../redux/actions/genreActions";
import Loader from "../components/Loader";
import Error from "../components/Error";
import MovieList from "../components/MovieList";

const MainPage = () => {
  const dispatch = useDispatch();
  const { isLoading, error, genres } = useSelector((store) => store.genres);

  // console.log(isLoading);
  // console.log(error);
  // console.log(genres);

  useEffect(() => {
    dispatch(getPopular());
    dispatch(getGenres());
  }, []);
  return (
    <div>
      <Hero />
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
      // genres.map((genre) => console.log(genre))
       genres.map((genre) => <MovieList key={genre.id} genre={genre} />)

      )}
    </div>
  );
};

export default MainPage;
