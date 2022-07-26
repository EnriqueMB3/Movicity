import React from 'react'
import { BrowserRouter } from "react-router-dom"
import { AppRouter } from './src/routers/AppRouter'
import { GlobalSyles } from './src/styles/GlobalStyles'

export const MovieApp = () => {
  return (
      <BrowserRouter>
        <GlobalSyles/>
          <AppRouter />
      </BrowserRouter>
  )
}
