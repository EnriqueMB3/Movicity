import React from 'react'
import { Routes, Route, Navigate} from "react-router-dom";
import { CategoryStartScreen } from '../screens/CategoryStartScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { MovieScreen } from '../screens/MovieScreen';
import { TitleScreen } from '../screens/TitleScreen';
import { TvScreen } from '../screens/TvScreen';


export const RoutesMovie = () => {
    return(
        <>
            <Routes>
                <Route path="/Tv"  element={<TvScreen />} />
                <Route path="/Movies"  element={<MovieScreen />} />
                <Route path="/" element={<HomeScreen />} />
                <Route path="movie/:id" element={<TitleScreen />} />
                
            </Routes>
        </>

    )
    

}
