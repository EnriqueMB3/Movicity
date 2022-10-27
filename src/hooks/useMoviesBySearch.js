import React, { useCallback, useEffect, useState } from 'react'
import { fetchConToken } from '../helpers/fetch'

export const useTitlesSearch = (search) => {

    const [isLoading, setIsLoading] = useState(true);
    const [titlesdb, setTitlesdb] = useState([]);
    const getMovies = useCallback(async () => {
        const response = await fetchConToken(`/search/multi`, search)
        const withImage = response.results.filter((title) => title.poster_path)
        setTitlesdb(withImage);
        setIsLoading(false);

    }, [setIsLoading, search])

    useEffect(() => {
        getMovies();
    }, [getMovies])

    return {
        titlesdb,
        isLoading
    };
}
