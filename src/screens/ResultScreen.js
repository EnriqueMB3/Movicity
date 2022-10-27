import React from 'react'

import queryString from 'query-string'
import { Sidebar } from '../components/sidebar/Sidebar';
import { Navbar } from '../components/nav/Navbar';
import useSidebar from '../hooks/useSidebar';
import { useTitlesSearch } from '../hooks/useMoviesBySearch';
import { ListResult } from '../components/search-list/ListResult';
import { useLocation } from 'react-router-dom';
import { HeaderSearch } from '../components/shared/styles';
import { SkeletonSearch } from '../components/search-list/SkeletonSearch';



export const ResultScreen = () => {
    const location = useLocation();
    const { q } = queryString.parse(location.search);
    const { titlesdb, isLoading } = useTitlesSearch(q);
    const { isShowing, toggle } = useSidebar();



    return (
        <>
            <Sidebar isShowing={isShowing} toggle={toggle} />
            <Navbar isShowing={isShowing} toggle={toggle} />
            <HeaderSearch>

                Buscando "<b>{q}</b>"
            </HeaderSearch>
            {
                isLoading ? <SkeletonSearch /> : <ListResult results={titlesdb} />
            }

        </>
    )
}
