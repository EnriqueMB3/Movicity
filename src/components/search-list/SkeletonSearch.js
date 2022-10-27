import React from 'react'
import { BoardMediaTitles, ImgSkeleton, SubTitleSkeleton, TitleSkeleton } from './styles';

export const SkeletonSearch = () => {
    const movies = Array.from(Array(12).keys());;

    return (
        <BoardMediaTitles>
            {
                movies.map((n) => <li>
                    <ImgSkeleton />
                    <SubTitleSkeleton />
                    <TitleSkeleton />

                </li>)
            }
        </BoardMediaTitles>
    )
}
