import React from 'react'
import { FaMedal } from 'react-icons/fa';
import { HeaderSection, SectionBody } from '../shared/styles';
import { ListTopRankedImages } from './styles';
import { TopRanked } from './TopRanked';

export const ListTopRanked = () => {
 
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
                top.map((_, idx)=> <TopRanked key={idx}/>)
            }
        </ListTopRankedImages>
    </SectionBody>
  );
}
