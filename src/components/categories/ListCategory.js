import React, { useContext, useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaRedditSquare } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { CategoryContext } from '../../context/CategoryContext';
import { categoriesCache } from '../../helpers/rememberMovie';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { PrimaryButtoon } from '../../styles/Buttons';
import { Categories } from './Categories';
import { Category } from './Category';
import {  CircleControl, ControlBadges, ControlCategories, ControlPages } from './styles'

export const ListCategory = () => {
  
  
  
  const [page, setPage] = useState(0)
  const [categories, setCategories] = useState(Categories)
  const [categoriesSelect, setCategoriesSelect] = useState(0)
  const [cate , setLocalStorage] = useLocalStorage('categories', []);
  const navigate = useNavigate()
  const {setCategoriesToSelect} = useContext(CategoryContext)

  const nextPage = () => {
    if(Categories.length -1 !== page){ 
      setPage(page+1);
    }
  }

  const previousPage = () => {
    if(0 !== page){ 
      setPage(page-1);
    }
}

  const selectCategory = (category) => {

      if (categoriesSelect < 3 || category.selected === true) {
        const listCategory = [...categories, categories[page].forEach((cat)=> {
          if(category === cat){
            cat.selected = !cat.selected
          }
        })];
        listCategory.length = 2;
        let cate = 0;
        listCategory.forEach((part)=> {
          part.forEach((cat)=>{
            if (cat.selected) {
              cate++
            }
          })
        })
        setCategoriesSelect(cate);
        setCategories(listCategory);
      }

  }

  const onClickCircle = (pag) => {
     setPage(pag);
  }


const captureCategories = () => {
    const categorySelected  = categories.reduce((page, array)=>{
     return [...array.filter(cat => cat.selected === true), ...page]
    }, []) 
    setCategoriesToSelect(categorySelected);
    setLocalStorage(categorySelected.map(({id})=> id))
    categoriesCache(cate);
    navigate('/');

  }




  return (
    <>
      <ControlCategories>
        {
          <FaChevronLeft  opacity={(0 !== page)? 1 :  0} onClick={previousPage}></FaChevronLeft>
        }
          <ControlBadges>
            {
              categories[page].map((category, idx)=> <Category key={idx} category={category} selectCategory={selectCategory} />)
            }
          </ControlBadges>
          {
            
            <FaChevronRight opacity={(categories.length -1 !== page)? 1 :  0} onClick={nextPage}></FaChevronRight>
          }
      </ControlCategories>
      <ControlPages>
        {
              categories.map((_, idx)=> <CircleControl onClick={() => {onClickCircle(idx)}} active={page===(idx)} key={idx}/>)
        }
      </ControlPages>
      <div>
        <PrimaryButtoon onClick={() => captureCategories()} disabled={categoriesSelect !== 3} center={true} >Start</PrimaryButtoon>
        <h4>{categoriesSelect}/3</h4>
      </div>
    
    </>

  )
}
