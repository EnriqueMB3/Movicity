import React, { useEffect, useState } from 'react'
import { FaPlayCircle } from 'react-icons/fa';
import { fetchConToken } from '../../helpers/fetch';
import { typesdb } from '../../types/typesmdb';
import { HeaderSection, SectionBody } from '../shared/styles';
import { SkeletonTitle } from './SkeletonTitle';
import { ListHorizontal } from './styles';
import { Title } from './Title';


export const ListTitleHorizontal = ({title = 'On Air', type='tv', category='on_the_air', icon = <FaPlayCircle/>, keyword=false}) => {


    const [moviesdb, setMoviesdb] = useState([])
    
    const getMovies = async ()=> {

        const response =  keyword? await fetchConToken(`${typesdb.keyword}/${category}/movies`) :  await fetchConToken(`${type}/${category}`);
        setMoviesdb(response.results)
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
                        moviesdb.map( (title, idx) => <Title key={idx} title={title}/> )

                }
            </ListHorizontal>
        </SectionBody>
    )
}
