import React from 'react'
import { FaStopwatch } from 'react-icons/fa'
import { date } from '../../helpers/date'
import { Chart } from '../shared/Chart'
import { ListGenre, MovieHeader } from './styles'

export const HeaderMovie = ({ movie, type }) => {

    const { release_date, overview, title, vote_average, genres, production_countries, runtime, name } = movie;

    return (
        <MovieHeader>
            <Chart vote_average={vote_average && Math.round(vote_average * 10) / 10} />
            <span>
                {
                    (production_countries && production_countries.length !== 0) && <img
                        src={`https://flagcdn.com/h24/${production_countries[0].iso_3166_1.toLowerCase()}.png`}
                    height="24"
                        alt={`${production_countries[0].name}`} />
                }
            </span>
            <h4>{release_date && date(release_date)}</h4>
            {
                type === 'movie' ? <h1>{title}</h1> : <h1>{name}</h1>
            }
            <ListGenre>

                {
                    genres && genres.slice(0, 3).map((genre) => <li key={genre.id}>{genre.name} </li>)
                }

            </ListGenre>
            <p>{overview}</p>
            <div>

                {
                    type === 'movie' && <>
                        <FaStopwatch /><h4>{runtime} min</h4>
                    </>
                }

            </div>
        </MovieHeader>
    )
}
