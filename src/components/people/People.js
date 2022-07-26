import React from "react";
import { PeopleProfile } from "./styles";
import ProfilePhoto from '../../assets/person2.jpg'

export const People = () => {
  return (
    <li>
      <PeopleProfile image={ProfilePhoto}>
        <h2>Benedict Cumberbatch</h2>
        <h4>Acting</h4>
      </PeopleProfile>
    </li>
  );
};
