import React, { useEffect, useState } from 'react'
import { FaMedal } from 'react-icons/fa';
import { fetchConToken } from '../../helpers/fetch';
import { HeaderSection, SectionBody } from '../shared/styles';
import { SkeletonTopRanked } from './SkeletonTopRanked';
import { ListTopRankedImages } from './styles';
import { TopRanked } from './TopRanked';

export const ListTopRanked = ({type='movie', category='top_rated'}) => {

  const [moviesdb, setMoviesdb] = useState([])
    
  const getMovies = async ()=> {
      const response = await fetchConToken(`${type}/${category}`);
      setMoviesdb(response.results)
  }

  useEffect(() => {
    getMovies();
  }, [])
  
 
    const top =  Array.from(Array(10).keys());;

  return (
    <SectionBody>
      <HeaderSection>
        <h2>
          Top Ranked <FaMedal />
        </h2>
      </HeaderSection>
        <ListTopRankedImages>
        {
                    moviesdb.length == 0? 
                    top.map( (_, idx) => <SkeletonTopRanked key={idx}/> )
                    :
                        moviesdb.map( (topRanked, idx) => <TopRanked key={idx} topRanked={topRanked}/> )

                }
        </ListTopRankedImages>
    </SectionBody>
  );
}
