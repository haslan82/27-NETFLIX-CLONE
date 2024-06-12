import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import { useDispatch } from 'react-redux'
import { getPopular } from "../redux/actions/movieActions";
import { getGenres } from '../redux/actions/genreActions';


const MainPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    
    dispatch(getPopular());
    dispatch(getGenres());
  }, [] );
  return (
    <div>
     <Hero />

    </div>
  )
}

export default MainPage
