import * as React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { HomeScreen } from "../screens/HomeScreen";
import { CategoryStartScreen } from "../screens/CategoryStartScreen";
import LoadingScreen from "../screens/LoadingScreen";
import { MovieScreen } from "../screens/MovieScreen";
import { TvScreen } from "../screens/TvScreen";

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/selectCategory"  element={<CategoryStartScreen />} />
        <Route path="/Tv"  element={<TvScreen />} />
        <Route path="/Movies"  element={<MovieScreen />} />
        <Route path="/"  element={<HomeScreen />} />


        <Route path="*"element={<Navigate to="/" replace />}/>
    </Routes>
  )
}
