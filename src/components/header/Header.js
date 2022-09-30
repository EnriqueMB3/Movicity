import React, { useCallback, useEffect, useState } from 'react'
import { Navbar } from '../nav/Navbar'
import { Degrade } from './Degrade'
import { HeaderTitle } from './HeaderTitle'
import { Header } from './styles'
import useSidebar from '../../hooks/useSidebar'
import { Sidebar } from '../sidebar/Sidebar'
import { fetchConToken } from '../../helpers/fetch'
import { imagesMovie } from '../../helpers/imagesMovie'
export const HeaderHome = ({type= 'movie',  category = 'popular'}) => {

  const { isShowing, toggle } = useSidebar();

const [moviedb, setMoviedb] = useState()

  const innerFunction = useCallback(async() => {
      const responseMovies = await fetchConToken(`${type}/${category}`).then((res)=> res.results[0]) ;
      const {original_title, overview, id, name} = responseMovies
      const MovieImage = await fetchConToken(`${type}/${id}/images`).then((res)=> imagesMovie(res));
      const movieImagesDesc = {name, original_title, overview, id, ...MovieImage};
      return movieImagesDesc;
    });

    useEffect(() => {
        innerFunction().then((res)=> setMoviedb(res) );
        
    }, []);
    

  return (
    <Header image={`${moviedb && `http://image.tmdb.org/t/p/original/${moviedb.backdrop}`} `} imageVertical={`${moviedb && `http://image.tmdb.org/t/p/w500/${moviedb.poster}`} `}  >
      <Degrade header/>
      <Sidebar isShowing={isShowing} toggle={toggle} />

      <Navbar  isShowing={isShowing}toggle={toggle}/>
      <HeaderTitle logo={`${moviedb && `${moviedb.logo}`}`} overview={ moviedb && moviedb.overview } original_title={moviedb && (moviedb.original_title || moviedb.name)}/>
      <Degrade header={false} />

    </Header>
  )
}
