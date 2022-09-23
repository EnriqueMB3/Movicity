import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom';
import { HeaderMovie } from '../components/headerMovie/HeaderMovie'
import { fetchConToken } from '../helpers/fetch';

export const TitleScreen = () => {

    const { id } = useParams();

    const movie = async () => {
        const response = await fetchConToken(`movie/${id}`);
        return response;
    }





    return (
        <>
            <HeaderMovie />
        </>
    )
}
