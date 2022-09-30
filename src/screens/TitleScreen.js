import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Degrade } from '../components/header/Degrade';
import { Header } from '../components/header/styles';
import { HeaderMovie } from '../components/headerMovie/HeaderMovie'
import { Navbar } from '../components/nav/Navbar';
import { Sidebar } from '../components/sidebar/Sidebar';
import { fetchConToken } from '../helpers/fetch';
import useSidebar from '../hooks/useSidebar';

export const TitleScreen = () => {

    const { isShowing, toggle } = useSidebar();

    const { id, type } = useParams();
    const [moviedb, setMoviedb] = useState([])

    const getMovie = async () => {

        const response = await fetchConToken(`${type}/${id}`);
        setMoviedb(response)
    }

    useMemo(() => {
        getMovie();
    }, [id])


    return (
        <>
            <Header image={`${moviedb && `http://image.tmdb.org/t/p/original/${moviedb.backdrop_path}`} `} imageVertical={`${moviedb && `http://image.tmdb.org/t/p/w500/${moviedb.poster_path}`} `}>
                <Degrade header />
                <Sidebar isShowing={isShowing} toggle={toggle} />

                <Navbar isShowing={isShowing} toggle={toggle} />
                <HeaderMovie movie={moviedb} type={type} />
                <Degrade header={false} />

            </Header>
        </>
    )
}
