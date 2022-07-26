import * as React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { HomeScreen } from "../screens/HomeScreen";
import { CategoryStartScreen } from "../screens/CategoryStartScreen";
import LoadingScreen from "../screens/LoadingScreen";

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/selectCategory"  element={<CategoryStartScreen />} />
        <Route path="/"  element={<HomeScreen />} />

        <Route path="*"element={<Navigate to="/" replace />}/>
    </Routes>
  )
}
