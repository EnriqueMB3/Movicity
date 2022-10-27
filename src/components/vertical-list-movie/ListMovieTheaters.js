import React, { useEffect, useState } from 'react'
import { FaTheaterMasks } from 'react-icons/fa'
import { fetchConToken } from '../../helpers/fetch'
import { HeaderSection, SectionBody } from '../shared/styles'
import { MovieTheaters } from './MovieTheaters'
import { SkeletonTheaters } from './SkeletonTheaters'
import { ListVerticalMovie } from './styles'


export const ListMovieTheaters = ({title= 'In Theaters' ,type='movie', category='now_playing', icon = <FaTheaterMasks/>}) => {


    const [moviesdb, setMoviesdb] = useState([])
    
    const getMovies = async ()=> {
        const response = type === 'trend' ? await fetchConToken('/trending/all/day') : await fetchConToken(`${type}/${category}`);
        type === 'person' ? setMoviesdb(filterImages(response.cast)) : setMoviesdb(filterImages(response.results))

    }

    const filterImages = (results) => {
        return results.filter((title) => title.poster_path);
    }

    useEffect(() => {
      getMovies();
    }, [])
    


    const movies =  Array.from(Array(10).keys());;

    return (
        <SectionBody>
            <HeaderSection>
                <h2>{title} {icon} </h2>
            </HeaderSection>
            <ListVerticalMovie>
                {
                    moviesdb.length == 0? 
                        movies.map( (_, idx) => <SkeletonTheaters key={idx}/> )
                    :
                        moviesdb.map((movie, idx) => <MovieTheaters key={idx} movie={movie} type={type} />)

                }
            </ListVerticalMovie>
        </SectionBody>
    )
}
