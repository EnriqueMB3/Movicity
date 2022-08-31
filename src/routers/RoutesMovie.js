import React from 'react'
import { Routes, Route, Navigate} from "react-router-dom";
import { CategoryStartScreen } from '../screens/CategoryStartScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { MovieScreen } from '../screens/MovieScreen';
import { TvScreen } from '../screens/TvScreen';


export const RoutesMovie = () => {
    return(
        <>
            <Routes>
                <Route path="/Tv"  element={<TvScreen />} />
                <Route path="/Movies"  element={<MovieScreen />} />
                <Route path="/"  element={<HomeScreen />} />   
                
            </Routes>
        </>

    )
    

}
