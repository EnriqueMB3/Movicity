import React from "react";
import { HeaderHome } from "../components/header/Header";
import { ListTitleHorizontal } from "../components/horizontal-list-title/ListTitleHorizontal";
import { ListPeople } from "../components/people/ListPeople";
import { ListTopRanked } from "../components/top-ranked-list/ListTopRanked";
import { ListMovieTheaters } from "../components/vertical-list-movie/ListMovieTheaters";

export const HomeScreen = () => {

  

  return (
    <>
      <HeaderHome/>
      <ListMovieTheaters/>
      <ListTitleHorizontal/>
      <ListPeople/>
      <ListTopRanked/>
    </>
  );
};
