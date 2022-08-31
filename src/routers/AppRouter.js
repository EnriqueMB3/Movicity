import * as React from "react";
import { CategoryStartScreen } from "../screens/CategoryStartScreen";
import { BrowserRouter,HashRouter, Route, Routes } from "react-router-dom"
import { CategoryBrowserSelect } from "./CategoryBrowserSelect"
import { MoviesRouter } from "./MoviesRouter";
import { RoutesMovie } from "./RoutesMovie";

export const AppRouter = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/browse" element={
            <CategoryBrowserSelect>
              <CategoryStartScreen/>
            </CategoryBrowserSelect>
          }
        />
        <Route
          path="/*" element={
            <MoviesRouter>
              <RoutesMovie/>
            </MoviesRouter>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}