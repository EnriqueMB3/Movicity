import React from 'react'
import { FaPlayCircle } from 'react-icons/fa';
import { HeaderSection, SectionBody } from '../shared/styles';
import { SkeletonTitle } from './SkeletonTitle';
import { ListHorizontal } from './styles';
import { Title } from './Title';


export const ListTitleHorizontal = () => {
    const movies =  Array.from(Array(10).keys());;
    return (
        <SectionBody>
            <HeaderSection>
                <h2>On Air Today<FaPlayCircle/> </h2>
            </HeaderSection>
            <ListHorizontal>
                {
                    movies.map((_, idx)=> <Title key={idx}/>)
                }
            </ListHorizontal>
        </SectionBody>
    )
}
