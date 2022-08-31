import React, {createContext, useState} from 'react'
import { categoriesCache } from '../helpers/rememberMovie';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const CategoryContext = createContext();


export const CategoryProvider = ({children})=> {
    const [cate] = useLocalStorage('categories');
    const [categoriesSelected, setCategoriesToSelect] = useState(categoriesCache(cate))

    return (
        <CategoryContext.Provider
            value={{
                categoriesSelected, setCategoriesToSelect    
            }}
        >
            {children}
        </CategoryContext.Provider>
    )
}