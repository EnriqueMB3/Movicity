import React, { useContext } from 'react'
import { CategoryContext } from '../context/CategoryContext'
import { Navigate} from "react-router-dom";

export const CategoryBrowserSelect = ({children}) => {
    const {categoriesSelected} = useContext(CategoryContext)
    return categoriesSelected.length===0? children : <Navigate to="/"/>
}
