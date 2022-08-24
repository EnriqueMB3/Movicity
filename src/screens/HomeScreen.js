import React, { useContext } from "react";
import { FaFilm } from "react-icons/fa";
import { HeaderHome } from "../components/header/Header";
import { ListTitleHorizontal } from "../components/horizontal-list-title/ListTitleHorizontal";
import { ListPeople } from "../components/people/ListPeople";
import { ListTopRanked } from "../components/top-ranked-list/ListTopRanked";
import { ListMovieTheaters } from "../components/vertical-list-movie/ListMovieTheaters";
import { CategoryContext } from "../context/CategoryContext";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const HomeScreen = () => {

  const {categoriesSelected} = useContext(CategoryContext)
  console.log(categoriesSelected);


  return (
    <>
      <HeaderHome/>
      <ListMovieTheaters/>
      <ListTitleHorizontal/>
      <ListTitleHorizontal title={categoriesSelected[0].name}  icon={categoriesSelected[0].icon}   />
      <ListPeople/>
      <ListTitleHorizontal title={categoriesSelected[1].name} icon={categoriesSelected[1].icon}   />
      <ListTopRanked/>
      <ListTitleHorizontal title={categoriesSelected[2].name} icon={categoriesSelected[2].icon} />
      <ListMovieTheaters title="Upcoming" type="movie" category="upcoming" icon={<FaFilm/>} />
    </>
  );
};
