import React, { useContext } from 'react'
import { CategoryContext } from '../context/CategoryContext'
import { Navigate} from "react-router-dom";
export const MoviesRouter = ({children}) => {
    const {categoriesSelected} = useContext(CategoryContext)
    return  categoriesSelected.length===0?  <Navigate to="/browse"/> :children
}
