import React, { useEffect, useState } from 'react'
import { FaPlayCircle } from 'react-icons/fa';
import { fetchConToken } from '../../helpers/fetch';
import { imagesMovie } from '../../helpers/imagesMovie';
import { typesdb } from '../../types/typesmdb';
import { HeaderSection, SectionBody } from '../shared/styles';
import { SkeletonTitle } from './SkeletonTitle';
import { ListHorizontal } from './styles';
import { Title } from './Title';


export const ListTitleHorizontal = ({title = 'On Air', type='tv', category='on_the_air', icon = <FaPlayCircle/>, keyword=false}) => {


    const [moviesdb, setMoviesdb] = useState([])
    
    const getMovies = async ()=> {

        const response = keyword ? await fetchConToken(`${typesdb.keyword}/${category}/movies`) : await fetchConToken(`${type}/${category}`);
        const withImage = response.results.filter((title) => title.backdrop_path)
        const titleImages = await Promise.all(withImage.map(async (title) => {
            const images = await fetchConToken(`${type}/${title.id}/images`).then((res) => imagesMovie(res));
            return { ...title, ...images }
        }))

        setMoviesdb(titleImages)
    }


    useEffect(() => {
      getMovies();
    }, [])
    

    const movies =  Array.from(Array(10).keys());;
    return (
        <SectionBody>
            <HeaderSection>
                <h2>{title}{icon} </h2>
            </HeaderSection>
            <ListHorizontal>
            {
                    moviesdb.length === 0? 
                        movies.map( (_, idx) => <SkeletonTitle key={idx}/> )
                    :
                        moviesdb.map((title, idx) => <Title key={idx} title={title} type={type} />)

                }
            </ListHorizontal>
        </SectionBody>
    )
}
