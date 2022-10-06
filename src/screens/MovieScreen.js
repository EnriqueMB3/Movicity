import React, { useContext } from "react";
import { FaFilm, FaFire } from "react-icons/fa";
import { HeaderHome } from "../components/header/Header";
import { ListTitleHorizontal } from "../components/horizontal-list-title/ListTitleHorizontal";
import { ListTopRanked } from "../components/top-ranked-list/ListTopRanked";
import { ListMovieTheaters } from "../components/vertical-list-movie/ListMovieTheaters";
import { CategoryContext } from "../context/CategoryContext";
export const MovieScreen = () => {
  const { categoriesSelected } = useContext(CategoryContext)
  return (
    <>
      <HeaderHome type="movie" category="now_playing" />



      <ListMovieTheaters />
      <ListTitleHorizontal title={categoriesSelected[0].name} type={'movie'} icon={categoriesSelected[0].icon} category={categoriesSelected[0].id} keyword={true} />


      <ListMovieTheaters title="Upcoming" type="movie" category="upcoming" icon={<FaFilm />} />
      <ListTitleHorizontal title={categoriesSelected[2].name} type={'movie'} icon={categoriesSelected[2].icon} category={categoriesSelected[2].id} keyword={true} />
      <ListTopRanked />



  </>
  )
}
