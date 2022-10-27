import React from 'react'
import { Result } from './Result'
import { BoardMediaTitles } from './styles'

export const ListResult = ({ results }) => {

    return (
        <BoardMediaTitles>
            {
                results.map((titleMedia) => <Result key={titleMedia.id} titleMedia={titleMedia} />)
            }
        </BoardMediaTitles>
    )
}
