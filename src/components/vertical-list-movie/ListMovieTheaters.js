import React from 'react'
import { FaTheaterMasks } from 'react-icons/fa'
import { HeaderSection, SectionBody } from '../shared/styles'
import { MovieTheaters } from './MovieTheaters'
import { SkeletonTheaters } from './SkeletonTheaters'
import { ListVerticalMovie } from './styles'


export const ListMovieTheaters = () => {

    const movies =  Array.from(Array(10).keys());;
    return (
        <SectionBody>
            <HeaderSection>
                <h2>In Theaters <FaTheaterMasks/> </h2>
            </HeaderSection>
            <ListVerticalMovie>
                {
                    movies.map( (_, idx) => <MovieTheaters key={idx}/> )
                }
            </ListVerticalMovie>
        </SectionBody>
    )
}
