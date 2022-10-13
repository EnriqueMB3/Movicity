import React from "react";
import { PeopleProfile } from "./styles";
import ProfilePhoto from '../../assets/person2.jpg'
import { Link } from "react-router-dom";

export const People = ({people}) => {

  const { known_for_department, name, profile_path, id } = people
  return (
    <li>
      <Link to={`/person/${id}`}>
        <PeopleProfile image={`http://image.tmdb.org/t/p/w500/${profile_path}`}>
          <h2>{name}</h2>
          <h4>{known_for_department}</h4>
        </PeopleProfile>
      </Link>
    </li>
  );
};
