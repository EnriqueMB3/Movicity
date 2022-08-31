import React from 'react'
import { BrowserRouter } from "react-router-dom"
import { CategoryProvider } from './src/context/CategoryContext'
import { AppRouter } from './src/routers/AppRouter'
import { GlobalSyles } from './src/styles/GlobalStyles'

export const MovieApp = () => {
  return (
  <CategoryProvider>
        <GlobalSyles/>
          <AppRouter />
  </CategoryProvider>
  )
}
