import React from "react";
import { FaPlayCircle, FaStar } from "react-icons/fa";
import { HeaderHome } from "../components/header/Header";
import { ListTitleHorizontal } from "../components/horizontal-list-title/ListTitleHorizontal";
import { ListTopRanked } from "../components/top-ranked-list/ListTopRanked";
import { ListMovieTheaters } from "../components/vertical-list-movie/ListMovieTheaters";

export const TvScreen = () => {
  return (
    <>
    <HeaderHome type="tv" category="popular"/>
      <ListMovieTheaters title="Air today" type="tv" category="airing_today" icon={<FaPlayCircle />} />
      <ListTitleHorizontal />
      <ListMovieTheaters title="Popular" type="tv" category="popular" icon={<FaStar />} />

      <ListTopRanked type="tv" />
  </>
  )
}
