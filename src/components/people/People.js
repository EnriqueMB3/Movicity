import React from "react";
import { PeopleProfile } from "./styles";
import ProfilePhoto from '../../assets/person2.jpg'

export const People = ({people}) => {

  const {known_for_department, name, profile_path} = people
  return (
    <li>
      <PeopleProfile image={`http://image.tmdb.org/t/p/original/${profile_path}`}>
        <h2>{name}</h2>
        <h4>{known_for_department}</h4>
      </PeopleProfile>
    </li>
  );
};
