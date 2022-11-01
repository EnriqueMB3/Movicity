import React from 'react'
import { BoardMediaTitles, ImgSkeleton, SubTitleSkeleton, TitleSkeleton } from './styles';

export const SkeletonSearch = () => {
    const movies = Array.from(Array(12).keys());;

    return (
        <BoardMediaTitles>
            {
                movies.map((n) => <li key={n}>
                    <ImgSkeleton />
                    <SubTitleSkeleton />
                    <TitleSkeleton />

                </li>)
            }
        </BoardMediaTitles>
    )
}
