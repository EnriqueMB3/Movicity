import { Categories } from "../components/categories/Categories";

export const categoriesCache = (cate) => {
   
    const CatesFull = Categories.reduce((page, array)=> {
        return [...array, ...page]
    })
    

  const CatesOg = cate.reduce( (page,idCategory) => {
    return [...CatesFull.filter(cates => cates.id === idCategory), ...page]
  },[])

  return CatesOg;
}