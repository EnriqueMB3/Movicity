import React, { useContext } from "react";
import { FaFilm, FaFire } from "react-icons/fa";
import { HeaderHome } from "../components/header/Header";
import { ListTitleHorizontal } from "../components/horizontal-list-title/ListTitleHorizontal";
import { ListPeople } from "../components/people/ListPeople";
import { ListTopRanked } from "../components/top-ranked-list/ListTopRanked";
import { ListMovieTheaters } from "../components/vertical-list-movie/ListMovieTheaters";
import { CategoryContext } from "../context/CategoryContext";

export const HomeScreen = () => {

  const {categoriesSelected} = useContext(CategoryContext)
  

  return (
    <>
      <HeaderHome />
      <ListMovieTheaters title="Trending" type="trend" category="/trending/all/day" icon={<FaFire />} />
      <ListTitleHorizontal/>
      <ListMovieTheaters />
      <ListTitleHorizontal title={categoriesSelected[0].name} type={'movie'} icon={categoriesSelected[0].icon} category={categoriesSelected[0].id} keyword={true} />
      <ListPeople/>
      <ListTitleHorizontal title={categoriesSelected[1].name} type={'movie'} icon={categoriesSelected[1].icon} category={categoriesSelected[1].id} keyword={true} />
      <ListTopRanked/>
      <ListTitleHorizontal title={categoriesSelected[2].name} type={'movie'} icon={categoriesSelected[2].icon} category={categoriesSelected[2].id} keyword={true} />
    </>
  );
};
